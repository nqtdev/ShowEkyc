// @ Component hiển thị hình ảnh mặt trước thẻ
import { useContext } from "react";
import { WebSocketContext } from "../../config/webSocketContext";
import LoadingCard from "../screen_loading/screenLoadingCard";

const FrontDocument = () => {
  const data = useContext(WebSocketContext);
  const imageSrc = data ? `data:image/png;base64,${data.frontDocument}` : null;

  return (
    <div>
      {imageSrc ? (
        <img className="p-4" src={imageSrc} alt="Card" />
      ) : (
        <LoadingCard /> // Hiển thị component dự phòng khi hình ảnh chưa có
      )}
    </div>
  );
};

export default FrontDocument;
