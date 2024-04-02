import ChatCard from "@/components/ChatCard";

export default function Chat() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex gap-5">
        <div className="divide-y divide-gray-200 border-2 border-gray-100">
          <ChatCard subData={"gion ..."} />
          <ChatCard subData={"hi man ..."} />
          <ChatCard subData={"hi man ..."} />
          <ChatCard subData={"hi man ..."} />
        </div>

        <div className="border w-96 flex flex-col items-center overflow-y-auto">
          <div className="w-full border-b h-16 ">
            <ChatCard subData={"Online"} bar={true} />
          </div>
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
          </div>
          <div className="w-full px-2 py-4">
            <label
              htmlFor="name"
              className="block text-sm font-semibold invisible"
            >
              Message
            </label>
            <input
              type="text"
              id="name"
              placeholder="Message"
              className="w-full border-2 border-blue-600 px-2 py-1 rounded-md outline-none "
            />
          </div>
        </div>
      </section>
    </main>
  );
}
