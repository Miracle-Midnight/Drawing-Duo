/*library */
import { useRef } from "react";
import html2canvas from "html2canvas";
import axios from "axios";
import { useSelector } from "react-redux";
/*module from local */
import { RootState } from "../store";

export function useSaveImage() {
  const divRef = useRef<HTMLDivElement>(null);
  const formData = new FormData();
  const saveImage = useSelector(
    (state: RootState) => state.saveImage.saveImage
  );

  function handleClick() {
    if (saveImage) {
      console.log("hi");
      console.log(saveImage);
      html2canvas(saveImage).then((canvas) => {
        canvas.toBlob((blob) => {
          formData.append(
            "image",
            blob as any,
            `${sessionStorage.getItem("roomId")}.png`
          );
          axios
            .post(`room/save/${sessionStorage.getItem("roomId")}`, formData, {
              headers: {
                "Content-Type": "multipart/form-data",
              },
            })
            .then((res) => {
              console.log(res);
              document.location.href = "/";
            })
            .catch((err) => {
              console.log(err);
            });
        }, "image/png");
      });
    }
  }

  return { divRef, handleClick };
}

export default useSaveImage;
