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
      <div className={'mt-4 text-xl'}>
        <p>
          Our event is completely free, from paper submission to conference registration!
        </p>
        <ul className={'ml-6 list-disc'}>
          <li>International Registrants: <span className={'font-bold'}>Free + benefits.</span></li>
          <li>Local Registrants: <span className={'font-bold'}>Free + benefits.</span></li>
        </ul>
      </div>
    </SectionFullWidth>
  );
};

export default RegistrationCard;
