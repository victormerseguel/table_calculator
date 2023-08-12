// Seleção de elementos
const multiplicationForm  = document.querySelector("#multiplication-form");
const numberInput         = document.querySelector("#number");
const multiplicationInput = document.querySelector("#multiplicator")

const multiplicationTable = document.querySelector("#multiplication-operations")

const multiplicationTitle = document.querySelector("#multiplication-table span")

// Funções
const createTable = (number, multiplicator) => {
    multiplicationTable.innerHTML = " ";

    for (i = 1; i <= multiplicator; i++) {
        const result = number * i;

        const template = 
            `<div class="row">
                <div class="operation">
                    <p>${number} x ${i} = </p></<div><div class="result"><p> ${result}</p></div>
            </div>`;

        const parser = new DOMParser()

        const htmlTemplate = parser.parseFromString(template, "text/html");

        const row = htmlTemplate.querySelector(".row");

        multiplicationTable.appendChild(row);
    }

    multiplicationTitle.innerHTML = number;

}


// Eventos
multiplicationForm.addEventListener("submit", (e) =>{
    e.preventDefault();

    const multiplicationNumber = +numberInput.value;

    const multiplicatorNumber = +multiplicationInput.value;

    if (!multiplicationNumber || !multiplicatorNumber) {
        
        // if (!multiplicationNumber) {
        //     console.log('Não tem numero')
        //     numberInput.classList.add('.form-control-empt')
        // }
        
        // if (!multiplicatorNumber) {
        //     console.log('Não tem multiplicador')
        // }
       
        return;
    
    };

    createTable(multiplicationNumber, multiplicatorNumber)
})