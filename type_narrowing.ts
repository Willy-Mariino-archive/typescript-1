const valore: unknown = await prendiValoreDaApi()

if (typeof valore === "number") {
    const risultato = valore + 10
} else {
    console.log("il valore non è un numero")
}

// type narrowing 

function controlla(val: unknown) {
    if (typeof val === "string") {
        // qui val è string
        console.log(val.toUpperCase());
    } else if (typeof val === "number") {
        // qui val è number
        console.log(val.toFixed(2));
    } else if (typeof val === "boolean") {
        // qui val è boolean
        console.log(val ? "vero" : "falso");
    } else {
        // qui cosa rimane?
        // TypeScript deduce che il tipo è `never`
        // perché hai escluso tutte le possibilità "normali"
        val;
    }
}
