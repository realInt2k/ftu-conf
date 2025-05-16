import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';
import { Location } from './Location';
import { Footer } from './Footer';
import { HeadCard } from './HeadCard';
import { DescriptionCard } from './DescriptionCard';
import { ContentCard } from './ContentCard';

const Base = () => (
  <div className={"bg-gray-200"} style={{backgroundColor: '#222222'}}>
      <div className="text-gray-600 antialiased bg-ftu-super bg-no-repeat">
          <Meta title={AppConfig.title} description={AppConfig.description} />
          <HeadCard />
          <DescriptionCard />
          <ContentCard />
          <Location />
          <Footer />
      </div>
  </div>
);

export { Base };
