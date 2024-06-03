import underConstructionGif from '../assets/Underconstruction.gif'; 

const Settings = () => {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="text-center">
        <img src={underConstructionGif} alt="Under Construction" className="mx-auto mb-4" />
        < h5 className='sm:text-xl md:text-2xl lg:text-3xl font-bold'>This page is currently under development. Please check back later.</h5>
      </div>
    </div>
  );
};

export default Settings;
