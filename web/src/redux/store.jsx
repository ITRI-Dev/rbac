import { createStore } from "redux";
import { actions } from "./action";

const store = createStore(actions);

export { store };
