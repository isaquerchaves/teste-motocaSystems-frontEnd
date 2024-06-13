import { Loader, Plus, Search } from "lucide-react";
import Header from "../../components/Header/Header";
import { Motorcycle, initialMotorcycle } from "../../services/services";
import "./Home.css";
import MotorcycleItem from "../../components/Motorcycle-Item/Motorcycle-Itens";
import { useState, useEffect } from "react";

const Home = () => {
  const [moto, setMoto] = useState<Motorcycle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Carregando
    const timer = setTimeout(() => {
      setMoto(initialMotorcycle);
      setLoading(false);
    }, 1000); // 2 segundos
    return () => clearTimeout(timer);
  }, []);

  const handleDeleteMoto = (id: number) => {
    const index = moto.findIndex((m) => m.id === id);
    if (index !== -1) {
      const newMoto = [...moto];
      newMoto.splice(index, 1);
      setMoto(newMoto);
    }
  };

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
            <input type="text" placeholder="Buscar por código, nome e cor" />
          </div>
          <div className="new-register">
            <Plus className="icon" size={20} />
            <span>NOVO REGISTRO</span>
          </div>
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
          {moto.map((motos, index) => (
            <MotorcycleItem
              key={index}
              moto={motos}
              onDelete={handleDeleteMoto}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default Home;
