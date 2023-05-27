
const Items = ({data}) => {
  const {image, name, price, recipe} = data;
  return (
    <div className="flex space-x-2 items-center">
      <img style={{borderRadius:"0 200px 200px 200px"}} className="w-[100px]" src={image} alt="" />
      <div>
        <h3 className="text-2xl">{name}------------------</h3>
        <p className="text-sm leading-6">{recipe}</p>
      </div>
      <p className="text-orange-300">${price}</p>
    </div>
  );
};

export default Items;