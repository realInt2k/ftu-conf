import {SectionFullWidth} from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";

const AboutFTUCard = (props: IBodyCardProp) => {
    return (
        <SectionFullWidth
            dark={props.dark}
            passThroughChild={true}
            title={'About FTU'}
            cardID={'about-ftu-card'}
        >
            <div className={`mt-4 text-justify text-xl`}>
                Foreign Trade University (FTU) in Vietnam actively hosts and co-organizes several prestigious national and international conferences,
                including the Vietnam International Conference in Finance (VICIF), the Vietnam Economist Annual Meeting (VEAM),
                and the Vietnam Symposium in Entrepreneurship, Finance, and Innovation (VSEFI). These events bring together scholars, policymakers,
                and industry leaders to discuss topics such as corporate finance, innovation, sustainable development, and economic policy,
                reflecting FTU’s strong commitment to academic research and global collaboration.
            </div>
        </SectionFullWidth>
    )
}

export default AboutFTUCard;