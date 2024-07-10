import {combineReducers} from "redux";
import {DoctorReducer , ClientReducer , HighestReducer , SearchReducer , ViewReducter} from "./ReduxReducers";

 const reducers = combineReducers ({
    DocReducer : DoctorReducer,
    ClientReducer : ClientReducer,
    HighestReducer : HighestReducer,
    SearchReducer : SearchReducer,
    ViewReducter : ViewReducter
});
export default reducers;