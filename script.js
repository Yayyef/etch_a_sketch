const container = document.querySelector('.container');
const clearButton = document.getElementById('clearButton');
let newSquare;
let squares;
let squarePerSide = 16;
let squareSide;

// Génération des cases avec classe et event handler
window.addEventListener('load', function() {
    genSquares();    
});


function paint() {
    return function () {
        this.classList.add('hovered');
        // this.style.opacity += '0.2';
        console.log(this);
    };
}

// Génère des carrés avec la classe square et l'événement d'ajout de hovered quand on hover.
function genSquares() {
    squareSide = 100/squarePerSide;
    for (let i = 0; i < (squarePerSide*squarePerSide); i++) {
        newSquare = document.createElement('div');
        // Il va falloir ajouter ici un moyen de définir les dimensions des squares en fonction de l'input du joueur.
        newSquare.classList.add('square');
        newSquare.style.width = squareSide + '%';
        newSquare.style.height = squareSide + '%';
        container.appendChild(newSquare);
    }

    squares = Array.from(document.querySelectorAll('.square'));    
    for (j = 0; j < squares.length; j++) {
        squares[j].addEventListener('mouseover', paint());
    };    
}


// FONCTIONNE avec onclick au lieu d'avec click pour une raison que j'ignore...


function clearGrid() {

    squarePerSide = prompt('Alors combien que tu veux de squares?');
    // CA ne marche pas, second prompt marche tous les cas.
    if (squarePerSide > 100 || squarePerSide === '') {
        alert('Sélectionne un nombre inférieur à 100 steup.');
    } else {
        squaresToClear = Array.from(document.querySelectorAll('.square'));
        for (k = 0; k < squares.length; k++) {
            squaresToClear[k].remove();
        }
        genSquares();
    }
}

// NEXT STEP : on tente de faire un coloriage petit à petit
// -On met des conditionnels dans le prompt?


