import { Base } from "@/templates/Base";
import { HeadCardAbout } from "@/templates/about/HeadCardAbout";
import OrganizingCommitteeCard from "@/templates/about/OrganizingComitteeCard";
import ProgrammeBoardCard from "@/templates/about/ProgrammeBoardCard";
import SpeakersCard from "@/templates/about/SpeakersCard";
import { AppConfig } from "@/utils/AppConfig";
import { Meta } from "@/layout/Meta";

const About = () => {
  return (
    <Base>
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <HeadCardAbout />
      <OrganizingCommitteeCard />
      <ProgrammeBoardCard />
      <SpeakersCard />
    </Base>
  );
};

export default About;
