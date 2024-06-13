export interface Motorcycle {
  id: Number;
  code: Number;
  model: string;
  color: string;
  value: Number;
  status: string;
}

export const initialMotorcycle: Motorcycle[] = [
  { id: Math.random()*1000000000, code: 1, model: 'HONDA Pop 110', color: 'Branca', value: 18000, status: 'Em estoque' },
  { id: Math.random()*1000000000, code: 2, model: 'HONDA 500x', color: 'Perta', value: 26000, status: 'Em trânsito' },
  { id: Math.random()*1000000000, code: 2, model: 'HONDA CB 300F TWISTER', color: 'Perta', value: 26000, status: 'Em trânsito' }
]