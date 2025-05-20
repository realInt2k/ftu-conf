import UseTranslate from "@/hooks/Usetranslate";
import {SectionFullWidth} from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";

const MapEmbed = () => {
    return (
      <div className={'w-full'}>
        <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8587.566713028313!2d105.80144184688707!3d21.022669927212714!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab5d5161f909%3A0x4dafaf500ce22be3!2sForeign%20Trade%20University!5e0!3m2!1sen!2s!4v1747341029005!5m2!1sen!2s"
            style={{ border: 0, width: '100%', height: '400px', borderRadius: '10px' }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
  );
};
const LocationCard = (props: IBodyCardProp) => {
    const t = UseTranslate();
    return (
        <SectionFullWidth
            cardID={'location-card'}
            dark={props.dark}
            passThroughChild={true}
            title={t('DescriptionHome.Location.Title')}
        >
            <div className={'w-full pt-5 md:flex'}>
                <div className={`w-full md:w-1/2`}>
                    {MapEmbed()}
                </div>
                <ul className={`mt-5 w-full list-disc md:ml-10 md:mt-0 md:w-1/2`}>
                    <li className={`mt-1 text-xl`}>
                        {t('DescriptionHome.Location.Detail.1')}
                    </li>
                    <li className={`mt-1 text-xl`}>
                        {t('DescriptionHome.Location.Detail.2')}
                    </li>
                </ul>
            </div>
        </SectionFullWidth>
    );
}

export { LocationCard };
