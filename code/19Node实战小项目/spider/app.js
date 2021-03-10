const express = require('express')
const request = require('request'); //发请求，爬虫
const cheerio = require('cheerio'); // cheerio是jquery核心功能的一个快速灵活而又简洁的实现,
const app = express()
const port = 3000

app.get('/', (req, res) => {
  // res.send('Hello World!')
  request('https://www.jikexueyuan.com/', function (error, response, body) {
    // console.error('error:', error); // Print the error if one occurred
    // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
    // console.log('body:', body); // Print the HTML for the Google homepage.
    // res.send('Hello World!')

    const $ = cheerio.load(body);
    res.json({
      Classnum:$('.aside-cList > li').length
    })

  });
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
}) 
