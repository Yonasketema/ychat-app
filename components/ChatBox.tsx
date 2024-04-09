import React from "react";

function ChatBox() {
  return (
    <section className="h-full flex flex-col justify-between border">
      <div className="border w-96 h-80 flex flex-co items-center overflow-y-auto">
        <div className="flex flex-col justify-end  w-full  px-2 py-4 space-y-2 bg-white">
          <p className="self-end  bg-cyan-700 px-4 py-2 text-white rounded-md">
            hi
          </p>
          <p className="self-end  bg-cyan-700 px-4 py-2 text-white rounded-md">
            yon negn
          </p>
          <p className="bg-gray-200 max-w-max px-4 py-2 text-gray-950 rounded-md ">
            hello !!
          </p>
          <p className="bg-gray-200 max-w-max px-4 py-2 text-gray-950 rounded-md ">
            hello !!
          </p>
          <p className="bg-gray-200 max-w-max px-4 py-2 text-gray-950 rounded-md ">
            hello !!
          </p>
          <p className="bg-gray-200 max-w-max px-4 py-2 text-gray-950 rounded-md ">
            hello !!
          </p>
        </div>
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
