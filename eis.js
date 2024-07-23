"use strict";
/*
Aufgabe: <Eisdiele Endabgabe>
Name: <Alita Maier>
Matrikel: <275106>
Datum: <23.07.24>
*/
var Endabgabe_Eisdiele;
(function (Endabgabe_Eisdiele) {
    window.onload = () => {
        const canvas = document.getElementById('iceCreamCanvas');
        const ctx = canvas.getContext('2d');
        const flavorsElement = document.getElementById('flavors');
        const saucesElement = document.getElementById('sauces');
        const toppingsElement = document.getElementById('toppings');
        const seatingArea = document.getElementById('seatingArea');
        const totalIncomeElement = document.getElementById('totalIncome');
        let flavors = [];
        let sauces = [];
        let toppings = [];
        let totalIncome = 0; // Gesamteinnahmen
        // Funktion zum Zeichnen des Eisbechers
        function drawIceCream() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            let y = canvas.height - 30;
            flavors.forEach(flavor => {
                ctx.fillStyle = 'pink';
                ctx.fillRect(50, y - 20, 100, 20);
                y -= 30;
            });
            ctx.fillStyle = 'blue'; // Sauce Farbe
            sauces.forEach(sauce => {
                ctx.fillRect(50, y - 20, 100, 20);
                y -= 30;
            });
            // Toppings 
            ctx.fillStyle = 'red'; // Topping-Farbe
            toppings.forEach(topping => {
                ctx.fillRect(50, y - 20, 100, 20);
                y -= 30;
            });
        }
        // Event-Listener für Buttons
        document.getElementById('addFlavor').addEventListener('click', () => {
            const flavor = prompt('Gebe die Eissorte ein ("Erdbeere", "Schokolade", "Vanille")');
            if (flavor) {
                flavors.push(flavor);
                flavorsElement.textContent = `Eissorten: ${flavors.join(', ')}`;
                drawIceCream();
            }
        });
        document.getElementById('addSauce').addEventListener('click', () => {
            const sauce = prompt('Gebe die Sauce ein ("Karamell", "Blaubeere")');
            if (sauce) {
                sauces.push(sauce);
                saucesElement.textContent = `Saucen: ${sauces.join(', ')}`;
                drawIceCream();
            }
        });
        // Event-Listener für ToppingsButton
        document.getElementById('addTopping').addEventListener('click', () => {
            const topping = prompt('Gebe das Topping ein ("Kokos")');
            if (topping) {
                toppings.push(topping);
                toppingsElement.textContent = `Toppings: ${toppings.join(', ')}`;
                drawIceCream();
            }
        });
        // Event-Listener für den Fertig-Button
        document.getElementById('giveCustomer').addEventListener('click', () => {
            // Eissorten und Saucen zurücksetzen
            flavors = [];
            sauces = [];
            toppings = [];
            flavorsElement.textContent = 'Eissorten:';
            saucesElement.textContent = 'Saucen:';
            toppingsElement.textContent = 'Toppings:';
            drawIceCream(); // Aktualisierter Eisbecher
        });
        // Funktion zum Erstellen eines Smileys
        function createSmiley(text, top, left) {
            const smiley = document.createElement('div');
            smiley.className = 'smiley';
            smiley.textContent = text;
            smiley.style.top = `${top}px`;
            smiley.style.left = `${left}px`;
            seatingArea.appendChild(smiley);
            return smiley;
        }
        // Event-Listener für den Zahlen-Button
        document.getElementById('pay').addEventListener('click', () => {
            totalIncome += 2; // 2 Euro zur Gesamtsumme hinzugefügt
            totalIncomeElement.textContent = totalIncome.toFixed(2); // Aktualisierte Anzeige
        });
        // Event-Listener für den "Fertig"-Button
        document.getElementById('giveCustomer').addEventListener('click', () => {
            // Eissorten und Saucen zurücksetzen
            flavors = [];
            sauces = [];
            toppings = [];
            flavorsElement.textContent = 'Eissorten:';
            saucesElement.textContent = 'Saucen:';
            toppingsElement.textContent = 'Toppings:';
            drawIceCream(); // Aktualisiere die Anzeige des Eisbechers
        });
        // Nette Smileys
        const smiley1 = createSmiley('😊', 10, 100);
        const smiley2 = createSmiley('😎', 45, 100);
        const smiley3 = createSmiley('🤠', 10, 50);
        const smiley4 = createSmiley('🥸', 45, 50);
        const smiley5 = createSmiley('😋', 10, 150);
        const smiley6 = createSmiley('😌', 45, 150);
        // Smileys gehen zum Sitzbereich
        function moveSmiley(smiley, top, left) {
            smiley.style.transform = `translate(${left}px, ${top}px)`;
        }
        // Bewegung zum Tisch
        setTimeout(() => {
            moveSmiley(smiley1, 35, 840);
            moveSmiley(smiley2, -1, 900);
            moveSmiley(smiley3, 35, 620);
            moveSmiley(smiley4, -1, 680);
            moveSmiley(smiley5, 35, 300);
            moveSmiley(smiley6, -1, 250);
        }, 1000); // Nach 1 Sekunde
        // Böse Smileys
        const smiley7 = createSmiley('😡', 10, 100);
        const smiley8 = createSmiley('😡', 45, 100);
        const smiley9 = createSmiley('😡', 10, 50);
        const smiley10 = createSmiley('😡', 45, 50);
        const smiley11 = createSmiley('😡', 10, 150);
        const smiley12 = createSmiley('😡', 45, 150);
        setTimeout(() => {
            moveSmiley(smiley7, 35, 840);
            moveSmiley(smiley8, -1, 900);
            moveSmiley(smiley9, 35, 620);
            moveSmiley(smiley10, -1, 680);
            moveSmiley(smiley11, 35, 300);
            moveSmiley(smiley12, -1, 250);
        }, 40000); // Nach 40 Sekunden
        // Funktion zum Ausblenden der Smileys
        function hideSmileys() {
            const smileys = document.querySelectorAll('.smiley');
            smileys.forEach(smiley => {
                smiley.style.display = 'none';
            });
        }
        // Timer für das Ausblenden der Smileys nach 60 Sekunden
        setTimeout(hideSmileys, 60000);
    };
})(Endabgabe_Eisdiele || (Endabgabe_Eisdiele = {}));
//# sourceMappingURL=eis.js.map