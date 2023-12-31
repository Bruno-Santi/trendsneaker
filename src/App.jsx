import { Routes, Route, Navigate } from "react-router-dom";
import { Landing, Home, Detail, About, Faqs, Cart } from "./pages";
import { NavBar, Footer } from "./components";
import { NavBarResponsive } from "./components/ui";
import { useProductsStore } from "./hooks";
import { useEffect } from "react";
export const App = () => {
  const { startLoadingShoes } = useProductsStore();
  useEffect(() => {
    startLoadingShoes();
  }, []);

  return (
    <div className='relative min-h-screen w-full bg-gradient-to-b from-slate-900 via-gray-800 to-gray-800 to-gray-800 bg-cover'>
      <NavBar />
      <NavBarResponsive />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/about' element={<About />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>

      <Footer />
    </div>
  );
};

export default App;
