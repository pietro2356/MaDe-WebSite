export class Card {
    nomeLatino: string;
    nomeComune: string;
    immagine: string;

    descrizione: string;
    qMin: number;
    qMax: number;
    genere: string;
    epiteto: string;
    mappa: string;
    id: number;

    constructor(_nomeLatino: string, _nomeComune: string, _immagine: string, _descrizione: string, _qMin: number, _qMax: number, _genere: string, _epiteto: string, _mappa: string, _id: number) {
        this.nomeLatino = _nomeLatino;
        this.nomeComune = _nomeComune;
        this.immagine = _immagine;

        this.descrizione = _descrizione;
        this.qMin = _qMin;
        this.qMax = _qMax;
        this.genere = _genere;
        this.epiteto = _epiteto;
        this.mappa = _mappa;
        this.id = _id;
    } 
}
