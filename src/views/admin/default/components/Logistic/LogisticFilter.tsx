import Card from "components/card";

const LogisticFilter = (props: { icon: JSX.Element; clicked: boolean }) => {
  const { icon, clicked } = props;
  return (
    <>
      <div className="flex h-[60px] w-auto items-center">
        <div
          className={`rounded-full p-3 text-brand-500 ${
            clicked
              ? "bg-[#442ff2] hover:bg-lightPrimary hover:text-white dark:bg-navy-700"
              : "bg-lightPrimary hover:bg-[#442ff2] hover:text-white"
          }`}
        >
          {/* Il tuo contenuto */}

          <span className="flex items-center ">{icon}</span>
        </div>
      </div>
    </>
  );
};

export default LogisticFilter;
