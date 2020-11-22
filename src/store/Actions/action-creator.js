import axios from "axios";
import { GET_COURSES } from "./action-type";

const apiURL = "http://localhost:4000/courses";

export const getCourses = () => {
  return (dispatch) => {
    axios
      .get(apiURL)
      .then((res) => dispatch({ type: GET_COURSES, payload: res.data }));
  };
};
