function procurar() {
    // Obtém a seção HTML onde os resultados serão exibidos
    let section = document.getElementById("resultados-gerais");

// Seleciona o elemento HTML com o ID "campo-pesquisa" e armazena em uma variável
let campoPesquisa = document.getElementById("campo-pesquisa").value;

// Verifica se o campo de pesquisa está vazio
if (campoPesquisa === "") {
    // Se estiver vazio, a função é interrompida e nada é feito
    section.innerHTML = "Busque algo por favor"
    return;
}

campoPesquisa = campoPesquisa.toLowerCase();


console.log(campoPesquisa);


    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    let titulo = "";
    let descrição = "";
    let tags = "";

    // Itera sobre cada dado da pesquisa
    for (let dado of dados) {
        titulo = dado.titulo.toLowerCase()
        descrição = dado.descrição.toLowerCase()
        tags = dado.tags.toLowerCase()
            //dado.descrição.includes(campoPesquisa), permite pegar palavras da descrição como palavra chave na busca.
        if(titulo.includes(campoPesquisa) || descrição.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Constrói o HTML para cada resultado, formatando os dados da pesquisa
        resultados += `
        <div class="resultado-pesquisa">
            <h2>${dado.titulo}</h2> <img class="god" src=${dado.imagem} alt="${dado.titulo}"> <p>${dado.descrição}</p> <a href=${dado.link} target="_blank">Wikipedia</a> </div>
    `;
        }
        
    }

    if(!resultados){
        resultados = "Nada Encontrado"
    }

    // Atribui o HTML gerado para a seção de resultados
    section.innerHTML = resultados;
}






