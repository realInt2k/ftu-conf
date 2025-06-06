import { ReactNode } from "react";

type IBaseProps = {
  children?: ReactNode;
};
const Base = (props: IBaseProps) => (
  <div
    className={"relative z-[0] bg-gray-200"}
    style={{ backgroundColor: "#222222" }}
  >
    <div className="bg-ftu-super bg-no-repeat text-gray-600 antialiased">
      {props.children}
    </div>
  </div>
);

export { Base };
