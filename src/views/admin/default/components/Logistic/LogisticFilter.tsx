import Card from "components/card";

type LogisticFilterProps = {
  icon: JSX.Element
  clicked: boolean
  onClick: () => void
}


const LogisticFilter = ({ icon, clicked, onClick }: LogisticFilterProps) => {
  return (
      <div className="flex h-[60px] w-auto items-center">
        <div
          className={`rounded-full p-3 text-brand-500 ${
            clicked
              ? "bg-[#442ff2] text-white"
              : "bg-lightPrimary hover:bg-[#442ff2] hover:text-white"
          }`}
          onClick={onClick}
        >
        <span className="flex items-center">{icon}</span>
        </div>
      </div>
  );
};

export default LogisticFilter;
