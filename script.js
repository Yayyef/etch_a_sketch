const container = document.querySelector('.container');
const randomColorButton = document.getElementById('randomColorButton');
const clearButton = document.getElementById('clearButton');
let newSquare;
let squares; 
let squarePerSide = 16;
let squareSide;
let selectedMode = 'classic';


// Génération initiale des cases
window.addEventListener('load', function() {
    genSquares();    
});

// DEFINITION DU MODE CLASSIQUE (fonction + event handler)
function paint() {
    return function () {
        this.style.backgroundColor = ' darkslategray';
        console.log(this);
    };
};
function classicMode() {
    selectedMode = 'classic';
    // genSquares();
    squares = Array.from(document.querySelectorAll('.square'));    
    for (j = 0; j < squares.length; j++) {
        squares[j].addEventListener('mouseover', paint());
    };
};

// Mode nuances de gris
function paintShades() {
    return function() {
        if (this.style.opacity > 0) {
            this.style.opacity -= 0.2;
            console.log(this.style.opacity);
        } else {
            return;
        };        
    }
};
function shadesMode() {
    selectedMode = 'shades';
    // genSquares();
    squares = Array.from(document.querySelectorAll('.square'));    
    for (j = 0; j < squares.length; j++) {
        // squares[j].style.backgroundColor = ' hsl(220, 9%, 80%)';
        squares[j].addEventListener('mouseover', paintShades());
    };
};

// DEFINITION DU MODE COULEUR ALEATOIRE (fonction + event handler)
function paintRandomColor() {
    return function() {
        this.style.backgroundColor = `rgb(${Math.round((Math.random()) * 255)}, ${Math.round((Math.random()) * 255)}, ${Math.round((Math.random()) * 255)})`;
        console.log(this);
    };
};
function randomColorMode() {
    selectedMode = 'color';
    // genSquares();
    squares = Array.from(document.querySelectorAll('.square'));    
    for (j = 0; j < squares.length; j++) {
        squares[j].addEventListener('mouseover', paintRandomColor());
    };
};

// Génère des carrés avec la classe square et l'événement d'ajout de hovered quand on hover.
function genSquares() {
    
    squareSide = 100/squarePerSide;

    for (let i = 0; i < (squarePerSide*squarePerSide); i++) {
        newSquare = document.createElement('div');
        // Il va falloir ajouter ici un moyen de définir les dimensions des squares en fonction de l'input du joueur.
        newSquare.classList.add('square');
        newSquare.style.width = squareSide + '%';
        newSquare.style.height = squareSide + '%';
        newSquare.style.opacity = 1;
        container.appendChild(newSquare);
    }
    
    switch (selectedMode) {
        case 'classic':
            classicMode();
            break;
        case 'shades':
            shadesMode();
            break;
        case 'color':
            randomColorMode();
            break;
        default:
            alert("Aucun mode n'est sélectionné");
    }

};

// FONCTIONNE avec onclick au lieu d'avec click pour une raison que j'ignore...

clearButton.onclick = function clearGrid() {

    squarePerSide = prompt('Sélectionne un nombre de carrés par côté! Celui-ci doit être inférieur ou égal à 100.', squarePerSide);
    while (squarePerSide > 100) {
        squarePerSide = prompt('Sélectionne un nombre de carrés par côté! Il doit impérativement être inférieur à 100.');
    } 

    clearSquares();
    genSquares();
}

function clearSquares() {
    let squaresToClear = Array.from(document.querySelectorAll('.square'));
    for (k = 0; k < squares.length; k++) {
        squaresToClear[k].remove();
    }
}

