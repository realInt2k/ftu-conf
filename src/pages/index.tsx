import { Base } from "@/templates/Base";
import { Meta } from "@/layout/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { HeadCardHome } from "@/templates/home/HeadCardHome";
import { DescriptionCard } from "@/templates/home/DescriptionCard";
import { ContentCard } from "@/templates/home/ContentCard";
import { Location } from "@/templates/home/Location";
import ProtrudingDiv from "@/templates/ProtrudingDiv";

const Index = () => (
  <Base>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <HeadCardHome />
        <ProtrudingDiv/>
      <DescriptionCard />
      <ContentCard />
      <Location />
  </Base>
);

export default Index;
