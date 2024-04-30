let valor= parseFloat(prompt("Qual é valor que você deseja converter:"));
let moedaorigem= (prompt("Qual é a moeda de origem: "));
let moedadestino= (prompt("Qual é a moeda de destino: "));

const taxaUSD= 5.50;
const taxaEUR= 6.50;
const taxaGBP= 7.50;

const moedaorigemvalida= moedaorigem === "BRL" || moedaorigem === "USD" || moedaorigem === "EUR" || moedaorigem === "GBP";
const moedadestinovalida= moedadestino === "BRL" || moedadestino === "USD" || moedadestino === "EUR" || moedadestino === "GBP";

if (!moedadestinovalida || !moedaorigemvalida) 
{
    document.write("A moeda de destino ou de origem é invalida");
}
else
{
    let valorconvertido;

switch (moedaorigem) {
    case "BRL":
        switch (moedadestino) {
            case "USD":
                valorconvertido= valor/taxaUSD;
                break;
            case "EUR":
                valorconvertido=valor/taxaEUR;
                break;
            case "GBP":
                valorconvertido=valor/taxaGBP;
                break;
            default:
                valorconvertido=valor;
        }
        break;
    case "USD":
        switch (moedadestino) {
            case "BRL":
                valorconvertido= valor*taxaUSD;
                break;
            case "EUR":
                valorconvertido= (valor*taxaUSD)/taxaEUR;
                break;
            case "GBP":
                valorconvertido=(valor*taxaUSD)*taxaGBP;  
                break;      
            default:
                valorconvertido=valor;
        }
        break;
    case "EUR":
        switch (moedadestino) {
            case "BRL":
                valorconvertido= valor*taxaEUR;
                break;
            case "USD":
                valorconvertido= (valor*taxaEUR)/taxaUSD;
                break;
            case "GBP":
                valorconvertido=(valor*taxaEUR)*taxaGBP;    
                break;    
            default:
                valorconvertido=valor;
        }
        break;
        case "GBP":
            switch (moedadestino) {
                case "BRL":
                    valorconvertido= valor*taxaGBP;
                    break;
                case "USD":
                    valorconvertido= (valor*taxaGBP)/taxaUSD;
                    break;
                case "EUR":
                    valorconvertido=(valor*taxaGBP)*taxaEUR; 
                    break;       
                default:
                    valorconvertido=valor;
            }
            break;
            default:
            valorconvertido=valor;
    }
    document.write("Valor convertido:"+valorconvertido)
}





