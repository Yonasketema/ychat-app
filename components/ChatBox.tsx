import React from "react";

function ChatBox({ messages }) {
  return (
    <section className="h-full flex flex-col justify-between border">
      <div className="border w-96 h-80 flex flex-co items-center overflow-y-auto">
        {messages?.length === 0 || !messages ? (
          <p className="mx-auto text-gray-500">Start Message ....</p>
        ) : (
          <div className="flex flex-col justify-end  w-full  px-2 py-4 space-y-2 bg-white">
            {messages?.map((message) => {
              return message.senderId ===
                "348ac677-9e4d-483a-8c6d-a176d14702cf" ? (
                <p className="self-end  bg-cyan-700 px-4 py-2 text-white rounded-md">
                  {message.text}
                </p>
              ) : (
                <p className="bg-gray-200 max-w-max px-4 py-2 text-gray-950 rounded-md ">
                  {message.text}
                </p>
              );
            })}
          </div>
        )}
      </div>

      <div className="w-full p-2 ">
        <input
          type="text"
          id="name"
          placeholder="Message"
          className="w-full border-2 border-blue-600 px-2 py-1 rounded-md outline-none "
        />
      </div>
    </section>
  );
}

export default ChatBox;
