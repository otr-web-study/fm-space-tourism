import { FC } from 'react';
import { ReactComponent as HamburgerIcon } from '../assets/shared/icon-hamburger.svg';
import { ReactComponent as CloseIcon } from '../assets/shared/icon-close.svg';

interface TheHamburgerProps {
  isToggled: boolean;
  onToggle: () => void;
  className?: string;
}

const TheHamburger: FC<TheHamburgerProps> = ({ isToggled, className = '', onToggle }) => {
  return (
    <button className={`absolute z-50 sm:hidden ${className}`} onClick={onToggle}>
      {isToggled ? <CloseIcon /> : <HamburgerIcon />}
    </button>
  );
};

export default TheHamburger;
