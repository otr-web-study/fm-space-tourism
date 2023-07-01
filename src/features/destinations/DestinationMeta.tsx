import { FC } from 'react';

interface DestinationMetaProps {
  title: string;
  text: string;
}

const DestinationMeta: FC<DestinationMetaProps> = ({ title, text }) => {
  return (
    <>
      <h3 className="font-barlow-cond text-sm uppercase tracking-[2.362px] text-secondary lg:text-start">
        {title}
      </h3>
      <p className="font-bellefair text-[28px] uppercase lg:text-start">{text}</p>
    </>
  );
};

export default DestinationMeta;
