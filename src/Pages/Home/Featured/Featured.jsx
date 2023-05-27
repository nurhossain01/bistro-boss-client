import SectionTitle from "../../../Component/SectionTitle/SectionTitle";
import featuredImage from '../../../assets/home/featured.jpg';
import './Featured.css'

const Featured = () => {
  return (
    <div className="featured-items bg-fixed text-white my-36">
      <SectionTitle heading={"Check it out"} subHeading={"featured items"}></SectionTitle>
      <div className="md:flex justify-center items-center py-20 px-16">
        <div>
          <img className="rounded-lg " src={featuredImage} alt="" />
        </div>
        <div className="md:ml-10">
          <p>February 20, 2022</p>
          <p>WHERE CAN I GET SOME?</p>
          <p className="leading-7">Lorem ipsum dolor sit amet consectetur adipisicing elit. Error voluptate facere, deserunt dolores maiores quod nobis quas quasi. Eaque repellat recusandae ad laudantium tempore consequatur consequuntur omnis ullam maxime tenetur.</p>
          <h3 className=' uppercase text-center my-8 hover:bg-slate-950 cursor-pointer border-b-4 py-2 px-2  rounded-xl md:w-3/12 border-white'>read more</h3>
        </div>
      </div>
    </div>
  );
};

export default Featured;