// @ Component hiển thị thông tin ảnh mặt sau thẻ
import { useContext, useState, useEffect } from "react";
import { WebSocketContext } from "../../config/SocketContext";

const MrzString = () => {
  const [mrzString, setMrzString] = useState(null);
  const data = useContext(WebSocketContext);

  useEffect(() => {
    if (data?.cmdType == "SendInfoDetails") {
      const getMrzString = data.data.mrzString;
      setMrzString(getMrzString);
    }
  }, [data]);
  return (
    <div className="">
      <span>
        Mã MRZ: <span className="font-semibold">{mrzString}</span>
      </span>
    </div>
  );
};

export default MrzString;
