import React from 'react';
import { NavLink, Outlet } from 'react-router-dom';
import { FaHome, FaCalendarAlt, FaWallet, FaShoppingCart, FaBars, FaUserAlt, FaUtensils, FaThList, FaUsers } from "react-icons/fa";
import { Helmet } from 'react-helmet-async';
import '../App.css'
import useAdmin from '../hooks/useAdmin';

const Dashboard = () => {
  const [isAdmin] = useAdmin();

  return (
    <div className="drawer drawer-mobile">
      <Helmet>
        <title>Bistro Boss | Dashboard</title>
      </Helmet>
      <input id="my-drawer-2" type="checkbox" className="drawer-toggle" />
      {/* TODO height problem */}
      <div className="drawer-content flex flex-col  w-full items-center justify-center">
        {/* <!-- Page content here --> */}
       <div className='w-full overflow-auto'>
       <Outlet></Outlet>
       </div>
        <label htmlFor="my-drawer-2" className="btn btn-primary drawer-button lg:hidden">Open drawer</label>

      </div>
      <div className="drawer-side">
        <label htmlFor="my-drawer-2" className="drawer-overlay"></label>
        <ul className="menu p-4 w-80 uppercase active bg-orange-300 text-base-content">
          {/* <!-- Sidebar content here --> */}
          {
            isAdmin ?
              <>
                <li><NavLink to='/'><FaHome></FaHome>Admin Home</NavLink></li>
                <li><NavLink to='/dashboard/addItem'><FaUtensils></FaUtensils>Add Items</NavLink></li>
                <li><NavLink to='/dashboard/manageItems'><FaWallet></FaWallet> Manage items</NavLink></li>
                <li><NavLink to='/dashboard/'><FaThList></FaThList> Manage Bookings</NavLink></li>
                <li><NavLink to='/dashboard/allUsers'><FaUsers></FaUsers>All Users</NavLink></li>
                <li><NavLink to='/dashboard/myCart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                <div className='divider'></div>
              </>
              :
              <>
              
                <li><NavLink to='/'><FaHome></FaHome>User Home</NavLink></li>
                <li><NavLink to='/dashboard/reservation'><FaCalendarAlt></FaCalendarAlt>Reservations</NavLink></li>
                <li><NavLink to='/dashboard/history'><FaWallet></FaWallet>Payment History</NavLink></li>
                <li><NavLink to='/dashboard/myCart'><FaShoppingCart></FaShoppingCart>My Cart</NavLink></li>
                <div className='divider'></div>
                <li><NavLink to='/menu'><FaBars></FaBars> Our Menu</NavLink></li>
                <li><NavLink to='/order/salad'>Order Now</NavLink></li>
              </>
          }
        </ul>

      </div>
    </div>
  );
};

export default Dashboard;