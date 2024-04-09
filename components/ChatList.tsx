import React from "react";
import ChatCard from "./ChatCard";

function ChatList({ allUser }) {
  return (
    <div className="divide-y h-full divide-gray-200 border-2 border-gray-100 overflow-y-scroll">
      {allUser?.map((user) => (
        <ChatCard title={user.username} subData={""} key={user.id} />
      ))}
    </div>
  );
}

export default ChatList;
