var VueResource = require('vue-resource');
Vue.use(VueResource);
Vue.http.options.emulateJSON = true;
Vue.http.options.emulateHTTP = true;

// 函数钩子
function replaceHook(self, jsonData) {
    if (!jsonData) {
        return;
    }

    for (let funName in jsonData) {
        self[funName] = function(...argv) {
            let cb;
            for (let i = 0; i < argv.length; i++) {
                if (typeof argv[i] == 'function') {
                    cb = argv[i];
                    break;
                }
            }
            if (cb) {
                cb(jsonData[funName]);
            } else {
                return jsonData[funName];
            }
        }
    }
}

export class CLData {
    constructor(url) {
        let self = this;
        self.url = url;

        // 添加钩子返回jsonData
        let isJsonData = window.cclc_data.isJsonData;
        if (isJsonData) {
            let jsonData = window.cclc_data.jsonData;
            replaceHook(self, jsonData);
        }
    }
    _createUrl(path, paras) {
        var url = this.url + path + window.cclc_data.session_url.replace('$sid', localStorage['session']) + '&ticks=' + new Date().getTime();
        for (var key in paras)
            url += '&' + key + '=' + encodeURIComponent(paras[key]);
        console.log(url);
        return url;
    }
    _createIpUrl(path) {
        var url = 'http://192.168.1.208:8788' + path + window.cclc_data.session_url.replace('$sid', localStorage['session']) + '&ticks=' + new Date().getTime();
        console.log(url);
        return url;
    }
    getUrl(url, cb) {
        Vue.http.get(url).then((res) => {
            cb(res.body);
        });
    }
    formatTime(time) {
        return new Date(parseInt(time)).format('yyyy-MM-dd hh:mm:ss');
    }
    getCDN_URL() {
        return window.cclc_data.cdn_url;
    }
    formatType(type) {
        return { "31": "天", "32": "月", "25": "即买即计息", "28": "即买计息" }[type];
    }
    formatMoney(amount) {
        return amount;
    }
    fetchDebtList(paras, cb) {
        Vue.http.post(this._createUrl('/api/c1_get_debts'), paras).then((res) => {
            cb(JSON.parse(res.body));
        });
    }
    fetchDebt(id, cb) {
        Vue.http.post(this._createUrl('/api/c1_get_debt'), { id: id }).then((res) => {
            cb(JSON.parse(res.body));
        });
    }
    fetchSections(code, cb) {
        Vue.http.post(this._createUrl('/api/c1_get_sections'), { code: code }).then((res) => {
            cb(JSON.parse(res.body));
        });
    }
    fetchDebtBuys(debtId, pn, s, cb) {
        Vue.http.post(this._createUrl('/api/c1_get_buys'), { debtid: debtId, pn: pn, size: s }).then((res) => {
            cb(JSON.parse(res.body));
        });
    }
    fetchDebtPlans(debtId, pn, s, cb) {
        Vue.http.post(this._createUrl('/api/c1_get_debt_plan'), { debtid: debtId, pn: pn, size: s }).then((res) => {
            cb(JSON.parse(res.body));
        });
    }
    fetchStat(cb) {
        Vue.http.post(this._createUrl('/api/c1_get_Stat')).then((res) => {
            cb(JSON.parse(res.body));
        });
    }
    fetchDebtByKey(key, cb) {
        Vue.http.post(this._createUrl('/api/c1_get_debts'), { key: key, size: 4 }).then((res) => {
            cb(JSON.parse(res.body));
        });
    }
    postResetLoginPwdparas(params, cb) {
        Vue.http.post(this._createUrl('/api/c1_reset_login_pwd'), params).then((res) => {
            cb(JSON.parse(res.body));
        });
    }
    fetchGatewayList(cb) {
        Vue.http.post(this._createUrl('/api/c5_checkgateway')).then((res) => {
            cb(JSON.parse(res.body));
        });
    }
    fetchAccount(cb) {
            Vue.http.post(this._createUrl('/api/c1_get_userinfo')).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //登录
    SignIn(paras, cb) {
            Vue.http.post(this._createUrl('/api/c1_login'), paras).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //注册
    SignUp(paras, cb) {
            Vue.http.post(this._createUrl('/api/c1_register'), paras).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        // 加息券
    fetchEnabledRatecoupons(debtId, pn, size, cb) {
            Vue.http.post(this._createUrl('/api/c6_get_ratecoupon'), { debtid: debtId, state: 2, pn: pn, size: size }).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        // 抵扣券
    fetchEnabledRebates(debtId, pn, size, cb) {
            Vue.http.post(this._createUrl('/api/c6_get_rebates'), { debtid: debtId, state: 2, pn: pn, size: size }).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //获取图片验证码
    fetchPicCode(cb) {
            cb(this._createUrl('/member/getMobileCode'));
        }
        //获取短信验证码（imagecode图片验证码、 ctype 短信类型、mobile手机号）
    fetchMobileCode(paras, cb) {
            Vue.http.post(this._createUrl('/api/c1_send_mobcode'), paras).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //获取用户信息
    fetchUserInfo(cb) {
            Vue.http.post(this._createUrl('/api/c1_get_userinfo')).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //获取红包总数
    fetchVailableBonusNum(cb) {
            Vue.http.post(this._createUrl('/api/c1_getvailableBonusNum')).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //我的理财记录
    fetchMyInvest(paras, cb) {
            Vue.http.post(this._createUrl('/api/c1_get_buys'), paras).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //个人信息认证 paras{realname:'姓名',idcard:'身份证',cardno:'银行卡号',tradepwd:'交易密码'}
    authentication(paras, cb) {
        Vue.http.post(this._createUrl('/api/c2_authentication'), paras).then((res) => {
            cb(JSON.parse(res.body));
        });
    }
    buyAuthpay(paras, cb) {
        Vue.http.post(this._createUrl('/api/c3_buy'), paras).then((res) => {
            cb(JSON.parse(res.body));
        });
    }
    buyWithholding(paras, cb) {
            Vue.http.post(this._createUrl('/api/c4_buy'), paras).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //获取支持的银行 callback({err:null,errcode:0,msg:'目前支持工行、邮政银行'}})
    fetchSupportBank(cb) {
            Vue.http.post(this._createUrl('/api/c7_getSupportBank')).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //更换银行卡 cardno:银行卡
    changeBank(cardno, cb) {
            Vue.http.post(this._createUrl('/api/c3_bind_card'), { cardno: cardno }).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //重置交易密码
    postResetTradePwd(params, cb) {
        Vue.http.post(this._createUrl('/api/c1_reset_login_pwd'), params).then((res) => {
            cb(JSON.parse(res.body));
        });
    }
    fetchBuyDetail(debtid, amount, cb) {
        Vue.http.post(this._createUrl('/api/c7_getBuyDetail'), { debtid: debtid, amount: amount }).then((res) => {
            cb(JSON.parse(res.body));
        });
    }
    redirectLianAuthpay(params) {
            location.href = this._createUrl('/api/c9_recharge', params);
        }
        // 退出账户
    userLogout(cb) {
            Vue.http.post(this._createUrl('/api/c1_signOut')).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //获取试卷
    fetchMidAutumnPaper(cb) {
            Vue.http.post(this._createUrl('/api/fetchMidAutumnPaper')).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //获取答题结果
    fetchMidAutumnResult(params, cb) {
            Vue.http.post(this._createUrl('/api/fetchMidAutumnResult'), params).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //获取邀请排名
    fetchMidAutumnInvitationRank(cb) {
            Vue.http.post(this._createUrl('/api/fetchMidAutumnInvitationRank')).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //获取邀请记录
    fetchInviteRecord(params, cb) {
            if (typeof params === 'function') {
                cb = params;
                params = {};
            }
            Vue.http.post(this._createUrl('/api/c1_get_Invite'), params).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //结束答题
    endMidAutumnAnswer(cb) {
            Vue.http.post(this._createUrl('/api/endMidAutumnAnswer')).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //获取封号
    getMidAutumnLevel(cb) {
            Vue.http.post(this._createUrl('/api/getMidAutumnLevel')).then((res) => {
                cb(JSON.parse(res.body));
            });
        }
        //获取活动信息
    fetchMidAutumnInfo(cb) {
            Vue.http.post(this._createUrl('/api/fetchMidAutumnInfo')).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        // APP自动登录
    autoSignFromApp(params, cb) {
            Vue.http.post(this._createUrl('/api/c9_auth_SignIn'), params).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //
    fetchNationdalDayResult(params, cb) {
            Vue.http.post(this._createUrl('/api/fetchNationdalDayResult'), params).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //我的战绩
    getMyMilitaryExploits(params, cb) {
            Vue.http.post(this._createUrl('/api/getMyMilitaryExploits'), params).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //上传我的战绩
    uploadMilitaryExploits(cb) {
            Vue.http.post(this._createUrl('/api/uploadMilitaryExploits')).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //获取战绩列表
    getMilitaryExploitsList(params, cb) {
            Vue.http.post(this._createUrl('/api/getMilitaryExploitsList'), params).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //获取图片签名
    getUploadSignature(params, cb) {
            Vue.http.post(this._createUrl('/api/getUploadSignature'), params).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //保存霸气外露上传记录
    savePhotoRecord(params, cb) {
            Vue.http.post(this._createUrl('/api/savePhotoRecord'), params).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //获取题目
    fetchNationdalDayPaper(cb) {
            Vue.http.post(this._createUrl('/api/fetchNationdalDayPaper')).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //获取我的照片
    getMyPhotos(paras, cb) {
            Vue.http.post(this._createUrl('/api/getMyPhotos'), paras).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //获取照片列表
    getPhotoList(paras, cb) {
            Vue.http.post(this._createUrl('/api/getPhotoList'), paras).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //上传图片
    uploadSignature(params, cb) {
            Vue.http.post(this._createUrl('/api/c5_get_uploadSignature'), params).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //投资演习
    endNationalDayInvestDemo(cb) {
            Vue.http.post(this._createUrl('/api/endNationalDayInvestDemo')).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //点赞
    pushPraise(paras, cb) {
            Vue.http.post(this._createUrl('/api/pushPraise'), paras).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //获取国庆活动信息
    getActivityInfo(cb) {
            Vue.http.post(this._createUrl('/api/getActivityInfo')).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //判断演习信息
    fetchNationalDayInvestDemo(cb) {
            Vue.http.post(this._createUrl('/api/fetchNationalDayInvestDemo')).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //判断演习信息
    uploadImg(paras, cb) {
            Vue.http.post(this._createUrl('/api/uploadBase64Photo'), paras).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //打卡
    punchIn(cb) {
            Vue.http.post(this._createUrl('/api/punchIn')).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //获取打卡记录
    getPunchRecord(cb) {
            Vue.http.post(this._createUrl('/api/getPunchInRecord')).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //获取今日刮奖信息
    getScratchOffInfo(cb) {
            Vue.http.post(this._createUrl('/api/get_scratchOff_info')).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //刮奖
    scratchOff(paras, cb) {
            Vue.http.post(this._createUrl('/api/doluck'), paras).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //签到
    signIn(cb) {
            Vue.http.post(this._createUrl('/api/c7_SignIn')).then((res) => {
                cb(JSON.parse(res.body));
            })
        }
        //获取双11活动标
    getElevenDebt(cb) {
        Vue.http.post(this._createUrl('/api/getElevenDebt')).then((res) => {
            cb(JSON.parse(res.body));
        })
    }
};