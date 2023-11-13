import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  cleanActiveShoe,
  setActiveShoe,
  addItemCart,
  removeItemCart,
  loadShoes,
} from "../store/products/productsSlice";
import { useNavigateTo } from "./useNavigateTo";
import { v4 as uuidv4 } from "uuid";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { fireBaseDB } from "../firebase/config";
import { collection, doc, getDocs } from "firebase/firestore/lite";

export const useProductsStore = () => {
  const dispatch = useDispatch();
  const { handleNavigate } = useNavigateTo();
  const { activeShoe, cart, shoes, isLoading } = useSelector((state) => state.products);
  const startLoadingShoes = async () => {
    const savedShoes = JSON.parse(localStorage.getItem("shoes"));

    if (savedShoes) {
      dispatch(loadShoes(savedShoes));
    } else {
      const collectionRef = await collection(fireBaseDB, `/shoes`);
      const docs = await getDocs(collectionRef);
      const shoes = [];

      docs.forEach((doc) => {
        shoes.push({
          id: doc.id,
          ...doc.data(),
        });
      });

      dispatch(loadShoes(shoes));
      localStorage.setItem("shoes", JSON.stringify(shoes));
    }
  };
  const startSettingActiveShoe = (id) => {
    dispatch(setActiveShoe(id));

    handleNavigate(`/detail/${id}`);
  };
  const startCleaningActiveShoe = () => {
    dispatch(cleanActiveShoe());
  };
  useEffect(() => {}, [cart]);
  const startAddingItemToCart = (shoe, selectedSize) => {
    const newShoe = { ...shoe };
    newShoe.sizes = [selectedSize];
    newShoe.id = uuidv4();
    toast(`${newShoe.name} added to cart ✅`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    const oldItems = JSON.parse(localStorage.getItem("cart")) || [];
    oldItems.push(newShoe);
    localStorage.setItem("cart", JSON.stringify(oldItems));
    dispatch(addItemCart(newShoe));
    const cartChangeEvent = new Event("cartChange");
    window.dispatchEvent(cartChangeEvent);
  };

  const deleteItemCart = ({ id, name }) => {
    const oldItems = JSON.parse(localStorage.getItem("cart")) || [];
    toast(`${name} deleted succesfully ❌`, {
      position: "bottom-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "dark",
    });
    const indexToRemove = oldItems.findIndex((item) => item.id === id);

    if (indexToRemove !== -1) {
      oldItems.splice(indexToRemove, 1);

      localStorage.setItem("cart", JSON.stringify(oldItems));

      dispatch(removeItemCart(id));
    }
  };
  return {
    startSettingActiveShoe,
    startCleaningActiveShoe,
    activeShoe,
    startAddingItemToCart,
    deleteItemCart,
    cart,
    startLoadingShoes,
    shoes,
  };
};
