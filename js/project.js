let count = 0;

document.getElementById('add-btn').addEventListener('click', function () {
    const inputValue = document.getElementById("input-value").value;

    if (inputValue == '') {
        alert('Please inter a value');
    } else {
        count++;
        const mainContainer = document.getElementById('content-container');
        const tableContainer = document.createElement('tr');
        tableContainer.innerHTML = `
        <th scope="row">${count}</th>
                        <td>${inputValue}</td>
                        <td><button class="btn btn-danger delete-btn">Delete</button>

                        <button class="btn btn-success done-btn">Done</button>
                        </td>
        `;
        mainContainer.appendChild(tableContainer);
        document.getElementById("input-value").value = '';


        const deleteButton = document.getElementsByClassName("delete-btn");
        const doneButton = document.getElementsByClassName("done-btn");
        for (const button of deleteButton) {
            button.addEventListener('click', function (e) {
                e.target.parentNode.parentNode.style.display = 'none';
            });
        }

        for (const button of doneButton) {
            button.addEventListener('click', function (e) {
                e.target.parentNode.parentNode.style.textDecoration = 'line-through';
            });
        }
    }



});