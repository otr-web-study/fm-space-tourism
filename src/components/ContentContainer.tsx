import { FC, ReactNode } from 'react';

interface ContentContainerProps {
  children: ReactNode;
  className?: string;
}

const ContentContainer: FC<ContentContainerProps> = ({ children, className = '' }) => {
  return (
    <main
      className={`lg:grid- lg: grid place-items-center px-4 text-center child:max-w-[50ch] lg:grid-cols-lg-content lg:gap-x-8 ${className}`}
    >
      {children}
    </main>
  );
};

export default ContentContainer;
