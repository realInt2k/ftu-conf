import {AppConfig} from "@/utils/AppConfig";
import {Section} from "@/layout/Section";
import UseTranslate from "@/hooks/Usetranslate";

const OrganizingCommitteeCard = () => {
    const t = UseTranslate();
    return (
        <Section
            yPadding={'py-12 mt-12 rounded-md'}
            bgColor={`${AppConfig.bg_light}`}
            titleColor={AppConfig.text_primary_color_dark}
            title={t('About.OrganizingCommittee.Title')}
            descriptionColor={AppConfig.text_secondary_color_dark}
        >
            <></>
        </Section>
    )

}
export default OrganizingCommitteeCard;