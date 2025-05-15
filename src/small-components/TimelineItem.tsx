import {AppConfig} from '@/utils/AppConfig';

type ITimelineItemProps = {
    title?: string;
    date?: string;
    description?: string;
    middle?: boolean;
    start?: boolean;
    end?: boolean;
    check?: boolean;
}
const TimelineItem = (props: ITimelineItemProps) => (
    <li>
        {props.middle || props.end ? <hr /> : ''}
        <div className={`timeline-start ${AppConfig.text_secondary_color_dark}`}>{props.date}</div>
        <div className="timeline-middle">
            {props.check ? (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`h-5 w-5 ${AppConfig.text_secondary_color_dark}`}
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z"
                        clipRule="evenodd"
                    />
                </svg>
            ) : (
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className={`h-5 w-5 ${AppConfig.text_secondary_color_dark}`}
                >
                    <path
                        fillRule="evenodd"
                        d="M10 18a8 8 0 100-16 8 8 0 000 16z"
                        clipRule="evenodd"
                    />
                </svg>

                )}
        </div>
        {props.description && <div className={`timeline-end timeline-box ${AppConfig.bg_dark} ${AppConfig.text_primary_color}`}>
            {props.description}
        </div>}
        {props.middle || props.start ? <hr /> : ''}
    </li>
);

export { TimelineItem };
