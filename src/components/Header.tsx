import dp from '../assets/dp.png'; // Adjust the path as necessary

const Header = () => {
  return (
    <div className=" w-full h-[80px] flex items-center bg-white">
      <div className="w-[96px] flex items-center bg-[#93B4BC]  p-4">
        <img src={dp} alt="Profile" className="rounded-full w-12 h-12" />
      </div>
      <h1 className="absolute text-red-600 font-bold top-[19px] left-[124px] w-[100px] h-[35px] text-[23px] leading-[34.5px]">
        RADICAL
        </h1>
      
    </div>
  );
};

export default Header;
