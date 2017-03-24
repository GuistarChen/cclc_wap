Date.prototype.format = function (fmt) {
    if (isNaN(this)) {
        return null;
    }

    var o = {
        "M+": this.getMonth() + 1,                 //月份
        "d+": this.getDate(),                    //日
        "h+": this.getHours(),                   //小时
        "m+": this.getMinutes(),                 //分
        "s+": this.getSeconds(),                 //秒
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度
        "S": this.getMilliseconds()             //毫秒
    };

    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    }
        
    for (var k in o) {
        if (new RegExp("(" + k + ")").test(fmt)) {
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
        }
    }
        
    return fmt;
}

Number.prototype.toDigitUppercase = function () {
    if (isNaN(this))
        return null;
    var fraction = ['角', '分'];
    var digit = [
        '零', '壹', '贰', '叁', '肆',
        '伍', '陆', '柒', '捌', '玖'
    ];
    var unit = [
        ['元', '万', '亿'],
        ['', '拾', '佰', '仟']
    ];

    var n = Math.abs(this);
    var s = '';
    for (var i = 0; i < fraction.length; i++) {
        s += (digit[Math.floor(n * 10 * Math.pow(10, i)) % 10] + fraction[i]).replace(/零./, '');
    }

    n = Math.floor(n);
    for (var i = 0; i < unit[0].length && n > 0; i++) {
        var p = '';
        for (var j = 0; j < unit[1].length && n > 0; j++) {
            p = digit[n % 10] + unit[1][j] + p;
            n = Math.floor(n / 10);
        }
        s = p.replace(/(零.)*零$/, '').replace(/^$/, '零') + unit[0][i] + s;
    }
    return s.replace(/(零.)*零元/, '元')
        .replace(/(零.)+/g, '零');
}

/**
 * 数字进行逗号分隔
 */
Number.prototype.toMoneyStr = function () {
    var money = this.toString();
    var str = '';
    var flag = 0;

    if(money.indexOf("-") > -1) {
        flag = 1;
        money = (-this).toString();
    }

    if(money.indexOf(".")>-1){
        var moneys=money.split('.');
        for (var i = moneys[0].length - 1; i >= 0; i--) {
            str = moneys[0][i] + str;
            if ((moneys[0].length - i) % 3 == 0 && i != 0) {
                str = ',' + str;
            }
        }
        str+="."+moneys[1];
    }
    else{
        for (var i = money.length - 1; i >= 0; i--) {
            str = money[i] + str;
            if ((money.length - i) % 3 == 0 && i != 0) {
                str = ',' + str;
            }
        }
    }

    if(flag) {
        str = '-' + str;
    }

    return str;
}

/**
 * 空字符串检测
 */
var isEmptyString = function (str) {
    if (str === null || str === undefined || str === '') {
        return true;
    }
    return false;
}

/**
 * 非空字符串检测
 */
var isNotEmptyString = function (str) {
    return !isEmptyString(str);
}

/**
 * 正则验证
 */
var regCheck = function (str, regName) {
    if (isEmptyString(str) || isEmptyString(regName)) {
        return false;
    }

    var regBox = {
        // 手机号
        mobileReg: /^1[3|4|5|7|8]\d{9}$/,
        // 图片验证码
        imageCodeReg: /^[A-Za-z0-9]{4}$/,
        // 短信验证码
        mobcodeReg: /^[0-9]{6}$/,
        // 密码 减号/下划线/字母/数字 6-20
        passwordReg: /^[A-Za-z0-9_-]{6,20}$/,
        // 银行卡
        cardnoReg: /^\d{12,19}$/,
        idcardReg:/^\d{17}\w$/,
        // 正整数
        positiveReg: /^[1-9]\d*$/
    };

    var reg = regBox[regName];

    return reg.test(str);
}

/**
 * 挂载全局工具
 */
window.tool = {
    isEmptyString: isEmptyString,
    isNotEmptyString: isNotEmptyString,
    regCheck: regCheck
};
