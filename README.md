# BIX Finances Dashboard

Um dashboard interativo para visualização e análise de transações financeiras, construído com Next.js e Chakra UI.

## Visão Geral

O BIX Finances Dashboard é uma aplicação web moderna para monitoramento de transações financeiras, proporcionando visualizações intuitivas e ferramentas de filtragem avançadas. Ele permite acompanhar depósitos e saques por diferentes setores da indústria, oferecendo insights valiosos sobre o fluxo financeiro.

Destaque para a performance otimizada com o uso de TanStack Virtual, que garante uma experiência fluida mesmo com grandes volumes de dados.

## Funcionalidades Principais

- **Visualização de Dados**: Gráficos de barras empilhadas e gráficos de linha para análise de transações
- **Filtragem Avançada**: Filtros por tipo de transação, indústria, estado e período de data
- **Lista de Transações Virtualizada**: Desempenho otimizado mesmo com grandes conjuntos de dados
- **Gráfico de Barras Empilhadas**: Visualização de depósitos e saques por setor
- **Gráfico de Linha**: Análise de depósitos e saques ao longo do tempo
- **Performance**: Utilização de TanStack Virtual para renderização eficiente de listas longas permitindo filtragens ultra-rápidas em tempo real no cliente
- **Login**: Tela de login com autenticação básica (a ser implementada com JWT), utiliza o usuário padrão `convidado@finances.com` e senha `bix9001`
- **Logout**: Funcionalidade de logout para encerrar a sessão do usuário

## Tecnologias

- **Frontend**: Next.js, React, TypeScript
- **Estilização**: Chakra UI (utilizando Emotion para CSS-in-JS)
- **Gráficos**: Nivo Charts
- **Virtualization**: TanStack Virtual
- **Gerenciamento de Estado**: React Context API, nuqs
- **Navegação**: Next.js App Router

## Instalação e Execução

### Requisitos

- Node.js 18 ou superior
- npm, yarn ou pnpm

### Instruções

1. Clone o repositório:
   ```bash
   git clone https://github.com/seu-usuario/bix-finances-dashboard.git
   cd bix-finances-dashboard
   ```

2. Instale as dependências:
   ```bash
   npm install
   # ou
   yarn
   # ou
   pnpm install
   ```

3. Execute o projeto em modo de desenvolvimento:
   ```bash
   npm run dev
   # ou
   yarn dev
   # ou
   pnpm dev
   ```

4. Acesse a aplicação em `http://localhost:3000`

## Considerações de Implementação

- Por que não utilizei styled-components?
  1. O Chakra UI já possui uma solução de CSS-in-JS embutida, utilizando Emotion, que é altamente otimizada e integrada ao sistema de design. Isso evita a necessidade de configurar e manter outra biblioteca de estilização, simplificando o processo de desenvolvimento e garantindo consistência no estilo da aplicação/
  2. Styled-components está sendo deprecado em breve, e já não é mais recomendado para novos projetos, por estar em modo de manutenção.

- Por que não utilizei Redux/Zustand?
  1. O gerenciamento de estado com React Context API e nuqs é suficiente para as necessidades do projeto, mantendo a simplicidade e evitando a complexidade adicional que bibliotecas como Redux ou Zustand podem trazer.
  2. O uso de nuqs permite uma abordagem mais leve e direta para o gerenciamento de estado, especialmente em aplicações menores ou médias, onde a sobrecarga de Redux pode ser desnecessária.

## Roadmap

- Finalizar a implementação de responsividade para dispositivos móveis
- Melhorar a experiência de usuário
- Melhorar a acessibilidade
- Implementação de autenticação JWT e/ou Single Sign-On (SSO)
- Implementar uma API RESTful para persistência de dados com banco de dados
- Exportação de relatórios em PDF e Excel
- Adição de mais tipos de visualização (gráficos de pizza, mapa de calor)
- Testes automatizados (unitários com vitest, integração com RTL, e2e com playwright)

## Licença

Este projeto não possui uma licença específica, mas é de uso livre para fins educacionais e de desenvolvimento. Sinta-se à vontade para forkear o projeto.

## Contato

Para questões ou sugestões, entre em contato com a equipe de desenvolvimento em [email@exemplo.com](mailto:thiago3510@gmail.com).

---

Desenvolvido com ❤️ por Thiago Barbosa @ 2025


BIX Finances Dashboard
An interactive dashboard for visualization and analysis of financial transactions, built with Next.js and Chakra UI.

Overview
BIX Finances Dashboard is a modern web application for monitoring financial transactions, providing intuitive visualizations and advanced filtering tools. It allows you to track deposits and withdrawals across different industry sectors, offering valuable insights into financial flow.

The application features optimized performance using TanStack Virtual, ensuring a fluid experience even with large volumes of data.

Key Features
Data Visualization: Stacked bar charts and line charts for transaction analysis
Advanced Filtering: Filters by transaction type, industry, state, and date period
Virtualized Transaction List: Optimized performance even with large datasets
Stacked Bar Chart: Visualization of deposits and withdrawals by sector
Line Chart: Analysis of deposits and withdrawals over time
Performance: Use of TanStack Virtual for efficient rendering of long lists, allowing ultra-fast real-time filtering on the client side
Login: Login screen with basic authentication (JWT implementation planned), uses the default user convidado@finances.com and password bix9001
Logout: Logout functionality to end the user's session
Technologies
Frontend: Next.js, React, TypeScript
Styling: Chakra UI (using Emotion for CSS-in-JS)
Charts: Nivo Charts
Virtualization: TanStack Virtual
State Management: React Context API, nuqs
Navigation: Next.js App Router
Installation and Execution
Requirements
Node.js 18 or higher
npm, yarn or pnpm
Instructions
Clone the repository:

Install the dependencies:

Run the project in development mode:

Access the application at http://localhost:3000

Project Structure
Implementation Considerations
Why I didn't use styled-components:

Chakra UI already has a built-in CSS-in-JS solution using Emotion, which is highly optimized and integrated with the design system. This avoids the need to configure and maintain another styling library, simplifying the development process and ensuring consistency in the application style.
Styled-components is being deprecated soon and is no longer recommended for new projects, as it's in maintenance mode.
Why I didn't use Redux/Zustand:

State management with React Context API and nuqs is sufficient for the project's needs, maintaining simplicity and avoiding the additional complexity that libraries like Redux or Zustand can bring.
The use of nuqs allows for a lighter and more direct approach to state management, especially in smaller or medium-sized applications, where the overhead of Redux may be unnecessary.
Roadmap
Finalize the implementation of responsiveness for mobile devices
Improve user experience
Improve accessibility
Implementation of JWT authentication and/or Single Sign-On (SSO)
Implement a RESTful API for data persistence with a database
Export reports in PDF and Excel formats
Add more visualization types (pie charts, heat maps)
Automated testing (unit tests with vitest, integration with RTL, e2e with playwright)
License
This project does not have a specific license, but it is free to use for educational and development purposes. Feel free to fork the project.

Contact
For questions or suggestions, contact the development team at email@example.com.
