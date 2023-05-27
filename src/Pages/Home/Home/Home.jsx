
import { Helmet } from 'react-helmet-async';
import Banner from '../Banner/Banner';
import Category from '../Category/Category';
import ChefsRecipe from '../ChefsRecipe/ChefsRecipe';
import ChefsService from '../ChefsService/ChefsService';
import Contact from '../Contact/Contact';
import Featured from '../Featured/Featured';
import PopularMenu from '../PopularMenu/PopularMenu';
import Testimonials from '../Testimonials/Testimonials';


const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <div>
        <Category />
        <ChefsService />
        <PopularMenu />
        <Contact />
        <ChefsRecipe />
        <Featured />
       <Testimonials/>
      </div>
    </div>
  );
};

export default Home;