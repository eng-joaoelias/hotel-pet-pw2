const rotas = {
  pets: `
    <div class="breadcrumb">Home / Pets</div>
    <div class="wrapper-principal">
      <div class="header-pets">
        <h1>Pets</h1>
        <a href="#" class="btn-novo-pet" data-target="novopet"><span>+</span> Novo Pet</a>
      </div>

      <div class="wrapper-form">
        <form onsubmit="event.preventDefault();">
          <div class="grid-form">
            <div class="campo-input">
              <label for="id">ID</label>
              <input type="number" name="id" id="id" placeholder="ID do PET" />
            </div>

            <div class="campo-input">
              <label for="raca">Raça</label>
              <input type="text" name="raca" id="raca" placeholder="Raça do PET" />
            </div>

            <div class="campo-input">
              <label for="nome">Nome</label>
              <input type="text" name="nome" id="nome" placeholder="Nome do PET" />
            </div>

            <div class="campo-input">
              <label for="tamanho">Tamanho</label>
              <input type="text" name="tamanho" id="tamanho" placeholder="Tamanho do PET" />
            </div>
          </div>
          <div class="form-acoes">
            <button type="submit" class="btn-principal">
              <span class="icon">🔍</span> Pesquisar
            </button>
            <button type="reset" class="btn-secundario">
              <span class="icon">🔄</span> Limpar
            </button>
          </div>
        </form>
      </div>

      <div class="wrapper-result">
        <table class="tabela">
          <thead>
            <tr>
              <th class="col-check"></th>
              <th>Id<span>↓</span></th>
              <th>nome<span>↓</span></th>
              <th>tipo<span>↓</span></th>
              <th>raça<span>↓</span></th>
              <th>tamanho<span>↓</span></th>
              <th class="col-acoes"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" checked /></td>
              <td>12349984501</td>
              <td>Max</td>
              <td>Cachorro</td>
              <td>Pastor Alemão</td>
              <td>Grande</td>
              <td class="acoes-links">
                <a href="#" data-target="editarpet">Editar</a>
                <a href="#" data-target="verpet">Visualizar</a>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>12349984501</td>
              <td>Ginger</td>
              <td>Gato</td>
              <td>Não definida</td>
              <td>Pequeno</td>
              <td class="acoes-links">
                <a href="#" data-target="editarpet">Editar</a>
                <a href="#" data-target="verpet">Visualizar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  novopet: `
    <div class="breadcrumb">Home / Pets / Novo Pet</div>
    <div class="wrapper-principal">
      <div class="header-pets">
        <h1>Novo Pet</h1>
      </div>
      <div class="wrapper-form">
        <form onsubmit="event.preventDefault();">
          <div class="campo-input">
            <label for="nome">Nome *</label>
            <input type="text" id="nome" name="nome" required />
          </div>
          <div class="form-acoes" style="margin-top: 2rem;">
            <button type="submit" class="btn-principal" data-target="pets">Salvar</button>
            <button type="button" class="btn-secundario" data-target="pets">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  `,
  editarpet: `
    <div class="breadcrumb">Home / Pets / Editar Pet</div>
    <div class="wrapper-principal">
      <div class="header-pets">
        <h1>Editar Pet</h1>
      </div>
      <div class="wrapper-form">
        <p>Formulário de edição de pet carregado dinamicamente.</p>
        <button class="btn-secundario" data-target="pets">Voltar para Pets</button>
      </div>
    </div>
  `,
  usuarios: `
    <div class="breadcrumb">Home / Usuários</div>
    <div class="wrapper-principal">
      <div class="header-pets">
        <h1>Usuários</h1>
        <div style="display: flex; gap: 0.8rem; margin-top: 0.5rem">
          <a href="#" class="btn-novo-pet" data-target="novousuario"> 👤+ novo </a>
          <a href="#" class="btn-novo-pet"> 👤- Remover</a>
          <a href="#" class="btn-novo-pet"> ✔️ Mudar status</a>
        </div>
      </div>

      <div style="display: flex; align-items: center; gap: 0.8rem; margin-bottom: -0.5rem;">
        <span style="font-size: 0.95rem; color: #555">Visualizar Por: </span>
        <button class="btn-novo-pet" style="border-color: #b388eb; color: #074ee8">Usuários</button>
        <button class="btn-novo-pet" style="background: #fff">Função</button>
      </div>

      <div class="wrapper-form">
        <form onsubmit="event.preventDefault();">
          <div class="grid-form">
            <div class="campo-input">
              <label for="id">ID</label>
              <input type="number" name="id" id="id" placeholder="ID do Usuário" />
            </div>

            <div class="campo-input">
              <label for="mes">Criado em</label>
              <input type="month" name="mes" id="mes" />
            </div>

            <div class="campo-input">
              <label for="email">Email</label>
              <input type="email" name="email" id="email" placeholder="mail@server.com" />
            </div>

            <div class="campo-input">
              <label for="nome">Nome</label>
              <input type="text" name="nome" id="nome" placeholder="Nome do Usuário" />
            </div>

            <div class="campo-input">
              <label for="status">Status</label>
              <select name="status" id="status">
                <option value="" disabled selected></option>
                <option value="ativo">Ativo</option>
                <option value="inativo">Inativo</option>
              </select>
            </div>

            <div class="campo-input">
              <label for="funcao">Função</label>
              <select name="funcao" id="funcao">
                <option value="" selected disabled></option>
                <option value="gerente">Gerente</option>
                <option value="funcionario">Funcionario</option>
                <option value="cliente">Cliente</option>
              </select>
            </div>
          </div>
          <div class="form-acoes">
            <button type="submit" class="btn-principal">
              <span class="icon">🔍</span> Pesquisar
            </button>
            <button type="reset" class="btn-secundario">
              <span class="icon">🔄</span> Limpar
            </button>
          </div>
        </form>
      </div>

      <div class="wrapper-result">
        <table class="tabela">
          <thead>
            <tr>
              <th class="col-check"></th>
              <th>Foto<span>↓</span></th>
              <th>email <span>↓</span></th>
              <th>nome <span>↓</span></th>
              <th>função <span>↓</span></th>
              <th>status <span>↓</span></th>
              <th>criado em <span>↓</span></th>
              <th class="col-acoes"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" checked /></td>
              <td>
                <img src="img/user-circle.svg" alt="Foto do Usuário" style="width: 24px; opacity: 0.5" />
              </td>
              <td>joaodasilva@pet.com</td>
              <td>João da Silva</td>
              <td>Gerente</td>
              <td>
                <span style="border: 1px solid #2e7d32; color: #2e7d32; padding: 2px 8px; border-radius: 4px; font-size: 0.85rem;">Ativo</span>
              </td>
              <td>19/02/2020</td>
              <td class="acoes-links">
                <a href="#" data-target="editarusuario">Editar</a>
                <a href="#" data-target="usuarios">Visualizar</a>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>
                <img src="img/user-circle.svg" alt="User" style="width: 24px; opacity: 0.5" />
              </td>
              <td>maria@pet.com</td>
              <td>Maria da Silva</td>
              <td>Funcionário</td>
              <td>
                <span style="border: 1px solid #c62828; color: #c62828; padding: 2px 8px; border-radius: 4px; font-size: 0.85rem;">Inativo</span>
              </td>
              <td>19/02/2020</td>
              <td class="acoes-links">
                <a href="#" data-target="editarusuario">Editar</a>
                <a href="#" data-target="usuarios">Visualizar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  configuracoes: `
    <div class="breadcrumb">Home / Configurações</div>
    <div class="wrapper-principal">
      <div class="header-pets">
        <h1>Configurações</h1>
      </div>

      <div class="wrapper-form">
        <form onsubmit="event.preventDefault();">
          <div class="flex-form">
            <div class="campo-input">
              <label for="valor-diaria">Valor da Diária *</label>
              <input
                type="number"
                id="valor-diaria"
                name="valor-diaria"
                placeholder="10.00"
                min="0.01"
                step="0.01"
                required
              />
            </div>

            <div class="campo-input">
              <label for="qtd-vagas">Vagas disponíveis *</label>
              <input
                type="number"
                id="qtd-vagas"
                name="qtd-vagas"
                placeholder="3"
                min="1"
                step="1"
                required
              />
            </div>

            <div class="form-acoes">
              <button type="submit" class="btn-principal">
                <span>💾</span> Salvar
              </button>
              <button type="reset" class="btn-secundario">
                <span>🔄</span> Limpar
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  `,
  reservas: `
    <div class="breadcrumb">Home / Reservas</div>
    <div class="wrapper-principal">
      <div class="header-pets">
        <h1>Reservas</h1>
        <div style="display: flex; gap: 0.8rem; margin-top: 0.5rem">
          <a href="#" class="btn-novo-pet" data-target="novareserva">
            + Nova reserva
          </a>
        </div>
      </div>

      <div class="wrapper-form">
        <form onsubmit="event.preventDefault();">
          <div class="grid-form">
            <div class="campo-input">
              <label for="id">ID</label>
              <input
                type="number"
                name="id"
                id="id"
                placeholder="ID da Reserva"
              />
            </div>

            <div class="campo-input">
              <label for="inicio">Periodo</label>
              <div class="datas-periodo">
                <input type="date" name="inicio" id="inicio" />
                <input type="date" name="fim" id="fim" />
              </div>
            </div>

            <div class="campo-input">
              <label for="proprietario">Proprietário</label>
              <input
                type="text"
                name="proprietario"
                id="proprietario"
              />
            </div>

            <div class="campo-input">
              <label for="tot_inicio">Total</label>
              <div class="datas-periodo">
                <input
                  type="number"
                  name="tot_inicio"
                  id="tot_inicio"
                  step="0.01"
                />
                <input
                  type="number"
                  name="tot_fim"
                  id="tot_fim"
                  step="0.01"
                />
              </div>
            </div>

            <div class="campo-input">
              <label for="status">Status</label>
              <select name="status" id="status">
                <option value="" disabled selected></option>
                <option value="reservada">Reservada</option>
                <option value="em_progresso">Em Progresso</option>
                <option value="finalizada">Finalizada</option>
              </select>
            </div>

            <div class="campo-input">
              <label for="pet">Pet</label>
              <input type="text" name="pet" id="pet" />
            </div>
          </div>
          <div class="form-acoes">
            <button type="submit" class="btn-principal">
              <span class="icon">🔍</span> Pesquisar
            </button>
            <button type="reset" class="btn-secundario">
              <span class="icon">🔄</span> Limpar
            </button>
          </div>
        </form>
      </div>

      <div class="wrapper-result">
        <table class="tabela">
          <thead>
            <tr>
              <th class="col-check"></th>
              <th>Id<span>↓</span></th>
              <th>Pet <span>↓</span></th>
              <th>chegada <span>↓</span></th>
              <th>partida <span>↓</span></th>
              <th>status <span>↓</span></th>
              <th>total (R$) <span>↓</span></th>
              <th class="col-acoes"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td><input type="checkbox" checked /></td>
              <td>12349984501</td>
              <td>max</td>
              <td>02/05/2021</td>
              <td>07/05/2021</td>
              <td>
                <span
                  style="
                    border: 1px solid #2e7d32;
                    color: #2e7d32;
                    padding: 2px 8px;
                    border-radius: 4px;
                    font-size: 0.85rem;
                  "
                  >Reservada</span
                >
              </td>
              <td>40,00</td>
              <td class="acoes-links">
                <a href="#" data-target="editareserva">Editar</a>
                <a href="#" data-target="reservas">Visualizar</a>
              </td>
            </tr>

            <tr>
              <td><input type="checkbox" /></td>
              <td>12349984501</td>
              <td>ginger</td>
              <td>02/05/2021</td>
              <td>07/05/2021</td>
              <td>
                <span
                  style="
                    border: 1px solid #c62828;
                    color: #c62828;
                    padding: 2px 8px;
                    border-radius: 4px;
                    font-size: 0.85rem;
                  "
                  >Em progresso</span
                >
              </td>
              <td>40,00</td>
              <td class="acoes-links">
                <a href="#" data-target="editareserva">Editar</a>
                <a href="#" data-target="reservas">Visualizar</a>
              </td>
            </tr>
            <tr>
              <td><input type="checkbox" /></td>
              <td>12349984501</td>
              <td>max</td>
              <td>02/05/2021</td>
              <td>07/05/2021</td>
              <td>
                <span
                  style="
                    border: 1px solid #2e7d32;
                    color: #2e7d32;
                    padding: 2px 8px;
                    border-radius: 4px;
                    font-size: 0.85rem;
                  "
                  >Finalizada</span
                >
              </td>
              <td>40,00</td>
              <td class="acoes-links">
                <a href="#" data-target="editareserva">Editar</a>
                <a href="#" data-target="reservas">Visualizar</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  `,
  novareserva: `
    <div class="breadcrumb">Home / Reservas / Nova Reserva</div>
    <div class="wrapper-principal">
      <div class="header-pets">
        <h1>Fazer Reserva</h1>
      </div>
      <div class="wrapper-form">
        <form onsubmit="event.preventDefault();">
          <div class="campo-input">
            <label for="pet">Pet *</label>
            <input type="text" id="pet" name="pet" required />
          </div>
          <div class="form-acoes" style="margin-top: 2rem;">
            <button type="submit" class="btn-principal" data-target="reservas">Salvar</button>
            <button type="button" class="btn-secundario" data-target="reservas">Cancelar</button>
          </div>
        </form>
      </div>
    </div>
  `,
  editareserva: `
    <div class="breadcrumb">Home / Reservas / Editar Reserva</div>
    <div class="wrapper-principal">
      <div class="header-pets">
        <h1>Editar Reserva</h1>
      </div>
      <div class="wrapper-form">
        <p>Formulário de edição de reserva carregado dinamicamente.</p>
        <button class="btn-secundario" data-target="reservas">Voltar para Reservas</button>
      </div>
    </div>
  `,
};

// Função genérica de navegação
function navegarPara(nomeRota) {
  const container = document.querySelector("#app-container");

  if (rotas[nomeRota]) {
    container.innerHTML = rotas[nomeRota];

    // Atualiza a classe 'ativo' no menu lateral
    document.querySelectorAll(".nav-menu .opcao").forEach((opcao) => {
      opcao.classList.remove("ativo");
      if (opcao.getAttribute("data-target") === nomeRota) {
        opcao.classList.add("ativo");
      }
    });

    // Reativa os ouvintes de clique para novos elementos injetados
    vincularCliquesDinamicos();
  } else {
    container.innerHTML = `<h2>Página não encontrada</h2>`;
  }
}

// Captura cliques em qualquer elemento com o atributo [data-target]
function vincularCliquesDinamicos() {
  document.querySelectorAll("[data-target]").forEach((elemento) => {
    elemento.onclick = (e) => {
      e.preventDefault();
      const destino = elemento.getAttribute("data-target");
      navegarPara(destino);
    };
  });
}

// Inicializa a aplicação na tela de pets ao carregar o app.html
document.addEventListener("DOMContentLoaded", () => {
  navegarPara("pets");
});
