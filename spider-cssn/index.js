const cheerio = require('cheerio');
const axios = require('axios');
const express = require('express');
const app = express();

function getData() {
  let url = 'http://www.cssn.net.cn/cssn/front/standard/selectStandardListByCond?cond.orderBy=&cond.keywords=%E7%9B%90%E6%B9%96&cond.activeValue=%E7%8E%B0%E8%A1%8C&cond.yearStartValue=&cond.yearEndValue=&cond.publishCorpA104=&cond.chinaClassCN=&cond.aboradClassICSN=&cond.otherpublishCorpGroup=&cond.account_id=&cond.login_name=&cond.superKeyWord=&cond.superKeyWordChoose=&cond.advanced_search=&cond.A100=&cond.caiyong=&cond.super_A101=&cond.super_standarnumber=&cond.super_w_level_s=&cond.super_w_location_s=&cond.super_tips_s=&cond.w_level_s=&cond.w_source_s=&cond.w_location_s=&cond.tips_s=&cond.shouye_a100=&cond.resulttype=0&cond.secondword=&cond.loadPage=true&cond.containFullTextValue=%E6%98%AF&cond.whetherSearchAll=0&page=1&limit=20&start=0';
  return axios.post(url)
    .then(function (response) {
      return Promise.resolve(response.data);
    })
    .catch(function (error) {
      console.log(error);
    })
}

app.get('/', (req, res) => {
  let promise = getData();
  promise.then(response => {
    res.json(response);
  });
});

app.listen(3000, () => console.log('Listening on port 3000!'));  // 监听3000端口
