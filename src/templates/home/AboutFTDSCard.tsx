import {SectionFullWidth} from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";

const AboutFTDSCard = (props: IBodyCardProp) => {
    return (
        <SectionFullWidth
            dark={props.dark}
            passThroughChild={true}
            title={'About FTDS'}
        >
            <div className={'mt-4 text-justify text-xl'}>
                The Faculty of Technology and Data Science was established based on the long-standing Faculty of Basic Sciences of Hanoi Foreign Trade University.
                The Faculty has the functions and missions of providing specialized training in Computer Science,
                Data Science, Artificial Intellegence, and applied mathematics, econometrics, and applied informatics for all students of the FTU University.
            </div>
        </SectionFullWidth>
    )
}

export default AboutFTDSCard;