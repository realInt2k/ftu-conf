import {SectionFullWidth} from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";

const CallForPaperCard = (props: IBodyCardProp) => {
    return (<SectionFullWidth
        cardID={'call-for-paper-card'}
        dark={props.dark}
        passThroughChild={true}
        title={'Call for paper'}
        description={'Calling for every papers !!!!'}
    >
    <></>
    </SectionFullWidth>)
}

export default CallForPaperCard;