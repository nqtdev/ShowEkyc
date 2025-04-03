// @ Component hiển thị thông tin ảnh mặt sau thẻ
import { useContext, useState, useEffect } from "react";
import { WebSocketContext } from "../../config/SocketContext";
import LoadingCard from "../screen_loading/screenLoadingCard";

const BackDocument = () => {
  const [backDocument, setBackDocument] = useState(null);
  const dataGet = useContext(WebSocketContext);

  useEffect(() => {
    if (dataGet?.cmdType === "SendInfoDetails") {
      const imageSrc = `data:image/png;base64,${dataGet.data.backDocument}`;
      setBackDocument(imageSrc);
    }
  }, [dataGet]);
  return (
    <div className="p-1">
      <h2 className="text-center text-blue-500 font-semibold">
        Ảnh Scan Mặt Sau
      </h2>
      {backDocument ? (
        <img src={backDocument} className="w-3/5 m-auto" alt="ImgCard" />
      ) : (
        <LoadingCard />
      )}
    </div>
  );
};

export default BackDocument;
