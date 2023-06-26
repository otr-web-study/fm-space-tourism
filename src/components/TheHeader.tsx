import { ReactComponent as Logo } from '../assets/shared/logo.svg';

const TheHeader = () => {
  return (
    <header className="flex">
      <div>
        <Logo />
      </div>
    </header>
  );
};

export default TheHeader;
