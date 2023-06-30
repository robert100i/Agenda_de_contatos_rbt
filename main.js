const agenda = document.getElementById('formContato');
const nome = []
const numero = []

let linhas = "";
let linha = "";

formContato.addEventListener('submit',function(e) {
    e.preventDefault();

    adicionaLinha();
    atualizaTabela();
});

function adicionaLinha() {
    const inputnomeContato = document.getElementById('nome-contato').value;
    const inputnumeroContato = document.getElementById('numero-contato').value;
    
    if (numero.includes(inputnumeroContato)) {
        alert(`O numero de contato: ${inputnumeroContato} já foi inserido`);
    } else { 
        nome.push(inputnomeContato)
        numero.push(inputnumeroContato)

        let linha = '<tr>';
        linha += `<td>${inputnomeContato}</td>`;
        linha += `<td>${inputnumeroContato}</td>`;
        linha += `</tr>`;
    
        linhas += linha;
        }
    
        document.getElementById("nome-contato").value = "";
        document.getElementById("numero-contato").value = "";
}

    function atualizaTabela() {
        const corpoTabela = document.querySelector('tbody');
        corpoTabela.innerHTML = linhas;
    }