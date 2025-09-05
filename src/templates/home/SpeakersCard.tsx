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
            description={''}
        >
        <div className={'pt-5 md:grid md:grid-cols-3 md:gap-4'}>
            <div className={'flex flex-col items-center'}>
                <img style={{height: imgHeight}} src={'/assets/images/prof-minh-ngoc-tran.jpg'} alt={'Prof. Minh Ngoc Tran'}/>
                <p className={'pt-5 font-bold'}>
                    Prof. Minh Ngọc Trần
                </p>
                <p className={''}>
                    Discipline of Business Analytics
                </p>
                <p>
                    Sydney Business School.
                </p>
            </div>
            <div className={'flex flex-col items-center'}>
                <img style={{height: imgHeight}} src={'/assets/images/Nguyen Ngoc Bao.jpg'} alt={'Dr. Nguyen Ngoc Bao'}/>
                <p className={'pt-5 font-bold'}>
                    Dr. Nguyễn Ngọc Bảo
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
            <div className={'flex flex-col items-center'}>
                <img style={{height: imgHeight}} src={'/assets/images/nguyen-canh-binh.jpg'} alt={'mr.David'}/>
                <p className={'pt-5 font-bold'}>
                    Mr. Nguyễn Cảnh Bình
                </p>
                <p className={''}>
                    Chairman of the Board of Directors of Alpha Book
                </p>
            </div>
            <div className={'flex flex-col items-center'}>
                <img style={{height: imgHeight}} src={'/assets/images/Nguyen Huu Hieu.jpg'} alt={'mr.David'}/>
                <p className={'pt-5 font-bold'}>
                    Mr. Nguyen Huu Hieu
                </p>
                <p className={''}>
                    MBA Co-founder/CEO of FiinGroup.
                </p>
            </div>
        </div>
        </SectionFullWidth>
    )
}

export default SpeakersCard;