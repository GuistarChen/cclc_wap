// 开发环境全局变量配置
window.cclc_data = {
    env: 'development',
    api_url: 'http://test.cclc.co:8788',
    url: 'http://test.cclc.co:8788',
    cdn_url:'',
    session_url: '?mer_id=434412333&sessionid=$sid'// + '&sessionid=' + (localStorage['session'] ? localStorage['session'] : '')
}

require('../main_wap.js');