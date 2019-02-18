const v_specie = '<tr><th>Famiglia</th><th>Genere</th><th>Epiteto</th><th>Nome Latino</th><th>Nome Comune</th><th>Descrizione</th><th>Foto</th><th>Quota minima</th><th>Quota massima</th></tr>';
const ws_hostname = 'http://daas.marconirovereto.it:50055';

const getFamiglia = (famiglia) => {
    $.get(ws_hostname + '/Specie/famiglia/' + famiglia, (data) => {
        let str = '';

        str += '<table>';
        str += '<tr><th>Famiglia</th><th>Foto</th><th>Quota min</th><th>Quota max</th></tr>';

        for (let i in data) {
            str += '<tr>';
            str += '<td>' + data[i].famiglia + '</td>';
            str += '<td style="padding: 2%;">' + '<img alt="" src="http://daas.marconirovereto.it/Baldo/photo_ico/' + data[i].image_foto + '"/></td>';
            str += '<td>' + data[i].quota_min + '</td>';
            str += '<td>' + data[i].quota_max + '</td>';
            str += '</tr>';
        }
        str += "</table>";

        $('#bookmark').html(str);
    });
};

const getGenere = (genere) => {
    $.get(ws_hostname + '/Specie/Genere/' + genere, (data) => {
        let str = '';

        str += '<table>';
        str += '<tr><th>Genere</th><th>Famiglia</th><th>Epiteto</th><th>Foto</th><th>Quota min</th><th>Quota max</th></tr>';

        for (let i in data) {
            str += '<tr>';
            str += '<td>' + data[i].genere + '</td>';
            str += '<td>' + data[i].famiglia + '</td>';
            str += '<td>' + data[i].epiteto + '</td>';
            str += '<td style="padding: 2%;">' + '<img alt="" src="http://daas.marconirovereto.it/Baldo/photo_ico/' + data[i].image_foto + '"/></td>';
            str += '<td>' + data[i].quota_min + '</td>';
            str += '<td>' + data[i].quota_max + '</td>';
            str += '</tr>';
        }
        str += "</table>"

        $('#bookmark').html(str);
    });
};

const getSpecieByDesc = (des) => {
    $.get(ws_hostname + '/Descrizione/' + des , (data) => {
        let str = '';

        str += "<table>";
        str += '<tr><th>Famiglia</th><th>Genere</th><th>Epiteto</th><th>Nome Comume</th><th>Nome Latino</th><th>Descrizione</th><th>Foto</th><th>Quota min</th><th>Quota max</th></tr>';

        
        for (let i in data) {
            if(data[i].nome_comune.startsWith(des) || data[i].descrizione.includes(des)){
                str += '<tr>';
                str += '<td>' + data[i].famiglia + '</td>';
                str += '<td>' + data[i].genere + '</td>';
                str += '<td>' + data[i].epiteto + '</td>';
                str += '<td>' + data[i].nome_comune + '</td>';
                str += '<td>' + data[i].nome_latino + '</td>';
                str += '<td  style="text-align: left">' + data[i].descrizione + '</td>';
                str += '<td style="padding: 2%;">' + '<img alt="" src="http://daas.marconirovereto.it/Baldo/photo_ico/' + data[i].image_foto + '"/></td>';
                str += '<td>' + data[i].quota_min + '</td>';
                str += '<td>' + data[i].quota_max + '</td>';
                str += '</tr>';
                str += '<tr>';
            }
        } 
        str += "</table>"

        $('#bookmark').html(str);
    });
};

const getSpecieByQuotaMax = (quota) => {
    $.get(ws_hostname + "/quote/sotto/" + quota, (data) => {
        let str = '';

        str += "<table>";
        str += v_specie;

        for (let i in data) {
            if(data[i].quota_max <= quota){
                str += '<tr>';
            str += '<td>' + data[i].famiglia + '</td>';
            str += '<td>' + data[i].genere + '</td>';
            str += '<td>' + data[i].epiteto + '</td>';
            str += '<td>' + data[i].nome_latino + '</td>';
            str += '<td>' + data[i].nome_comune + '</td>';
            str += '<td  style="text-align: left">' + data[i].descrizione + '</td>';
            str += '<td style="padding: 2%;">' + '<img alt="" src="http://daas.marconirovereto.it/Baldo/photo_ico/' + data[i].image_foto + '"/></td>';
            str += '<td>' + data[i].quota_min + '</td>';
            str += '<td>' + data[i].quota_max + '</td>';

            str += '</tr>';
            }
        }
        str += "</table>"

        $('#bookmark').html(str);
    });
};

const getSpecieByQuotaMin = (quota) => {
    $.get(ws_hostname + "/quote/sopra/" + quota, (data) => {
        let str = '';

        str += "<table>";
        str += v_specie;

        for (let i in data) {
            if(data[i].quota_min >= quota){
            str += '<tr>';
            str += '<td>' + data[i].famiglia + '</td>';
            str += '<td>' + data[i].genere + '</td>';
            str += '<td>' + data[i].epiteto + '</td>';
            str += '<td>' + data[i].nome_latino + '</td>';
            str += '<td>' + data[i].nome_comune + '</td>';
            str += '<td  style="text-align: left">' + data[i].descrizione + '</td>';
            str += '<td style="padding: 2%;">' + '<img alt="" src="http://daas.marconirovereto.it/Baldo/photo_ico/' + data[i].image_foto + '"/></td>';
            str += '<td>' + data[i].quota_min + '</td>';
            str += '<td>' + data[i].quota_max + '</td>';

            str += '</tr>';
            }
        }
        str += "</table>"

        $('#bookmark').html(str);
    });
};
