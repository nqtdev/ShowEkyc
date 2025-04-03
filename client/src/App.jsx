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

const App = () => {
  return (
    <WebSocketProvider>
      <div className="w-[95%] m-auto">
        <div className="m-5 border-blue-300 border-2 rounded-lg p-2">
          <div className="ml-5">
            <MrzString />
          </div>
          <div className=" grid grid-cols-12 gap-2  ">
            <div className="col-span-6">
              <div className="grid grid-cols-2">
                <div className="col-span-1">
                  <UserImage />
                </div>
                <div className="col-span-1">
                  <FrontDocument />
                  <BackDocument />
                </div>
              </div>
              <div className="mt-10">
                <ScoreFaceMatching />
                <BiometricType />
                <ResultBoolean />
                <DetailMessage />
              </div>
            </div>
            <div className="col-span-6 ">
              <UserInfo />
            </div>
          </div>
        </div>
      </div>
    </WebSocketProvider>
  );
};

export default App;
