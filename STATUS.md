Plano de Ação Detalhado (Tarefas):
Marque [x] para as tarefas concluídas.

[ok] 1. Configuração Inicial do Projeto Angular:
* [X ] Crie o projeto Angular: ng new desafio-final-senai-ford-enter --routing --strict --no-standalone
* [X ] Entre na pasta do projeto: cd desafio-final-senai-ford-enter
* [X ] Instale Bootstrap (se for a escolha principal de UI): npm install bootstrap@5.3.7 (lembre-se de configurar no angular.json ou importar no styles.css global).
* [ X] Decisão UI: Escolha entre Bootstrap ou Angular Material. Recomendação: Bootstrap para agilidade e integração com seu CSS existente.
* [ X] Crie o repositório no GitHub e faça o primeiro commit.

[ ] 2. Implementação da Landing Page (LandingPageComponent):
* [x ] Crie o componente: ng generate component landing-page
* [ ] Código TS (landing-page.component.ts): Implemente a lógica do carrossel (adapte sua classe Carousel e carouselData para o TypeScript do componente). Use URLs de placeholder para as imagens por enquanto.
* [ ] Código HTML (landing-page.component.html): Estruture o carrossel/vídeo e adicione o botão "Entrar no Sistema".
* [ ] Código CSS (landing-page.component.css): Estilize a Landing Page, garantindo responsividade e os requisitos de "divs 90% da largura do main".
* [ ] Ajuste do Roteamento (app-routing.module.ts): Defina a Landing Page como a rota padrão (path: '').
* [ ] Atualize app.module.ts: Declare LandingPageComponent em declarations.

[ ] 3. Preparação da Tela de Login (LoginComponent):
* [ ] Adicione um botão "Cadastre-se" no template (login.html).
* [ ] Adicione um método no login.ts para lidar com o clique do botão "Cadastre-se".

[ ] 4. Criação do Modal de Cadastro de Usuário (RegisterModalComponent):
* [ ] Crie o componente: ng generate component register-modal (ou ng generate component register-modal --standalone).
* [ ] Código HTML/CSS/TS: Crie um formulário simples de cadastro (nome, email, telefone, CPF). Adapte a lógica de validação do seu desafio LGPD para o TS do componente.
* [ ] Implemente a lógica para que este componente seja exibido como um modal quando o botão "Cadastre-se" for clicado na tela de login (pode usar um modal simples via CSS/JS ou uma biblioteca de UI).

[ ] 5. Refinamento do AuthService:
* [ ] Implemente a lógica para simular a autenticação de usuários ADM (admin/123456) e usuários Comuns (quaisquer outras credenciais válidas).
* [ ] O método autenticar deve retornar (ou armazenar em um serviço/variável global) o tipo de usuário logado.
* [ ] Adicione um método getUserRole() no AuthService que retorna o papel do usuário logado.

[ ] 6. Proteção de Rota para Dashboard (AuthGuard):
* [ ] Crie um Guard no Angular: ng generate guard auth (selecione CanActivate).
* [ ] No auth.guard.ts, implemente a lógica canActivate para verificar se o usuário está logado E se tem o papel ADM (usando o AuthService).
* [ ] Se não for ADM, redirecione para a tela de login (/login) ou para uma página de "acesso negado".
* [ ] Associe este AuthGuard à rota do Dashboard no app-routing.module.ts.

