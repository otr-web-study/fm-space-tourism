import PageContainer from 'components/PageContainer';
import DestinationsContent from 'features/destinations/DestinationsContent';

const DestinationPage = () => {
  return (
    <PageContainer className="bg-destination-mobile sm:bg-destination-tablet lg:bg-destination-desktop">
      <DestinationsContent />
    </PageContainer>
  );
};

export default DestinationPage;
