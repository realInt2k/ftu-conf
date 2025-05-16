import {Base} from "@/templates/Base";
import {HeadCardAbout} from "@/templates/about/HeadCardAbout";
import OrganizingCommitteeCard from "@/templates/about/OrganizingComitteeCard";
import ProgrammeBoardCard from "@/templates/about/ProgrammeBoardCard";
import SpeakersCard from "@/templates/about/SpeakersCard";

const About = () => (
    <Base>
        <HeadCardAbout />
        <OrganizingCommitteeCard/>
        <ProgrammeBoardCard/>
        <SpeakersCard/>
    </Base>
);

export default About;