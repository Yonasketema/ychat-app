"use client";

import ChatBox from "@/components/ChatBox";
import ChatList from "@/components/ChatList";
import { getUser } from "@/lib/api";
import { useEffect, useState } from "react";
import UserStatus from "@/components/UserStatus";
import ChatHeader from "@/components/ChatHeader";
import useFetch from "@/lib/useFetch";
import { useSocket } from "@/context/socketProvider";
import { useRouter } from "next/navigation";

export default function Chat() {
  const [isFetching, allUser] = useFetch(getUser);
  const [selectedUser, setSelectedUser] = useState(null);
  const { authUser } = useSocket();
  const router = useRouter();

  useEffect(() => {
    if (!authUser) {
      router.replace("/");
    }
  });

  return (
    <main className="flex min-h-screen justify-center py-9">
      <section className="flex ">
        <section className="h-96 ">
          <ChatHeader />
          {isFetching ? (
            <p>fetching ...</p>
          ) : (
            <ChatList allUser={allUser} setSelectedUser={setSelectedUser} />
          )}
        </section>

        <section className="h-96">
          <UserStatus selectedUser={selectedUser} />
          {selectedUser ? (
            <ChatBox selectedUser={selectedUser}></ChatBox>
          ) : (
            <p className="w-96 text-gray-500 h-full flex justify-center py-10 border text-xl">
              Chat ...
            </p>
          )}
        </section>
      </section>
    </main>
  );
}
