export class Famiglia {
    famiglia: string;
    default_foto: string;

    public constructor(dati: any) {
        Object.assign(this, dati);
    }
}
