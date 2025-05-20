import type { ReactNode } from "react";
import { AppConfig } from "@/utils/AppConfig";

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  xPadding?: string;
  children: ReactNode;
  bgColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  childClass?: string;
  dark?: boolean;
  passThroughChild?: boolean;
  cardID?: string;
};

const SectionFullWidth = (props: ISectionProps) => {
  let childprops = "";
  if (props.passThroughChild) {
    childprops = props.dark
      ? `${AppConfig.bg_dark} ${AppConfig.text_primary_color}`
      : `${AppConfig.bg_light} ${AppConfig.text_primary_color_dark}`;
  }
  return (
    <div
      className={`mx-0 ${
        props.yPadding ? props.yPadding : "py-20"
      } ${props.bgColor ? props.bgColor : props.dark ? AppConfig.bg_dark : AppConfig.bg_light} 
        ${props.xPadding ? props.xPadding : "px-5 lg:px-12 xl:px-32 2xl:px-72"}`}
      id={`${props.cardID}`}
    >
      <div
        className={`${props.childClass ? props.childClass : ""} ${props.passThroughChild ? childprops : ""}`}
      >
        {(props.title || props.description) && (
          <div className="text-left">
            {props.title && (
              <p
                className={`text-4xl font-bold uppercase ${props.titleColor ? props.titleColor : !props.dark ? AppConfig.text_primary_color_dark : AppConfig.text_primary_color}`}
              >
                {props.title}
              </p>
            )}
            {props.description && (
              <div
                className={`mt-4 text-justify text-xl ${props.descriptionColor ? props.descriptionColor : !props.dark ? AppConfig.text_primary_color_dark : AppConfig.text_primary_color}`}
              >
                {props.description}
              </div>
            )}
          </div>
        )}
        {props.children}
      </div>
    </div>
  );
};

export { SectionFullWidth };
