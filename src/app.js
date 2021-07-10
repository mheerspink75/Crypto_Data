// Symbols
const symbols = [
  "BTC",
  "ETH",
  "USDT",
  "BNB",
  "ADA",
  "XRP",
  "DOGE",
  "USDC",
  "DOT",
  "UNI",
  "BUSD",
  "BCH",
  "SOL",
  "LTC",
  "LINK",
];

// Symbols url
let symbolsUrl =
  "https://min-api.cryptocompare.com/data/pricemultifull?fsyms=" +
  symbols +
  "&tsyms=USD";

// Create Table
const createTable = () => {
  document.getElementById("app").innerHTML = `<table id="table">
      <tr>
        <th>Name</th>
        <th>Price</th>
        <th>Market Cap</th>
        <th>24hr%</th>
        <th>$24hr</th> 
      </tr>
    </table>`;
};

// Fetch json data
const fetchSymbols = async () => {
  const res = await fetch(symbolsUrl);
  const data = await res.json();

  createTable();

  // Update Table
  for (const key of Object.keys(data.DISPLAY)) {
    let key1 = data.DISPLAY[key].USD;

    let id = document.querySelector("#table");
    let newTr = document.createElement("tr");
    id.appendChild(newTr);

    let newTd = document.createElement("td");
    newTr.appendChild(newTd);
    newTd.innerHTML = key;

    let newTd2 = document.createElement("td");
    newTr.appendChild(newTd2);
    newTd2.innerHTML = key1.PRICE;

    let newTd3 = document.createElement("td");
    newTr.appendChild(newTd3);
    newTd3.innerHTML = key1.MKTCAP;

    let newTd4 = document.createElement("td");
    newTr.appendChild(newTd4);
    newTd4.innerHTML = key1.CHANGEPCT24HOUR + " %";

    let newTd5 = document.createElement("td");
    newTr.appendChild(newTd5);
    newTd5.innerHTML = key1.CHANGE24HOUR;
  }
};

fetchSymbols();
