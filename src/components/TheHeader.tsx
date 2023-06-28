import { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../assets/shared/logo.svg';
import TheHamburger from './TheHamburger';

interface GetClassName {
  (props: { isActive: boolean; isPending: boolean }): string | undefined;
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
    `uppercase py-2 md:py-8 font-barlow-cond tracking-[2.7px] border-b-[3px] border-b-white/0 ${
      isActive ? 'border-0 md:border-b-white' : 'hover:border-b-white/[.5]'
    }`;

  const handeHambburgerToggle = () => {
    setIsHamburgerToggled(!isHamburgerToggled);
  };

  const handleResize = () => {
    if (window.innerWidth > 768) {
      setIsHamburgerToggled(false);
    }
  };

  useEffect(() => {
    if (isHamburgerToggled) {
      window.addEventListener('resize', handleResize);
    }

    return () => window.removeEventListener('resize', handleResize);
  }, [isHamburgerToggled]);

  const content = navItems.map(({ path, title }, idx) => (
    <li className="cursor-pointer py-2 md:py-8 md:text-sm xl:text-base" key={path}>
      <NavLink to={path} className={getClassName} onClick={() => setIsHamburgerToggled(false)}>
        <span className="mr-2 font-bold md:hidden xl:inline">{`0${idx}`}</span>
        {title}
      </NavLink>
    </li>
  ));

  return (
    <header className="relative flex items-center justify-between xl:my-10 xl:after:relative xl:after:order-1 xl:after:h-[1px] xl:after:w-full xl:after:bg-white/25 xl:after:content-['']">
      <div>
        <Logo className="mx-[clamp(1.5rem,5vw,3.5rem)] my-6" />
      </div>
      <TheHamburger
        className="md:d right-6 top-8"
        isToggled={isHamburgerToggled}
        onToggle={handeHambburgerToggle}
      />
      <nav className="xl:order-2">
        <ul
          className={`${
            isHamburgerToggled ? 'translate-x-[0]' : ''
          } fixed inset-y-0 left-1/3 right-0 flex translate-x-full flex-col gap-[clamp(1.5rem,5vw,3.5rem)] bg-white/[0.05] px-8 py-[min(20rem,15vh)] backdrop-blur-2xl transition duration-500 ease-in-out md:static md:transform-none md:flex-row md:px-[clamp(3rem,7vw,7rem)] md:py-0`}
        >
          {content}
        </ul>
      </nav>
    </header>
  );
};

export default TheHeader;
