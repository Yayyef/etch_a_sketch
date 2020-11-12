const container = document.querySelector('.container');
const randomColorButton = document.getElementById('randomColorButton');
const clearButton = document.getElementById('clearButton');
let newSquare;
let squares; 
let squarePerSide = 16;
let squareSide;


// Génération initiale des cases
window.addEventListener('load', function() {
    genSquares();    
    shadesMode();
});

// DEFINITION DU MODE CLASSIQUE (fonction + event handler)
function paint() {
    return function () {
        this.classList.add('hovered');
        console.log(this);
    };
};
function classicMode() {
    genSquares();
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
    genSquares();
    squares = Array.from(document.querySelectorAll('.square'));    
    for (j = 0; j < squares.length; j++) {
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
    genSquares();
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
    
    // randomColorMode();
};

// FONCTIONNE avec onclick au lieu d'avec click pour une raison que j'ignore...

clearButton.onclick = function clearGrid() {

    squarePerSide = prompt('Alors combien que tu veux de squares?');
    // CA ne marche pas, second prompt marche tous les cas.
    if (squarePerSide > 100 || squarePerSide === '') {
        prompt("Sélectionne un nombre inférieur à 100 s'il te plait.");
    } else {
        let squaresToClear = Array.from(document.querySelectorAll('.square'));
        for (k = 0; k < squares.length; k++) {
            squaresToClear[k].remove();
        }
        genSquares();
    }
}


