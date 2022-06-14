const axios = require("axios");

function display(yM, dmY) {
  let YYYYMM = yM;
  let DDMMYYYY = dmY;

  let url = `https://www.tcmb.gov.tr/kurlar/${YYYYMM}/${DDMMYYYY}.xml`;
  axios
    .get(url, {
      mode: "no-cors",
      headers: { "Content-Type": "application/xml" },
    })
    .then((data) => {
      console.log(data);
      // let parser = new DOMParser();
      // let xmlDoc = parser.parseFromString(data, "text/xml");
      // console.log(xmlDoc);
    })
    .catch((e) => console.log(e));
}

for (let year = 2012; year < 2023; year++) {
    setTimeout(() => {
        display(`${year}04`, `0204${year}`);
    }, 1000);
}