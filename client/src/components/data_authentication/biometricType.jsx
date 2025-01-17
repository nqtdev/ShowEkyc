import { useContext, useState, useEffect } from "react";
import { WebSocketContext } from "../../config/SocketContext";

const BiometricType = () => {
  const [biometricType, setBiometricType] = useState(null);
  const data = useContext(WebSocketContext);

  useEffect(() => {
    if (data?.cmdType == "SendBiometricAuthentication") {
      const getBiometricType = data.data.biometricType;
      setBiometricType(getBiometricType);
    } else {
      setBiometricType(null);
    }
  }, [data]);
  return (
    <>
      <span>
        Phương thức xác thực : <span>{biometricType}</span>
      </span>
    </>
  );
};

export default BiometricType;
