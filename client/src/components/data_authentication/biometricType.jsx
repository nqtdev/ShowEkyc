import { useContext, useState, useEffect } from "react";
import { WebSocketContext } from "../../config/SocketContext";

const BiometricType = () => {
  const [biometricType, setBiometricType] = useState(null);
  const dataGet = useContext(WebSocketContext);
  useEffect(() => {
    if (dataGet?.cmdType === "SendBiometricAuthentication") {
      const getBiometricType = dataGet.data.biometricType;
      setBiometricType(getBiometricType);
    } else {
      setBiometricType(null);
    }
  }, [dataGet]);
  return (
    <>
      <span>
        Phương thức xác thực : <span>{biometricType}</span>
      </span>
    </>
  );
};

export default BiometricType;
