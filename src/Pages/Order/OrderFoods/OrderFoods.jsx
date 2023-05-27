import React, { useState } from 'react';
import orderCover from '../../../assets/shop/order.jpg';
import CoverMenu from '../../Shared/CoverMenu/CoverMenu';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from '../../../hooks/useMenu';
import OrderTab from '../OrderTab/OrderTab';
import { Helmet } from 'react-helmet-async';
import { useParams } from 'react-router-dom';

const OrderFoods = () => {
  const categories = ['salad', 'soup', 'pizza', 'dessert', 'drinks'];
  const {category} = useParams();
  const initialIndex = categories.indexOf(category);
  const [tabIndex, setTabIndex] = useState(initialIndex)
  
  const [menu] = useMenu()
  const dessert = menu.filter(items => items.category === "dessert");
  const soup = menu.filter(items => items.category === "soup");
  const salad = menu.filter(items => items.category === "salad");
  const pizza = menu.filter(items => items.category === "pizza");
  const drink = menu.filter(items => items.category === "drinks");
  return (
    <div className=''>
      <Helmet>
        <title>Bistro Boss | Order now</title>
      </Helmet>
      <CoverMenu img={orderCover} title={"our shop"}></CoverMenu>
      <div className='pt-4'>
        <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>Salad</Tab>
            <Tab>Soup</Tab>
            <Tab>Pizza</Tab>
            <Tab>Dessert</Tab>
            <Tab>Drinks</Tab>
          </TabList>
          <TabPanel>
            <OrderTab orderItems={salad}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab orderItems={soup}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab orderItems={pizza}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab orderItems={dessert}></OrderTab>
          </TabPanel>
          <TabPanel>
            <OrderTab orderItems={drink}></OrderTab>
          </TabPanel>
        </Tabs>
      </div>
    </div>
  );
};

export default OrderFoods;