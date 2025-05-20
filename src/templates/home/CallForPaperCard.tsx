import { SectionFullWidth } from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";

const CallForPaperCard = (props: IBodyCardProp) => {
  return (
    <SectionFullWidth
      cardID={"call-for-paper-card"}
      dark={props.dark}
      passThroughChild={true}
      title={"Call for paper"}
      description={
        "We will host keynote lectures, Tutorials, Oral presentation, " +
          "poster presentation and workshops on all aspect of innovation and challenges in one of the most prestigious Universities in Vietnam - FTU. "
      }
    >
      <div className={'mt-4 text-justify text-xl'}>
        <p>
          Researchers/ Faculties/ Student/ industry experts will present the latest developments and technical solutions in area of the below themes:
        </p>
      </div>
    </SectionFullWidth>
  );
};

export default CallForPaperCard;
