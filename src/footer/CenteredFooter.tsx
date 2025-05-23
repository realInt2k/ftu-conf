import type { ReactNode } from 'react';

import { FooterCopyright } from './FooterCopyright';

type ICenteredFooterProps = {
  logo: ReactNode;
  iconList: ReactNode;
  children: ReactNode;
  styling?: string;
};

const CenteredFooter = (props: ICenteredFooterProps) => (
  <div className={`${props.styling ? props.styling : ''} text-center`}>
    {props.logo}

    <nav>
      <ul className="navbar mt-5 flex flex-row justify-center text-xl font-medium">
        {props.children}
      </ul>
    </nav>
    <div className={'flex justify-center'}>
        <img className={`mt-5 max-h-[200px]`} src={"/assets/images/ftds-selfie.jpg"} alt={'ftds selfie'}/>
    </div>

    <div className="mt-8 pb-2 text-sm">
      <FooterCopyright  />
    </div>

    <style jsx>
      {`
        .navbar :global(li) {
          @apply mx-4;
        }
      `}
    </style>
  </div>
);

export { CenteredFooter };
