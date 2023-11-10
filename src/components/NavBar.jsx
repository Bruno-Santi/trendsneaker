export const NavBar = () => {
  const params = window.location.pathname;
  if (params == "/") return;
  return <div>NavBar</div>;
};
