import {AppConfig} from "@/utils/AppConfig";
import UseTranslate from "@/hooks/Usetranslate";
import {useRouter} from "next/router";

const ProtrudingDiv = () =>  {
    const t = UseTranslate();
    const { locale = 'en' } = useRouter();
    return (
        <div className={'mb-[-180px] flex justify-center'}>
            <div className={`${AppConfig.text_primary_color_dark} 
                relative top-[-140px] 
                z-[11] 
                flex h-[170px] w-[250px] 
                flex-wrap 
                content-center justify-center rounded-xl 
                border-2 border-cyan-500
                bg-gradient-to-bl from-sky-100 to-gray-200`}>
                <div className={''}>
                    <p className={`text-xl font-bold ${locale === 'vi' ? 'leading-[5px]' : ''} `}>
                        {t('Conference.Date')}
                    </p>
                    <div className={'flex justify-center'}>
                        <p className={'text-6xl font-extralight'}>
                            16
                        </p>
                        {locale === 'en' && <p className={'mt-[5px] font-bold'}>
                          th
                        </p>}
                    </div>
                    <div className={'flex justify-center font-bold leading-[10px]'}>
                        {t('Conference.Date.Detail')}
                    </div>
                </div>
            </div>
        </div>
    )
};

export default ProtrudingDiv;