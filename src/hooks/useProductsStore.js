import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { cleanActiveShoe, setActiveShoe } from "../store/products/productsSlice";
import { useNavigateTo } from "./useNavigateTo";

export const useProductsStore = () => {
  const dispatch = useDispatch();
  const { handleNavigate } = useNavigateTo();
  const { activeShoe } = useSelector((state) => state.products);
  const startSettingActiveShoe = (shoe) => {
    console.log(shoe);
    dispatch(setActiveShoe(shoe));
    handleNavigate(`/detail/${shoe.id}`);
  };
  const startCleaningActiveShoe = () => {
    dispatch(cleanActiveShoe());
  };
  return {
    startSettingActiveShoe,
    startCleaningActiveShoe,
    activeShoe,
  };
};
