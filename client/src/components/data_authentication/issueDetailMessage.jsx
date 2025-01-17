import { useContext, useState, useEffect } from "react";
import { WebSocketContext } from "../../config/SocketContext";

const DetailMessage = () => {
  const [detailMessage, setDetailMessage] = useState(null);
  const data = useContext(WebSocketContext);

  useEffect(() => {
    if (data?.cmdType == "SendBiometricAuthentication") {
      const getDetailMessage = data.data.issueDetailMessage;
      setDetailMessage(getDetailMessage);
    } else {
      setDetailMessage(null);
    }
  }, [data]);
  return (
    <>
      <span>
        Show failure cause of face authentication: <span>{detailMessage}</span>
      </span>
    </>
  );
};

export default DetailMessage;
