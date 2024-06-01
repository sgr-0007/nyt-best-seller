import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChartBar, faHeart, faCog } from '@fortawesome/free-solid-svg-icons';
import { useState } from 'react';

const Sidebar = () => {
  const [active, setActive] = useState<string>('chart');

  const handleSetActive = (icon: string) => {
    setActive(icon);
  };

  return (
    <div className="fixed top-[74px] left-0 w-[96px] h-full bg-gray-900 text-white flex flex-col items-center py-4">
      
      <div className="flex flex-col items-center space-y-4 flex-1 justify-center">
        <button 
          className={`relative p-3 rounded-lg ${active === 'chart' ? 'active-icon' : ''}`}
          onClick={() => handleSetActive('chart')}
        >
          <FontAwesomeIcon icon={faChartBar} size="lg" />
        </button>
        <button 
          className={`relative p-3 rounded-lg ${active === 'heart' ? 'active-icon' : ''}`}
          onClick={() => handleSetActive('heart')}
        >
          <FontAwesomeIcon icon={faHeart} size="lg" />
        </button>
        <button 
          className={`relative p-3 rounded-lg ${active === 'cog' ? 'active-icon' : ''}`}
          onClick={() => handleSetActive('cog')}
        >
          <FontAwesomeIcon icon={faCog} size="lg" />
        </button>
      </div>
    </div>
  );
};

export default Sidebar;
