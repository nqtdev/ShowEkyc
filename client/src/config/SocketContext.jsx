// @ Call data từ ws, sau đó share data đã call được cho các component con.
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes

// Tạo Context
export const WebSocketContext = createContext();

// Tạo Provider
export const WebSocketProvider = ({ children }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    const socket = new WebSocket("ws://localhost:8080");
    socket.onmessage = (event) => {
      const getWS = JSON.parse(event.data);
      const checkWS = getWS.data;
      console.log(checkWS);
      setData(getWS);
    };
    return () => {
      socket.close();
    };
  }, []);

  return (
    <WebSocketContext.Provider value={data}>
      {children}
    </WebSocketContext.Provider>
  );
};

// Định nghĩa kiểu dữ liệu cho props
WebSocketProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
