import React, { useState } from "react";
import { Plus } from "lucide-react";
import Header from "../../components/Header/Header";
import "./Create.css";
import { Motorcycle } from "../../services/services";
import { saveMotorcycle, isCodeAlreadyExists } from "../../helpers/localStorage";

const Create: React.FC = () => {
  const [newMotorcycle, setNewMotorcycle] = useState<Motorcycle>({
    id: 0,
    code: "",
    model: "",
    color: "",
    value: 0,
    status: "",
  });

  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setNewMotorcycle({ ...newMotorcycle, [name]: name === "value" ? Number(value) : value });
  };

  const handleRegisterMoto = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isCodeAlreadyExists(newMotorcycle.code)) {
      alert("Este código já está registrado.");
      return;
    }

    saveMotorcycle(newMotorcycle);

    setNewMotorcycle({
      id: 0,
      code: "",
      model: "",
      color: "",
      value: 0,
      status: "",
    });
  };

  return (
    <section className="create-container">
      <Header />
      <p className="search-title" style={{ padding: "0 1rem" }}>
        Registro de Motos
      </p>
      <div className="divider-container">
        <span className="divider"></span>
      </div>
      <h4 className="title">
        Preencha as informações abaixo para registrar uma Moto 🏍️
      </h4>
      <form onSubmit={handleRegisterMoto}>
        <label>
          <div className="label">
            <span>Código</span>
            <div className="input-code">
              <p># </p>
              <input
                type="text"
                name="code"
                value={newMotorcycle.code}
                onChange={handleInputChange}
                required
              />
            </div>
          </div>
        </label>
        <label>
          <div className="label">
            <span>Modelo da Moto</span>
            <input
              type="text"
              name="model"
              value={newMotorcycle.model}
              onChange={handleInputChange}
              required
            />
          </div>
        </label>
        <label>
          <div className="label">
            <span>Cor</span>
            <input
              type="text"
              name="color"
              value={newMotorcycle.color}
              onChange={handleInputChange}
              required
            />
          </div>
        </label>
        <label>
          <div className="label">
            <span>Valor</span>
            <input
              type="number"
              name="value"
              value={newMotorcycle.value.toString()}
              onChange={handleInputChange}
              required
            />
          </div>
        </label>
        <label>
          <div className="select-label">
            <span>Status</span>
            <select
              name="status"
              value={newMotorcycle.status}
              onChange={handleInputChange}
              required
            >
              <option value="" disabled>
                Selecione um status
              </option>
              <option value="Em estoque">Em estoque</option>
              <option value="Sem estoque">Sem estoque</option>
              <option value="Em trânsito">Em trânsito</option>
            </select>
          </div>
        </label>
        <button className="register" type="submit">
          <Plus className="icon" size={20} />
          <p className="new-record">REGISTRAR</p>
        </button>
      </form>
    </section>
  );
};

export default Create;
