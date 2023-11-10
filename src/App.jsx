import { Routes, Route, Navigate } from "react-router-dom";
import { Landing, Home, Detail, About, Faqs } from "./pages";
import { NavBar, Footer } from "./components";

export const App = () => {
  return (
    <div className='min-h-screen w-full bg-gradient-to-b from-slate-900 via-gray-800 to-gray-800 to-gray-800 bg-cover'>
      <NavBar />
      <Routes>
        <Route path='/' element={<Landing />} />
        <Route path='/home' element={<Home />} />
        <Route path='/detail/:id' element={<Detail />} />
        <Route path='/about' element={<About />} />
        <Route path='/faqs' element={<Faqs />} />
        <Route path='/*' element={<Navigate to='/' />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
