import React, { useState, useEffect } from 'react';
import { Loader, Plus, Search } from "lucide-react";
import Header from "../../components/Header/Header";
import MotorcycleItem from "../../components/Motorcycle-Item/Motorcycle-Itens";
import { Motorcycle, initialMotorcycle } from "../../services/services";
import "./Home.css";
import { loadMotosFromLocalStorage, deleteMotoFromLocalStorage } from "../../helpers/localStorage";

const Home = () => {
  const [moto, setMoto] = useState<Motorcycle[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const storedMotos = loadMotosFromLocalStorage();
    if (storedMotos) {
      setMoto(storedMotos);
      setLoading(false);
    } else {
      // Definindo no local storage os dados do service, apenas na primeira execução
      localStorage.setItem('motos', JSON.stringify(initialMotorcycle));
      setMoto(initialMotorcycle);
      setLoading(false);
    }
  }, []);

  const handleDeleteMoto = (id: number) => {
    deleteMotoFromLocalStorage(id);
    setMoto(prevMotos => prevMotos.filter(m => m.id !== id));
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
          <a href="/criar" className="new-register">
            <Plus className="icon" size={20} />
            <p className="new-record">NOVO REGISTRO</p>
          </a>
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
