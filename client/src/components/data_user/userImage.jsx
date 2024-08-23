import { useContext, useState, useEffect } from "react";
import { WebSocketContext } from "../../config/SocketContext";
import LoadingAvatar from "../screen_loading/screenLoadingAvatar";

const UserImage = () => {
  const [imageUser, setImageUser] = useState(null);
  const data = useContext(WebSocketContext);

  useEffect(() => {
    if (data?.cmdType == "SendInfoDetails") {
      const imageSrc = `data:image/png;base64,${data.data.image}`;
      setImageUser(imageSrc);
    }
  }, [data]);
  return (
    <div>
      {imageUser ? (
        <img src={imageUser} className="m-auto p-4" alt="AvatarUser" />
      ) : (
        <LoadingAvatar />
      )}
    </div>
  );
};

export default UserImage;
