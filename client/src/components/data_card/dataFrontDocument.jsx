// @ Component hiển thị thông tin ảnh mặt sau thẻ
import { useContext, useState, useEffect } from "react";
import { WebSocketContext } from "../../config/SocketContext";
import LoadingCard from "../screen_loading/screenLoadingCard";

const FrontDocument = () => {
  const [frontDocument, setBackDocument] = useState(null);
  const data = useContext(WebSocketContext);

  useEffect(() => {
    if (data?.cmdType == "SendInfoDetails") {
      const imageSrc = `data:image/png;base64,${data.data.frontDocument}`;
      setBackDocument(imageSrc);
    }
  }, [data]);
  return (
    <div className="p-1">
      <h2 className="text-center text-blue-500 font-semibold">
        Ảnh Scan Mặt Trước
      </h2>
      {frontDocument ? (
        <img src={frontDocument} className="w-3/5 m-auto" alt="ImgCard" />
      ) : (
        <LoadingCard />
      )}
    </div>
  );
};

export default FrontDocument;
