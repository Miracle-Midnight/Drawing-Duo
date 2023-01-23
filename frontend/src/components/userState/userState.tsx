import { useSelector, useDispatch } from "react-redux";
import { isMicOn } from "../../states/micSlice";
import { RootState } from "../../store";
import "./userState.css";

const UserState = ({ name }: any) => {
  const micOnOff = useSelector((state: RootState) => state.mic.isMicOn);
  const dispatch = useDispatch();

  const toggleMicHandler = () => {
    // isMicOn의 상태를 변경하는 메소드를 구현
    micOnOff ? dispatch(isMicOn(false)) : dispatch(isMicOn(true));
  };

  return (
    <div className="shadow rounded-2xl bg-white p-4 py-3 my-2">
      <div className="flex-row gap-4 flex justify-center items-center">
        <div className=" flex flex-col">
          <span className="text-lg font-medium text-gray-600 text-center">
            {name}
          </span>
          <div className="flex flex-row">
            <button
              onClick={toggleMicHandler}
              className={`text-s p-1 text-gray-100 px-5 text-center  rounded-lg shadow-md focus:outline-none focus:ring-2  ${
                micOnOff ? "active bg-purple-600" : "bg-gray-600"
              }`}
            >
              {micOnOff ? "mic on" : "mic off"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserState;
