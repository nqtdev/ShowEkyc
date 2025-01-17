import { useContext, useState, useEffect } from "react";
import { WebSocketContext } from "../../config/SocketContext";

const ScoreFaceMatching = () => {
  const [scoreFaceMatching, setScoreFaceMatching] = useState();
  const data = useContext(WebSocketContext);

  useEffect(() => {
    if (data?.cmdType == "SendBiometricAuthentication") {
      const score = data.data.score;
      setScoreFaceMatching(score);
    } else {
      setScoreFaceMatching(null);
    }
  }, [data]);
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
