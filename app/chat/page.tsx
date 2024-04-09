"use client";

import ChatBox from "@/components/ChatBox";
import ChatList from "@/components/ChatList";
import { getUser, getMessagesApi } from "@/lib/api";
import { useEffect, useState } from "react";
import UserStatus from "@/components/UserStatus";
import ChatHeader from "@/components/ChatHeader";

export default function Chat() {
  const [allUser, setAllUser] = useState(null);
  const [selectedUser, setSelectedUser] = useState(null);
  const [messages, setMessages] = useState<[]>();

  useEffect(() => {
    async function getUsers() {
      const users = await getUser();
      setAllUser(users);
    }
    getUsers();
  }, []);

  useEffect(() => {
    async function getMessages() {
      const messages = await getMessagesApi(selectedUser?.id as string);
      setMessages(messages);
    }
    getMessages();
  }, [selectedUser]);

  return (
    <main className="flex min-h-screen justify-center py-9">
      <section className="flex ">
        <section className="h-96 ">
          <ChatHeader />
          <ChatList allUser={allUser} setSelectedUser={setSelectedUser} />
        </section>

        <section className="h-96">
          <UserStatus selectedUser={selectedUser} />
          {selectedUser ? (
            <ChatBox messages={messages} />
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
