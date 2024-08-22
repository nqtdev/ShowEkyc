import { useContext } from "react";
import { WebSocketContext } from "../../getDataWSS";

const DataCertificate = () => {
  const data = useContext(WebSocketContext);
  console.log(data);
  return (
    <div>
      <h2>Component A</h2>
      {data ? (
        <pre>{JSON.stringify(data, null, 2)}</pre>
      ) : (
        <p>No data received yet...</p>
      )}
    </div>
  );
};

export default DataCertificate;
