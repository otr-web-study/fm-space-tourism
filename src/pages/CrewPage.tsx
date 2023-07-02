import PageContainer from 'components/PageContainer';
import CrewContent from 'features/crew/CrewContent';

const CrewPage = () => {
  return (
    <PageContainer className="bg-crew-mobile sm:bg-crew-tablet lg:bg-crew-desktop">
      <CrewContent />
    </PageContainer>
  );
};

export default CrewPage;
