document.getElementById('expense-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const description = document.getElementById('description').value;
    const amount = parseFloat(document.getElementById('amount').value).toFixed(2);


    if (!description || isNaN(amount) || amount <= 0) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }

    const tableBody = document.getElementById('expenses-table');
    const newRow = document.createElement('tr');

    newRow.innerHTML = `
        <td>${description}</td>
        <td>R$ ${amount}</td>
    `;

    tableBody.appendChild(newRow);

    document.getElementById('description').value = '';
    document.getElementById('amount').value = '';
});
