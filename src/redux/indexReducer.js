import { combineReducers } from "redux";
import { ProductReducer, selectedProductReducer} from "./ProductReducer";

export const reducer = combineReducers({
    allProducts:ProductReducer,
    allSelectedProduct:selectedProductReducer,
})
