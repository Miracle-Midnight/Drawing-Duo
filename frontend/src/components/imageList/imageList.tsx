import { useEffect, useState, useMemo } from "react";
import { Container } from "react-bootstrap";
import { useImages } from "../../hooks/useImages";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export function ImageList({
  friendsPick,
  setMyPick,
}: {
  friendsPick: string;
  setMyPick: (pick: string) => void;
}) {
  const [isClicked, setIsClicked] = useState<number>();

  const imageList = useSelector((state: RootState) => state.image.imageList);
  const { getImages } = useImages();

  useEffect(() => {
    getImages();
  }, []);

  const handleImageClick = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsClicked(parseInt(e.currentTarget.id));
    setMyPick(imageList[parseInt(e.currentTarget.id)].image);
    // socketRef.current?.emit("image", {
    //   id: e.currentTarget.id,
    //   src: imageList[parseInt(e.currentTarget.id)],
    // });
  };

  return (
    <div>
      <div className="image-container rounded-md border border-gray-400 grid grid-cols-2 overflow-auto mr-10">
        {imageList.map((image, idx) => (
          <div key={idx}>
            <Container>
              <div className="flex items-center justify-center">
                <div className="w-full p-1">
                  <div
                    id={idx.toString()}
                    onClick={handleImageClick}
                    className="flex flex-col justify-center bg-white rounded-lg shadow-2xl card"
                  >
                    {/* 친구가 선택하지 않은 이미지 */}
                    {friendsPick != image.image ? (
                      <div className="prod-img flex justify-center">
                        {/* 내가 선택하지 않은 이미지 */}
                        {isClicked != idx ? (
                          <div className="prod-img flex justify-center">
                            <img
                              src={image.image}
                              className=" object-center w-80"
                            />
                          </div>
                        ) : (
                          // 내가 선택한 이미지
                          <div className="prod-img flex justify-center border border-primary border-5">
                            <img
                              src={image.image}
                              className=" object-center w-80"
                            />
                          </div>
                        )}
                      </div>
                    ) : (
                      // 친구가 선택한 이미지
                      <div className="prod-img flex justify-center border border-danger border-5">
                        {/* 내가 선택하지 않은 이미지 */}
                        {isClicked != idx ? (
                          <div className="prod-img flex justify-center">
                            <img
                              src={image.image}
                              className=" object-center w-80"
                            />
                          </div>
                        ) : (
                          // 내가 선택한 이미지
                          <div className="prod-img flex justify-center border border-primary border-5">
                            <img
                              src={image.image}
                              className=" object-center w-80"
                            />
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </Container>
          </div>
        ))}
      </div>
    </div>
  );
}
