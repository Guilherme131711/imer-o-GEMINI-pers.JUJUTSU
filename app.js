function pesquisar() {
    // Função para pesquisar dados e exibir os resultados em uma seção HTML
  
    let section = document.getElementById("resultados-pesquisa");
    // Obtém a seção HTML onde os resultados serão exibidos
  
    let resultado = "";
    // Inicializa uma string vazia para armazenar os resultados da pesquisa
  
    for (let dado of dados) {
      // Itera sobre cada dado da pesquisa
      resultado += `
        <div class="item-resultado">
          <h2>
            <a href="#" target="_blank">${dado.titulo}</a>
          </h2>
          <p class="descricao-meta ">${dado.descricao}</p>
          <a href="${dado.link}" target="_blank">mais informações...</a>
        </div>
      `;
      // Constrói o HTML para cada item da pesquisa
    }
  
    section.innerHTML = resultado;
    // Insere os resultados da pesquisa na seção HTML
  }