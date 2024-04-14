import { useSocket } from "@/context/socketProvider";
import Image from "next/image";

function ChatCard({ bar = false, setSelectedUser, user }) {
  const { onlineUser } = useSocket();

  const isOnline = onlineUser.includes(user.id);
  return (
    <div
      className={`flex gap-4 px-2 py-2 w-full   ${
        false && "border-l-red-300 border-l-4"
      }`}
      onClick={() => setSelectedUser(user)}
    >
      <div className="flex flex-col ">
        <Image
          src="/kelly-sikkema-FqqaJI9OxMI-unsplash.jpg"
          alt=""
          width={bar ? "40" : "60"}
          height={bar ? "40" : "80"}
          className="rounded-md"
        />

        <span
          className={`w-3 h-3 rounded-full mr-1 inline-block  mt-[-0.4rem] border-white border-2 ${
            isOnline ? "bg-green-500" : "bg-gray-500"
          }`}
        />
      </div>
      <div>
        <p className="text-gray-700 capitalize">{user?.username}</p>
        <p className={`text-gray-400 ${bar && "text-green-500 text-xs"}`}>
          {"last message ..."}
        </p>
      </div>
    </div>
  );
}

export default ChatCard;
