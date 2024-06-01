import dp from '../assets/dp.png'; // Adjust the path as necessary

const Header = () => {
  return (
    <div className="fixed w-full h-[74px] flex items-center bg-white">
      <div className="w-[96px] flex items-center bg-[#93B4BC]  p-4">
        <img src={dp} alt="Profile" className="rounded-full w-12 h-12" />
      </div>
      <h1 className="text-2xl font-bold text-red-600 pl-4">RADICAL</h1>
      
    </div>
  );
};

export default Header;
