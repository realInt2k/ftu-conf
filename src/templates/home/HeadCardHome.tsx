import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import React from "react";
import Slider from "react-slick";
import HeadCardContentMiddle from "@/templates/home/HeadCardContentMiddle";
import {
  faCalendarDays,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {AppConfig} from "@/utils/AppConfig";

const bottomInfoCol = (
  { topText, botText, icon} = {
    topText: "",
    botText: "",
    icon: faLocationDot,
  },
) => (
  <div className={`flex w-full justify-center`}>
    <div className={`mt-1 w-[20px]`}>
      <FontAwesomeIcon icon={icon} />
    </div>
    <div className={"ml-2"}>
      <p className={`font-bold ${AppConfig.text_secondary_color_dark}`}>{topText}</p>
      <p className={"text-sm"}>{botText}</p>
    </div>
  </div>
);

const SimpleSlider = () => {
  const settings = {
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
    nextArrow: <></>,
    previousArrow: <></>,
  };
  const shiftClass = "relative top-[-64px]";
  return (
    <div className={shiftClass}>
      <Slider {...settings}>
        <div
          className={
            "min-h-[calc(100vh)] bg-ftds-selfie-dark bg-cover bg-bottom"
          }
        >
          <div className="bg-dark backdrop-brightness-25 min-h-[calc(100vh)] max-sm:flex max-sm:flex-col max-sm:justify-center">
            <div className={"h-full px-5 xl:px-10 2xl:px-48"}>
              <HeadCardContentMiddle />
            </div>
          </div>
        </div>
        <div
          className={
            " min-h-[calc(100vh)] bg-ftds-conf bg-cover bg-bottom"
          }
        >
          <div className="bg-dark min-h-[calc(100vh)] backdrop-brightness-50 max-sm:flex max-sm:flex-col max-sm:justify-center">
            <div className={"h-full px-5 md:px-48"}>
              <HeadCardContentMiddle />
            </div>
          </div>
        </div>
      </Slider>
      <div
        className={
          "relative flex h-0 w-full justify-center text-white max-sm:hidden"
        }
      >
        <div
          className={`relative bottom-[60px] h-[60px] w-full px-2 pt-2 sm:w-2/3 ${AppConfig.bg_darker} grid grid-cols-4 gap-4 rounded-t-xl`}
        >
          {bottomInfoCol({
            topText: "LOCATION",
            botText: "91 Chua Lang, Ha Noi",
            icon: faLocationDot,
          })}
          {bottomInfoCol({
            topText: "PAPER SUBMISSION",
            botText: "10/07/2025",
            icon: faCalendarDays,
          })}
          {bottomInfoCol({
            topText: "CONFERENCE REG.",
            botText: "12/08/2025",
            icon: faCalendarDays,
          })}
          {bottomInfoCol({
            topText: "CONFERENCE DAY",
            botText: "19/09/2025",
            icon: faCalendarDays,
          })}
        </div>
      </div>
    </div>
  );
};

const HeadCardHome = () => {
  return <>{SimpleSlider()}</>;
};

export { HeadCardHome };
