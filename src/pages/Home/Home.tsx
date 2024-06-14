import { Loader, Search } from "lucide-react";
import Header from "../../components/Header/Header";
import { Motorcycle, initialMotorcycle } from "../../services/services";
import "./Home.css";
import MotorcycleItem from "../../components/Motorcycle-Itens/Motorcycle-Itens";
import { useState, useEffect } from "react";
import { loadMotorcycle, deleteMotorcycle } from "../../helpers/localStorage";
import Button from "../../components/Button/Button";

const Home = () => {
  const [motos, setMotos] = useState<Motorcycle[]>([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    const storedMotos = loadMotorcycle();
    if (storedMotos) {
      setMotos(storedMotos);
    } else {
      localStorage.setItem("motos", JSON.stringify(initialMotorcycle));
      setMotos(initialMotorcycle);
    }
    setLoading(false);
  }, []);

  const handleDeleteMoto = (id: number) => {
    deleteMotorcycle(id);
    setMotos((prevMotos) => prevMotos.filter((m) => m.id !== id));
    alert("Registro deletado com sucesso!");
  };

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  const filteredMotos = motos.filter((moto) =>
    `${moto.code} ${moto.model} ${moto.color}`
      .toLowerCase()
      .includes(searchTerm.toLowerCase())
  );

  return (
    <section>
      <Header />
      <div className="search-container">
        <p className="search-title">Tabela de Motos</p>
        <div className="search">
          <div className="search-input">
            <button>
              <Search size={20} />
            </button>
            <input
              type="text"
              placeholder="Buscar por código, nome e cor"
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </div>
          <Button type="link" text="NOVO REGISTRO" icon="plus" />
        </div>
      </div>

      <div className="divider-container">
        <span className="divider"></span>
      </div>

      {loading ? (
        <div className="loader-container">
          <Loader />
        </div>
      ) : (
        <div className="moto-list">
          {filteredMotos && filteredMotos.length > 0 ? (
            filteredMotos.map((moto) => (
              <MotorcycleItem
                moto={moto}
                onDelete={handleDeleteMoto}
              />
            ))
          ) : (
            <p>Nenhuma moto encontrada</p>
          )}
        </div>
      )}
    </section>
  );
};

export default Home;
