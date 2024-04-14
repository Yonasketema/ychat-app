import { useSocket } from "@/context/socketProvider";
import Image from "next/image";

function UserStatus({ selectedUser }) {
  const { authUser, onlineUser } = useSocket();

  const user = selectedUser || authUser;

  const isOnline = onlineUser.includes(user?.id);

  return (
    <div className="h-16 flex gap-3 border p-3">
      <Image
        src="/kelly-sikkema-FqqaJI9OxMI-unsplash.jpg"
        alt=""
        width={"60"}
        height={"80"}
        className="rounded-md object-center object-cover"
      />
      <div>
        <p className="font-semibold text-gray-700 capitalize">
          {user?.username}
        </p>
        <p className={`text-gray-800 ${isOnline && "text-green-500 text-xs"}`}>
          {isOnline && (
            <>
              <span className="w-2 h-2 rounded-full mr-1 inline-block bg-green-500" />
              Online
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default UserStatus;
