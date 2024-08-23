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
    <div className="text-left ">
      <span>
        Phương thức xác thực : <span>{biometricType}</span>
      </span>
    </div>
  );
};

export default BiometricType;
