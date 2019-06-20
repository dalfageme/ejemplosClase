import { createStore } from "redux";
import reducers from "./reducers"; // al poner la carpeta obtenemos el index

export default createStore(reducers);