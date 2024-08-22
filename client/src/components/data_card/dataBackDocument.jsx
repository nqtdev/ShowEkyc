// @ Component hiển thị thông tin ảnh mặt sau thẻ
import { useContext } from "react";
import { WebSocketContext } from "../../config/webSocketContext";
import LoadingCard from "../screen_loading/screenLoadingCard";

const BackDocument = () => {
  const data = useContext(WebSocketContext);
  const imageSrc = data ? `data:image/png;base64,${data.backDocument}` : null;

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

export default BackDocument;
