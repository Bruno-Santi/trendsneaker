import { useLocation } from "react-router-dom";

export const Footer = () => {
  const { pathname } = useLocation();
  if (pathname == "/") {
    return null;
  }
  return <div>Footer</div>;
};
