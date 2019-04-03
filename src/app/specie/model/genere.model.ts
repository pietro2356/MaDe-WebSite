export class Genere {
    genere: string;
    famiglia: string;
    default_foto: string;     

    public constructor(dati: any) {
        Object.assign(this, dati);
    }
}

