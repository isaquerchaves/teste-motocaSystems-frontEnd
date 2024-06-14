# Desafio Front-end Honda Motoca

Este é um pequeno projeto desenvolvido para testar habilidades para a posição de Front-End.

## 🚀 Funcionalidades:

- Criar nova moto;
- Carregar todas as motos;
- Fazer buscas de motos por código, nome ou cor;
- Deletar moto;
- Atualizar dados da moto;
- Responsivo;

## 🛠️ Tecnologias usadas:

- React
- React-router-dom
- Lucide React (Lib de ícones)
- LocalStorage

## 💻 Instalação
1. Faça o clone do projeto para a máquina local:

```bash
git clone https://github.com/isaquerchaves/teste-motocaSystems-frontEnd
```

2. Vá para o diretório raiz do projeto e instale as dependências do projeto com npm:

```bash
cd teste-motocaSystems-frontEnd
```
```bash
npm install
```

3. Para rodar o projeto em desenvolvimento, use o comando:

```bash
npm run dev
```

## ℹ️ Um pouco sobre o projeto:

- Usei o `localStorage` para armazenar os dados.
- No diretório `src/services/services.tsx` temos os dados iniciais.
- No diretório `src/helpers/localStorage.ts` temos todas as funções de CRUD.
- No diretório `src/helpers/price.ts` temos a função para converter o valor para estilo monetário BR (R$)

