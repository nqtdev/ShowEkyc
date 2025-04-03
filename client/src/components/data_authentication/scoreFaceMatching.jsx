import { useContext, useState, useEffect } from "react";
import { WebSocketContext } from "../../config/SocketContext";

const ScoreFaceMatching = () => {
  const [scoreFaceMatching, setScoreFaceMatching] = useState();
  const dataGet = useContext(WebSocketContext);

  useEffect(() => {
    if (dataGet?.cmdType === "SendBiometricAuthentication") {
      const score = dataGet.data.score;
      setScoreFaceMatching(score);
    } else {
      setScoreFaceMatching(null);
    }
  }, [dataGet]);
  const scoreColor = scoreFaceMatching > 90 ? "text-green-600" : "text-red-600";
  return (
    <div>
      <span>
        Score when comparing fingerprints:{" "}
        <span className={`text-2xl font-bold ${scoreColor}`}>
          {scoreFaceMatching}
        </span>
      </span>
    </div>
  );
};

export default ScoreFaceMatching;
