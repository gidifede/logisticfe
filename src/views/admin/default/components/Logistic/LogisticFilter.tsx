import Card from "components/card";

const LogisticFilter = (props: { icon: JSX.Element; title: string }) => {
  const { icon, title } = props;
  return (
    <>
      <div className="ml-[18px] flex h-[60px] w-auto items-center">
        <div className="rounded-full bg-lightPrimary p-3 dark:bg-navy-700">
          <span className="flex items-center text-brand-500 dark:text-white">
            {icon}
          </span>
        </div>
      </div>
    </>
  );
};

export default LogisticFilter;
