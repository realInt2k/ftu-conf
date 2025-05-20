import { AppConfig } from '@/utils/AppConfig';
import {SectionFullWidth} from "@/layout/SectionFullWidth";
import {ReactNode} from "react";

type IHeadCardProps = {
    bigTitle?: ReactNode,
    smallTitle?: ReactNode
}
const HeadCard = (props: IHeadCardProps) => (
    <SectionFullWidth
        bgColor={'bg-tech-blurred bg-cover rounded-md text-center flex justify-center items-center md:px-0 px-5 py-32 mb-12'}
    >
        <header className="text-left" id={'head-card'}>
            <h1 className={`whitespace-pre-line text-5xl font-bold leading-hero ${AppConfig.text_primary_color}`}>
                {props.bigTitle}
            </h1>
            <div className="mb-16 mt-4 text-xl italic text-white">
                {props.smallTitle}
            </div>
        </header>
    </SectionFullWidth>
);

export { HeadCard };
