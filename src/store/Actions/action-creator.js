import axios from "axios";
import { GET_COURSES } from "./action-type";
import { db } from "../../Firebase/config";
import { getDocs, collection } from "firebase/firestore";

const getChat = async () => {
  let chats = [];
  const chat = await getDocs(collection(db, "courses"));
  chat.forEach((doc) => {
    chats.push({ id: doc.id, data: doc.data() });
  });
  return chats;
};
export const getCourses = async (dispatch) => {
  const chats = await getChat();
  return dispatch({ type: GET_COURSES, payload: chats });
};
