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

// Fetch data
const getData = async () => {
  const response = await fetch(symbolsUrl);
  if (response.status !== 200) {
    throw new Error();
  }
  const data = await response.json();
  return data;
};

// Update table with API data
getData()
  .then((data) => {
    console.log("Success!", data);

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
  })
  .catch((err) => {
    console.log("Error!", err.message);
    document.getElementById("app").innerHTML = "Error!: " + err.message;
  });
