import catImage from "../../assets/cat-image.png";

// todo : 힌트 이미지 컴포넌트 isHintImageOn props로 받아서 true일때만 보이게 하기
function HintImage() {
  return (
    <>
      <div className="absolute bottom-48 left-20 z-50 border-2 border-gray-300 bg-opacity-50">
        <div className="w-[250px] p-3">
          <img src={catImage} alt="cat" />
        </div>
      </div>
    </>
  );
}

export default HintImage;
