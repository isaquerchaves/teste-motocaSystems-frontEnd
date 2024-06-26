import React, { useState } from "react";
import Header from "../../components/Header/Header";
import "./Create.css";
import { Motorcycle } from "../../services/services";
import {
  saveMotorcycle,
  isCodeAlreadyExists,
} from "../../helpers/localStorage";
import Input from "../../components/Input/Input";
import Button from "../../components/Button/Button";

const Create: React.FC = () => {
  const [newMotorcycle, setNewMotorcycle] = useState<Motorcycle>({
    id: 0,
    code: "",
    model: "",
    color: "",
    value: 0,
    status: "",
  });

  // Lidando com as mudanças nos campos do formulário
  const handleInputChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setNewMotorcycle({
      ...newMotorcycle,
      [name]: name === "value" ? Number(value) : value,
    });
  };

  // Enviar do formulário de registro
  const handleRegisterMoto = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (isCodeAlreadyExists(newMotorcycle.code)) {
      alert("Este código já está registrado.");
      return;
    }

    saveMotorcycle(newMotorcycle);

    alert("Registro criado com sucesso!");

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
        <Input
          label="Código"
          type="text"
          name="code"
          value={newMotorcycle.code}
          onChange={handleInputChange}
        />
        <Input
          label="Modelo da Moto"
          type="text"
          name="model"
          value={newMotorcycle.model}
          onChange={handleInputChange}
        />
        <Input
          label="Cor"
          type="text"
          name="color"
          value={newMotorcycle.color}
          onChange={handleInputChange}
        />
        <Input
          label="Valor"
          type="number"
          name="value"
          value={newMotorcycle.value.toString()}
          onChange={handleInputChange}
        />
        <Input
          label="Status"
          type=""
          name="status"
          value={newMotorcycle.status}
          onChange={handleInputChange}
        />
        <Button type="submit" text="REGISTRAR" icon="plus" />
      </form>
    </section>
  );
};

export default Create;