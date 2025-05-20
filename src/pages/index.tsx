import { Base } from "@/templates/Base";
import { Meta } from "@/layout/Meta";
import { AppConfig } from "@/utils/AppConfig";
import { HeadCardHome } from "@/templates/home/HeadCardHome";
import { AboutConferenceCard } from "@/templates/home/AboutConferenceCard";
import { ConferenceThemeCard } from "@/templates/home/ConferenceThemeCard";
import { LocationCard } from "@/templates/home/LocationCard";
import ImportantTimelineMobileCard from "@/templates/home/ImportantTimelineMobileCard";
import { SectionFullWidth } from "@/layout/SectionFullWidth";
import Link from "next/link";
import AboutFTUCard from "@/templates/home/AboutFTUCard";
import CallForPaperCard from "@/templates/home/CallForPaperCard";
import ResearchArticlePreparationCard from "@/templates/home/ResearchArticlePreparationCard";
import SubmittingForReviewCard from "@/templates/home/SubmittingForReviewCard";
import AboutFTDSCard from "@/templates/home/AboutFTDSCard";
import SpeakersCard from "@/templates/home/SpeakersCard";
import CommitteesCard from "@/templates/home/CommitteesCard";
import RegistrationCard from "@/templates/home/RegistrationCard";
import ContactUsCard from "@/templates/home/ContactUsCard";

const callForPaperExtension = () => {
  return (
    <SectionFullWidth
      xPadding={"px-10"}
      yPadding={"pt-12"}
      descriptionColor={AppConfig.text_secondary_color_dark}
      description=""
      bgColor={`${AppConfig.bg_light}`}
      childClass={"w-full text-right"}
    >
      <Link
        className={`btn ${AppConfig.bg_dark} ${AppConfig.text_primary_color}`}
        target="_blank"
        href={
          "https://drive.google.com/file/d/1jym50iSPNLynKK--3u21xYArB37zQO5m/view?usp=sharing"
        }
      >
        CALL FOR PAPER POSTER
      </Link>
    </SectionFullWidth>
  );
};

const Index = () => (
  <Base>
    <Meta title={AppConfig.title} description={AppConfig.description} />
    <HeadCardHome />
    <ImportantTimelineMobileCard />
    {callForPaperExtension()}
    <AboutFTUCard dark={false} />
    <AboutFTDSCard dark={true} />
    <AboutConferenceCard dark={false} />
    <CallForPaperCard dark={true} />
    <ConferenceThemeCard dark={false} />
    <ResearchArticlePreparationCard dark={true} />
    <SubmittingForReviewCard dark={false} />
    <RegistrationCard dark={true} />
    <SpeakersCard dark={false} />
    <CommitteesCard dark={true} />
    <LocationCard dark={false} />
    <ContactUsCard dark={true} />
  </Base>
);

export default Index;
