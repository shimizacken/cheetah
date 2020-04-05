import { combineReducers } from "redux";
import { messages } from "./chatMessagesReducer";

export const chat = combineReducers({
  messages,
});
