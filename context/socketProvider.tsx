"use client";

import { createContext, useContext, useEffect, useState } from "react";
import io from "socket.io-client";
const SocketContext = createContext({});

function SocketContextProvider({ children }) {
  const [socket, setSocket] = useState();
  const [onlineUser, setOnlineUser] = useState([]);

  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    if (authUser) {
      const s = io("http://localhost:8080/", {
        query: {
          userId: authUser.id,
        },
      });

      setSocket(s);

      s.on("onlineUsers", (users) => {
        setOnlineUser(users);
      });

      return () => s.close();
    } else {
      if (socket) {
        socket.close();
        setSocket(null);
      }
    }
  }, [authUser]);

  return (
    <SocketContext.Provider
      value={{ socket, onlineUser, authUser, setAuthUser }}
    >
      {children}
    </SocketContext.Provider>
  );
}

function useSocket() {
  const context = useContext(SocketContext);
  if (context === undefined)
    throw new Error("SocketContext was used outside of the socketProvider");

  return context;
}

export { SocketContextProvider, useSocket };
