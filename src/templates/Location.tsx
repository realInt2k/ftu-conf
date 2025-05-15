import { Section } from '../layout/Section';
import {AppConfig} from "@/utils/AppConfig";

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
const Location = () => (
  <Section
    yPadding={'mt-10 py-3'}
    bgColor={'bg-gray-100 rounded-md'}
    titleColor={`${AppConfig.text_primary_color_dark}`}
    title={'Địa điểm dự kiến'}
  >
    <div className={'px-10 pt-5 w-full md:flex'}>
      <div className={`md:w-1/2 w-full`}>
        {MapEmbed()}
      </div>
        <div className={`md:mt-0 mt-5 md:ml-10 md:w-1/2 w-full`}>
            <p className={`text-xl mt-1 ${AppConfig.text_secondary_color_dark}`}>
                Khoa Công nghệ và Khoa học Dữ liệu - Trường Đại học Ngoại thương
            </p>
            <p className={`text-xl mt-1 ${AppConfig.text_secondary_color_dark}`}>
                91 Chùa Láng, Phường Láng Thượng Quận Đống Đa, Hà Nội.
            </p>
        </div>
    </div>
  </Section>
);

export { Location };
