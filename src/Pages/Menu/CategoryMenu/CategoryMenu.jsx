import React from 'react';
import Items from '../../Shared/Items/Items';
import CoverMenu from '../../Shared/CoverMenu/CoverMenu';
import { Link } from 'react-router-dom';

const CategoryMenu = ({ menuItems, title, coverImage }) => {
  return (
    <div>
      {title && <CoverMenu img={coverImage} title={"our menu"} height={"700px"}></CoverMenu>}
      <div className="grid md:grid-cols-2 mx-auto mt-16 gap-5 mb-14">
        {
          menuItems.map(data => <Items key={data._id} data={data}></Items>)
        }
      </div>
      <div>
        <Link to={`/order/${title}`}><button className='btn btn-outline btn-primary uppercase text-center my-8 border-b-4 py-2 px-2  rounded-xl md:w-2/12'>order your food</button></Link>
      </div>
    </div>
  );
};

export default CategoryMenu;