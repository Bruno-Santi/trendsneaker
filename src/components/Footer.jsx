export const Footer = () => {
  const params = window.location.pathname;
  if (params == "/") return;
  return <div>Footer</div>;
};
