import Link from 'next/link';

import { Background } from '../background/Background';
import { Section } from '../layout/Section';
import { NavbarTwoColumns } from '../navigation/NavbarTwoColumns';
import { Logo } from './Logo';
import { AppConfig } from '@/utils/AppConfig';

const HeadCard = () => (
    <Background color="">
        <div className={''}>
            <Section yPadding="pt-5 pb-2">
                <NavbarTwoColumns logo={<Logo />}>
                    <Link href="/">Nộp bài báo ở đây</Link>
                </NavbarTwoColumns>
            </Section>
            <Section
                     bgColor={'bg-tech-blurred bg-cover rounded-md px-0'}
                     blurred={'py-20 px-5 md:px-10 my-10 backdrop-blur-md'}
            >
                <header className="text-left">
                    <h1 className={`whitespace-pre-line text-5xl font-bold leading-hero ${AppConfig.text_primary_color}`}>
                        <>
                            <p>
                                Nghiên cứu và ứng dụng Toán học
                                <br/>
                                Khoa học máy tính và phân tích dữ liệu
                                <br/>
                            </p>
                            <span className="text-blue-300">Trong kinh tế - kinh doanh</span>
                        </>
                    </h1>
                    <div className="mb-16 mt-4 text-xl italic text-white">Khoa Công nghệ và Khoa học Dữ liệu Trường Đại học Ngoại thương</div>
                </header>
            </Section>
        </div>
    </Background>
);

export { HeadCard };
