import { useDestinations } from './useDestinations';
import { useFetchDestinations } from './useFetchDestinations';
import ContentContainer from 'components/ContentContainer';
import ContentNavigation from 'components/ContentNavigation';
import DestinationMeta from './DestinationMeta';

const DestinationsContent = () => {
  useFetchDestinations();
  const { ids, destination, slug } = useDestinations();

  if (!destination) {
    return null;
  }

  return (
    <ContentContainer className="grid-rows-[repeat(2,min-content)] pb-12 pt-6 child:max-w-[50ch] sm:pt-10 sm:child:max-w-[63ch] lg:grid-cols-lg-content lg:grid-rows-1 lg:pt-[76px] lg:child:max-w-[53ch]">
      <div className="flex h-full w-full flex-col items-center lg:col-start-2">
        <h1 className="w-full font-barlow-cond uppercase tracking-[2.7px] sm:text-start sm:text-xl sm:tracking-[3.375px] lg:text-[28px] lg:tracking-[4.725px]">
          <span className="mr-[clamp(1.15rem,2.5vw,1.75rem)] font-barlow-cond font-bold tracking-[2.7px] opacity-25 sm:text-xl sm:tracking-[3.375px] lg:text-[28px] lg:tracking-[4.725px]">
            01
          </span>
          Pick your destination
        </h1>
        <div className="mb-[26px] mt-8 flex h-full w-full items-center justify-center sm:mb-14 sm:mt-[60px] lg:my-0">
          <picture className="aspect-square max-w-[170px] sm:max-w-[300px] lg:max-w-[445px]">
            <source srcSet={destination.images.webp} type="image/webp" />
            <img src={destination.images.png} />
          </picture>
        </div>
      </div>
      <div className="rflex h-full w-full flex-col items-center lg:col-start-3 lg:mt-24 lg:items-start lg:self-start lg:pl-[clamp(0.5rem,6vw,6rem)]">
        <ContentNavigation
          items={ids}
          navClassName="flex justify-center gap-[26px] sm:gap-[35px] lg:justify-start"
          itemClassName="pb-2 font-barlow-cond text-sm tracking-[2.362px] text-secondary hover:border-b-[3px] hover:border-b-white/50 sm:pb-3 sm:text-base sm:tracking-[2.7px]"
          activeItemClassName="text-white border-b-[3px] !border-b-white"
          currentSlug={slug}
          withCaption={true}
        />
        <article>
          <h2 className="mt-5 font-bellefair text-[56px] uppercase sm:mt-8 sm:text-[80px] lg:mt-9 lg:text-start lg:text-[100px] lg:leading-[115px]">
            {destination.name}
          </h2>
          <p className="text-[15px] leading-[25px] text-secondary sm:mt-2 sm:text-base sm:leading-7 lg:mt-[14px] lg:text-start">
            {destination.description}
          </p>
          <ul className="mt-8 flex flex-col justify-center gap-8 border-t border-t-[#383B4B] pt-8 sm:mt-12 sm:flex-row sm:gap-[clamp(40px,12%,79px)] sm:pt-7 lg:mt-14 lg:justify-start">
            <li>
              <DestinationMeta title="Avg. distance" text={destination.distance} />
            </li>
            <li>
              <DestinationMeta title="Est. travel time" text={destination.travel} />
            </li>
          </ul>
        </article>
      </div>
    </ContentContainer>
  );
};

export default DestinationsContent;
