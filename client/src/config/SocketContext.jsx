// @ Call data từ ws, sau đó share data đã call được cho các component con.
import { createContext, useState, useEffect } from "react";
import PropTypes from "prop-types"; // Import PropTypes
// Tạo Context
export const WebSocketContext = createContext();
// Tạo Provider
export const WebSocketProvider = ({ children }) => {
  const [data, setData] = useState(null);
  useEffect(() => {
    try {
      const socket = new WebSocket("wss://127.0.0.1:9505/ISPlugin");
      socket.onmessage = (event) => {
        const getWS = JSON.parse(event.data);
        setData(getWS);
      };
      // return () => {
      //   socket.close();
      // };
    } catch (error) {
      console.log("Lỗi rồi", error);
    }
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
