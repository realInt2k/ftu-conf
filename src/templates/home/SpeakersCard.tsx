import {SectionFullWidth} from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";

const SpeakersCard = (props: IBodyCardProp) => {
    const imgHeight = '300px';
    return (
        <SectionFullWidth
            cardID={'speakers-card'}
            dark={props.dark}
            passThroughChild={true}
            title={"Keynote / Guest Speaker"}
        >
        <div className={'pt-5 md:grid md:grid-cols-3 md:gap-4'}>
            <div className={'flex flex-col items-center'}>
                <img style={{height: imgHeight}} src={'/assets/images/speakers-1.jpg'} alt={'speaker-1'}/>
                <p className={'pt-5 font-bold'}>
                    PGS, TS Phạm Thu Hương
                </p>
                <p className={''}>
                    Phó Hiệu trưởng Trường Đại học Ngoại thương.
                </p>
            </div>
        </div>
        </SectionFullWidth>
    )
}

export default SpeakersCard;