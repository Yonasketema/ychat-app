"use client";

import { sendMessageApi } from "@/lib/api";
import React, { useState } from "react";
import { BiSend } from "react-icons/bi";

function MessageInput({ selectedUser, setMessages }) {
  const [inputText, setInputText] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    const text = await sendMessageApi(selectedUser.id, inputText);
    setMessages((messages) => {
      if (messages) {
        return [...messages, text];
      } else {
        return [text];
      }
    });
    setInputText("");
  };

  return (
    <form className="w-full p-2 flex " onSubmit={handleSubmit}>
      <input
        type="text"
        id="name"
        placeholder="Message"
        className="w-full border-2 border-green-600 px-2 py-1  outline-none "
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
      />
      <button className=" text-gray-900 flex  h-9 w-9 items-center justify-center tex bg-green-600  ">
        <BiSend size={21} />
      </button>
    </form>
  );
}

export default MessageInput;
