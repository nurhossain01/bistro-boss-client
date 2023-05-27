import SectionTitle from '../../../Component/SectionTitle/SectionTitle';
import image from '../../../assets/menu/salad-bg.jpg'

const ChefsRecipe = () => {
  return (
    <section className='pb-20'>
      <SectionTitle
        heading={"Should Try"}
        subHeading={"chefs recommends"}
      ></SectionTitle>

      <div className='grid md:grid-cols-3 gap-10'>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src={image} alt="Shoes" className="rounded-xl" />
          </figure>
          <div className="card-body items-center text-center">
            <h2 className="card-title">Caeser Salad</h2>
            <p>Lettuce, Eggs, Parmesan Cheese, Chicken Breast Fillets.</p>
            <div className="card-actions">
              <button className="btn btn-primary">Add to cart</button>
            </div>
          </div>
        </div>
      </div>

    </section>
  );
};

export default ChefsRecipe;