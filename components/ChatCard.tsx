import Image from "next/image";

function ChatCard({ bar = false, setSelectedUser, user }) {
  return (
    <div
      className={`flex gap-4 px-2 py-2 w-80   ${
        false && "border-l-red-300 border-l-4"
      }`}
      onClick={() => setSelectedUser(user)}
    >
      <Image
        src="/kelly-sikkema-FqqaJI9OxMI-unsplash.jpg"
        alt=""
        width={bar ? "40" : "60"}
        height={bar ? "40" : "80"}
        className="rounded-md"
      />
      <div>
        <p className="text-gray-700 capitalize">{user?.username}</p>
        <p className={`text-gray-400 ${bar && "text-green-500 text-xs"}`}>
          {bar && (
            <span className="w-2 h-2 rounded-full mr-1 inline-block bg-green-500" />
          )}

          {"last message ..."}
        </p>
      </div>
    </div>
  );
}

export default ChatCard;
