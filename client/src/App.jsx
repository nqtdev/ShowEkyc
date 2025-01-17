import { WebSocketProvider } from "./config/SocketContext";
import BackDocument from "./components/data_card/dataBackDocument";
import FrontDocument from "./components/data_card/dataFrontDocument";
import UserImage from "./components/data_user/userImage";
import ScoreFaceMatching from "./components/data_authentication/scoreFaceMatching";
import UserInfo from "./components/data_user/userInfo";
import BiometricType from "./components/data_authentication/biometricType";
import ResultBoolean from "./components/data_authentication/result";
import DetailMessage from "./components/data_authentication/issueDetailMessage";
import MrzString from "./components/data_card/dataMrzString";
import CameraComponent from "./components/camera/CameraComponent";
const App = () => {
  return (
    <WebSocketProvider>
      <div className="flex items-center justify-center min-h-screen ">
        <div className="w-[90%] grid grid-cols-12 gap-2 border-2 rounded-lg p-2 bg-gray-100">
          <div className="col-span-3 border-2 rounded-lg p-2">
            <CameraComponent />
          </div>
          <div className="col-span-3 border-2 rounded-lg p-2">
            <UserImage />
            <div className="mt-5">
              <FrontDocument />
              <BackDocument />
            </div>
          </div>
          <div className="col-span-6 border-2 rounded-lg p-2">
            <UserInfo />
            <div className="flex justify-around items-center">
              <div>
                <ScoreFaceMatching />
                <BiometricType />
              </div>
              <div>
                <ResultBoolean />
                <DetailMessage />
              </div>
            </div>
          </div>
          <MrzString />
        </div>
      </div>
    </WebSocketProvider>
  );
};

export default App;