[ ] 7. Correção e Aprimoramento do Dashboard (DashboardComponent):
* [ ] Diagnóstico: Analise o problema existente no dashboard. Verifique o console do navegador para erros, a aba "Network" para requisições à API (http://localhost:3001).
* [ ] Comunicação com API: Garanta que o DashboardService esteja fazendo as requisições corretas para /vehicles e /vehicleData. Verifique se o backend está rodando e respondendo.
* [ ] Exibição de Dados: Certifique-se de que os dados recebidos da API estão sendo corretamente vinculados aos elementos HTML (*ngFor, {{}}) no dashboard.html.
* [ ] Design: Aplique as diretrizes de "cards alinhados" e "divs 90% do main" no dashboard.css.

[ ] 8. Página Principal Pós-Login (HomeComponent - Usuário Comum):
* [ ] Modifique o HomeComponent existente para ser a Home do Usuário Comum.
* [ ] Integre um novo Carrossel de Imagens de Veículos (diferente da Landing Page, talvez com foco em promoções ou modelos mais recentes).
* [ ] Adicione uma mensagem de boas-vindas personalizada (Bem-vindo, [Nome do Usuário]!).

[ ] 9. Página de Vendas de Veículos (VehicleSalesComponent):
* [ ] Crie o componente: ng generate component vehicle-sales.
* [ ] Conteúdo: Exiba uma galeria de veículos (cards com imagem, nome, preço, botão "Saiba Mais" ou "Agendar Test Drive"). Adapte a estrutura Veiculo do Angular para exibir esses dados.
* [ ] Design: Reutilize os conceitos de layout de cards e responsividade do desafio de HTML/CSS.

[ ] 10. Tabela Comparativa de Veículos (VehicleCompareTableComponent):
* [ ] Crie o componente: ng generate component vehicle-compare-table.
* [ ] Lógica: Adapte a lógica da classe Car e das funções SetCarToCompare, ShowCompare, UpdateCompareTable do seu desafio JavaScript para o TypeScript deste componente.
* [ ] Exibição: Integre a exibição da tabela de comparação no HTML do componente, garantindo que os dados sejam preenchidos dinamicamente.

[ ] 11. Fale Conosco / Agendamento (ContactServiceComponent):
* [ ] Crie o componente: ng generate component contact-service.
* [ ] Formulário: Adapte o formulário de contato do desafio LGPD (campos, checkboxes, política de privacidade) para o HTML do componente.
* [ ] Lógica: Implemente a lógica de validação e habilitação do botão usando Angular Forms (FormsModule ou ReactiveFormsModule).
* [ ] Simule o envio do formulário (pode ser apenas um console.log dos dados).

[ ] 12. Área do Usuário (UserAreaComponent):
* [ ] Crie um componente simples: ng generate component user-area.
* [ ] Conteúdo: Exiba informações básicas do perfil do usuário logado (nome, email). Pode simular um histórico de agendamentos.

[ ] 13. Menu Interativo (MenuCabecalhoComponent):
* [ ] Atualize o MenuCabecalhoComponent para incluir todas as novas opções de navegação (Dashboard, Página de Vendas, Comparativa, Fale Conosco, Área do Usuário, Login/Sair).
* [ ] Implemente a lógica de exibição condicional do "Dashboard" no menu (apenas para ADM, usando *ngIf e o AuthService).
* [ ] Ajuste os routerLink para as novas rotas.

[ ] 14. Animações e Transições:
* [ ] Aplique transições suaves no carrossel, efeitos de hover nos cards de veículos, foco em inputs de formulários e cliques em botões.
* [ ] Considere usar CSS puro ou bibliotecas como @angular/animations para efeitos mais complexos.

[ ] 15. Microinterações:
* [ ] Adicione feedback visual para formulários (ex: "Agendamento enviado!" - usando um modal simples ou uma "toast notification" com uma biblioteca como ngx-toastr, evitando alert()).
* [ ] Implemente estados de carregamento (spinners) para operações que simulam chamadas de API (ex: no Dashboard, ao buscar dados).

[ ] 16. Acessibilidade (Revisão Final):
* [ ] Revise todos os formulários: verifique se label está associado corretamente aos inputs (for e id).
* [ ] Garanta que todas as tags <img> tenham o atributo alt com uma descrição significativa.
* [ ] Verifique o contraste de cores em todo o site para garantir legibilidade.

[ ] 17. "Call to Actions" Estratégicos:
* [ ] Adicione botões ou links claros para as principais ações em cada página, guiando o usuário.

[ ] 18. Responsividade Final:
* [ ] Realize testes em diferentes tamanhos de tela (ferramentas de desenvolvedor do navegador, dispositivos reais se possível) para garantir que o layout seja fluido e usável em mobile, tablet e desktop.

[ ] 19. Preparação para Publicação:
* [ ] Gere o build de produção do Angular: ng build --configuration production.
* [ ] Prepare o projeto para ser publicado no GitHub Pages (ou outra plataforma gratuita).
* [ ] Crie um arquivo README.md detalhado no repositório GitHub, explicando o projeto, as tecnologias usadas, como rodar, e as decisões de design/arquitetura.
