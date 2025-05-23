import {FooterCopyright} from "@/footer/FooterCopyright";
import {SectionFullWidth} from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";

const Footer = (props: IBodyCardProp) => {
    return (
        <SectionFullWidth
            dark={props.dark}
            yPadding={'py-5'}
            passThroughChild={true}
        >
            <div className={'flex justify-center'}>
                <FooterCopyright />
            </div>
        </SectionFullWidth>
    );
}

export { Footer };
