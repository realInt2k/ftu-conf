import {SectionFullWidth} from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";

const AboutFTDSCard = (props: IBodyCardProp) => {
    return (
        <SectionFullWidth
            dark={props.dark}
            passThroughChild={true}
            title={'About FTDS'}
        >
            <div className={'mt-4'}>
                FTDS is a young department of Foreign Trade University (FTU) in Vietnam.
            </div>
        </SectionFullWidth>
    )
}

export default AboutFTDSCard;