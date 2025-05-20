import {TimelineItem} from "@/small-components/TimelineItem";
import {Section} from "@/layout/Section";
import UseTranslate from "@/hooks/Usetranslate";
import {AppConfig} from "@/utils/AppConfig";

// @ts-ignore
const ImportantTimelineMobileCard = () => {
    const t = UseTranslate();
    return (
        <div className={'my-0 block py-0 sm:hidden'}>
            <Section
                xPadding={'px-5'}
                yPadding={'pt-4 pb-12'}
                titleColor={'text-white'}
                title={t('DescriptionHome.TimeLineTitle')}
                bgColor={`${AppConfig.bg_dark}`}
            >
                <div className={`flex justify-center px-10 pt-5 md:w-full md:px-0`}>
                    <ul className="timeline md:timeline-horizontal timeline-vertical">
                        <TimelineItem check={true} start={true} date={'20/06/2025'} description={t('DescriptionHome.TimeLine.1')}/>
                        <TimelineItem middle={true} date={'20/07/2025'} description={t('DescriptionHome.TimeLine.2')}/>
                        <TimelineItem middle={true} date={'30/07/2025'} description={t('DescriptionHome.TimeLine.3')}/>
                        <TimelineItem middle={true} date={'12/08/2025'} description={t('DescriptionHome.TimeLine.4')}/>
                        <TimelineItem end={true} date={'16/08/2025'} description={t('DescriptionHome.TimeLine.5')}/>
                    </ul>
                </div>
            </Section>
        </div>
    )
}
export default ImportantTimelineMobileCard