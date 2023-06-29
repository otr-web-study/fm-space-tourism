import { FC, ReactNode } from 'react';
import TheHeader from './TheHeader';

interface PageContainerProps {
  children: ReactNode;
  className?: string;
}

const PageContainer: FC<PageContainerProps> = ({ children, className = '' }) => {
  return (
    <div
      className={`grid min-h-screen w-full grid-rows-page-layout overflow-hidden bg-primary bg-cover bg-center ${className}`}
    >
      <TheHeader />
      {children}
    </div>
  );
};

export default PageContainer;
