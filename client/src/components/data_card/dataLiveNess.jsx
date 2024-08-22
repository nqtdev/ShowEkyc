// @ Component hiển thị hình ảnh liveness
import { useContext } from "react";
import { WebSocketContext } from "../../config/webSocketContext";
import LoadingCard from "../screen_loading/screenLoadingCard";

const ImageLiveNess = () => {
  const data = useContext(WebSocketContext);
  console.log(data);
  const imageSrc = data ? `data:image/png;base64,${data.backDocument}` : null;

  return (
    <div>
      {imageSrc ? (
        <img src={imageSrc} alt="AvatarUser" />
      ) : (
        <LoadingCard /> // Hiển thị component dự phòng khi hình ảnh chưa có
      )}
    </div>
  );
};

export default ImageLiveNess;
