
import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import useMenu from '../../../hooks/useMenu';
import Items from '../../Shared/Items/Items';

const PopularMenu = () => {
  const [menu] = useMenu();
  const popular = menu.filter(items => items.category === "popular");
  
  return (
    <section>
      <SectionTitle
      heading={"Check it out"}
      subHeading={"from your menu"}
      ></SectionTitle>
      <div className="grid md:grid-cols-2 mx-auto gap-5">
        {
          popular.map(data => <Items key={data._id} data={data}></Items>)
        }
      </div>
      <h3 className=' text-center my-8 cursor-pointer hover:bg-black hover:text-white border-b-4 py-2 px-2 md:w-2/12 mx-auto rounded-xl border-black'>View Full  Menu</h3>
    </section>
  );
};

export default PopularMenu;