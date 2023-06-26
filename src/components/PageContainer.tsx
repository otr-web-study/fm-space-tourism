import { FC, ReactNode } from 'react';
import TheHeader from './TheHeader';

interface PageContainerProps {
  children: ReactNode;
}

const PageContainer: FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="grid min-h-screen w-full grid-rows-page-layout bg-primary">
      <TheHeader />
      {children}
    </div>
  );
};

export default PageContainer;
