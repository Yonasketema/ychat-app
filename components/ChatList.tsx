import React from "react";
import ChatCard from "./ChatCard";

function ChatList({ allUser, setSelectedUser }) {
  return (
    <div className="divide-y w-80 h-full divide-gray-200 border-2 border-gray-100 overflow-y-auto">
      {allUser?.map((user) => (
        <ChatCard user={user} key={user.id} setSelectedUser={setSelectedUser} />
      ))}
    </div>
  );
}

export default ChatList;
