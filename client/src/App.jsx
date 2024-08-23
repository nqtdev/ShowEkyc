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
      <div className="App">
        <div className=" w-[85%] m-auto mt-2 flex flex-col items-center justify-center">
          <div className="grid grid-cols-10 gap-2 border-2 rounded-lg p-2">
            <div className="col-span-4">
              <UserImage />
              <div className="flex">
                <FrontDocument />
                <BackDocument />
              </div>
            </div>
            <div className="col-span-6">
              <UserInfo />
              <div>
                <ScoreFaceMatching />
                <BiometricType />
                <DetailMessage />
                <ResultBoolean />
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
