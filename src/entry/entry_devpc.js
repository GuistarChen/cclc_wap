// 开发环境全局变量配置
window.cclc_data = {
    env: 'development',
    //url: 'http://test.cclc.co:8081',
    url: 'http://localhost:8083',
    cdn_url:'',
    session_url: '?mer_id=434412334'// + '&sessionid=' + (localStorage['session'] ? localStorage['session'] : '')
}

require('../src/main_pc.js');