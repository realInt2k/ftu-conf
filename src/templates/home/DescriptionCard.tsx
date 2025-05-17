import { Section } from '@/layout/Section';
import { AppConfig } from '@/utils/AppConfig';
import { TimelineItem } from "@/small-components/TimelineItem";
import UseTranslate from "@/hooks/Usetranslate";

const DescriptionCard = () =>{
    const t = UseTranslate();
    return (
        <div id={'event-description'}>
            <Section
                xPadding={'px-5'}
                yPadding={'pt-12 rounded-t-md'}
                titleColor={AppConfig.text_primary_color_dark}
                title={t('DescriptionHome.AboutConferenceTitle')}
                descriptionColor={AppConfig.text_secondary_color_dark}
                description=""
                bgColor={`${AppConfig.bg_light}`}
            >
                <div className={`mt-4 px-5 text-justify text-xl md:px-10 ${AppConfig.text_secondary_color_dark}`}>
                    {t('DescriptionHome.AboutConference')}
                </div>
            </Section>
            <Section
                xPadding={'px-5'}
                yPadding={'pt-4 pb-12 rounded-b-md'}
                titleColor={AppConfig.text_primary_color_dark}
                title={t('DescriptionHome.TimeLineTitle')}
                bgColor={`${AppConfig.bg_light}`}
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
};

export { DescriptionCard };
