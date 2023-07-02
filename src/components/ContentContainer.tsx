import { FC, ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

const ContentContainer: FC<ContentContainerProps> = ({ children, className = '' }) => {
  return (
    <main className={`grid place-items-center text-center lg:gap-x-8 ${className}`}>
      {children}
    </main>
  );
};

export default ContentContainer;
