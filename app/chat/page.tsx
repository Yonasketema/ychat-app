"use client";

import ChatBox from "@/components/ChatBox";
import ChatList from "@/components/ChatList";
import { getUser } from "@/lib/api";
import { useEffect, useState } from "react";
import UserStatus from "@/components/UserStatus";
import ChatHeader from "@/components/ChatHeader";

export default function Chat() {
  const [allUser, setAllUser] = useState(null);

  useEffect(() => {
    async function getUsers() {
      const users = await getUser();
      setAllUser(users);
    }
    getUsers();
  }, []);

  return (
    <main className="flex min-h-screen justify-center py-9">
      <section className="flex ">
        <section className="h-96 ">
          <ChatHeader />
          <ChatList allUser={allUser} />
        </section>

        <section className="h-96">
          <UserStatus />
          <ChatBox />
        </section>
      </section>
    </main>
  );
}
