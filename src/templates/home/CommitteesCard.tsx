import { SectionFullWidth } from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";
import { AppConfig } from "@/utils/AppConfig";
import { ReactNode } from "react";

const peopleCard = (isDark: boolean, title: string, child: ReactNode) => {
  return (
    <div
      className={`${isDark ? AppConfig.bg_light + " " + AppConfig.text_primary_color_dark : AppConfig.bg_dark + " " + AppConfig.text_primary_color} my-5 rounded-md p-2`}
    >
      <p className={"text-xl font-bold"}>{title}</p>
      <hr
        className={`my-2 ${isDark ? AppConfig.border_dark : AppConfig.border_light}`}
      />
      {child}
    </div>
  );
};
const CommitteesCard = (props: IBodyCardProp) => {
  return (
    <SectionFullWidth
      cardID={"committees-card"}
      dark={props.dark}
      passThroughChild={true}
      title={"Committees"}
      description={'Updating...'}
    >
      {peopleCard(
        props.dark,
        "General Chair",
        <ul className={"ml-5 list-disc"}>
          <li>
            <p>
              <b> As.Prof. Dr. Pham Thu Huong</b>, <span className={"italic"}>Vice Rector of Hanoi Foreign Trade University (FTU)</span>
            </p>
          </li>
          <li>
            <p>
              <b>As.Prof. Dr. Nguyen Truong Thang</b>, <span className={"italic"}>Director of Institute of Information Technology, VAST.</span>
            </p>
          </li>
        </ul>,
      )}
      {peopleCard(
        props.dark,
        "Program Chair",
        <ul className={"ml-5 list-disc"}>
          <li>
            <b>Dr. Nguyen Van Tang</b>, <span className={"italic"}>Faculty of Technology and Data Science, FTU.</span>
          </li>
          <li>
            <b>As.Prof. Dr. Nguyen Phuong Thai</b>, <span className={"italic"}>University of Engineering and Technology, VNU.</span>
          </li>
        </ul>,
      )}
      {peopleCard(
          props.dark,
          "Program Committee",
          <ul className={"ml-5 list-disc"}>
            <li>
              <p>
                <b>Dr. Nguyen Van Tang</b>, <span className={"italic"}>Faculty of Technology and Data Science, FTU.</span>
              </p>
            </li>
            <li>
              <p>
                <b>MSc. To Thi Hai Yen</b>, <span className={"italic"}>Faculty of Technology and Data Science, FTU.</span>
              </p>
            </li>
            <li>
              <p>
                <b>Dr. Phung Duy Quang</b>, <span className={"italic"}>Faculty of Technology and Data Science, FTU.</span>
              </p>
            </li>
            <li>
              <p>
                <b>Dr. Lam Van Son</b>, <span className={"italic"}>Faculty of Technology and Data Science, FTU.</span>
              </p>
            </li>
            <li>
              <p>
                <b>Dr. Doan Quang Hung</b>, <span className={"italic"}>Faculty of Technology and Data Science, FTU.</span>
              </p>
            </li>
            <li>
              <p>
                <b>Dr. Pham Thi Kim Dung</b>, <span className={"italic"}>Faculty of Technology and Data Science, FTU.</span>
              </p>
            </li>
            <li>
              <p>
                <b>As.Prof.Dr. Nguyen Thi Thuy Vinh</b>, <span className={"italic"}>Department of Higher Education, FTU.</span>
              </p>
            </li>
            <li>
              <p>
                <b>As.Prof. Nguyen Truong Thang</b>, <span className={"italic"}>Institute of Information Technology, VAST.</span>
              </p>
            </li>
            <li>
              <p>
                <b>As.Prof. Nguyen Viet Anh</b>, <span className={"italic"}>Institute of Information Technology, VAST.</span>
              </p>
            </li>
            <li>
              <p>
                <b>Dr. Ngo Hai Anh</b>, <span className={"italic"}>Institute of Information Technology, VAST.</span>
              </p>
            </li>
            <li>
              <p>
                <b>Dr. Nguyen Nhu Son</b>, <span className={"italic"}>Institute of Information Technology, VAST.</span>
              </p>
            </li>
            <li>
              <p>
                <b>As.Prof. Dr. Phan Xuan Hieu</b>,<span className={"italic"}> University of Engineering and Technology, VNU.</span>
              </p>
            </li>
            <li>
              <p>
                <b>As.Prof. Dr. Nguyen Phuong Thai</b>, <span className={"italic"}>University of Engineering and Technology, VNU.</span>
              </p>
            </li>
            <li>
              <p>
                <b>Dr. Nguyen Van Vinh</b>, <span className={"italic"}>University of Engineering and Technology, VNU.</span>
              </p>
            </li>
            <li>
              <p>
                <b>Dr. Doan Nhat Quang</b>, <span className={"italic"}>University of Science and Technology Hanoi (USTH).</span>
              </p>
            </li>
          </ul>,
      )}
      {peopleCard(
        props.dark,
        "Organizing chair",
        <ul className={"ml-5 list-disc"}>
          <li>
            <p>
              Falculty of Technology and Data Science
            </p>
          </li>
        </ul>,
      )}
      {peopleCard(
        props.dark,
        "Technical and Design Support",
        <ul className={"ml-5 list-disc"}>
          <li>
            <b>Bsc. Dung Nguyen Duy Chi</b>, {" "}
            <span className={"italic"}> Faculty of Technology and Data Science, FTU</span>
          </li>
          <li>
            <b>Ms. Cuc Nguyen Thi Thu</b>, {" "}
            <span className={"italic"}> Faculty of Technology and Data Science, FTU</span>
          </li>
        </ul>,
      )}
    </SectionFullWidth>
  );
};

export default CommitteesCard;
