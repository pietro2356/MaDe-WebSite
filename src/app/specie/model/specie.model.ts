const basePath: string = 'http://daas.marconirovereto.it/Baldo/';
const disPath: string = 'draw/';
const disIcoPath: string = 'draw_ico/';
const fotoPath: string = 'photo/';
const fotoIcoPath: string = 'photo_ico/';
const mapPath: string = 'maps/';
const mapIcoPath: string = 'maps_ico/';

export class Specie {
    cod_museo: string;
    cod_museo_num: string;
    descrizione: string;
    epiteto: string;
    famiglia: string;
    genere: string;
    id: number;
    image_dis: string;
    image_foto: string;
    image_map: string;
    nome_comune: string;
    nome_latino: string;
    quota_max: number;
    quota_min: number;
    riferimento: string;
    sinonimi: string;
    subsp: string;

    constructor(dati: any) {
        Object.assign(this, dati);
    }

    getFotoUrl(): string {
        return basePath+fotoPath+this.image_foto;
    }

    getFotoIcoUrl(): string {
        return basePath+fotoIcoPath+this.image_foto;
    }

    getDisAvatar(): string {
        console.log("url('" + this.getDisIcoUrl() + "');");
        return "url('" + this.getDisIcoUrl() + "');";
    }

    getDisUrl(): string {
        return basePath+disPath+this.image_dis;
    }

    getDisIcoUrl(): string {
        return basePath+disIcoPath+this.image_dis;
    }

    getMapUrl(): string {
        return basePath+mapPath+this.image_map;
    }

    getMapIcoUrl(): string {
        return basePath+mapIcoPath+this.image_map;
    }

    getDescriptionShort(n: number): string {
        if (this.descrizione.length > n) {
            return this.descrizione.substr(0, n+1) + "...";
        }
        return this.descrizione;
    }


}
