import { useRef } from "react";
import html2canvas from "html2canvas";
import axios from "axios";

export function useSaveImage() {
  const divRef = useRef(null);
  const formData = new FormData();

  function handleClick() {
    if (divRef.current) {
      html2canvas(divRef.current).then((canvas) => {
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
