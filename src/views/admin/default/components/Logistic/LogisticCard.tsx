
import { useNavigate } from "react-router-dom";
import Card from "components/card";

interface LogisticCardProps {
  message: string;
}

const LogisticCard: React.FC<LogisticCardProps> = ({ message }) => {

  let navigate = useNavigate(); 

  function showDetails() {
    let path = `/admin/hub-details/` + message.toLowerCase(); 
    navigate(path);
  }

  return (
    <Card extra="rounded-[20px] p-3">
      <div className="flex flex-row justify-between px-3 pt-2">
        <div>
          <h4 className="text-lg font-bold text-navy-700 dark:text-white">
            {message}
          </h4>
        </div>

        <div className="mb-6 flex items-center justify-center">X</div>
      </div>

      <div className="mb-auto flex h-[220px] w-full items-center justify-center">
        Contenuto
      </div>

      <div className="flex flex-row !justify-between hover:bg-[#442ff2] hover:text-white rounded-2xl px-6 py-3 shadow-2xl shadow-shadow-500 dark:!bg-navy-700 dark:shadow-none">
        <button className="flex flex-col items-center justify-center" onClick={showDetails}>
          Apri dettagli centro
        </button>
      </div>

    </Card>
  );
};

export default LogisticCard;
