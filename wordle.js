

document.getElementById('searchButton').addEventListener('click', wordle);
    
const SOLUTION_LIST = ["abiti", "abito", "aceto", "acida", "acido", 
    "acqua", "acuto", "addio", "aereo", "agile", "agire", 
    "aglio", "aiuto", "album", "alcol", "alice", "alito", 
    "altro", "amare", "amaro", "ambra", "amico", "amore", 
    "ampio", "anche", "anima", "ansia", "apice", "arena", 
    "aroma", "asino", "atrio", "audio", "avere", "avuto", 
    "avvio", "bacio", "bagno", "banca", "banda", "barca", 
    "basso", "bello", "benna", "birra", "bocca", "bolla", 
    "bollo", "bomba", "bonus", "bordo", "borsa", "bosco", 
    "bozza", "brace", "bravo", "breve", "buono", "burro", 
    "busta", "cagna", "caldo", "calma", "campo", "canto", 
    "capra", "carne", "carro", "carta", "carte", "casco", 
    "causa", "cenno", "certo", "cervo", "ciclo", "cieco", 
    "cielo", "cigno", "circa", "circo", "clima", "cobra", 
    "collo", "colpa", "colpo", "comma", "conto", "copia", 
    "coppa", "corda", "corno", "corpo", "corsa", "corso", 
    "costa", "costo", "crema", "crepa", "crisi", "croce", 
    "crudo", "cuore", "curva", "danno", "danza", "degno", 
    "denso", "dente", "denti", "dieci", "dieta", "disco", 
    "ditta", "dolce", "donna", "drago", "droga", "entro", 
    "epoca", "esame", "esito", "etica", "etico", "extra", 
    "falco", "falso", "fango", "farro", "fatto", "felpa", 
    "fermo", "ferro", "festa", "fetta", "fiato", "fibra", 
    "fieno", "fiera", "fiero", "figli", "finto", "fiore", 
    "firma", "fissa", "fisso", "fiume", "folla", "fondo", 
    "fonte", "forma", "forno", "forse", "forte", "forum", 
    "forza", "fossa", "frase", "frigo", "frode", "fuoco", 
    "fuori", "furto", "gamba", "gamma", "gatto", "genio", 
    "gente", "gesto", "gioco", "gioia", "globo", "gocce", 
    "golfo", "gomma", "gonna", "grado", "grano", "grato", 
    "grave", "greco", "grido", "guida", "gusto", "icona", 
    "invia", "invio", "isola", "ladro", "larga", "largo", 
    "latte", "leale", "legge", "legna", "legno", "lente", 
    "lento", "leone", "letto", "libro", "liceo", "lieta", 
    "lieto", "lieve", "linea", "lotta", "lucci", "lungo", 
    "luogo", "lusso", "madre", "magia", "magro", "mamma", 
    "manzo", "marca", "marea", "marmo", "marzo", "massa", 
    "matto", "mazza", "mazzo", "media", "medio", "mensa", 
    "menta", "mente", "mento", "merce", "meteo", "metro", 
    "mezzo", "miele", "mille", "misto", "molte", "molti", 
    "molto", "mondo", "monte", "morso", "morte", "morto", 
    "mucca", "muffa", "museo", "mutuo", "nervo", "nonna", 
    "nonno", "norma", "notte", "nozze", "nulla", "nuora", 
    "nuoto", "nuovo", "odore", "oliva", "oltre", "ombra", 
    "onore", "opera", "osare", "ovest", "ovvio", "padre", 
    "paese", "palma", "panca", "panna", "panne", "panno", 
    "parco", "parte", "passo", "pasta", "pasto", "paura", 
    "pausa", "pazzo", "pelle", "penna", "pesca", "pesce", 
    "petto", "pezzo", "piace", "piano", "picco", "piede", 
    "piega", "pieno", "pigro", "pinza", "pista", "piuma", 
    "pizza", "pochi", "poeta", "pollo", "polpa", "polso", 
    "pompa", "ponte", "porro", "porta", "porto", "posta", 
    "posto", "prato", "preda", "presa", "prete", "prima", 
    "primo", "prova", "punta", "punto", "quale", "quasi", 
    "quota", "radio", "ragno", "rango", "ratto", "razzo", 
    "reale", "reato", "regia", "regno", "resto", "ricco", 
    "rissa", "ritmo", "robot", "rogna", "rosso", "ruolo", 
    "ruota", "russo", "sacco", "sacro", "saldi", "saldo", 
    "salsa", "salta", "salto", "salva", "salve", "sanno", 
    "santa", "santo", "sasso", "sauna", "scala", "scena", 
    "scopo", "scudo", "scusa", "scuse", "sedia", "segno", 
    "senso", "senza", "serie", "serio", "sesto", "setta", 
    "sette", "sfera", "sfida", "socio", "sodio", "sogno", 
    "somma", "sonno", "sopra", "sorso", "sosia", "sosta", 
    "sotto", "spada", "sparo", "spesa", "spese", "sport", 
    "sposa", "sputo", "stand", "stare", "stato", "stelo", 
    "stile", "stima", "succo", "suino", "suite", "suola", 
    "suolo", "suono", "super", "svago", "tacco", "talpa", 
    "tanto", "tardi", "tasca", "tassa", "tatto", "tazza", 
    "tempo", "tenda", "tende", "terra", "terzo", "testa", 
    "testo", "tetto", "tigre", "tocco", "torre", "torta", 
    "torto", "trama", "trave", "treno", "trono", "tutti", 
    "tutto", "udire", "udito", "ulivo", "umano", "umore", 
    "unico", "unire", "unito", "usare", "usato", "utile", 
    "valle", "vario", "vasto", "venti", "vento", "verde", 
    "verso", "vespa", "vetro", "video", "villa", "viola", 
    "virus", "vista", "volpe", "volta", "volto", "vuoto", 
    "zaino", "zampa", "zebra", "zitto", "zucca", "zuppa"];


function wordle() {
    const inputElement = document.getElementById('input');
    const outputElement = document.getElementById('output');
    const banBar = document.getElementById('banlist');

    const word = inputElement.value.trim().toLowerCase();
    outputElement.innerHTML = ""; // Clear previous results

    banlist = banBar.value.trim().toLowerCase();
    banlist = [...banlist];

    if (!word) {
        outputElement.innerHTML = "<p>Type a word to search.</p>";
        return;
    }

    const results = SOLUTION_LIST.filter(element => {
        for (let i = 0; i < word.length; i++) {
            // If the input character is not '-' and does not match the character in the solution, exclude the word
            if (word[i] !== '-' && word[i] !== element[i]) {
                return false;
            }
        }
        // If the word contains any banned characters, exclude the word
        for (let i = 0; i < banlist.length; i++) {
            if (element.includes(banlist[i])) {
                return false;
            }
        }
        return true; // If no mismatches are found, include the word
    });

    if (results.length > 0) {
        results.forEach(element => {
            outputElement.innerHTML += `<p>${element}</p>`;
        });
    } else {
        outputElement.innerHTML = "<p>No results found.</p>";
    }
}
