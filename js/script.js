console.log("JS OK")

//recupero gli elementi 

const grid = document.getElementById("cells-grid");
const form = document.querySelector("form");

//grandezza grid 

const rows = 10;

const cols = 10;

const totalCells = rows * cols;

//Funzioni

const createCell = () => {
    const newCell = document.createElement('div');
    newCell.className = 'cell';
    return newCell;
}



//Svolgimento

//metto in ascolto il form
form.addEventListener('submit', function(event){

    //impedisco il comportamento di default
    event.preventDefault();

    //creo un ciclo for per ripetere la funzione tante volte quanto il totale delle celle indicato dall'utente
    for(let i= 0; i < totalCells; i++){
        
        //creo una nuova cella
        const cell = createCell();

        //aggiungo la nuova cella alla griglia
        grid.appendChild(cell);
    }

})