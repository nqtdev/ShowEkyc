import { useContext, useState, useEffect } from "react";
import { WebSocketContext } from "../../config/SocketContext";

const ResultBoolean = () => {
  const [result, setResult] = useState(null);
  const dataGet = useContext(WebSocketContext);
  useEffect(() => {
    if (dataGet?.cmdType === "SendBiometricAuthentication") {
      const getResult = dataGet.data.result;
      console.log(typeof getResult);
      setResult(getResult === true ? "Đúng" : "Sai");
    } else {
      setResult(null);
    }
  }, [dataGet]);
  // const resultColor = result === true ? "text-green-600" : "text-red-600";
  return (
    <div>
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
