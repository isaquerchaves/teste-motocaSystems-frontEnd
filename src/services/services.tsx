export interface Motorcycle {
  id: Number;
  code: string;
  model: string;
  color: string;
  value: Number;
  status: string;
}

export const initialMotorcycle: Motorcycle[] = [
  { id: Math.random()*1000000000, code: '0001', model: 'HONDA Pop 110', color: 'Branca', value: 18000, status: 'Em estoque' },
  { id: Math.random()*1000000000, code: '0002', model: 'HONDA 500x', color: 'Vermelha', value: 26000, status: 'Sem estoque' },
  { id: Math.random()*1000000000, code: '0003', model: 'HONDA CB 300F TWISTER', color: 'Preta', value: 26000, status: 'Em trânsito' }
]