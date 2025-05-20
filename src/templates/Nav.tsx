import Link from "next/link";
import { Logo } from "@/templates/Logo";
import UseTranslate from "@/hooks/Usetranslate";
import { AppConfig } from "@/utils/AppConfig";
import { useEffect } from "react";

const Nav = () => {
  useEffect(() => {
    const handleScroll = () => {
      const nav = document.getElementById("navbar");
      if (!nav) return;

      if (window.scrollY > window.innerHeight - 60) {
        nav.classList.remove("bg-transparent");
        nav.classList.add("bg-gray-900");
      } else {
        nav.classList.add("bg-transparent");
        nav.classList.remove("bg-gray-900");
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup the listener when the component unmounts
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const t = UseTranslate();
  return (
    <div
      id={"navbar"}
      className={`navbar sticky top-0 z-[9999] h-[60px] bg-transparent shadow-sm ${AppConfig.text_primary_color} bg-opacity-85`}
    >
      <div className={"block w-[160px] min-w-[160px] max-w-[160px] max-md:hidden"}>
        <Link href="/">
          <Logo />
        </Link>
      </div>
      <div className="navbar-start sm:hidden">
        <div className="dropdown">
          <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="size-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {" "}
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />{" "}
            </svg>
          </div>
          <ul
            tabIndex={0}
            className={`menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow ${AppConfig.bg_dark_nav}`}
          >
            <li>
              <Link href={"/"}>{t("Home")}</Link>
            </li>
            <li>
              <Link href={"#about-conference-card"}>
                {t("Nav.EventDescription")}
              </Link>
            </li>
            <li>
              <Link href={"#call-for-paper-card"}>{t("Call for paper")}</Link>
            </li>
            <li>
              <Link href={"#submission-guideline"}>{t("Submission guideline")}</Link>
            </li>
            <li>
              <Link href={"#registration-card"}>{t("Registration")}</Link>
            </li>
            <li>
              <Link href={"#speakers-card"}>{t("Speakers")}</Link>
            </li>
            <li>
              <Link href={"#committees-card"}>{t("Committees")}</Link>
            </li>
            <li>
              <Link href={"#location-card"}>{t("Location")}</Link>
            </li>
            <li>
              <Link href={"#contact-us-card"}>{t("Nav.Contact")}</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-wrap items-center justify-between">
          <div className={"mt-1 hidden w-1/3 max-md:block"}>
            <Link href="/">
              <Logo />
            </Link>
          </div>
        </div>
      </div>
      <div className="navbar-center hidden justify-center lg:flex">
        <ul className="menu menu-horizontal px-1 font-bold">
          <li>
            <Link href={"/"}>{t("Home")}</Link>
          </li>
          <li>
            <Link href={"#about-conference-card"}>
              {t("Nav.EventDescription")}
            </Link>
          </li>
          <li>
            <Link href={"#call-for-paper-card"}>{t("Call for paper")}</Link>
          </li>
          <li>
            <Link href={"#submission-guideline"}>{t("Submission guideline")}</Link>
          </li>
          <li>
            <Link href={"#registration-card"}>{t("Registration")}</Link>
          </li>
          <li>
            <Link href={"#speakers-card"}>{t("Speakers")}</Link>
          </li>
          <li>
            <Link href={"#committees-card"}>{t("Committees")}</Link>
          </li>
          <li>
            <Link href={"#location-card"}>{t("Location")}</Link>
          </li>
          {/*<li>*/}
          {/*    <details>*/}
          {/*        <summary><Link href={'/about'}>{t('Nav.About')}</Link></summary>*/}
          {/*        <ul className="p-2">*/}
          {/*            <li className={'w-[200px]'}><Link href={'#'}>{t('Nav.About.Speakers')}</Link></li>*/}
          {/*            <li className={'w-[200px]'}><Link href={'#'}>{t('Nav.About.OrganizingCommittee')}</Link></li>*/}
          {/*            <li className={'w-[200px]'}><Link href={'#'}>{t('Nav.About.ProgrammeBoard')}</Link></li>*/}
          {/*        </ul>*/}
          {/*    </details>*/}
          {/*</li>*/}
          <li>
            <Link href={"#contact-us-card"}>{t("Nav.Contact")}</Link>
          </li>
        </ul>
      </div>
      <div className="navbar-end md:pr-5">
        <a
          className={`btn ${AppConfig.border_light} ${AppConfig.bg_light} ${AppConfig.text_primary_color_dark}`}
        >
          {t("Nav.Submit")}
        </a>
      </div>
    </div>
  );
};

export { Nav };
