import { NextRequest, NextResponse } from "next/server";
import { jwtVerify } from "jose";

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  const token = req.cookies.get(process.env.COOKIE_NAME as string);

  if (pathname === "/") {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/", req.url));
  }

  try {
    await jwtVerify(
      token.value,
      new TextEncoder().encode(process.env.JWT_SECRET_KEY as string)
    );
    return NextResponse.next();
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(new URL("/", req.url));
  }
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
