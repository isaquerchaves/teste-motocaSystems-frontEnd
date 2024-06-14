import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from 'react-router-dom';
import Header from "../../components/Header/Header";
import "./Edit.css";
import { Motorcycle } from "../../services/services";
import { loadMotorcycle, updateMotorcycle } from "../../helpers/localStorage";
import Input from "../../components/Input/Input";
import { CircleArrowUp } from "lucide-react";

const Edit: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const [motorcycle, setMotorcycle] = useState<Motorcycle | null>(null);

  useEffect(() => {
    const motos = loadMotorcycle();
    const moto = motos?.find(m => m.id === Number(id));
    if (moto) {
      setMotorcycle(moto);
    }
  }, [id]);

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    if (motorcycle) {
      setMotorcycle({
        ...motorcycle,
        [name]: name === "value" ? Number(value) : value,
      });
    }
  };

  const handleUpdateMoto = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (motorcycle) {
      updateMotorcycle(motorcycle);
      navigate('/');
    }
  };

  if (!motorcycle) {
    return <div>Loading...</div>;
  }

  return (
    <section className="edit-container">
      <Header />
      <p className="search-title" style={{ padding: "0 1rem" }}>
        Editar
      </p>
      <div className="divider-container">
        <span className="divider"></span>
      </div>
      <h4 className="title">
      Edite as informações que preferir! 📝
      </h4>
      <form onSubmit={handleUpdateMoto}>
        <Input
          label="Código-edit"
          type="text"
          name="code"
          value={motorcycle.code}
          onChange={handleInputChange}
          disabled
        />
        <Input
          label="Modelo da Moto"
          type="text"
          name="model"
          value={motorcycle.model}
          onChange={handleInputChange}
        />
        <Input
          label="Cor"
          type="text"
          name="color"
          value={motorcycle.color}
          onChange={handleInputChange}
        />
        <Input
          label="Valor"
          type="number"
          name="value"
          value={motorcycle.value.toString()}
          onChange={handleInputChange}
        />
        <Input
          label="Status"
          type=""
          name="status"
          value={motorcycle.status}
          onChange={handleInputChange}
        />
        <button className="register" type="submit">
          <CircleArrowUp className="icon" size={20} />
          <p className="new-record">ATUALIZAR</p>
        </button>
      </form>
    </section>
  );
};

export default Edit;