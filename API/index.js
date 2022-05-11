const request = require('request');

//Search tzkt api for tokens in account tz1b2Ev1JLBN49wRcsrEhJb93pbq2wYUAiuW and for each nft show the name and url

request('https://api.tzkt.io/v1/tokens/balances?select=token.metadata.name as name,token.metadata.displayUri as image&account=tz1b2Ev1JLBN49wRcsrEhJb93pbq2wYUAiuW&limit=10', 
(err, res, body) => {
  console.table(body);
});

//Enter the line below in the terminal to produce an output as a json file (output.json)

//node index.js > output.json 2>&1