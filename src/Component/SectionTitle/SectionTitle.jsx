
const SectionTitle = ({heading, subHeading}) => {
  return (
    <div className="text-center pt-20 pb-14 md:w-3/12 mx-auto">
      <p className="text-orange-300 pb-2">-------{heading}--------</p>
      <h3 className="uppercase text-3xl border-y-4 py-2">{subHeading}</h3>
    </div>
  );
};

export default SectionTitle;