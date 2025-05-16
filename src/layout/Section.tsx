import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  xPadding?: string;
  children: ReactNode;
  bgColor?: string;
  titleColor?: string;
  descriptionColor?: string;
  blurred?: string;
};

const Section = (props: ISectionProps) => (
    <div
        className={`mx-auto max-w-screen-lg ${
            props.yPadding ? props.yPadding : ''
        } ${props.bgColor ? props.bgColor : ''}`}
    >
        <div className={`${props.blurred ? props.blurred : ''}`}>
            {(props.title || props.description) && (
                <div className="text-left">
                    {props.title && (
                        <h2 className={`${props.xPadding ? props.xPadding : 'px-10'} text-4xl font-bold md:px-10 ${props.titleColor ? props.titleColor : ''}`}>{props.title}</h2>
                    )}
                    {props.description && (
                        <div className={`${props.xPadding ? props.xPadding : 'px-10'} mt-4 text-xl md:px-10 ${props.descriptionColor ? props.descriptionColor : ''}`}>{props.description}</div>
                    )}
                </div>
            )}
            {props.children}
        </div>
    </div>
);

export { Section };
