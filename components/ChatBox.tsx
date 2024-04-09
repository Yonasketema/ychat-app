import React from "react";
import MessageInput from "./MessageInput";

function ChatBox({ messages, children }) {
  return (
    <section className="h-full flex flex-col justify-between border">
      <div className="border w-96 h-80 flex flex-col items-center justify-center overflow-y-auto">
        {messages?.length === 0 || !messages ? (
          <p className="mx-auto text-gray-500">Start Message ....</p>
        ) : (
          <div className="flex flex-col justify-end  w-full  px-2 pt-20 space-y-2 bg-white">
            {messages?.map((message) => {
              return message.senderId ===
                "348ac677-9e4d-483a-8c6d-a176d14702cf" ? (
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

      {children}
    </section>
  );
}

export default ChatBox;
