import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/shared/logo.svg';
import TheHamburger from './TheHamburger';

export interface GetClassName {
  (props: { isActive: boolean }): string | undefined;
}

const TheHeader = () => {
  const navItems = [
    { path: '/', title: 'home' },
    { path: '/destination', title: 'destination' },
    { path: '/crew', title: 'crew' },
    { path: '/technology', title: 'technology' },
  ];

  const [isHamburgerToggled, setIsHamburgerToggled] = useState(false);

  const getClassName: GetClassName = ({ isActive }) =>
    `uppercase py-2 sm:py-8 font-barlow-cond tracking-[2.7px] border-b-[3px] border-b-white/0 ${
      isActive ? 'border-0 sm:border-b-white' : 'hover:border-b-white/[.5]'
    }`;

  const handeHambburgerToggle = () => {
    setIsHamburgerToggled(!isHamburgerToggled);
  };

  const content = navItems.map(({ path, title }, idx) => (
    <li className="cursor-pointer py-2 sm:py-8 sm:text-sm lg:text-base" key={path}>
      <NavLink to={path} className={getClassName} onClick={() => setIsHamburgerToggled(false)}>
        <span className="mr-2 font-bold sm:hidden lg:inline">{`0${idx}`}</span>
        {title}
      </NavLink>
    </li>
  ));

  return (
    <header className="relative flex items-center justify-between lg:mt-10 lg:after:relative lg:after:order-1 lg:after:-mr-10 lg:after:h-[1px] lg:after:w-full lg:after:bg-white/25 lg:after:content-['']">
      <div>
        <Logo className="mx-[clamp(1.5rem,5vw,3.5rem)] my-6" />
      </div>
      <TheHamburger
        className="sm:d right-6 top-8"
        isToggled={isHamburgerToggled}
        onToggle={handeHambburgerToggle}
      />
      <nav className="z-[1] lg:order-2">
        <ul
          className="fixed inset-y-0 left-1/3 right-0 flex flex-col gap-[clamp(1.5rem,5vw,3.5rem)] bg-white/[0.05] px-8 py-[min(20rem,15vh)] backdrop-blur-2xl max-sm:translate-x-full max-sm:transition max-sm:duration-500 max-sm:ease-in-out max-sm:aria-expanded:translate-x-[0] sm:static sm:flex-row sm:px-[clamp(3rem,5vw,3.5rem)] sm:py-0 lg:px-[clamp(3rem,11vw,10rem)]"
          aria-expanded={isHamburgerToggled}
        >
          {content}
        </ul>
      </nav>
    </header>
  );
};

export default TheHeader;
