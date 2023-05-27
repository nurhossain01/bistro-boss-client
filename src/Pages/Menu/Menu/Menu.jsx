import React, { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import CoverMenu from '../../Shared/CoverMenu/CoverMenu';
import coverImage from '../../../assets/menu/banner3.jpg'
import deseredImage from '../../../assets/menu/dessert-bg.jpeg';
import pizzaImage from '../../../assets/menu/pizza-bg.jpg';
import saladImage from '../../../assets/menu/salad-bg.jpg';
import soupImage from '../../../assets/menu/soup-bg.jpg';
import useMenu from '../../../hooks/useMenu';
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import CategoryMenu from '../CategoryMenu/CategoryMenu';

const Menu = () => {
  const [menu] = useMenu();
  const dessert = menu.filter(items => items.category === "dessert");
  const soup = menu.filter(items => items.category === "soup");
  const salad = menu.filter(items => items.category === "salad");
  const pizza = menu.filter(items => items.category === "pizza");
  const offered = menu.filter(items => items.category === "offered");

  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <CoverMenu img={coverImage} title={"our menu"} height={"700px"}></CoverMenu>
      {/* main cover */}
      <SectionTitle heading={"Don't Miss"} subHeading={"TODAY'S OFFER"}></SectionTitle>
      {/* offered items */}
      <CategoryMenu menuItems={offered}></CategoryMenu>
      {/* desert */}
      <div className='pt-14'>
        <CategoryMenu menuItems={dessert} title={"Dessert"} coverImage={deseredImage}></CategoryMenu>
      </div>
      <div className='pt-14'>
        <CategoryMenu menuItems={pizza} title={"pizza"} coverImage={pizzaImage}></CategoryMenu>
      </div>
      <div className='pt-14'>
        <CategoryMenu menuItems={salad} title={"salad"} coverImage={saladImage}></CategoryMenu>
      </div>
      <div className='pt-14'>
        <CategoryMenu menuItems={soup} title={"soup"} coverImage={soupImage}></CategoryMenu>
      </div>

      
    </div>
  );
};

export default Menu;