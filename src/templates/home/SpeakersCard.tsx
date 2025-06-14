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
            description={'updating...'}
        >
        <div className={'pt-5 md:grid md:grid-cols-3 md:gap-4'}>
            <div className={'flex flex-col items-center'}>
                <img style={{height: imgHeight}} src={'/assets/images/FE-LE-ANH-NGO-C-1740714900_320x320.png'} alt={'speaker-1'}/>
                <p className={'pt-5 font-bold'}>
                    Dr. Le Anh Ngoc
                </p>
                <p className={''}>
                    Swinburne University of Technology Vietnam.
                </p>
            </div>
            <div className={'flex flex-col items-center'}>
                <img style={{height: imgHeight}} src={'/assets/images/Nguyen Ngoc Bao.jpg'} alt={'speaker-1'}/>
                <p className={'pt-5 font-bold'}>
                    Dr. Nguyen Ngoc Bao
                </p>
                <p className={''}>
                    Apple Inc, USA.
                </p>
            </div>
        </div>
        </SectionFullWidth>
    )
}

export default SpeakersCard;