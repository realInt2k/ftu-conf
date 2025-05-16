import {HeadCard} from "@/templates/HeadCard";
import UseTranslate from "@/hooks/Usetranslate";

const HeadCardHome = () => {
    const t = UseTranslate();
    return (<HeadCard
        bigTitle={(
            <>
                <p>
                    {t('HeadCardHome.Title.1')}
                    <br/>
                    {t('HeadCardHome.Title.2')}
                    <br/>
                </p>
                <span className="text-blue-300">{t('HeadCardHome.Title.3')}</span>
            </>
        )}
        smallTitle={(
            <>
                {t('HeadCardHome.SubTitle')}
            </>
        )}
    />)
}

export { HeadCardHome };
