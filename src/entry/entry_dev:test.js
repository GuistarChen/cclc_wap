var fileName = require('../test/jsonDataEntry.json').jsonDataName;
var jsonData = require('../test/testData/' + fileName);


// 开发环境全局变量配置
window.cclc_data = {
    env: 'development',
    isJsonData: 'true',
    jsonData: jsonData,
    api_url: 'http://test.cclc.co:8788',
    cdn_url:'',
    url: 'http://test.cclc.co:8788',
    session_url: '?mer_id=434412334'
}

require('../main_wap.js');