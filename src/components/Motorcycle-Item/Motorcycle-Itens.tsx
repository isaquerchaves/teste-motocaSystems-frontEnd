import { Eye, LoaderCircle, Trash } from "lucide-react";
import { Motorcycle } from "../../services/services";
import "./Motorcycle-Itens.css";
import { formatCurrency } from "../../helpers/price";
import { useState } from "react";

interface MotorcycleItemProps {
  moto: Motorcycle;
  onDelete: (id: number) => void;
}

const MotorcycleItem = ({ moto, onDelete }: MotorcycleItemProps) => {
  const [loading, setLoading] = useState(false);

  const handleDelete = (id: number) => {
    setLoading(true);

    setTimeout(() => {
      onDelete(id);
      setLoading(false);
    }, 1000);
  };

  function getColorClass(status: string) {
    switch (status) {
      case "Em estoque":
        return "moto-status-gren";
      case "Sem estoque":
        return "moto-status-red";
      case "Em trânsito":
        return "moto-status-brown";
      default:
        return "";
    }
  }

  return (
    <div className="container">
      <div className="moto">
        <p className="moto-code">#{moto.code}</p>
        <div className="moto-info-container">
          <div className="moto-info">
            <p className="moto-model">{moto.model}</p>
            <p className={`${getColorClass(moto.status)}`}>{moto.status}</p>
          </div>
          <p>Valor: {formatCurrency(Number(moto.value))}</p>
          <p>Cor: {moto.color.toUpperCase()}</p>
        </div>
      </div>

      <div className="buttons">
        <button
          onClick={() => handleDelete(Number(moto.id))}
          disabled={loading}
        >
          {loading ? (
            <LoaderCircle
              style={{ backgroundColor: "#312D4B" }}
              color="#FF4C51"
              size={20}
            />
          ) : (
            <Trash
              style={{ backgroundColor: "#312D4B" }}
              color="#FF4C51"
              size={20}
            />
          )}
        </button>
        <Eye style={{ backgroundColor: "#312D4B" }} size={20} />
      </div>
    </div>
  );
};

export default MotorcycleItem;
