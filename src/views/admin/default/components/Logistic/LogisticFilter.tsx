import Card from "components/card";

const LogisticFilter = (props: { icon: JSX.Element; title: string }) => {
  const { icon, title } = props;
  return (
    <>
      <div className="ml-[18px] flex h-[60px] w-auto items-center">
        <div className="rounded-full bg-lightPrimary p-3 text-brand-500 hover:bg-[#442ff2] hover:text-white dark:bg-navy-700  dark:text-white">
          <span className="flex items-center ">{icon}</span>
        </div>
      </div>
    </>
  );
};

export default LogisticFilter;
