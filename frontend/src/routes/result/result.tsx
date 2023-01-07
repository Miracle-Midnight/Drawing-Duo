import { Button, Container, Row, Col, InputGroup, Form } from "react-bootstrap"; // 꼭 import를 해와야한다
import "./result.css";
import Canvas from "../../components/canvas/canvas";

function Result() {
  return (
    <div className="center">
      <div className="flex items-center justify-center w-80">
        <div className="w-full p-4">
          <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
            <div className="prod-title">
              <p className="text-2xl font-bold text-gray-900 uppercase text-center">
                따라 그려요!
              </p>
            </div>
            <div className="prod-img">
              <img
                src="https://pbs.twimg.com/profile_images/1463023431684079616/ghuPttFw_400x400.jpg"
                className="object-cover object-center w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-80">
        <div className="w-full p-4">
          <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
            <div className="prod-title">
              <p className="text-2xl font-bold text-gray-900 uppercase text-center"></p>
            </div>
            <div className="prod-img">
              <img
                src="https://pbs.twimg.com/profile_images/1463023431684079616/ghuPttFw_400x400.jpg"
                className="object-cover object-center w-full"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center w-80">
        <div className="w-full p-4">
          <div className="flex flex-col justify-center p-10 bg-white rounded-lg shadow-2xl card">
            <div className="prod-title">
              <p className="text-2xl font-bold text-gray-900 uppercase text-center"></p>
            </div>
            <div className="prod-img">
              <img
                src="https://pbs.twimg.com/profile_images/1463023431684079616/ghuPttFw_400x400.jpg"
                className="object-cover object-center w-full"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Result;
