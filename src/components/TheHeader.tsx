import { ReactComponent as Logo } from '../assets/shared/logo.svg';
import { NavLink } from 'react-router-dom';

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

  const getClassName: GetClassName = ({ isActive }) =>
    `uppercase py-8 font-barlow-cond tracking-[2.7px] border-b-[3px] border-b-white/0 ${
      isActive ? 'border-b-white' : 'hover:border-b-white/[.5]'
    }`;

  const content = navItems.map(({ path, title }, idx) => (
    <li className="cursor-pointer py-8" key={path}>
      <NavLink to={path} className={getClassName}>
        <span className="mr-2 font-bold">{`0${idx}`}</span>
        {title}
      </NavLink>
    </li>
  ));
  return (
    <header className="flex items-center justify-between">
      <div>
        <Logo className="mx-[clamp(1.5rem,5vw,3.5rem)] my-6" />
      </div>
      <nav>
        <ul className="flex gap-[clamp(1.5rem,5vw,3.5rem)] bg-white/[0.05] backdrop-blur-2xl md:px-[clamp(3rem,7vw,7rem)]">
          {content}
        </ul>
      </nav>
    </header>
  );
};

export default TheHeader;
