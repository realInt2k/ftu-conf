import {HeadCard} from "@/templates/HeadCard";
import UseTranslate from "@/hooks/Usetranslate";

export const HeadCardAbout = () => {
    const t = UseTranslate();
    return (
        <HeadCard
            bigTitle={(
                <>
                    <p>
                        {t('About.HeadCard.Title')}
                    </p>
                </>
            )}
            smallTitle={(
                <>
                    {t('About.HeadCard.SubTitle')}
                </>
            )}
        />
    );
}