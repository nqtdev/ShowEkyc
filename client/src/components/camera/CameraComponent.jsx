import { useRef, useState } from "react";
import { Camera } from "react-camera-pro";

const CameraComponent = () => {
  const [numberOfCameras, setNumberOfCameras] = useState(0);
  const [currentCamera, setCurrentCamera] = useState(0);
  const [cameras, setCameras] = useState([]);
  const [image, setImage] = useState(null);
  const camera = useRef(null);
  // console.log("currentCamera", currentCamera);
  const switchToCamera = (index) => {
    if (camera.current && index < numberOfCameras) {
      camera.current.switchCamera(index);
      setCurrentCamera(index);
      setImage(null); // Reset image khi chuyển camera
    }
  };

  const handleDownload = () => {
    if (image) {
      const link = document.createElement("a");
      link.href = image; // Đặt URL ảnh
      link.download = "photo.jpg"; // Tên tệp ảnh khi tải xuống
      link.click(); // Kích hoạt tải xuống
    }
  };

  // useEffect(() => {
  //   // Lấy danh sách các thiết bị camera khi component mount
  //   const getCameras = async () => {
  //     const devices = await navigator.mediaDevices.enumerateDevices();
  //     const videoCameras = devices.filter(
  //       (device) => device.kind === "videoinput"
  //     );
  //     // console.log("videoCameras", videoCameras);
  //     setCameras(videoCameras);
  //     setNumberOfCameras(videoCameras.length);
  //   };

  //   getCameras();
  // }, []);
  const getListCamera = async () => {
    const devices = await navigator.mediaDevices.enumerateDevices();
    const videoCameras = devices.filter(
      (device) => device.kind === "videoinput"
    );
    setCameras(videoCameras);
    setNumberOfCameras(videoCameras.length);
  };
  return (
    <div className="relative">
      <div className="mb-4">
        <button
          onClick={getListCamera}
          className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg cursor-pointer"
        >
          Lấy danh sách Camera
        </button>
        <Camera
          ref={camera}
          aspectRatio={16 / 9}
          numberOfCamerasCallback={setNumberOfCameras}
        />
      </div>
      <div className="flex flex-col items-start gap-4">
        {/* Dropdown chọn camera */}
        <div>
          {numberOfCameras > 0 && (
            <select
              value={currentCamera}
              onChange={(e) => switchToCamera(Number(e.target.value))}
              className="p-2 border border-gray-300 rounded-md cursor-pointer"
            >
              {cameras.map((camera, index) => (
                <option key={camera.deviceId} value={index}>
                  {camera.label}
                </option>
              ))}
            </select>
          )}
        </div>

        {/* Chụp ảnh */}
        <div>
          {/* Hiển thị ảnh chụp */}
          <div
            className={`w-64 h-64 mt-4 bg-cover bg-center rounded-lg ${
              image ? "" : "bg-gray-200"
            }`}
            style={{
              backgroundImage: image ? `url(${image})` : "none",
            }}
          />
          <button
            onClick={() => {
              if (camera.current) {
                const photo = camera.current.takePhoto();
                setImage(photo);
              }
            }}
            className="mt-4 px-4 py-2 bg-orange-600 text-white rounded-lg cursor-pointer"
          >
            Chụp ảnh
          </button>
        </div>

        {/* Tải ảnh */}
        {image && (
          <div>
            <button
              onClick={handleDownload}
              className="mt-2 px-4 py-2 bg-blue-500 text-white rounded-lg cursor-pointer"
            >
              Tải ảnh xuống
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default CameraComponent;
