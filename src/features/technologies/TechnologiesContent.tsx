import { useTechnologies } from './useTechnologies';
import { useFetchTechnologies } from './useFetchTechnologies';
import ContentContainer from 'components/ContentContainer';
import ContentNavigation from 'components/ContentNavigation';

const TechnologiesContent = () => {
  useFetchTechnologies();

  const { ids, technology, slug } = useTechnologies();

  if (!technology) {
    return null;
  }

  return (
    <ContentContainer className="grid-rows-[repeat(3,min-content)] pb-12 pt-6 sm:pt-10 lg:grid-cols-lg-technology-content lg:grid-rows-[min-content_1fr] lg:pt-[76px]">
      <h1 className="w-full px-4 font-barlow-cond uppercase tracking-[2.7px] sm:px-8 sm:text-start sm:text-xl sm:tracking-[3.375px]  lg:col-start-2 lg:text-[28px] lg:tracking-[4.725px]">
        <span className="mr-[clamp(1.15rem,2.5vw,1.75rem)] font-barlow-cond font-bold tracking-[2.7px] opacity-25 sm:text-xl sm:tracking-[3.375px] lg:text-[28px] lg:tracking-[4.725px]">
          03
        </span>
        SPACE LAUNCH 101
      </h1>

      <picture className="pt-7 sm:pt-11 lg:col-span-2 lg:col-start-3 lg:row-span-2 lg:justify-self-end lg:pt-0">
        <source media="(min-width: 1024px)" srcSet={technology.images.portrait} />
        <img className="w-screen lg:w-fit" src={technology.images.landscape} alt="Technology" />
      </picture>
      <div className="flex w-full flex-col gap-7 py-7 sm:gap-11 sm:py-11 lg:col-start-2 lg:flex-row lg:justify-between lg:gap-20 lg:py-0">
        <ContentNavigation
          items={ids}
          currentSlug={slug}
          navClassName="flex justify-center gap-4 lg:flex-col lg:gap-8"
          itemClassName="flex aspect-square items-center justify-center rounded-[50%] border border-white/25 px-5 hover:border-white sm:px-[30px] lg:px-10"
          activeItemClassName="text-primary bg-white"
          caption="index"
          captionClassName="font-bellefair text-base sm:text-2xl lg:text-[32px]"
        />
        <article className="flex flex-col items-center justify-center lg:items-start">
          <h3 className="font-barlow-cond text-sm uppercase tracking-[2.362px] text-secondary sm:text-base sm:tracking-[2.7px]">
            THE TERMINOLOGY…
          </h3>
          <h2 className="mt-2 font-bellefair text-2xl uppercase leading-normal sm:mt-4 sm:text-[40px] lg:mt-0 lg:text-[56px]">
            {technology.name}
          </h2>
          <p className="lf:max-w-[45ch] max-w-[48ch] text-[15px] leading-[25px] text-secondary sm:text-[16px] sm:leading-[28px] lg:text-start lg:text-[18px] lg:leading-[32px]">
            {technology.description}
          </p>
        </article>
      </div>
    </ContentContainer>
  );
};

export default TechnologiesContent;
