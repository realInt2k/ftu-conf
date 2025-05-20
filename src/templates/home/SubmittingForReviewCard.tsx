import {SectionFullWidth} from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";
import Link from "next/link";

const SubmittingForReviewCard = (props: IBodyCardProp) => {
    return (
        <SectionFullWidth
            dark={props.dark}
            passThroughChild={true}
            title={'SUBMITING FOR REVIEW'}
        >
            <div className={'mt-4 text-justify text-xl'}>
                <ul className={'ml-6 list-disc'}>
                    <li>
                        Authors will submit their paper to us via <Link className={'text-red-900'} href={'#'}>Google form</Link>
                    </li>
                    <li>
                        After receiving submissions, our team will carefully review and respond to each author via Email
                    </li>
                    <li>
                        If you had any question, please <Link className={'text-red-900'} href={'#contact-us-card'}>Contact us</Link>
                    </li>
                </ul>
            </div>
        </SectionFullWidth>
    )
}

export default SubmittingForReviewCard;