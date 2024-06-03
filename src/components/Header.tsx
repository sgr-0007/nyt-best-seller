import dp from "../assets/dp.png";
import Radical from "../assets/RADICAL.png";
const Header = () => {
  return (
    <div className=" w-full h-[80px] flex items-center bg-white">
      <div className="w-[96px] flex items-center bg-[#93B4BC]  p-4">
        <img src={dp} alt="Profile" className="rounded-full w-12 h-12" />
      </div>
      <img src={Radical} alt="Radical" className=" ml-6" />
      
    </div>
  );
};

export default Header;
