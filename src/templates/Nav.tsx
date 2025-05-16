import Link from "next/link";
import {Logo} from "@/templates/Logo";

const Nav = () => (
    <div className="navbar bg-base-100 sticky top-0 z-[9999] shadow-sm">
        <div className="navbar-start">
            <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                    <svg xmlns="http://www.w3.org/2000/svg" className="size-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                </div>
                <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                    <li><a href={'/#event-description'}>Về sự kiện</a></li>
                    <li>
                        <a href={'/about'}>Thông tin</a>
                        <ul className="p-2">
                            <li><a>Diễn giả</a></li>
                            <li><a>Ban tổ chức</a></li>
                            <li><a>Chương trình</a></li>
                        </ul>
                    </li>
                    <li><a>Liên hệ</a></li>
                </ul>
            </div>
            <div className="flex flex-wrap items-center justify-between">
                <div className={'block w-1/2 md:w-1/5 md:pl-5'}>
                    <Link href="/"><Logo/></Link>
                </div>
            </div>
        </div>
        <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
                <li><a href={'/#event-description'}>Về sự kiện</a></li>
                <li>
                    <details>
                        <summary><a href={'/about'}>Thông tin</a></summary>
                        <ul className="p-2">
                            <li className={'w-[110px]'}><a>Diễn giả</a></li>
                            <li className={'w-[110px]'}><a>Ban tổ chức</a></li>
                            <li className={'w-[110px]'}><a>Chương trình</a></li>
                        </ul>
                    </details>
                </li>
                <li><a href={'/#contact-us'}>Liên hệ</a></li>
            </ul>
        </div>
        <div className="navbar-end md:pr-5">
            <a className="btn">Nộp bài báo</a>
        </div>
    </div>
)

export {Nav}