import className from 'classnames';
import { useRouter } from 'next/router';
import {AppConfig} from "@/utils/AppConfig";

type IVerticalFeatureRowProps = {
  title: string;
  description: string|JSX.Element;
  image: string;
  imageAlt: string;
  reverse?: boolean;
};

const VerticalFeatureRow = (props: IVerticalFeatureRowProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'items-center',
    {
      'flex-row-reverse': props.reverse,
    },
  );

  const router = useRouter();

  return (
    <div className={verticalFeatureClass}>
      <div className="w-full text-center md:w-1/2">
        <h3 className={`text-3xl font-semibold ${AppConfig.text_primary_color}`}>{props.title}</h3>
        <div className="mt-2 text-xl leading-9">{props.description}</div>
      </div>

      <div className="flex w-full justify-center p-6 md:w-1/2 md:flex-none">
        <img src={`${router.basePath}${props.image}`} alt={props.imageAlt} />
      </div>
    </div>
  );
};

export { VerticalFeatureRow };
