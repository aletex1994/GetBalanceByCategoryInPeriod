function getBalanceByCategoryInPeriod(transazioni,categorie,inizio,fine){

 //trasformo in valore num con getTime()
 //più facilità per calcolare;
const dataInizio = inizio.getTime();
const dataFine = fine.getTime();

//istanzio obj che conterra le coppie chiave bilancio  
const obj_key_balance = {};

 //Una volta entrato nell'array delle categorie, per ogni categoria(1°foreach)
 //ciclo le transazioni(2°foreach) , se si verifica che appartiene al periodo di tempo passato nei parametri
 //e la categoria è quella indicata aggiunge key:value all' oggetto.
 
 categorie.forEach(function(categoriaSingola) {
//variabile per totale
        var tot=0;

        transazioni.forEach(function(transazione){
    
        var dataTransazione=new Date(transazione.time).getTime();

        var trAmount=transazione.amount;
    
              if(transazione.category == categoriaSingola && dataTransazione>=dataInizio && dataTransazione < dataFine){
    
            tot+=trAmount;  

            }  
})
   if(isNaN(tot)){
     obj_key_balance[categoriaSingola]=0;
   }else{
     obj_key_balance[categoriaSingola]=tot;
   }
})
return obj_key_balance;
};

//TEST DELLA SOLUZIONE
var arr_transazioni=[
{
            id: '11ff73b5-e771-441c-886a-498d93b5093d',
            sourceAccount: 'my_account',
            targetAccount: 'restaurant',
            amount: -9600,
            currency: 'EUR',
            category: 'eating_out',
            time: '2021-04-08T05:15:56.905Z',
          },
          {
            id: '8c3ec38d-1821-4d49-aef1-2385cb3c2b1b',
            sourceAccount: 'my_account',
            targetAccount: 'cinema',
            amount: -5900,
            currency: 'EUR',
            category: 'entertainment',
            time: '2021-04-07T21:16:57.819Z',
          },
          {
            id: 'd1c77d7c-ccda-453c-ac01-444e9d5abca3',
            sourceAccount: 'my_account',
            targetAccount: 'book_store',
            amount: -7400,
            currency: 'EUR',
            category: 'entertainment',
            time: '2021-04-07T22:46:44.071Z',
          },
          {
            id: '837127ab-f523-4b11-bed3-ae488be4545d',
            sourceAccount: 'my_account',
            targetAccount: 'fitness_club',
            amount: -100,
            currency: 'EUR',
            category: 'sports',
            time: '2021-04-05T01:55:16.646Z',
          },
          {
            id: '837127ab-f523-4b11-bed3-ae488be4545d',
            sourceAccount: 'my_account',
            targetAccount: 'fitness_club',
            amount: -500,
            currency: 'EUR',
            category: 'sports',
            time: '2022-04-05T01:55:16.646Z',
          },
          {
            id: '837127ab-f523-4b11-bed3-ae488be4545d',
            sourceAccount: 'my_account',
            targetAccount: 'fitness_club',
            amount: -9200,
            currency: 'EUR',
            category: 'sports',
            time: '2021-04-05T01:55:16.646Z',
          }
];

var oggetto_chiave_valore=getBalanceByCategoryInPeriod(arr_transazioni,['sports','entertainment'],new Date("2021-04-01"),new Date("2021-04-30"));

console.log(oggetto_chiave_valore);

module.exports = getBalanceByCategoryInPeriod;
