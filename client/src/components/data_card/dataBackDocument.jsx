// @ Component hiển thị thông tin ảnh mặt sau thẻ
import { useContext, useState, useEffect } from "react";
import { WebSocketContext } from "../../config/SocketContext";
import LoadingCard from "../screen_loading/screenLoadingCard";

const BackDocument = () => {
  const [backDocument, setBackDocument] = useState(null);
  const data = useContext(WebSocketContext);

  useEffect(() => {
    if (data?.cmdType == "SendInfoDetails") {
      const imageSrc = `data:image/png;base64,${data.data.backDocument}`;
      setBackDocument(imageSrc);
    }
  }, [data]);
  return (
    <div>
      {backDocument ? (
        <img src={backDocument} className="m-auto p-4" alt="ImgCard" />
      ) : (
        <LoadingCard />
      )}
    </div>
  );
};

export default BackDocument;
