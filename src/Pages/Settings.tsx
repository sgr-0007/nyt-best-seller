import underConstructionGif from '../assets/Underconstruction.gif'; 

const Settings = () => {
  return (
    <div className="flex justify-center items-center h-screen bg-[#E9EDF6]">
      <div className="text-center">
        <img src={underConstructionGif} alt="Under Construction" className="mx-auto mb-4" />
        <h2 className="text-2xl font-bold">Settings</h2>
        <p className="text-gray-600">This page is currently under development. Please check back later.</p>
      </div>
    </div>
  );
};

export default Settings;
