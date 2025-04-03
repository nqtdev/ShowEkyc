// @ Component hiển thị thông tin ảnh mặt sau thẻ
import { useContext, useState, useEffect } from "react";
import { WebSocketContext } from "../../config/SocketContext";

const MrzString = () => {
  const [mrzString, setMrzString] = useState(null);
  const dataGet = useContext(WebSocketContext);
  useEffect(() => {
    if (dataGet?.cmdType === "SendInfoDetails") {
      const getMrzString = dataGet.data.mrzString;
      setMrzString(getMrzString);
    }
  }, [dataGet]);
  return (
    <>
      <span className="font-semibold text-blue-500">
        Mã MRZ : <span className="font-semibold">{mrzString}</span>
      </span>
    </>
  );
};

export default MrzString;
