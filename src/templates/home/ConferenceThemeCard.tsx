import UseTranslate from "@/hooks/Usetranslate";
import {SectionFullWidth} from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";

const bullet = () => (
  <svg
    className="mr-2 size-3.5 shrink-0"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Z" />
  </svg>
);
const ConferenceThemeCard = (props: IBodyCardProp) => {
  const t = UseTranslate();
  return (
    <SectionFullWidth
      dark={props.dark}
      passThroughChild={true}
      title={t("DescriptionHome.ConferenceThemeCardTitle")}
      description={t("DescriptionHome.ConferenceThemeCardSubTitle")}
    >
      <hr className={'mt-5 md:mt-10'}/>
      <div className={'mt-5 grid gap-4 md:mt-10 md:grid-cols-2'}>
        <div className={'col-span-1 my-auto'}>
          <p className={'text-3xl font-bold'}>
            {t("DescriptionHome.ConferenceThemeCard.Subject.1.Title")}
          </p>
        </div>
        <div className={'col-span-1'}>
          <ul
              className={`max-w-md space-y-1`}
          >
            <li className="flex items-center">
              {bullet()}
              <p className={'text-left'}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.1.Description.1")}
              </p>
            </li>
            <li className="flex items-center">
              {bullet()}
              <p className={'text-left'}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.1.Description.2")}
              </p>
            </li>
            <li className="flex items-center">
              {bullet()}
              <p className={'text-left'}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.1.Description.3")}
              </p>
            </li>
            <li className="flex items-center">
              {bullet()}
              <p className={'text-left'}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.1.Description.4")}
              </p>
            </li>
            <li className="flex items-center">
              {bullet()}
              <p className={'text-left'}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.1.Description.5")}
              </p>
            </li>
            <li className="flex items-center">
              {bullet()}
              <p className={'text-left'}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.1.Description.6")}
              </p>
            </li>
          </ul>
        </div>

      </div>
      <div className={'mt-5 grid gap-4 md:mt-10 md:grid-cols-2'}>
        <div className={'col-span-1 my-auto'}>
          <p className={'text-3xl font-bold'}>
            {t("DescriptionHome.ConferenceThemeCard.Subject.2.Title")}
          </p>
        </div>
        <div className={'col-span-1'}>
          <ul
              className={`max-w-md space-y-1`}
          >
            <li className="flex items-center">
              {bullet()}
              <p className={"text-left"}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.2.Description.1")}
              </p>
            </li>
            <li className="flex items-center">
              {bullet()}
              <p className={"text-left"}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.2.Description.2")}
              </p>
            </li>
            <li className="flex items-center">
              {bullet()}
              <p className={"text-left"}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.2.Description.3")}
              </p>
            </li>
            <li className="flex items-center">
              {bullet()}
              <p className={"text-left"}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.2.Description.4")}
              </p>
            </li>
            <li className="flex items-center">
              {bullet()}
              <p className={"text-left"}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.2.Description.5")}
              </p>
            </li>
            <li className="flex items-center">
              {bullet()}
              <p className={"text-left "}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.2.Description.6")}
              </p>
            </li>
          </ul>
        </div>
      </div>

      <div className={'mt-5 grid gap-4 md:mt-10 md:grid-cols-2'}>
        <div className={'col-span-1 my-auto'}>
          <p className={'text-3xl font-bold'}>
            {t("DescriptionHome.ConferenceThemeCard.Subject.3.Title")}
          </p>
        </div>
        <div className={'col-span-1'}>
          <ul
              className={`max-w-md space-y-1`}
          >
            <li className="flex items-center">
              {bullet()}
              <p className={'text-left'}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.3.Description.1")}
              </p>
            </li>
            <li className="flex items-center">
              {bullet()}
              <p className={'text-left'}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.3.Description.2")}
              </p>
            </li>
            <li className="flex items-center">
              {bullet()}
              <p className={'text-left'}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.3.Description.3")}
              </p>
            </li>
            <li className="flex items-center">
              {bullet()}
              <p className={'text-left'}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.3.Description.4")}
              </p>
            </li>
            <li className="flex items-center">
              {bullet()}
              <p className={'text-left'}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.3.Description.5")}
              </p>
            </li>
            <li className="flex items-center">
              {bullet()}
              <p className={'text-left'}>
                {t("DescriptionHome.ConferenceThemeCard.Subject.3.Description.6")}
              </p>
            </li>
          </ul>
        </div>
      </div>

    </SectionFullWidth>
  );
};

export { ConferenceThemeCard };
