import { AppConfig } from "@/utils/AppConfig";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendar } from "@fortawesome/free-solid-svg-icons";

const HeadCardContentMiddle = () => {
  return (
    <div className={"flex h-full text-center text-white max-sm:items-center"}>
      <div className={" w-full md:pt-40 lg:w-1/2 xl:w-4/6 xl:pl-24 xl:pr-12"}>
        <p
          style={{ borderTop: "double white 4px" }}
          className="text-3xl font-extralight uppercase xl:text-5xl"
        >
          August 16, 2025
        </p>
        <div
          style={{ borderBottom: "double white 4px" }}
          className="pb-5 text-xl font-bold uppercase xl:text-3xl"
        >
          National Conference <br /> on Applied Mathematics, <br /> Computer
          Science, Data analytics
          <br />
          <p
            className={`hidden text-xl max-sm:block xl:text-3xl ${AppConfig.text_secondary_color}`}
          >
            And Implications in <br /> Economic - Business
          </p>
          <p
            className={`block text-xl max-sm:hidden xl:text-3xl ${AppConfig.text_secondary_color}`}
          >
            And Implications in Economic - Business
          </p>
        </div>
      </div>
      <div
        className={
          "block pb-10 max-sm:hidden md:pr-24 md:pt-40 lg:w-1/2 xl:w-2/6"
        }
      >
        <div
          className={`flex-col items-center rounded-xl bg-red-800 bg-opacity-70 p-5`}
        >
          <div className={"flex items-center justify-center"}>
            <div className={"w-[40px]"}>
              <FontAwesomeIcon icon={faCalendar} />
            </div>
            <p className={"ml-2 text-3xl uppercase"}>IMPORTANT DATES</p>
          </div>
          <p className={"pt-2 text-lg font-bold"}>Paper submission</p>
          <p className={"text-lg font-normal"}>20/06/2025</p>
          <p className={"pt-2 text-lg font-bold"}>Acceptance for proceedings</p>
          <p className={"text-lg font-normal"}>20/07/2025</p>
          <p className={"pt-2 text-lg font-bold"}>Proceedings publication</p>
          <p className={"text-lg font-normal"}>30/07/2025</p>
          <p className={"pt-2 text-lg font-bold"}>
            Conference participation registration
          </p>
          <p className={"text-lg font-normal"}>12/08/2025</p>
          <p className={"pt-2 text-lg font-bold"}>Conference day</p>
          <p className={"text-lg font-normal"}>20/08/2025</p>
        </div>
      </div>
    </div>
  );
};

export default HeadCardContentMiddle;
