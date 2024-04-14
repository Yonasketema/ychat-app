import React from "react";
import { AiFillPlusSquare } from "react-icons/ai";

function ChatHeader() {
  return (
    <div className="flex px-3 w-80 h-16 items-center justify-between   border text-green-500">
      <p className="font-semibold text-gray-700">Chats</p>
      <AiFillPlusSquare size={32} />
    </div>
  );
}

export default ChatHeader;
