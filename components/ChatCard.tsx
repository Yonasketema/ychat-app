import Image from "next/image";

function ChatCard({ subData, bar = false }) {
  return (
    <div
      className={`flex gap-4 px-2 py-2 w-80   ${
        false && "border-l-red-300 border-l-4"
      }`}
    >
      <Image
        src="/kelly-sikkema-FqqaJI9OxMI-unsplash.jpg"
        alt=""
        width={bar ? "40" : "60"}
        height={bar ? "40" : "80"}
        className="rounded-md"
      />
      <div>
        <p className="text-gray-950">Pedro Yonas</p>
        <p className={`text-gray-800 ${bar && "text-green-500 text-xs"}`}>
          {bar && (
            <span className="w-2 h-2 rounded-full mr-1 inline-block bg-green-500" />
          )}

          {subData}
        </p>
      </div>
    </div>
  );
}

export default ChatCard;
