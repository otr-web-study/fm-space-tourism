import PageContainer from 'components/PageContainer';
import TechnologiesContent from 'features/technologies/TechnologiesContent';

const TechnologyPage = () => {
  return (
    <PageContainer className="bg-technology-mobile sm:bg-technology-tablet lg:bg-technology-desktop">
      <TechnologiesContent />
    </PageContainer>
  );
};

export default TechnologyPage;
