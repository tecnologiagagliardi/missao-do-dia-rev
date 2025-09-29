const form = document.getElementById('missaoForm');
const relatorioDiv = document.getElementById('relatorio');
const botao = form.querySelector('button');

let relatorioGerado = false;
let botaoCancelar;

form.addEventListener('submit', function (e) {
    e.preventDefault();

    // Pegar valores dos inputs
    const data = document.getElementById('data').value;
    const consultor = document.getElementById('consultor').value;

    const visitas = document.getElementById('visitas').value;
    const inadimplentes = document.getElementById('inadimplentes').value;
    const semCompras = document.getElementById('semCompras').value;
    const parcerias = document.getElementById('parcerias').value;
    const troca = document.getElementById('troca').value;
    const reativacao = document.getElementById('reativacao').value;
    const positivacao = document.getElementById('positivacao').value;

    const lub = document.getElementById('lub').value;
    const graxas = document.getElementById('graxas').value;
    const ancilares = document.getElementById('ancilares').value;
    const tirreno = document.getElementById('tirreno').value;
    const pneus2r = document.getElementById('pneus2r').value;
    const pneus4r = document.getElementById('pneus4r').value;
    const arla = document.getElementById('arla').value;
    const capas = document.getElementById('capas').value;

    // Criar texto do relatório
    const textoRelatorio = `
📌 MISSÃO DO DIA REVENDA
📅 Data: ${data}
👤 Consultor: ${consultor}

📊 KPI's Estratégicos
- Nº de Visitas = ${visitas}
- Clientes Inadimplentes = ${inadimplentes}
- Clientes sem Compras 2025 = ${semCompras}
- Clientes Parcerias = ${parcerias}
- Clientes Troca Inteligente = ${troca}
- Meta Dia Reativação = ${reativacao}
- Meta Dia Positivação = ${positivacao}

📈 KPI's Táticos
- Meta Dia LUB (Lts) = ${lub}
- Meta Dia Graxas (Kg) = ${graxas}
- Meta Dia Ancilares (Cxs) = ${ancilares}
- Meta Dia Tirreno (Lts) = ${tirreno}
- Meta Dia Pneus 2R = ${pneus2r}
- Meta Dia Pneus 4R = ${pneus4r}
- Meta Gforce Arla (Unds) = ${arla}
- Meta Capas Banco (Unds) = ${capas}
`;

    if (!relatorioGerado) {
        relatorioDiv.innerText = textoRelatorio;
        botao.innerText = "Compartilhar";
        relatorioGerado = true;

        if (!botaoCancelar) {
            botaoCancelar = document.createElement('button');
            botaoCancelar.type = 'button';
            botaoCancelar.innerText = 'Cancelar';
            botaoCancelar.style.marginTop = '10px';
            botaoCancelar.style.background = '#c0392b';
            botaoCancelar.style.color = '#fff';
            botaoCancelar.style.border = 'none';
            botaoCancelar.style.padding = '10px';
            botaoCancelar.style.borderRadius = '8px';
            botaoCancelar.style.cursor = 'pointer';

            botaoCancelar.addEventListener('click', () => {
                relatorioDiv.innerText = '';
                form.reset();
                botao.innerText = 'Gerar Relatório';
                relatorioGerado = false;
            });

            form.appendChild(botaoCancelar);
        }
    } else {
        // Exibir modal com os dados antes de compartilhar
        const modal = document.getElementById('modalConfirmacao');
        const modalTexto = document.getElementById('modalTexto');
        const btnConfirmar = document.getElementById('btnConfirmar');
        const btnFechar = document.getElementById('btnFechar');

        modalTexto.textContent = textoRelatorio;
        modal.style.display = "flex";

        // Confirmar envio
        btnConfirmar.onclick = () => {
            const linkWhats = `https://wa.me/?text=${encodeURIComponent(textoRelatorio)}`;
            window.open(linkWhats, '_blank');
            modal.style.display = "none";
        };

        // Cancelar envio
        btnFechar.onclick = () => {
            modal.style.display = "none";
        };

        // Fechar clicando fora do modal
        window.onclick = (event) => {
            if (event.target === modal) {
                modal.style.display = "none";
            }
        };
    }
});