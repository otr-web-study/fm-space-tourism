import { useCrew } from './useCrew';
import { useFetchCrew } from './useFetchCrew';
import ContentContainer from 'components/ContentContainer';
import ContentNavigation from 'components/ContentNavigation';

const CrewContent = () => {
  useFetchCrew();
  const { ids, crew, slug } = useCrew();

  if (!crew) {
    return null;
  }

  return (
    <ContentContainer className="grid-rows-[repeat(3,min-content)] px-4 pt-6 sm:px-8 sm:pt-10 lg:grid-cols-lg-content lg:grid-rows-[min-content_1fr] lg:pt-[76px]">
      <h1 className="w-full font-barlow-cond uppercase tracking-[2.7px] sm:text-start sm:text-xl sm:tracking-[3.375px]  lg:col-start-2 lg:text-[28px] lg:tracking-[4.725px]">
        <span className="mr-[clamp(1.15rem,2.5vw,1.75rem)] font-barlow-cond font-bold tracking-[2.7px] opacity-25 sm:text-xl sm:tracking-[3.375px] lg:text-[28px] lg:tracking-[4.725px]">
          02
        </span>
        Meet your crew
      </h1>
      <div className="row-start-3 flex h-full flex-col-reverse justify-between sm:row-start-2 sm:flex-col lg:col-start-2 lg:w-full lg:pb-24">
        <article className="w-full pt-8 sm:pt-[60px] lg:pt-[154px]">
          <h2 className="font-bellefair text-2xl uppercase leading-normal sm:text-[40px] lg:text-start lg:text-[56px]">
            <span className="block font-bellefair uppercase leading-normal opacity-50 sm:text-2xl lg:text-start lg:text-[32px]">
              {crew.role}
            </span>
            {crew.name}
          </h2>
          <p className="mt-3 max-w-[39ch] text-[15px] leading-[25px] text-secondary sm:max-w-[51ch] sm:text-[16px] sm:leading-[28px] lg:mt-6 lg:max-w-[45ch] lg:text-start lg:text-[18px] lg:leading-[32px]">
            {crew.bio}
          </p>
        </article>
        <ContentNavigation
          items={ids}
          navClassName="flex mt-9 items-center justify-center gap-4 sm:gap-[1.5rem] lg:justify-start"
          itemClassName="px-[.5em] aspect-square bg-white/25 rounded-[50%] hover:bg-white/50"
          activeItemClassName="!bg-white"
          currentSlug={slug}
        />
      </div>
      <div className="row-start-2 mt-8 flex w-full items-end justify-center border-b border-b-[#383B4B] sm:row-start-3 sm:mt-10 sm:border-none lg:col-start-3 lg:row-span-2 lg:row-start-1 lg:mt-0 lg:h-full">
        <picture className="max-w-[55%] lg:max-w-[508px]">
          <source srcSet={crew.images.webp} type="image/webp" />
          <img src={crew.images.png} alt="Crew member" />
        </picture>
      </div>
    </ContentContainer>
  );
};

export default CrewContent;
