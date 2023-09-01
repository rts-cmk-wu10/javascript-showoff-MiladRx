
const opgaveInput = document.getElementById('opgaveInput');
const addKnap = document.getElementById('addKnap');
const opgaveListe = document.getElementById('opgaveListe');

// Opret et array til at opbevare opgaver
const opgaver = [];

// Funktion til at tilføje en opgave
function tilføjOpgave() {
    const opgaveTekst = opgaveInput.value;

    opgaver.push({ tekst: opgaveTekst, udført: false });
    opgaveInput.value = '';

    // Opdater opgave listeten
    visOpgaver();
}

// Funktion til at fjerne en opgave
function fjernOpgave(index) {
    opgaver.splice(index, 1);
    visOpgaver();
}

// Funktion til at markere en opgave som udført
function markerOpgave(index) {
    opgaver[index].udført = !opgaver[index].udført;
    visOpgaver();
}

// Funktion til at vise opgaver i brugergrænsefladen
function visOpgaver() {
    // Ryd den nuværende liste
    opgaveListe.innerHTML = '';

    // Tilføj hver opgave til listen
    for (let i = 0; i < opgaver.length; i++) {
        const opgave = opgaver[i];
        const listeElement = document.createElement('li');

        // Opret en afkrydsningsboks til at markere opgaven som udført
        const checkbox = document.createElement('input');
        checkbox.type = 'checkbox';
        checkbox.checked = opgave.udført;
        checkbox.addEventListener('change', () => markerOpgave(i));

        // Opret en knap til at fjerne opgaven
        const fjernKnap = document.createElement('button');
        fjernKnap.textContent = 'Fjern';
        fjernKnap.addEventListener('click', () => fjernOpgave(i));

        // Opret en div til opgaveTeksten
        const opgaveTekstDiv = document.createElement('div');
        opgaveTekstDiv.textContent = opgave.tekst;

        listeElement.appendChild(checkbox);
        listeElement.appendChild(opgaveTekstDiv);
        listeElement.appendChild(fjernKnap);
        opgaveListe.appendChild(listeElement);


    }
}

// Tilføj en klikhændelseslytter til "Tilføj Opgave"-knappen
addKnap.addEventListener('click', tilføjOpgave);


