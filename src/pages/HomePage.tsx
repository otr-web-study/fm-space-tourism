import { Link } from 'react-router-dom';
import PageContainer from 'components/PageContainer';
import ContentContainer from 'components/ContentContainer';

const HomePage = () => {
  return (
    <PageContainer className="bg-home-mobile sm:bg-home-tablet lg:bg-home-desktop">
      <ContentContainer className="child:max-w-[50ch] lg:items-end lg:pb-[max(6rem,20vh)]">
        <div className="lg:col-start-2">
          <h1 className="font-barlow-cond uppercase tracking-[2.7px] text-secondary sm:text-xl sm:tracking-[3.375px] lg:text-[28px] lg:tracking-[4.725px]">
            So, you want to travel to
            <span className="my-4 block font-bellefair text-[80px] leading-[100px] text-white sm:my-6 sm:text-[150px] sm:leading-[150px]">
              Space
            </span>
          </h1>
          <p className="text-[15px] text-secondary sm:text-base lg:text-lg">
            Let’s face it; if you want to go to space, you might as well genuinely go to outer space
            and not hover kind of on the edge of it. Well sit back, and relax because we’ll give you
            a truly out of this world experience!
          </p>
        </div>
        <div className="lg:col-start-3">
          <Link
            to={'/destination'}
            className="relative inline-grid aspect-square place-items-center rounded-[50%] bg-white px-[2em] font-bellefair text-xl uppercase tracking-[1.25px] text-primary after:absolute after:h-full after:w-full after:rounded-[50%] after:bg-white/10 after:opacity-0 after:content-[''] after:[transition:opacity_500ms_linear,transform_750ms_ease-in-out] hover:after:scale-150 after:hover:opacity-100 sm:text-[32px] sm:tracking-[2px]"
          >
            Explore
          </Link>
        </div>
      </ContentContainer>
    </PageContainer>
  );
};

export default HomePage;
