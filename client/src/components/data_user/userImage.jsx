import { useContext, useState, useEffect } from "react";
import { WebSocketContext } from "../../config/SocketContext";
import LoadingAvatar from "../screen_loading/screenLoadingAvatar";

const UserImage = () => {
  const [imageUser, setImageUser] = useState(null);
  const dataGet = useContext(WebSocketContext);

  useEffect(() => {
    if (dataGet?.cmdType === "SendInfoDetails") {
      const imageSrc = `data:image/png;base64,${dataGet.data.image}`;
      setImageUser(imageSrc);
    }
  }, [dataGet]);
  return (
    <div>
      <h2 className="text-center text-blue-500 font-semibold">Ảnh Trong Thẻ</h2>
      {imageUser ? (
        <img src={imageUser} className="w-2/3 m-auto" alt="AvatarUser" />
      ) : (
        <LoadingAvatar />
      )}
    </div>
  );
};

export default UserImage;
