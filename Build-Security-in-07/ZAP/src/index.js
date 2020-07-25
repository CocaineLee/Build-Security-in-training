const ZapClient = require('zaproxy');
const zapOptions = {
  // apiKey: <the key you supplied to ZAP when you started it>, // I.E. 'v90dnblpqs1pcac991tn2oudl'
  proxy: ['http://127.0.0.1:8080', 'http://127.0.0.1:8080']
};
const zaproxy = new ZapClient(zapOptions);

await zaproxy.spider.scan("https://zaclee.herokuapp.com/#/");

const scanId =  await zaproxy.ascan.scan("https://zaclee.herokuapp.com/#/");
 
zaproxy.alert.alerts_summary("https://zaclee.herokuapp.com/#/");
