import { Motorcycle } from "../services/services";

export const loadMotorcycle = (): Motorcycle[] | null => {
  const storedMotos = localStorage.getItem('motos');
  return storedMotos ? JSON.parse(storedMotos) : null;
};

export const deleteMotorcycle = (id: number): void => {
  const storedMotos = loadMotorcycle();
  if (storedMotos) {
    const updatedMotos = storedMotos.filter(m => m.id !== id);
    localStorage.setItem('motos', JSON.stringify(updatedMotos));
  }
};

export const saveMotorcycle = (newMotorcycle: Motorcycle): void => {
  const storedMotos = localStorage.getItem("motos");
  const motos: Motorcycle[] = storedMotos ? JSON.parse(storedMotos) : [];
  const id = 1 + ((motos[motos.length - 1]?.id || 0) as number);
  const motoToAdd: Motorcycle = { ...newMotorcycle, id };
  localStorage.setItem("motos", JSON.stringify([...motos, motoToAdd]));
};

export const isCodeAlreadyExists = (code: string): boolean => {
  const storedMotos = localStorage.getItem("motos");
  if (storedMotos) {
    const motos: Motorcycle[] = JSON.parse(storedMotos);
    return motos.some((m) => m.code === code);
  }
  return false;
};

export const updateMotorcycle = (updatedMoto: Motorcycle): void => {
  const storedMotos = loadMotorcycle();
  if (storedMotos) {
    const updatedMotos = storedMotos.map(m => m.id === updatedMoto.id ? updatedMoto : m);
    localStorage.setItem('motos', JSON.stringify(updatedMotos));
  }
};