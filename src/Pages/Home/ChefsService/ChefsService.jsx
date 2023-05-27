import service from '../../../assets/home/chef-service.jpg'

const ChefsService = () => {
  return (
    <div className='mx-auto relative py-20'>
      <img  src={service} alt="" />
      <div className='absolute bottom-36 hidden md:block text-center opacity-50 bg-slate-50 mx-72 p-10'>
        <h3 className='text-4xl'>Bistro Boss</h3>
        <p className='leading-7'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus, libero accusamus laborum deserunt ratione dolor officiis praesentium! Deserunt magni aperiam dolor eius dolore at, nihil iusto ducimus incidunt quibusdam nemo.</p>
      </div>
    </div>
  );
};

export default ChefsService;