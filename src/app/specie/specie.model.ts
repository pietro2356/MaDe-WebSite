const imagePath: string = "http://daas.marconirovereto.it/baldo/";
const imageMap: string = "maps/";
const imageMapIcon: string = "maps_ico/";
const imagePhoto: string = "photo/";
const imagePhotoIco: string = "photo_ico/"

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

    constructor(dati: any) {
       Object.assign(this, dati);
    }   

    public getImagePhotoUrl(): string {
        return imagePath + imagePhoto + this.image_foto;
    }
    public getImagePhotoIconUrl(): string {
        return imagePath + imagePhotoIco + this.image_foto;
    }
    public getImageMapUrl(): string {
        return imagePath + imageMap + this.image_map;
    }
    public getImageMapIconUrl(): string {
        return imagePath + imageMapIcon + this.image_map;
    }
}
