import UseTranslate from "@/hooks/Usetranslate";
import {SectionFullWidth} from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";

const AboutConferenceCard = (props: IBodyCardProp) =>{
    const t = UseTranslate();
    return (
        <SectionFullWidth
            cardID={'about-conference-card'}
            dark={props.dark}
            passThroughChild={true}
            title={t('DescriptionHome.AboutConferenceTitle')}
        >
            <div className={`text-justify text-xl`}>
                {t('DescriptionHome.AboutConference')}
            </div>
        </SectionFullWidth>
    )
};

export { AboutConferenceCard };
