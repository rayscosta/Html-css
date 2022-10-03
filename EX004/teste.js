function numdias() {
    var today = new Date(2022, 2, 1);
    var ano = today.getFullYear();
    var mes = today.getMonth() + 1;
    var mesAtual = mes;
    var numDias = new Date(ano, mes, 0).getDate();
    var date = null;
    var wednesdayArray = [];
    while (date !== numDias) {
      var DAY_WEEK = today.getDay();
      if (DAY_WEEK === 1){
        var dateWednesday = today.getDate() - 5;
        if (dateWednesday < 0) {
          mes = mes - 1;
          if (mes === 0) {
            mes = 12;
            ano = ano - 1;
            numDias = new Date(ano, mes, 0).getDate();
            dateWednesday = numDias + dateWednesday;
          } else{
            numDias = new Date(ano, mes, 0).getDate();
            dateWednesday = numDias + dateWednesday;
          }
        }
        var dateTime = ano + '-' + mes + '-' + dateWednesday + ' ' + '08:00:00';
        wednesdayArray.push(dateTime);
      }
      date = today.getDate();
      today.setDate(today.getDate() + 1);
      ano = today.getFullYear();
      mes = today.getMonth() + 1;
      if (mesAtual !== mes) {
        break;
      }
      numDias = new Date(ano, mes, 0).getDate();
    }
    var wednesday = wednesdayArray[wednesdayArray.length - 1];
    console.log(wednesday, wednesdayArray);
    return numDias;
}

function date() {
  var linha = ["4","[SPG_AC.07] - QTS - WT Concessão de Acesso\n\nSolicitamos:\n\n1) Ticket de solicitação de acesso do usuário Renato.maia via ITSM (Stark).\n2) Aprovação do acesso por gestor direto do colaborador/gestor normativo. \n3) Evirofissional que concedeu os acessos.\n4) Evidência do acesso criado com sucesso no sistema.\n\nObservação: Os prints de tela devem ser completos, sem cortes e conter a data e hora da extração.","Tecnologia","Walkthrough","SPG_AC.07","ITGC TI Stone","Gestão de TI","Gestão de Acessos","Concluída","AI:\n[07/07/2022] - \nSentimos falta de algumas evidências:\n1. Lista de lista de administradores dos DCs.\n2. Relação de roles e privilégios dos respectivos grupos.\nFicamos também com uma dúvida:\n1. Como é possível verificar a role solicitada no ticket de maneira a ser possível fazer a relação entre o perfil de acesso solicitado com o perfil atribuído?","Segurança da Informação","jose.capela@stone.com.br","4/4/2022","4/8/2022","4","4/4/2022","0","Entregue","Demanda concluída\n\n[09/06/2022] Bruna: José Capela entregou as evidências a Bruna em Abril para testes referentes ao Stark.","-"];
  var array = [];
  for (var index = 0; index < linha.length; index++) {
    var element = linha[index].replaceAll('"\"','');
    element = element.replaceAll('"','');
    array.push(element);
  }
   console.log(array);
}
date();
// numdias();

