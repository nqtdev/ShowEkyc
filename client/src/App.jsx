import { WebSocketProvider } from "./config/webSocketContext";
import BackDocument from "./components/data_card/dataBackDocument";
import FrontDocument from "./components/data_card/dataFrontDocument";
import UserImage from "./components/data_user/userImage";
import UserInfo from "./components/data_user/userInfo";
const App = () => {
  return (
    <WebSocketProvider>
      <div className="App">
        <div className=" w-[85%] m-auto mt-10 flex items-center justify-center">
          <div className="grid grid-cols-10 gap-2 border-2 rounded-lg p-5">
            <div className="col-span-4">
              <UserImage />
              <div className="flex">
                <FrontDocument />
                <BackDocument />
              </div>
            </div>
            <div className="col-span-6">
              <UserInfo />
            </div>
          </div>
        </div>
      </div>
    </WebSocketProvider>
  );
};

export default App;
