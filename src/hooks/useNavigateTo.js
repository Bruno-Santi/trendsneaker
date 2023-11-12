import { useNavigate } from "react-router-dom";

export const useNavigateTo = () => {
  const navigate = useNavigate();

  const handleNavigate = (to) => {
    navigate(to);
  };

  return {
    handleNavigate,
  };
};
