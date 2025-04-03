import { useContext, useState, useEffect } from "react";
import { WebSocketContext } from "../../config/SocketContext";

const DetailMessage = () => {
  const [detailMessage, setDetailMessage] = useState(null);
  const dataGet = useContext(WebSocketContext);

  useEffect(() => {
    if (dataGet?.cmdType === "SendBiometricAuthentication") {
      const getDetailMessage = dataGet.data.issueDetailMessage;
      setDetailMessage(getDetailMessage);
    } else {
      setDetailMessage(null);
    }
  }, [dataGet]);
  return (
    <>
      <span>
        Show failure cause of face authentication: <span>{detailMessage}</span>
      </span>
    </>
  );
};

export default DetailMessage;
