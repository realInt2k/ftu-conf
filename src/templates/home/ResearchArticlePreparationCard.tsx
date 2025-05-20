import { SectionFullWidth } from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";

const ResearchArticlePreparationCard = (props: IBodyCardProp) => {
  return (
    <SectionFullWidth
      dark={props.dark}
      passThroughChild={true}
      title={"Research Article Preparation"}
      description={"How you prepare for article submission & regulation"}
    >
      <></>
    </SectionFullWidth>
  );
};

export default ResearchArticlePreparationCard;
