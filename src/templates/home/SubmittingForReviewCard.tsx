import {SectionFullWidth} from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";

const SubmittingForReviewCard = (props: IBodyCardProp) => {
    return (
        <SectionFullWidth
            dark={props.dark}
            passThroughChild={true}
            title={'SUBMITING FOR REVIEW'}
        >
            <div className={'mt-4'}>
                Use the google form to etc. etc.
            </div>
        </SectionFullWidth>
    )
}

export default SubmittingForReviewCard;