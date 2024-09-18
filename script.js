document.getElementById('despesas-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const descricao = document.getElementById('descricao').value;
    const valor = parseFloat(document.getElementById('valor').value);

    if (descricao && !isNaN(valor)) {
        const tableBody = document.getElementById('despesas-list');
        const newRow = document.createElement('tr');

        newRow.innerHTML = `
            <td>${descricao}</td>
            <td>R$ ${valor.toFixed(2)}</td>
        `;

        tableBody.appendChild(newRow);


        document.getElementById('descricao').value = '';
        document.getElementById('valor').value = '';
    }
});

function calcularTotal() {
    const rows = document.querySelectorAll('#despesas-list tr');
    let total = 0;

    rows.forEach(row => {
        const valorText = row.cells[1].textContent.replace('R$ ', '').replace(',', '.');
        total += parseFloat(valorText);
    });

    document.getElementById('total').textContent = `Total: R$ ${total.toFixed(2)}`;
}
