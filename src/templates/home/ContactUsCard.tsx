import {SectionFullWidth} from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";
import Link from "next/link";

const linkIcon = () => (
    <svg className={'mr-2 mt-[3px]'} width={'18'} height={'18'} fill={`#bfdbfe`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 640 512"><path d="M579.8 267.7c56.5-56.5 56.5-148 0-204.5c-50-50-128.8-56.5-186.3-15.4l-1.6 1.1c-14.4 10.3-17.7 30.3-7.4 44.6s30.3 17.7 44.6 7.4l1.6-1.1c32.1-22.9 76-19.3 103.8 8.6c31.5 31.5 31.5 82.5 0 114L422.3 334.8c-31.5 31.5-82.5 31.5-114 0c-27.9-27.9-31.5-71.8-8.6-103.8l1.1-1.6c10.3-14.4 6.9-34.4-7.4-44.6s-34.4-6.9-44.6 7.4l-1.1 1.6C206.5 251.2 213 330 263 380c56.5 56.5 148 56.5 204.5 0L579.8 267.7zM60.2 244.3c-56.5 56.5-56.5 148 0 204.5c50 50 128.8 56.5 186.3 15.4l1.6-1.1c14.4-10.3 17.7-30.3 7.4-44.6s-30.3-17.7-44.6-7.4l-1.6 1.1c-32.1 22.9-76 19.3-103.8-8.6C74 372 74 321 105.5 289.5L217.7 177.2c31.5-31.5 82.5-31.5 114 0c27.9 27.9 31.5 71.8 8.6 103.9l-1.1 1.6c-10.3 14.4-6.9 34.4 7.4 44.6s34.4 6.9 44.6-7.4l1.1-1.6C433.5 260.8 427 182 377 132c-56.5-56.5-148-56.5-204.5 0L60.2 244.3z"/></svg>
)

const ContactUsCard = (props: IBodyCardProp) => {
    return (
        <SectionFullWidth
            cardID={'contact-us-card'}
            dark={props.dark}
            passThroughChild={true}
            title={'Contact us'}
        >
            <div className={'mt-4 text-xl'}>
                <li className={'flex'}>
                    {linkIcon()}
                    <Link target={'_blank'} href="https://ftu.edu.vn">FTU Home</Link>
                </li>
                <li className={'flex'}>
                    {linkIcon()}
                    <Link target={'_blank'} href="https://cnkhdl.ftu.edu.vn/">FTDS Home</Link>
                </li>
                <li className={'flex'}>
                    {linkIcon()}
                    <Link target={'_blank'} href="https://www.facebook.com/profile.php?id=61557130348052">Facebook</Link>
                </li>
                <li className={'block'}>
                    Tel: <a href={'tel:+84866882924'}> (+84) 866 882 924</a>
                </li>
                <li className={'block'}>
                    Mail: <a href={'mailto:cnkhdl@ftu.edu.vn'}> cnkhdl@ftu.edu.vn</a>
                </li>
            </div>
        </SectionFullWidth>
    )
}

export default ContactUsCard