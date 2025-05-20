import { Nav } from "@/templates/Nav";
import { ReactNode } from "react";
import {Footer} from "@/templates/Footer";

type IBaseProps = {
  children?: ReactNode;
};
const Base = (props: IBaseProps) => (
  <div
    className={"relative z-[0] bg-gray-200"}
    style={{ backgroundColor: "#222222" }}
  >
    <Nav />
    <div className="bg-ftu-super bg-no-repeat text-gray-600 antialiased">
      {props.children}
      <Footer dark={true}/>
    </div>
  </div>
);

export { Base };
