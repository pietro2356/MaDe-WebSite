export class Specie {
    famiglia: string;
    id: number;
    cod_museo: string;
    cod_museo_num: string;
    genere: string;
    epiteto: string;
    subsp: string;
    nome_latino: string;
    nome_comune: string;
    riferimento: string;
    sinonimi: string;
    image_map: string;
    image_foto: string;
    image_dis: string;
    quota_min: number;
    quota_max: number;
    descrizione: string;

    constructor(cod_museo: string, cod_museo_num: string, descrizione: string, epiteto: string, famiglia: string, genere: string,  id: number,
        image_dis: string, image_foto: string, image_map: string, nome_comune: string, nome_latino: string,  quota_min: number,
        quota_max: number, riferimento: string, sinonimi: string, subsp: string) {
        this.famiglia = famiglia;
        this.id = id;
        this.cod_museo = cod_museo;
        this.cod_museo_num = cod_museo_num;
        this.genere = genere;
        this.epiteto = epiteto;
        this.subsp = subsp;
        this.nome_latino = nome_latino;
        this.nome_comune = nome_comune;
        this.riferimento = riferimento;
        this.sinonimi = sinonimi;
        this.image_map = image_map;
        this.image_foto = image_foto;
        this.image_dis = image_dis;
        this.quota_min = quota_min;
        this.quota_max = quota_max;
        this.descrizione = descrizione;
    }

    
}
