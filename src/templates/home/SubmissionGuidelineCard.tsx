import { SectionFullWidth } from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";
import Link from "next/link";

const SubmissionGuidelineCard = (props: IBodyCardProp) => {
  return (
    <SectionFullWidth
      dark={props.dark}
      passThroughChild={true}
      title={"Submission guideline"}
      cardID={"submission-guideline"}
      description={""}
    >
      <div className={"mt-4 text-justify text-xl"}>
        <p>
          We have compiled a documents explaining in details here:{" "}
          <Link
            className={"text-red-200"}
            target={'_blank'}
            href={
              "https://docs.google.com/document/d/1EL6BJeYM7tjD4pmF_cdggK1vJrkf-58K/edit?usp=sharing&ouid=112246606317879743111&rtpof=true&sd=true"
            }
          >
            Document
          </Link>
        </p>
        <p className={"mt-5 font-bold"}>
          Here are some highlighted format rules:
        </p>
        <ul className={"ml-6 list-disc"}>
          <li>
            The article is prepared using MS Word, with the font Times New
            Roman, size 13; top and bottom margins: 3 cm; left margin: 3.5 cm;
            right margin: 2.5 cm; line spacing: single; spacing before/after: 0
            pt. Mathematical formulas must be typeset using MathType format.
          </li>
          <li>
            Figures and tables, if cited, must clearly state the source (below
            and to the right). Number tables and figures in increasing order.
          </li>
          <li>
            Titles of tables and figures should be placed above, bolded, and
            center-aligned.
          </li>
          <li>Page numbers should be centered at the bottom of each page.</li>
        </ul>

        <p className={"mt-5 font-bold"}>
          Here are some highlighted structure rules:
        </p>
        <ul className={"ml-6 list-disc"}>
          <li>
            <span className={"font-bold"}>Title:</span> UPPERCASE, BOLD,
            CENTER-ALIGNED (The title only should be font size 16)
            <ul className={"ml-6 list-disc"}>
              <li>
                The title must reflect the main content of the article and
                highlight the issue to be addressed.
              </li>
              <li>
                Below the title, include the author’s name, along with their
                academic title and degree.
              </li>
            </ul>
          </li>
          <li>
            <span className={"font-bold"}>Abstract: </span>This section should
            be Italicized and written as a single paragraph summarizing the
            article, concise (200 to 300 words), and must fully present the
            purpose of the article, the research method, and the main findings.
          </li>
          <li>
            <span className={"font-bold"}> Keywords: </span> No more than 5
            keywords per article Keywords are the terms the author considers
            important to the content and representative of the article&apos;s topic.
          </li>
          <li>
            <span className={"font-bold"}>Headings in the Article: </span>
            Sections should be numbered hierarchically. I.e: 1, 1.1, 1.1.1, 1.1.2, etc.
          </li>
        </ul>
      </div>
    </SectionFullWidth>
  );
};

export default SubmissionGuidelineCard;
