// @ Component hiển thị thông tin ảnh User trên thẻ
import { useContext } from "react";
import { WebSocketContext } from "../../config/webSocketContext";
import LoadingAvatar from "../screen_loading/screenLoadingAvatar";

const UserImage = () => {
  const data = useContext(WebSocketContext);
  const imageSrc = data ? `data:image/png;base64,${data.image}` : null;

  return (
    <div>
      {imageSrc ? (
        <img src={imageSrc} alt="AvatarUser" />
      ) : (
        <LoadingAvatar /> // Hiển thị component dự phòng khi hình ảnh chưa có
      )}
    </div>
  );
};

export default UserImage;
