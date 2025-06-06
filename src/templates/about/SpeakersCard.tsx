import {AppConfig} from "@/utils/AppConfig";
import {Section} from "@/layout/Section";
import UseTranslate from "@/hooks/Usetranslate";

const SpeakersCard = () => {
    const t = UseTranslate();
    return (
        <Section
            yPadding={'py-12 mt-12 rounded-md'}
            bgColor={`${AppConfig.bg_light}`}
            titleColor={AppConfig.text_primary_color_dark}
            title={t('About.Speakers.Title')}
            descriptionColor={AppConfig.text_secondary_color_dark}
            // description="Trong Toán ứng dụng, Khoa học máy tính và Khoa học Dữ liệu."
        >
            <></>
        </Section>
    )
}

export default SpeakersCard;