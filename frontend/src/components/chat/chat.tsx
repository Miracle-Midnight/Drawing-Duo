import catImage from "../../assets/cat-image.png";

// todo : 힌트 이미지 컴포넌트 isHintImageOn props로 받아서 true일때만 보이게 하기
function Chat() {
  return (
    <>
      <div className="absolute bottom-12 left-20 z-50 bg-gray-200 bg-opacity-50 ">
        <div className="relative">
          <div className="w-[350px] h-[400px] overflow-auto border ">
            <ul className="p-0 pt-3">
              <li className="pl-3 pb-2">
                <span>김영우</span>
                <span className="px-1">:</span>
                <span>sdfs</span>
              </li>
              <li className="pl-3 pb-2">
                <span>박선도</span>
                <span className="px-1">:</span>
                <span>sdfs</span>
              </li>
              <li className="pl-3 pb-2">
                <span>김채욱</span>
                <span className="px-1">:</span>
                <span>sdfs</span>
              </li>
              <li className="pl-3 pb-2">
                <span>김채욱</span>
                <span className="px-1">:</span>
                <span>sdfs</span>
              </li>
              <li className="pl-3 pb-2">
                <span>김채욱</span>
                <span className="px-1">:</span>
                <span>sdfs</span>
              </li>
              <li className="pl-3 pb-2">
                <span>김채욱</span>
                <span className="px-1">:</span>
                <span>sdfs</span>
              </li>
              <li className="pl-3 pb-2">
                <span>김채욱</span>
                <span className="px-1">:</span>
                <span>sdfs</span>
              </li>
              <li className="pl-3 pb-2">
                <span>김채욱</span>
                <span className="px-1">:</span>
                <span>sdfs</span>
              </li>
              <li className="pl-3 pb-2">
                <span>김채욱</span>
                <span className="px-1">:</span>
                <span>sdfs</span>
              </li>
              <li className="pl-3 pb-2">
                <span>김채욱</span>
                <span className="px-1">:</span>
                <span>sdfs</span>
              </li>
              <li className="pl-3 pb-2">
                <span>김채욱</span>
                <span className="px-1">:</span>
                <span>sdfs</span>
              </li>
              <li className="pl-3 pb-2">
                <span>김채욱</span>
                <span className="px-1">:</span>
                <span>sdfs</span>
              </li>

              <li className="pl-3 pb-2">
                <span>김채욱</span>
                <span className="px-1">:</span>
                <span>sdfs</span>
              </li>
              <li className="pl-3 pb-2">
                <span>김채욱</span>
                <span className="px-1">:</span>
                <span>sdfs</span>
              </li>
              <li className="pl-3 pb-2">
                <span>김채욱</span>
                <span className="px-1">:</span>
                <span>sdfs</span>
              </li>
              <li className="pl-3 pb-2">
                <span>김채욱</span>
                <span className="px-1">:</span>
                <span>sdfs</span>
              </li>
            </ul>
          </div>
          <div className="absolute -bottom-10 left-0 w-full flex h-10 bg-purple-300 border border-b-2 border-gray-200">
            <input className="w-full h-full p-2" type="text"></input>
            <input type="submit" value="" id="send-button" className=""></input>
            <label
              htmlFor="send-button"
              className="m-auto text-purple-500  hover:text-purple-800"
            >
              <svg
                width="20"
                height="20"
                className="w-10 m-auto"
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
              >
                <path
                  fill="currentColor"
                  fill-rule="evenodd"
                  className=""
                  d="M15.08 2.526c.368-1.001-.605-1.974-1.606-1.605L1.878 5.193a1.25 1.25 0 00-.295 2.19l4.07 2.907a.25.25 0 01.057.058l2.907 4.069a1.25 1.25 0 002.19-.295l4.272-11.596zM2.84 6.437l10.645-3.922L9.563 13.16l-2.39-3.344 3.072-3.071a.7.7 0 10-.99-.99L6.184 8.826 2.84 6.437z"
                  clip-rule="evenodd"
                />
              </svg>
            </label>
          </div>
        </div>
      </div>
    </>
  );
}

export default Chat;
