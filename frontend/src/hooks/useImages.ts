import axios from "axios";
import { useDispatch } from "react-redux";
import { change } from "../states/imageSlice";

export function useImages() {
  const dispatch = useDispatch();

  const getImages = () => {
    axios
      .get("/room")
      .then((res) => {
        dispatch(change(res.data.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return { getImages };
}
