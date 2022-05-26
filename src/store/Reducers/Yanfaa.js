import { GET_COURSES } from "../Actions/action-type";
const initState = { courses: [] };

export const Yanfaa = (state = initState, action) => {
  switch (action.type) {
    case GET_COURSES:
      return { ...state, courses: action.payload };
    default:
      return state;
  }
};
