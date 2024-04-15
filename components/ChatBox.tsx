import { useSocket } from "@/context/socketProvider";
import { getMessagesApi } from "@/lib/api";
import React, { useEffect, useState } from "react";
import MessageInput from "./MessageInput";

function ChatBox({ selectedUser }) {
  const { authUser, socket } = useSocket();
  const [messages, setMessages] = useState([]);
  const [newMessage, setNewMessage] = useState();

  useEffect(() => {
    async function getMessages() {
      const messages = await getMessagesApi(selectedUser?.id as string);
      setMessages(messages);
    }
    getMessages();
  }, [selectedUser]);

  useEffect(() => {
    if (newMessage?.senderId === selectedUser?.id) {
      setMessages((messages) => [...messages, newMessage]);
    }
  }, [newMessage, selectedUser.id]);

  useEffect(() => {
    socket?.on("newMessage", (message) => {
      setNewMessage(message);
    });
  }, [socket, selectedUser]);

  return (
    <section className="h-full flex flex-col justify-between border">
      <div className="border w-96 h-80 flex flex-col items-center justify-center overflow-y-auto">
        {messages?.length === 0 || !messages ? (
          <p className="mx-auto text-gray-500">Start Message ....</p>
        ) : (
          <div className="flex flex-col justify-end  w-full  px-2 pt-20 space-y-2 bg-white">
            {messages?.map((message) => {
              return message.senderId === authUser?.id ? (
                <>
                  <p className="self-end  bg-cyan-700 px-4 py-2 text-white rounded-md">
                    {message.text}
                  </p>{" "}
                </>
              ) : (
                <p className="bg-gray-200 max-w-max px-4 py-2 text-gray-950 rounded-md ">
                  {message.text}
                </p>
              );
            })}
          </div>
        )}
      </div>

      <MessageInput selectedUser={selectedUser} setMessages={setMessages} />
    </section>
  );
}

export default ChatBox;
