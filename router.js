// Estado global simples para controlar a navegação e o usuário logado
const estado = {
  rotaAtual: 'login',
  usuarioLogado: 'João da Silva'
};

// Objeto contendo funções geradoras para todas as telas do sistema
const rotas = {
  // 1. Tela de Login
  login: () => `
    <div class="main">
      <div class="tela">
        <section class="img-lateral"></section>
        <section class="form-login">
          <h1 class="logo">Hotel Pet</h1>
          <form id="form-login" onsubmit="tratarLogin(event)">
            <div class="campo-input">
              <input type="text" required placeholder="Login" />
            </div>

            <div class="campo-input campo-senha">
              <input type="password" id="senha-input" required placeholder="Senha" />
              <span class="icone-olho">&#128065;</span>
            </div>

            <div class="opcoes">
              <div class="conectado-box">
                <input type="checkbox" name="conectado" id="conectado" />
                <label for="conectado">mantenha-me conectado</label>
              </div>
              <a href="#" onclick="alert('Funcionalidadede recuperação em breve')">Esqueci a senha</a>
            </div>

            <button type="submit" class="btn-principal">Enviar</button>
          </form>

          <div class="divisor">
            <span>ou</span>
          </div>

          <section class="criar-conta">
            <div class="botoes-redes">
              <img src="img/facebook.svg" alt="Facebook" />
              <img src="img/twitter.svg" alt="Twitter" />
              <img src="img/google.svg" alt="Google" />
            </div>
            <a class="link-secundario" href="#" data-rota="cadastro">Criar uma conta</a>
          </section>
        </section>
      </div>
    </div>
  `,

  // 2. Tela de Cadastro
  cadastro: () => `
    <div class="main">
      <div class="tela">
        <section class="img-lateral"></section>
        <section class="form-login">
          <h1>Hotel Pet</h1>
          <form onsubmit="tratarCadastro(event)">
            <div class="campo-input">
              <input type="text" name="user" id="user" required placeholder="Login" />
            </div>

            <div class="campo-input campo-senha">
              <input type="password" name="passw" id="passw" required placeholder="Senha" />
              <span class="icone-olho">&#128065;</span>
            </div>
            <button type="submit" class="btn-principal">Criar conta</button>
          </form>

          <div class="rodape-form">
            <a href="#" class="link-secundario" data-rota="login">Já tem conta? Login</a>
          </div>
        </section>
      </div>
    </div>
  `,

  // 3. Layout Base do Painel Interno (Shell Logado)
  painel: (conteudoInterno, rotaAtiva) => `
    <div class="main">
      <div class="tela logado">
        <section class="navbar">
          <h1 class="logo">Hotel Pet</h1>
          <nav class="nav-menu">
            <a href="#" class="opcao ${rotaAtiva === 'pets' ? 'ativo' : ''}" data-rota="pets">
              <img src="img/pet.svg" alt="Icone Pet" />
              <span>Pets</span>
            </a>
            <a href="#" class="opcao ${rotaAtiva === 'usuarios' ? 'ativo' : ''}" data-rota="usuarios">
              <img src="img/user.svg" alt="Icone Usuario" />
              <span>Usuários</span>
            </a>
            <a href="#" class="opcao ${rotaAtiva === 'configuracoes' ? 'ativo' : ''}" data-rota="configuracoes">
              <img src="img/settings.svg" alt="Icone Configurações" />
              <span>Configurações</span>
            </a>
            <a href="#" class="opcao ${rotaAtiva === 'reservas' ? 'ativo' : ''}" data-rota="reservas">
              <img src="img/book-open.svg" alt="Icone Reservas" />
              <span>Reservas</span>
            </a>
          </nav>
        </section>

        <section class="principal">
          <div class="user-header">
            <div class="user-info">
              <img src="img/user-circle.svg" alt="Foto do Perfil" />
              <span>${estado.usuarioLogado}</span>
            </div>
          </div>
          <div id="app-container" class="conteudo-pagina">
            ${conteudoInterno}
          </div>
        </section>
      </div>
    </div>
  `,

  // Subtelas Internas (com todos os formulários e filtros completos)
  pets: () => `
    <div class="breadcrumb">Home / Pets</div>
    <div class="wrapper-principal">
      <div class="header-pets">
        <h1>Pets</h1>
        <a href="#" class="btn-novo-pet" data-rota="novopet"><span>+</span> Novo Pet</a>
      </div>
      <div class="wrapper-form">
        <form onsubmit="event.preventDefault();">
          <div class="grid-form">
            <div class="campo-input"><label for="id">ID</label><input type="number" name="id" id="id" placeholder="ID do PET" /></div>
            <div class="campo-input"><label for="raca">Raça</label><input type="text" name="raca" id="raca" placeholder="Raça do PET" /></div>
            <div class="campo-input"><label for="nome">Nome</label><input type="text" name="nome" id="nome" placeholder="Nome do PET" /></div>
            <div class="campo-input"><label for="tamanho">Tamanho</label><input type="text" name="tamanho" id="tamanho" placeholder="Tamanho do PET" /></div>
          </div>
          <div class="form-acoes">
            <button type="submit" class="btn-principal"><span class="icon">🔍</span> Pesquisar</button>
            <button type="reset" class="btn-secundario"><span class="icon">🔄</span> Limpar</button>
          </div>
        </form>
      </div>
      <div class="wrapper-result">
        <table class="tabela">
          <thead>
            <tr><th class="col-check"></th><th>Id<span>↓</span></th><th>nome<span>↓</span></th><th>tipo<span>↓</span></th><th>raça<span>↓</span></th><th>tamanho<span>↓</span></th><th class="col-acoes"></th></tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" checked /></td><td>12349984501</td><td>Max</td><td>Cachorro</td><td>Pastor Alemão</td><td>Grande</td>
              <td class="acoes-links"><a href="#" data-rota="editarpet">Editar</a><a href="#" data-rota="verpet">Visualizar</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,

  novopet: () => `
    <div class="breadcrumb">Home / Pets / Novo Pet</div>
    <div class="wrapper-principal">
      <div class="header-pets"><h1>Novo Pet</h1></div>
      <div class="wrapper-form">
        <form onsubmit="event.preventDefault();">
          <div class="grid-form">
            <div style="display: flex; flex-direction: column; gap: 1rem">
              <div class="campo-input"><label for="proprietario">Proprietário *</label><input type="text" id="proprietario" name="proprietario" required /></div>
              <div class="campo-input"><label for="nome">Nome *</label><input type="text" id="nome" name="nome" required /></div>
              <div class="campo-input"><label for="tipo">Tipo *</label><select id="tipo" name="tipo" required><option value=""></option><option value="cachorro">Cachorro</option><option value="gato">Gato</option></select></div>
              <div class="campo-input"><label for="raca">Raça *</label><input type="text" id="raca" name="raca" required /></div>
              <div class="campo-input"><label for="tamanho">Tamanho *</label><select id="tamanho" name="tamanho" required><option value=""></option><option value="pequeno">Pequeno</option><option value="medio">Médio</option><option value="grande">Grande</option></select></div>
              <div class="form-acoes" style="justify-content: space-between; margin-top: 2rem; width: 100%;">
                <button type="submit" class="btn-principal" data-rota="pets"><span>💾</span> Salvar</button>
                <button type="reset" class="btn-secundario" data-rota="pets"><span>🔄</span> Limpar</button>
              </div>
            </div>
            <div class="campo-input"><label>Imagem</label><div style="width: 100%; height: 100%; min-height: 220px; background: #fff; border: 1px solid #b0b0b0; border-radius: 4px;"></div></div>
          </div>
        </form>
      </div>
    </div>
  `,

  editarpet: () => `
    <div class="breadcrumb">Home / Pets / Editar Pet</div>
    <div class="wrapper-principal">
      <div class="header-pets"><h1>Editar Pet</h1></div>
      <div class="wrapper-form">
        <form onsubmit="event.preventDefault();">
          <div class="grid-form">
            <div style="display: flex; flex-direction: column; gap: 1rem">
              <div class="campo-input"><label for="nome">Nome *</label><input type="text" id="nome" name="nome" required /></div>
              <div class="campo-input"><label for="tipo">Tipo *</label><select id="tipo" name="tipo" required><option value=""></option><option value="cachorro">Cachorro</option><option value="gato">Gato</option></select></div>
              <div class="campo-input"><label for="raca">Raça *</label><input type="text" id="raca" name="raca" required /></div>
              <div class="campo-input"><label for="tamanho">Tamanho *</label><select id="tamanho" name="tamanho" required><option value=""></option><option value="pequeno">Pequeno</option><option value="medio">Médio</option><option value="grande">Grande</option></select></div>
              <div class="form-acoes" style="justify-content: space-between; margin-top: 2rem; width: 100%;">
                <button type="submit" class="btn-principal" data-rota="pets"><span>💾</span> Salvar</button>
                <button type="reset" class="btn-secundario" data-rota="pets"><span>🔄</span> Limpar</button>
              </div>
            </div>
            <div class="campo-input"><label>Imagem</label><div style="width: 100%; height: 100%; min-height: 220px; background: #fff; border: 1px solid #b0b0b0; border-radius: 4px;"></div></div>
          </div>
        </form>
      </div>
    </div>
  `,

  verpet: () => `
    <div class="breadcrumb">Home / Pets / Ver Pet</div>
    <div class="wrapper-principal">
      <div class="header-pets"><h1>Ver Pet</h1></div>
      <div class="header-pets"><div class="botoes-redes"><a href="#" class="btn-novo-pet" data-rota="editarpet">✏️ Editar</a><a href="#" class="btn-novo-pet" style="color: #c62828;">🗑️ Deletar</a></div></div>
      <div class="detalhes-container">
        <div class="detalhes-grid">
          <div class="label">Proprietário:</div><div class="valor">José da Silva</div>
          <div class="label">Id:</div><div class="valor">1234509876</div>
          <div class="label">Nome:</div><div class="valor">Max</div>
          <div class="label">Tipo:</div><div class="valor">Cachorro</div>
          <div class="label">Raça:</div><div class="valor">Pastor Alemão</div>
        </div>
      </div>
      <div class="header-pets" style="margin-top: 2rem;"><a href="#" class="btn-novo-pet" data-rota="pets">← Voltar</a></div>
    </div>
  `,

  usuarios: () => `
    <div class="breadcrumb">Home / Usuários</div>
    <div class="wrapper-principal">
      <div class="header-pets">
        <h1>Usuários</h1>
        <div style="display: flex; gap: 0.8rem; margin-top: 0.5rem">
          <a href="#" class="btn-novo-pet" data-rota="novousuario"> 👤+ novo </a>
          <a href="#" class="btn-novo-pet"> 👤- Remover</a>
          <a href="#" class="btn-novo-pet"> ✔️ Mudar status</a>
        </div>
      </div>
      <div class="wrapper-form">
        <form onsubmit="event.preventDefault();">
          <div class="grid-form">
            <div class="campo-input"><label for="id">ID</label><input type="number" name="id" id="id" placeholder="ID do Usuário" /></div>
            <div class="campo-input"><label for="mes">Criado em</label><input type="month" name="mes" id="mes" /></div>
            <div class="campo-input"><label for="email">Email</label><input type="email" name="email" id="email" placeholder="mail@server.com" /></div>
            <div class="campo-input"><label for="nome">Nome</label><input type="text" name="nome" id="nome" placeholder="Nome do Usuário" /></div>
            <div class="campo-input"><label for="status">Status</label><select name="status" id="status"><option value="" disabled selected></option><option value="ativo">Ativo</option><option value="inativo">Inativo</option></select></div>
            <div class="campo-input"><label for="funcao">Função</label><select name="funcao" id="funcao"><option value="" selected disabled></option><option value="gerente">Gerente</option><option value="funcionario">Funcionario</option><option value="cliente">Cliente</option></select></div>
          </div>
          <div class="form-acoes">
            <button type="submit" class="btn-principal"><span class="icon">🔍</span> Pesquisar</button>
            <button type="reset" class="btn-secundario"><span class="icon">🔄</span> Limpar</button>
          </div>
        </form>
      </div>
      <div class="wrapper-result">
        <table class="tabela">
          <thead><tr><th class="col-check"></th><th>Foto<span>↓</span></th><th>email <span>↓</span></th><th>nome <span>↓</span></th><th>função <span>↓</span></th><th>status <span>↓</span></th><th>criado em <span>↓</span></th><th class="col-acoes"></th></tr></thead>
          <tbody>
            <tr>
              <td><input type="checkbox" checked /></td><td><img src="img/user-circle.svg" alt="User" style="width: 24px; opacity: 0.5" /></td><td>joaodasilva@pet.com</td><td>João da Silva</td><td>Gerente</td><td>Ativo</td><td>19/02/2020</td>
              <td class="acoes-links"><a href="#" data-rota="editarusuario">Editar</a><a href="#" data-rota="usuarios">Visualizar</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,

  novousuario: () => `
    <div class="breadcrumb">Home / Usuários / Novo Usuário</div>
    <div class="wrapper-principal">
      <div class="header-pets"><h1>Novo Usuário</h1></div>
      <div class="wrapper-form">
        <form onsubmit="event.preventDefault();">
          <div class="grid-form">
            <div style="display: flex; flex-direction: column; gap: 1rem">
              <div class="campo-input"><label for="email">Email *</label><input type="email" id="email" name="email" required placeholder="mail@server.com" /></div>
              <div class="campo-input"><label for="nome">Nome *</label><input type="text" id="nome" name="nome" required placeholder="Nome do Usuário" /></div>
              <div class="campo-input"><label for="sobrenome">Sobrenome *</label><input type="text" id="sobrenome" name="sobrenome" required placeholder="Sobrenome do Usuário" /></div>
              <div class="campo-input"><label for="telefone">Telefone *</label><input type="tel" id="telefone" name="telefone" required placeholder="(11) 91234-5678" /></div>
              <div class="campo-input"><label for="funcao">Função *</label><select id="funcao" name="funcao" required><option value="" disabled></option><option value="funcionario">Funcionário</option><option value="cliente">Cliente</option><option value="gerente">Gerente</option></select></div>
              <div class="form-acoes" style="justify-content: space-between; margin-top: 2rem; width: 100%;">
                <button type="submit" class="btn-principal" data-rota="usuarios"><span>💾</span> Salvar</button>
                <button type="reset" class="btn-secundario" data-rota="usuarios"><span>🔄</span> Limpar</button>
              </div>
            </div>
            <div class="campo-input"><label>Foto do Perfil</label><div style="width: 100%; height: 100%; min-height: 220px; background: #fff; border: 1px solid #b0b0b0;"></div></div>
          </div>
        </form>
      </div>
    </div>
  `,

  editarusuario: () => `
    <div class="breadcrumb">Home / Usuários / Editar Usuário</div>
    <div class="wrapper-principal">
      <div class="header-pets"><h1>Editar Usuário</h1></div>
      <div class="wrapper-form">
        <form onsubmit="event.preventDefault();">
          <div class="grid-form">
            <div style="display: flex; flex-direction: column; gap: 1rem">
              <div class="campo-input"><label for="email">Email *</label><input type="email" id="email" name="email" required placeholder="mail@server.com" /></div>
              <div class="campo-input"><label for="nome">Nome *</label><input type="text" id="nome" name="nome" required placeholder="Nome do Usuário" /></div>
              <div class="campo-input"><label for="sobrenome">Sobrenome *</label><input type="text" id="sobrenome" name="sobrenome" required placeholder="Sobrenome do Usuário" /></div>
              <div class="campo-input"><label for="telefone">Telefone *</label><input type="tel" id="telefone" name="telefone" required placeholder="(11) 91234-5678" /></div>
              <div class="campo-input"><label for="funcao">Função *</label><select id="funcao" name="funcao" required><option value="" disabled></option><option value="funcionario">Funcionário</option><option value="cliente">Cliente</option><option value="gerente">Gerente</option></select></div>
              <div class="form-acoes" style="justify-content: space-between; margin-top: 2rem; width: 100%;">
                <button type="submit" class="btn-principal" data-rota="usuarios"><span>💾</span> Salvar</button>
                <button type="reset" class="btn-secundario" data-rota="usuarios"><span>🔄</span> Limpar</button>
              </div>
            </div>
            <div class="campo-input"><label>Foto do Perfil</label><div style="width: 100%; height: 100%; min-height: 220px; background: #fff; border: 1px solid #b0b0b0;"></div></div>
          </div>
        </form>
      </div>
    </div>
  `,

  configuracoes: () => `
    <div class="breadcrumb">Home / Configurações</div>
    <div class="wrapper-principal">
      <div class="header-pets"><h1>Configurações</h1></div>
      <div class="wrapper-form">
        <form onsubmit="event.preventDefault();">
          <div class="flex-form">
            <div class="campo-input"><label for="valor-diaria">Valor da Diária *</label><input type="number" id="valor-diaria" name="valor-diaria" min="0.01" step="0.01" required /></div>
            <div class="campo-input"><label for="qtd-vagas">Vagas disponíveis *</label><input type="number" id="qtd-vagas" name="qtd-vagas" min="1" step="1" required /></div>
            <div class="form-acoes"><button type="submit" class="btn-principal"><span>💾</span> Salvar</button><button type="reset" class="btn-secundario"><span>🔄</span> Limpar</button></div>
          </div>
        </form>
      </div>
    </div>
  `,

  reservas: () => `
    <div class="breadcrumb">Home / Reservas</div>
    <div class="wrapper-principal">
      <div class="header-pets">
        <h1>Reservas</h1>
        <div style="display: flex; gap: 0.8rem; margin-top: 0.5rem"><a href="#" class="btn-novo-pet" data-rota="novareserva">+ Nova reserva</a></div>
      </div>
      <div class="wrapper-form">
        <form onsubmit="event.preventDefault();">
          <div class="grid-form">
            <div class="campo-input"><label for="id">ID</label><input type="number" name="id" id="id" placeholder="ID da Reserva" /></div>
            <div class="campo-input"><label for="inicio">Periodo</label><div class="datas-periodo"><input type="date" name="inicio" id="inicio" /><input type="date" name="fim" id="fim" /></div></div>
            <div class="campo-input"><label for="proprietario">Proprietário</label><input type="text" name="proprietario" id="proprietario" /></div>
            <div class="campo-input"><label for="tot_inicio">Total</label><div class="datas-periodo"><input type="number" name="tot_inicio" id="tot_inicio" step="0.01" /><input type="number" name="tot_fim" id="tot_fim" step="0.01" /></div></div>
            <div class="campo-input"><label for="status">Status</label><select name="status" id="status"><option value="" disabled selected></option><option value="reservada">Reservada</option><option value="em_progresso">Em Progresso</option><option value="finalizada">Finalizada</option></select></div>
            <div class="campo-input"><label for="pet">Pet</label><input type="text" name="pet" id="pet" /></div>
          </div>
          <div class="form-acoes">
            <button type="submit" class="btn-principal"><span class="icon">🔍</span> Pesquisar</button>
            <button type="reset" class="btn-secundario"><span class="icon">🔄</span> Limpar</button>
          </div>
        </form>
      </div>
      <div class="wrapper-result">
        <table class="tabela">
          <thead><tr><th class="col-check"></th><th>Id<span>↓</span></th><th>Pet <span>↓</span></th><th>chegada <span>↓</span></th><th>partida <span>↓</span></th><th>status <span>↓</span></th><th>total (R$) <span>↓</span></th><th class="col-acoes"></th></tr></thead>
          <tbody>
            <tr>
              <td><input type="checkbox" checked /></td><td>12349984501</td><td>max</td><td>02/05/2021</td><td>07/05/2021</td><td>Reservada</td><td>40,00</td>
              <td class="acoes-links"><a href="#" data-rota="editareserva">Editar</a><a href="#" data-rota="vereserva">Visualizar</a></td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,

  novareserva: () => `
    <div class="breadcrumb">Home / Reservas / Nova Reserva</div>
    <div class="wrapper-principal">
      <div class="header-pets"><h1>Fazer Reserva</h1></div>
      <div class="wrapper-form">
        <form onsubmit="event.preventDefault();">
          <div class="campo-input"><label for="pet">Pet *</label><input type="text" id="pet" name="pet" required /></div>
          <div class="campo-input"><label>Período *</label><div class="datas-periodo"><input type="date" name="data_inicio" id="tot_inicio" /><input type="date" name="data_fim" id="tot_fim" /></div></div>
          <div class="campo-input"><label for="notas">Notas</label><textarea name="notas" id="notas" rows="7"></textarea></div>
          <div class="total-diarias">Total das diárias: <span class="valor-total">R$ 40,00</span></div>
          <div class="form-acoes" style="justify-content: space-between; margin-top: 2rem; width: 100%;">
            <button type="submit" class="btn-principal" data-rota="reservas"><span>💾</span> Salvar</button>
            <button type="reset" class="btn-secundario" data-rota="reservas"><span>🔄</span> Limpar</button>
          </div>
        </form>
      </div>
    </div>
  `,

  editareserva: () => `
    <div class="breadcrumb">Home / Reservas / Editar Reserva</div>
    <div class="wrapper-principal">
      <div class="header-pets"><h1>Editar Reserva</h1></div>
      <div class="wrapper-form">
        <form onsubmit="event.preventDefault();">
          <div class="campo-input"><label for="proprietario">Proprietário *</label><input type="text" id="proprietario" name="proprietario" required /></div>
          <div class="campo-input"><label for="pet">Pet *</label><input type="text" id="pet" name="pet" required /></div>
          <div class="campo-input"><label>Período *</label><div class="datas-periodo"><input type="date" name="data_inicio" id="tot_inicio" /><input type="date" name="data_fim" id="tot_fim" /></div></div>
          <div class="campo-input"><label for="notas">Notas</label><textarea name="notas" id="notas" rows="7"></textarea></div>
          <div class="campo-input"><label for="status">Status</label><select name="status" id="status"><option value="" disabled selected></option><option value="reservada">Reservada</option><option value="em_progresso">Em progresso</option><option value="finalizada">Finalizada</option></select></div>
          <div class="campo-input"><label for="notas_funcionario">Anotações do funcionário</label><textarea name="notas_funcionario" id="notas_funcionario" rows="7"></textarea></div>
          <div class="total-diarias">Total das diarias: <span class="valor-total">R$ 40,00</span></div>
          <div class="form-acoes" style="justify-content: space-between; margin-top: 2rem; width: 100%;">
            <button type="submit" class="btn-principal" data-rota="reservas"><span>💾</span> Salvar</button>
            <button type="reset" class="btn-secundario" data-rota="reservas"><span>🔄</span> Limpar</button>
          </div>
        </form>
      </div>
    </div>
  `,

  vereserva: () => `
    <div class="breadcrumb">Home / Reservas / Ver Reserva</div>
    <div class="wrapper-principal">
      <div class="header-pets"><h1>Ver Reserva</h1></div>
      <div class="detalhes-container">
        <div class="detalhes-grid">
          <div class="label">Id:</div><div class="valor">1234099871</div>
          <div class="label">Proprietário:</div><div class="valor">José da Silva</div>
          <div class="label">Pet:</div><div class="valor"><a href="#" data-rota="verpet" class="link-destaque">Max</a></div>
          <div class="label">Chegada:</div><div class="valor">02/05/2021</div>
          <div class="label">Partida:</div><div class="valor">07/05/2021</div>
          <div class="label">Status:</div><div class="valor">Finalizada</div>
          <div class="label">Total das diárias:</div><div class="valor">R$ 40,00</div>
        </div>
      </div>
      <div class="header-pets" style="margin-top: 2rem;"><a href="#" class="btn-novo-pet" data-rota="reservas">← Voltar</a></div>
    </div>
  `
};

// Funções de Ação e Simulação de Login
function tratarLogin(e) {
  e.preventDefault();
  // Simula sucesso no login e redireciona para a rota inicial interna
  mudarRota('pets');
}

function tratarCadastro(e) {
  e.preventDefault();
  alert('Conta criada com sucesso! Faça o login.');
  mudarRota('login');
}

// Função centralizadora de roteamento e injeção no DOM
function mudarRota(novaRota) {
  estado.rotaAtual = novaRota;
  const appContainer = document.getElementById('app');

  if (novaRota === 'login' || novaRota === 'cadastro') {
    // Renderiza telas de autenticação puras sem o shell do painel
    appContainer.innerHTML = rotas[novaRota]();
  } else {
    // Renderiza o shell logado injetando a sub-rota correspondente
    if (rotas[novaRota]) {
      const conteudoHtml = rotas[novaRota]();
      appContainer.innerHTML = rotas.painel(conteudoHtml, novaRota);
    } else {
      appContainer.innerHTML = `<h2>Página não encontrada</h2>`;
    }
  }

  // Reatribui os ouvintes de eventos para os novos elementos injetados na tela
  vincularEventos();
}

// Captura cliques em elementos com o atributo [data-rota] para navegação SPA fluida
function vincularEventos() {
  document.querySelectorAll("[data-rota]").forEach((elemento) => {
    elemento.onclick = (e) => {
      e.preventDefault();
      const destino = elemento.getAttribute("data-rota");
      mudarRota(destino);
    };
  });
}

// Inicializa a aplicação carregando a tela de login ao abrir a página
document.addEventListener("DOMContentLoaded", () => {
  mudarRota('login');
});
