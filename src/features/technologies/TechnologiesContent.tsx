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
    <ContentContainer className="grid-rows-[repeat(3,min-content)] pt-6 sm:pt-10 lg:grid-cols-lg-content lg:grid-rows-[min-content_1fr] lg:pt-[76px]">
      <h1 className="w-full px-4 font-barlow-cond uppercase tracking-[2.7px] sm:px-8 sm:text-start sm:text-xl sm:tracking-[3.375px]  lg:col-start-2 lg:text-[28px] lg:tracking-[4.725px]">
        <span className="mr-[clamp(1.15rem,2.5vw,1.75rem)] font-barlow-cond font-bold tracking-[2.7px] opacity-25 sm:text-xl sm:tracking-[3.375px] lg:text-[28px] lg:tracking-[4.725px]">
          03
        </span>
        SPACE LAUNCH 101
      </h1>
      <picture className="aspect-square max-w-[55%] lg:max-w-[508px]">
        <source
          srcSet={`${technology.images.landscape} 600px, ${technology.images.portrait} 1200px`}
          sizes={'(min-width: 1024px) 1200px, 600px'}
        />
        <img src={technology.images.portrait} alt="Technology" />
      </picture>
      <div></div>
    </ContentContainer>
  );
};

export default TechnologiesContent;
