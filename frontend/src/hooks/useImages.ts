import axios from "axios";
import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { change } from "../states/imageSlice";

export function useImages() {
  const dispatch = useDispatch();

  const getImages = () => {
    axios
      .get("/api/room")
      .then((res) => {
        console.log(res.data.data);
        dispatch(change(res.data.data));
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return { getImages };
}
