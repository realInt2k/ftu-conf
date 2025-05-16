import { AppConfig } from "@/utils/AppConfig";
import { VerticalFeatureRow } from "@/feature/VerticalFeatureRow";
import { Section } from "@/layout/Section";
import UseTranslate from "@/hooks/Usetranslate";

const bullet = () => (
  <svg
    className="mx-2 size-3.5 shrink-0"
    aria-hidden="true"
    xmlns="http://www.w3.org/2000/svg"
    fill="currentColor"
    viewBox="0 0 20 20"
  >
    <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5Z" />
  </svg>
);
const ContentCard = () => {
  const t = UseTranslate();
  return (
    <Section
      xPadding={'px-5'}
      yPadding={"py-12 mt-12 rounded-md"}
      bgColor={`${AppConfig.bg_light}`}
      titleColor={AppConfig.text_primary_color_dark}
      title={t("DescriptionHome.ContentCardTitle")}
      descriptionColor={AppConfig.text_secondary_color_dark}
      description={t("DescriptionHome.ContentCardSubTitle")}
    >
      <VerticalFeatureRow
        title={t("DescriptionHome.ContentCard.Subject.1.Title")}
        description={
          <div className={"md:pl-4"}>
            <ul
              className={`max-w-md space-y-1 ${AppConfig.text_secondary_color_dark}`}
            >
              <li className="flex items-center">
                {bullet()}
                <p className={'text-left'}>
                  {t("DescriptionHome.ContentCard.Subject.1.Description.1")}
                </p>
              </li>
              <li className="flex items-center">
                {bullet()}
                <p className={'text-left'}>
                  {t("DescriptionHome.ContentCard.Subject.1.Description.2")}
                </p>
              </li>
              <li className="flex items-center">
                {bullet()}
                <p className={'text-left'}>
                  {t("DescriptionHome.ContentCard.Subject.1.Description.3")}
                </p>
              </li>
              <li className="flex items-center">
                {bullet()}
                <p className={'text-left'}>
                  {t("DescriptionHome.ContentCard.Subject.1.Description.4")}
                </p>
              </li>
              <li className="flex items-center">
                {bullet()}
                <p className={'text-left'}>
                  {t("DescriptionHome.ContentCard.Subject.1.Description.5")}
                </p>
              </li>
              <li className="flex items-center">
                {bullet()}
                <p className={'text-left'}>
                  {t("DescriptionHome.ContentCard.Subject.1.Description.6")}
                </p>
              </li>
            </ul>
          </div>
        }
        image="/assets/images/comp-sci.svg"
        imageAlt="First feature alt text"
      />
      <VerticalFeatureRow
        title={t("DescriptionHome.ContentCard.Subject.2.Title")}
        description={
          <div className={"md:pl-4"}>
            <ul
              className={`max-w-md space-y-1 ${AppConfig.text_secondary_color_dark}`}
            >
              <li className="flex items-center">
                {bullet()}
                <p className={"text-left"}>
                  {t("DescriptionHome.ContentCard.Subject.2.Description.1")}
                </p>
              </li>
              <li className="flex items-center">
                {bullet()}
                <p className={"text-left"}>
                  {t("DescriptionHome.ContentCard.Subject.2.Description.2")}
                </p>
              </li>
              <li className="flex items-center">
                {bullet()}
                <p className={"text-left"}>
                  {t("DescriptionHome.ContentCard.Subject.2.Description.3")}
                </p>
              </li>
              <li className="flex items-center">
                {bullet()}
                <p className={"text-left"}>
                  {t("DescriptionHome.ContentCard.Subject.2.Description.4")}
                </p>
              </li>
              <li className="flex items-center">
                {bullet()}
                <p className={"text-left"}>
                  {t("DescriptionHome.ContentCard.Subject.2.Description.5")}
                </p>
              </li>
              <li className="flex items-center">
                {bullet()}
                <p className={"text-left "}>
                  {t("DescriptionHome.ContentCard.Subject.2.Description.6")}
                </p>
              </li>
            </ul>
          </div>
        }
        image="/assets/images/imu-logo.svg"
        imageAlt="applied math"
        reverse
      />
      <VerticalFeatureRow
        title={t("DescriptionHome.ContentCard.Subject.3.Title")}
        description={
          <div className={"md:pl-4"}>
            <ul
              className={`max-w-md space-y-1 ${AppConfig.text_secondary_color_dark}`}
            >
              <li className="flex items-center">
                {bullet()}
                <p className={"text-left"}>
                  {t("DescriptionHome.ContentCard.Subject.3.Description.1")}
                </p>
              </li>
              <li className="flex items-center">
                {bullet()}
                <p className={"text-left"}>
                  {t("DescriptionHome.ContentCard.Subject.3.Description.2")}
                </p>
              </li>
              <li className="flex items-center">
                {bullet()}
                <p className={"text-left  "}>
                  {t("DescriptionHome.ContentCard.Subject.3.Description.3")}
                </p>
              </li>
              <li className="flex items-center">
                {bullet()}
                <p className={"text-left"}>
                  {t("DescriptionHome.ContentCard.Subject.3.Description.4")}
                </p>
              </li>
              <li className="flex items-center">
                {bullet()}
                <p className={"text-left"}>
                  {t("DescriptionHome.ContentCard.Subject.3.Description.5")}
                </p>
              </li>
              <li className="flex items-center">
                {bullet()}
                <p className={"text-left "}>
                  {t("DescriptionHome.ContentCard.Subject.3.Description.6")}
                </p>
              </li>
            </ul>
          </div>
        }
        image="/assets/images/data-science.svg"
        imageAlt="data-science"
      />
    </Section>
  );
};

export { ContentCard };
