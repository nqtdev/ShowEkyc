import { useContext, useState, useEffect } from "react";
import { WebSocketContext } from "../../config/SocketContext";

const ResultBoolean = () => {
  const [result, setResult] = useState(null);
  const data = useContext(WebSocketContext);
  useEffect(() => {
    if (data?.cmdType == "SendBiometricAuthentication") {
      const getResult = data.data.result;
      console.log(typeof getResult);
      setResult(getResult === true ? "Đúng" : "Sai");
    } else {
      setResult(null);
    }
  }, [data]);
  // const resultColor = result === true ? "text-green-600" : "text-red-600";
  return (
    <div className="text-left ">
      <span>
        Results of biometric authentication:{""}
        <span className={result === "Đúng" ? "text-green-600" : "text-red-600"}>
          {result}
        </span>
      </span>
    </div>
  );
};

export default ResultBoolean;
