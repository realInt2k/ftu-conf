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
                <img style={{height: imgHeight}} src={'/assets/images/prof-minh-ngoc-tran.jpg'} alt={'Prof. Minh Ngoc Tran'}/>
                <p className={'pt-5 font-bold'}>
                    Prof. Minh Ngoc Tran
                </p>
                <p className={''}>
                    Discipline of Business Analytics
                </p>
                <p>
                    Sydney Business School.
                </p>
            </div>
            <div className={'flex flex-col items-center'}>
                <img style={{height: imgHeight}} src={'/assets/images/FE-LE-ANH-NGO-C-1740714900_320x320.png'} alt={'Dr. Le Anh Ngoc'}/>
                <p className={'pt-5 font-bold'}>
                    Dr. Le Anh Ngoc
                </p>
                <p className={''}>
                    Swinburne University of Technology Vietnam.
                </p>
            </div>
            <div className={'flex flex-col items-center'}>
                <img style={{height: imgHeight}} src={'/assets/images/Nguyen Ngoc Bao.jpg'} alt={'Dr. Nguyen Ngoc Bao'}/>
                <p className={'pt-5 font-bold'}>
                    Dr. Nguyen Ngoc Bao
                </p>
                <p className={''}>
                    Apple Inc, USA.
                </p>
            </div>
            <div className={'flex flex-col items-center'}>
                <img style={{height: imgHeight}} src={'/assets/images/mr-david-cropped.jpg'} alt={'mr.David'}/>
                <p className={'pt-5 font-bold'}>
                    Mr. David Lapetina
                </p>
                <p className={''}>
                    Engineering Director, Money Forward Vietnam.
                </p>
            </div>
        </div>
        </SectionFullWidth>
    )
}

export default SpeakersCard;