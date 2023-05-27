import { Outlet, useLocation } from 'react-router-dom';
import Navbar from '../Pages/Shared/Navbar/Navbar';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
  const location = useLocation();
  const avoidHeaderFooter = location.pathname.includes('login') || location.pathname.includes('register')
  return (
    <div>
      {avoidHeaderFooter || <Navbar />}
      <Outlet></Outlet>
      {avoidHeaderFooter || <Footer />}
    </div>
  );
};
export default Main;