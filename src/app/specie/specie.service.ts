import { Injectable } from '@angular/core';
import { DbService } from '../common/db.service';
import { Specie } from './model/specie.model';
import { Subject } from 'rxjs';
import { Famiglia } from './model/famiglia.model';
import { Genere } from './model/genere.model';

@Injectable({
  providedIn: 'root'
})
export class SpecieService {

  specie: Specie[];
<<<<<<< HEAD
  famiglie: Famiglia[];
  generi: Genere[];

  specieAvailable = new Subject<Specie[]>();
  famiglieAvailable = new Subject<Famiglia[]>();
  generiAvailable = new Subject<Genere[]>();

  constructor() { }
=======
  specieChanged = new Subject<Specie[]>();

  constructor() {
    /*
     this.specie = new Array();
    this.specie.push(new Specie("1 Huperzia selago", "1", "Pianta alta 10-20 cm, con rami di circa 1-1,5 cm di diametro, inconfondibile per gli sporangi (sacche giallognole di un paio di mm di diametro) disposti all’ascella di foglie normali, non formanti quindi una spiga distinta, e per i fusti eretto-ascendenti. Di regola porta all’ascella delle foglie superiori alcuni bulbilli verdi che, sfiorandoli, vengono scagliati lontano per favorire la diffusione della specie. È diffusa in boschi montani e cespuglieti subalpini. La quota inferiore è stata registrata in Val dei Molini sopra Cassone lungo la strada per l’Eremo dei Santi Benigno e Caro. Il primo dato per il M. Baldo (e forse anche per l’Italia: vedi Fiori, 1943) si basa su un reperto raccolto da Martinis nel 1707 nella zona di Lavacchio (Saccardo, 1904 come Lycopodium clavatum).",
      "selago", "Lycopodiaceae", "Huperzia", 10001, "", "1 Huperzia selago.jpg", "1-Huperzia selago_map.jpg", "Huperzia abietina; Licopodio abietino",
      "Huperzia selago (L.) Bernh. ex Schrank & Mart.", 2100, 860, "Martinis (leg. 1707) in Saccardo, 1904 come Lycopodium clavatum (vedi)", "n.d.", " "));
    this.specie.push(new Specie("1 Huperzia selago", "1", "Pianta alta 10-20 cm, con rami di circa 1-1,5 cm di diametro, inconfondibile per gli sporangi (sacche giallognole di un paio di mm di diametro) disposti all’ascella di foglie normali, non formanti quindi una spiga distinta, e per i fusti eretto-ascendenti. Di regola porta all’ascella delle foglie superiori alcuni bulbilli verdi che, sfiorandoli, vengono scagliati lontano per favorire la diffusione della specie. È diffusa in boschi montani e cespuglieti subalpini. La quota inferiore è stata registrata in Val dei Molini sopra Cassone lungo la strada per l’Eremo dei Santi Benigno e Caro. Il primo dato per il M. Baldo (e forse anche per l’Italia: vedi Fiori, 1943) si basa su un reperto raccolto da Martinis nel 1707 nella zona di Lavacchio (Saccardo, 1904 come Lycopodium clavatum).",
      "selago", "Lycopodiaceae", "Huperzia", 10001, "", "1 Huperzia selago.jpg", "1-Huperzia selago_map.jpg", "Huperzia abietina; Licopodio abietino",
      "Huperzia selago (L.) Bernh. ex Schrank & Mart.", 2100, 860, "Martinis (leg. 1707) in Saccardo, 1904 come Lycopodium clavatum (vedi)", "n.d.", " "));
    this.specie.push(new Specie("1 Huperzia selago", "1", "Pianta alta 10-20 cm, con rami di circa 1-1,5 cm di diametro, inconfondibile per gli sporangi (sacche giallognole di un paio di mm di diametro) disposti all’ascella di foglie normali, non formanti quindi una spiga distinta, e per i fusti eretto-ascendenti. Di regola porta all’ascella delle foglie superiori alcuni bulbilli verdi che, sfiorandoli, vengono scagliati lontano per favorire la diffusione della specie. È diffusa in boschi montani e cespuglieti subalpini. La quota inferiore è stata registrata in Val dei Molini sopra Cassone lungo la strada per l’Eremo dei Santi Benigno e Caro. Il primo dato per il M. Baldo (e forse anche per l’Italia: vedi Fiori, 1943) si basa su un reperto raccolto da Martinis nel 1707 nella zona di Lavacchio (Saccardo, 1904 come Lycopodium clavatum).",
      "selago", "Lycopodiaceae", "Huperzia", 10001, "", "1 Huperzia selago.jpg", "1-Huperzia selago_map.jpg", "Huperzia abietina; Licopodio abietino",
      "Huperzia selago (L.) Bernh. ex Schrank & Mart.", 2100, 860, "Martinis (leg. 1707) in Saccardo, 1904 come Lycopodium clavatum (vedi)", "n.d.", " "));
    this.specie.push(new Specie("1 Huperzia selago", "1", "Pianta alta 10-20 cm, con rami di circa 1-1,5 cm di diametro, inconfondibile per gli sporangi (sacche giallognole di un paio di mm di diametro) disposti all’ascella di foglie normali, non formanti quindi una spiga distinta, e per i fusti eretto-ascendenti. Di regola porta all’ascella delle foglie superiori alcuni bulbilli verdi che, sfiorandoli, vengono scagliati lontano per favorire la diffusione della specie. È diffusa in boschi montani e cespuglieti subalpini. La quota inferiore è stata registrata in Val dei Molini sopra Cassone lungo la strada per l’Eremo dei Santi Benigno e Caro. Il primo dato per il M. Baldo (e forse anche per l’Italia: vedi Fiori, 1943) si basa su un reperto raccolto da Martinis nel 1707 nella zona di Lavacchio (Saccardo, 1904 come Lycopodium clavatum).",
      "selago", "Lycopodiaceae", "Huperzia", 10001, "", "1 Huperzia selago.jpg", "1-Huperzia selago_map.jpg", "Huperzia abietina; Licopodio abietino",
      "Huperzia selago (L.) Bernh. ex Schrank & Mart.", 2100, 860, "Martinis (leg. 1707) in Saccardo, 1904 come Lycopodium clavatum (vedi)", "n.d.", " "));
    this.specie.push(new Specie("1 Huperzia selago", "1", "Pianta alta 10-20 cm, con rami di circa 1-1,5 cm di diametro, inconfondibile per gli sporangi (sacche giallognole di un paio di mm di diametro) disposti all’ascella di foglie normali, non formanti quindi una spiga distinta, e per i fusti eretto-ascendenti. Di regola porta all’ascella delle foglie superiori alcuni bulbilli verdi che, sfiorandoli, vengono scagliati lontano per favorire la diffusione della specie. È diffusa in boschi montani e cespuglieti subalpini. La quota inferiore è stata registrata in Val dei Molini sopra Cassone lungo la strada per l’Eremo dei Santi Benigno e Caro. Il primo dato per il M. Baldo (e forse anche per l’Italia: vedi Fiori, 1943) si basa su un reperto raccolto da Martinis nel 1707 nella zona di Lavacchio (Saccardo, 1904 come Lycopodium clavatum).",
      "selago", "Lycopodiaceae", "Huperzia", 10001, "", "1 Huperzia selago.jpg", "1-Huperzia selago_map.jpg", "Huperzia abietina; Licopodio abietino",
      "Huperzia selago (L.) Bernh. ex Schrank & Mart.", 2100, 860, "Martinis (leg. 1707) in Saccardo, 1904 come Lycopodium clavatum (vedi)", "n.d.", " "));
    this.specie.push(new Specie("1 Huperzia selago", "1", "Pianta alta 10-20 cm, con rami di circa 1-1,5 cm di diametro, inconfondibile per gli sporangi (sacche giallognole di un paio di mm di diametro) disposti all’ascella di foglie normali, non formanti quindi una spiga distinta, e per i fusti eretto-ascendenti. Di regola porta all’ascella delle foglie superiori alcuni bulbilli verdi che, sfiorandoli, vengono scagliati lontano per favorire la diffusione della specie. È diffusa in boschi montani e cespuglieti subalpini. La quota inferiore è stata registrata in Val dei Molini sopra Cassone lungo la strada per l’Eremo dei Santi Benigno e Caro. Il primo dato per il M. Baldo (e forse anche per l’Italia: vedi Fiori, 1943) si basa su un reperto raccolto da Martinis nel 1707 nella zona di Lavacchio (Saccardo, 1904 come Lycopodium clavatum).",
      "selago", "Lycopodiaceae", "Huperzia", 10001, "", "1 Huperzia selago.jpg", "1-Huperzia selago_map.jpg", "Huperzia abietina; Licopodio abietino",
      "Huperzia selago (L.) Bernh. ex Schrank & Mart.", 2100, 860, "Martinis (leg. 1707) in Saccardo, 1904 come Lycopodium clavatum (vedi)", "n.d.", " "));
    this.specie.push(new Specie("1 Huperzia selago", "1", "Pianta alta 10-20 cm, con rami di circa 1-1,5 cm di diametro, inconfondibile per gli sporangi (sacche giallognole di un paio di mm di diametro) disposti all’ascella di foglie normali, non formanti quindi una spiga distinta, e per i fusti eretto-ascendenti. Di regola porta all’ascella delle foglie superiori alcuni bulbilli verdi che, sfiorandoli, vengono scagliati lontano per favorire la diffusione della specie. È diffusa in boschi montani e cespuglieti subalpini. La quota inferiore è stata registrata in Val dei Molini sopra Cassone lungo la strada per l’Eremo dei Santi Benigno e Caro. Il primo dato per il M. Baldo (e forse anche per l’Italia: vedi Fiori, 1943) si basa su un reperto raccolto da Martinis nel 1707 nella zona di Lavacchio (Saccardo, 1904 come Lycopodium clavatum).",
      "selago", "Lycopodiaceae", "Huperzia", 10001, "", "1 Huperzia selago.jpg", "1-Huperzia selago_map.jpg", "Huperzia abietina; Licopodio abietino",
      "Huperzia selago (L.) Bernh. ex Schrank & Mart.", 2100, 860, "Martinis (leg. 1707) in Saccardo, 1904 come Lycopodium clavatum (vedi)", "n.d.", " "));
    this.specie.push(new Specie("1 Huperzia selago", "1", "Pianta alta 10-20 cm, con rami di circa 1-1,5 cm di diametro, inconfondibile per gli sporangi (sacche giallognole di un paio di mm di diametro) disposti all’ascella di foglie normali, non formanti quindi una spiga distinta, e per i fusti eretto-ascendenti. Di regola porta all’ascella delle foglie superiori alcuni bulbilli verdi che, sfiorandoli, vengono scagliati lontano per favorire la diffusione della specie. È diffusa in boschi montani e cespuglieti subalpini. La quota inferiore è stata registrata in Val dei Molini sopra Cassone lungo la strada per l’Eremo dei Santi Benigno e Caro. Il primo dato per il M. Baldo (e forse anche per l’Italia: vedi Fiori, 1943) si basa su un reperto raccolto da Martinis nel 1707 nella zona di Lavacchio (Saccardo, 1904 come Lycopodium clavatum).",
      "selago", "Lycopodiaceae", "Huperzia", 10001, "", "1 Huperzia selago.jpg", "1-Huperzia selago_map.jpg", "Huperzia abietina; Licopodio abietino",
      "Huperzia selago (L.) Bernh. ex Schrank & Mart.", 2100, 860, "Martinis (leg. 1707) in Saccardo, 1904 come Lycopodium clavatum (vedi)", "n.d.", " "));
    this.specie.push(new Specie("1 Huperzia selago", "1", "Pianta alta 10-20 cm, con rami di circa 1-1,5 cm di diametro, inconfondibile per gli sporangi (sacche giallognole di un paio di mm di diametro) disposti all’ascella di foglie normali, non formanti quindi una spiga distinta, e per i fusti eretto-ascendenti. Di regola porta all’ascella delle foglie superiori alcuni bulbilli verdi che, sfiorandoli, vengono scagliati lontano per favorire la diffusione della specie. È diffusa in boschi montani e cespuglieti subalpini. La quota inferiore è stata registrata in Val dei Molini sopra Cassone lungo la strada per l’Eremo dei Santi Benigno e Caro. Il primo dato per il M. Baldo (e forse anche per l’Italia: vedi Fiori, 1943) si basa su un reperto raccolto da Martinis nel 1707 nella zona di Lavacchio (Saccardo, 1904 come Lycopodium clavatum).",
      "selago", "Lycopodiaceae", "Huperzia", 10001, "", "1 Huperzia selago.jpg", "1-Huperzia selago_map.jpg", "Huperzia abietina; Licopodio abietino",
      "Huperzia selago (L.) Bernh. ex Schrank & Mart.", 2100, 860, "Martinis (leg. 1707) in Saccardo, 1904 come Lycopodium clavatum (vedi)", "n.d.", " "));
    this.specie.push(new Specie("1 Huperzia selago", "1", "Pianta alta 10-20 cm, con rami di circa 1-1,5 cm di diametro, inconfondibile per gli sporangi (sacche giallognole di un paio di mm di diametro) disposti all’ascella di foglie normali, non formanti quindi una spiga distinta, e per i fusti eretto-ascendenti. Di regola porta all’ascella delle foglie superiori alcuni bulbilli verdi che, sfiorandoli, vengono scagliati lontano per favorire la diffusione della specie. È diffusa in boschi montani e cespuglieti subalpini. La quota inferiore è stata registrata in Val dei Molini sopra Cassone lungo la strada per l’Eremo dei Santi Benigno e Caro. Il primo dato per il M. Baldo (e forse anche per l’Italia: vedi Fiori, 1943) si basa su un reperto raccolto da Martinis nel 1707 nella zona di Lavacchio (Saccardo, 1904 come Lycopodium clavatum).",
      "selago", "Lycopodiaceae", "Huperzia", 10001, "", "1 Huperzia selago.jpg", "1-Huperzia selago_map.jpg", "Huperzia abietina; Licopodio abietino",
      "Huperzia selago (L.) Bernh. ex Schrank & Mart.", 2100, 860, "Martinis (leg. 1707) in Saccardo, 1904 come Lycopodium clavatum (vedi)", "n.d.", " "));
  */
    }
>>>>>>> 48de26e0456834afff9317ad41dd93a28a109c01

  getSpecie(): Specie[] {
    return this.specie.slice();
  }

  getSpecieItem(index: number): Specie {
    return this.specie.slice(index, index+1)[0];
  }

  getGeneri(): Genere[] {
    return this.generi.slice();
  }

  setSpecie(specie: Specie[]) {
    this.specie = specie.slice();
    this.specieAvailable.next(this.specie);
  }

  setFamiglie(famiglie: Famiglia[]) {
    this.famiglie = famiglie;
    this.famiglieAvailable.next(this.famiglie);
  }

  setGeneri(generi: Genere[]) {
    this.generi = generi;
    this.generiAvailable.next(this.generi);
  }

  filtraGeneri(famiglia: string) {    
    this.generiAvailable.next(this.generi.filter(item => {
      return item.famiglia == famiglia;
    }));
  }

}
