import { SectionFullWidth } from "@/layout/SectionFullWidth";
import IBodyCardProp from "@/templates/home/IBodyCardProp";

const RegistrationCard = (props: IBodyCardProp) => {
  return (
    <SectionFullWidth
        cardID={'registration-card'}
      dark={props.dark}
      passThroughChild={true}
      title={"Registration"}
    >
      <div className={'mt-4'}>
        <ul>
          <li>International Registrants: ?? USD.</li>
          <li>Local Registrants: ?? VND.</li>
        </ul>
      </div>
    </SectionFullWidth>
  );
};

export default RegistrationCard;
