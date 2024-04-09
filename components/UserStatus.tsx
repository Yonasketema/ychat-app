import Image from "next/image";

function UserStatus() {
  return (
    <div className="h-16 flex gap-3 border p-3">
      <Image
        src="/kelly-sikkema-FqqaJI9OxMI-unsplash.jpg"
        alt=""
        width={"60"}
        height={"80"}
        className="rounded-md object-center object-cover"
      />
      <div>
        <p className="font-semibold text-gray-800">YonasK</p>
        <p className={`text-gray-800 ${true && "text-green-500 text-xs"}`}>
          {true && (
            <>
              <span className="w-2 h-2 rounded-full mr-1 inline-block bg-green-500" />
              Online
            </>
          )}
        </p>
      </div>
    </div>
  );
}

export default UserStatus;
