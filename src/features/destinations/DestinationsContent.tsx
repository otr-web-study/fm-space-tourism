import { useDestinations } from './useDestinations';
import { useFetchDestinations } from './useFetchDestinations';
import ContentContainer from 'components/ContentContainer';

const DestinationsContent = () => {
  useFetchDestinations();
  const { ids, destination } = useDestinations();

  if (!destination) {
    return null;
  }

  return (
    <ContentContainer className="pt-6 sm:pt-10 lg:pt-[76px]">
      <div className="flex h-full w-full flex-col items-center lg:col-start-2">
        <h1 className="w-full font-barlow-cond uppercase tracking-[2.7px] sm:text-start sm:text-xl sm:tracking-[3.375px] lg:text-[28px] lg:tracking-[4.725px]">
          <span className="mr-[clamp(1.15rem,2.5vw,1.75rem)] font-barlow-cond font-bold tracking-[2.7px] opacity-25 sm:text-xl sm:tracking-[3.375px] lg:text-[28px] lg:tracking-[4.725px]">
            01
          </span>
          Pick your destination
        </h1>
        <div className="flex h-full w-full items-center justify-center">
          <picture className="aspect-square max-w-[170px] sm:max-w-[300px] lg:max-w-[445px]">
            <source srcSet={destination.images.webp} type="image/webp" />
            <img src={destination.images.png} />
          </picture>
        </div>
      </div>
      <div className="lg:col-start-3"></div>
    </ContentContainer>
  );
};

export default DestinationsContent;
