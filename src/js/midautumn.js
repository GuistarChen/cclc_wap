function _createUrl(path, paras) {
  var url = window.cclc_data.url +path+'?mer_id=434412334&ticks=' + new Date().getTime();
  for (var key in paras)
    url += '&' + key + '=' + encodeURIComponent(paras[key]);
  console.log(url);
  return url;
}
//获取试卷
function fetchMidAutumnPaper(cb) {
  $.post(_createUrl('/api/fetchMidAutumnPaper'),function(res)  {
    console.log(res);
    if(res.err) {
      clearInterval(data.time);
      if(res.errcode == 2){
        location.href = window.cclc_data.url + '/member/login?r='+encodeURIComponent('/home/midautumn.html');
        return;
      } else if(res.err == "今天答题机会已经全部用完了！") {
        set('isOpen',true);
      } else {
        popModal({
          str: res.err
        });
      }
      set('isBegin', true);
    } else {
      set('questions', res.arr);
      set('isOpen', true);
    }
  });
}

//获取答题结果
function fetchMidAutumnResult(params, cb) {
  $.post(_createUrl('/api/fetchMidAutumnResult'), params,function(res) {
    if(res.err) {
      popModal({
        str: res.err
      });
    } else {
      var o = res.arr;
      if(o.restChance == 0) {
        set('hasChange', false);
      }
      set('score', o.score);
      set('h_score', o.h_score);
      set('user_answers', o.user_answers);
      set('right_answers', o.right_answers);
      set('restChance', o.restChance);
      set('designation', o.designation);
    }
    set('showJX', true);
  });
}

//获取邀请排名
function fetchMidAutumnInvitationRank(cb) {
  $.post(_createUrl('/api/fetchMidAutumnInvitationRank'),function(res) {
    if(res && res.arr && res.arr.length > 0) {
      var arr = data.pm;
      for(var i in res.arr){
        arr[i] = res.arr[i];
      }
      set('pm', arr);
    }
  });
}

//获取邀请记录
function fetchInviteRecord(params, cb){
  if(typeof params === 'function') {
    cb = params;
    params = {};
  }
  $.post(_createUrl('/api/c1_get_Invite'), params,function(res){
    cb(res);
  });
}

//获取封号
function getMidAutumnLevel(cb) {
  $.post(_createUrl('/api/getMidAutumnLevel'),function(res) {
    set('designation', res.res.designation);
    set('h_score', res.res.h_score);
    set('restChance', res.res.restChance);
    if(res.res.restChance == 0) {
      set('hasChange', false);
    }
  });
}

//获取活动信息
function fetchMidAutumnInfo(cb) {
  $.post(_createUrl('/api/fetchMidAutumnInfo'),function(res) {
    set('isLastDay', res.isLastDay);
  })
}

//结束当天答题
function endMidAutumnAnswer(cb) {
  $.post(_createUrl('/api/endMidAutumnAnswer'), function (res) {
    set('h_score', res.h_score);
    set('restChance', res.restChance);
    //跳转到表列表
    location.href = "";
  });
}

window.data =  {
  isOpen: false,
  isFinished: false,
  isSend: false,
  isInTime:false,
  hasChange:true,
  isLastDay: false,
  isOutTime:false,
  isBegin: true,
  isRight:false,
  isDayOver:false,
  timer: '',
  time: '',
  answer: [],
  params: {
    answers: []
  },
  pm: [{mobile: '待定', score: '待定'}, {mobile: '待定', score: '待定'}, {mobile: '待定', score: '待定'}],
  questions: [
    {title: '111', options: ['1', '2', '3', '4']},
    {title: '111', options: ['1', '2', '3', '4']},
    {title: '111', options: ['1', '2', '3', '4']}
  ],
  score: '',
  h_score: '0',
  user_answers: [],
  right_answers: [],
  restChance: '',
  error: {
    err: false,
    errMsg: ''
  },
  jifen: '',
  designation: '',
  showError: false,
  errorMsg: '',
  isFirst: true,
  isHide: true,
  msg: '',
  isReady: false,
  showJX: false
};

function format(html,o){
  if(typeof html == 'string')
    return html.replace(/({{([^}]+)}})/g,function($1,$2,$3) {
      if ($3)
        return eval('data.'+$3);
    });
}
//instead call set function of "this.key = value" in vue.
function set(key,value){
  if(typeof data[key] != 'undefined'){
    data[key] = value;
    //deal with boolean type ,control show or hide of $('D_key')
    if(typeof data[key] == 'boolean'){
      var $arr = $('.v-if-'+key);
      var $o;
      for(var n=0;n<$arr.length;n++ ) {
        $o = $($arr[n]);
        if ($o[0] && $o.attr('v-if')) {
          var arr = $o.attr('class').match(/v-if-\S+/g);
          var _key;
          for (i in arr) {
            _key = (arr[i] + 'e').slice(5, -1);
            eval('var ' + _key + '=data[_key];');
          }
          //console.log($o.attr('v-if') + '----' + eval($o.attr('v-if')));
          if (eval($o.attr('v-if')))
            $o.show();
          else
            $o.hide();
        }
      }
    }
    else if(typeof data[key] == 'string' && $.trim(data[key]).length > 0){
      var $arr = $('.v-str-'+key);
      var $o;
      for(var n=0;n<$arr.length;n++ ) {
        $o = $($arr[n]);
        var cont = $o.html();
        if (cont) {
          cont = cont.replace(new RegExp('{{' + key + '}}', 'g'), data[key]);
          $o.html(cont);
        }
      }
    }
    //deal with array type,format original html which includes {{arr[i]}},{{arr[0]}} ...
     else if(Object.prototype.toString.call(data[key]).slice(8,-1) == 'Array'){
      var html = [];
      html.push('<div class="tarD_'+key+'">');
      var $container = $('.v-tmpl-'+key);
      if($container[0] && $container.attr('v-for')){
        for(var i = 0;i <data[key].length;i++){
          html.push($(".v-tmpl-"+key).html().replace(/({{([^}]+)}})/g,function($1,$2,$3) {
            if ($3)
              return eval($3);
          }));
        }
      }
      else{
        html.push(format($('.v-tmpl-'+key).html(),data[key]));
      }
      html.push('</div>');
      $('.tarD_'+key).remove();
      $('.v-tmpl-'+key).before(html.join(''));
    }

  }
}

$().ready(function(){
  for(var key in data){
    set(key,data[key]);
  }

  fetchMidAutumnInfo();
  fetchMidAutumnInvitationRank();
  getMidAutumnLevel();
});

var toggleJZ = function () {
  if(data.isFirst) {
      if(data.hasChange) {
        set('isHide', false);
        set('msg', "本次猜谜您有90秒时间，准备好了吗？")
        set('isFirst', false);
      } else {
        set('isOpen', true);
        set('isFinished', true);
      }
  }
  if(data.isReady) {
      fetchMidAutumnPaper();
      setTime(90);
  }
}

var cancel =  function () {
  set('isHide', true);
  set('isReady',  false);
  set('isFirst',  true);
}

var begin= function () {
  set('isReady', true);
  set('isHide', true);
  fetchMidAutumnPaper();
  setTime(90);
  set('isBegin', false);
}

var setTime= function (time) {
  set('timer',time);
  set('answer' ,[]);
  data.time = setInterval (function () {
    if(data.timer == 0) {
      clearInterval(data.time);
      set('isFinished', true);
      set('isSend', false);
      getMidAutumnLevel();
    } else {
      data.timer --;
    }
  }, 1000);
}

var popModal = function(param){
  set('showError',true);
  set('errorMsg', param.str);
  setTimeout(function () {
    set('showError', false);
  }, 1200);
}

var resolve = function () {
  set('isFinished', false);
  fetchMidAutumnPaper();
  setTime(90);
}

var submit = function () {
  if(data.answer[0] && data.answer[1] && data.answer[2]) {
    set('isFinished', true);
    set('isSend', true);
    clearInterval(data.time);
    set('params', {answers: []});
    for(var i = 0; i < data.questions.length; i ++) {
      var item = { qid: '', answer: '' };
      item.qid = data.questions[i].qid;
      item.answer = data.answer[i];
      data.params.answers.push(item);
    }
    fetchMidAutumnResult(data.params);
  } else {
    popModal({
      str: '您还有题目未答完，请答完以后再提交！'
    });
  }
}

var active = function (no, t) {
  if(no == 1) {
    data.answer[0] = t.innerHTML;
  } else if (no == 2) {
    data.answer[1] = t.innerHTML;
  } else if (no == 3) {
    data.answer[2] = t.innerHTML;
  }
  var s = t.parentNode.childNodes;
  for(var i = 0; i < s.length; i ++) {
    s[i].style.cssText = "background-color: ''; color=rgb(131,63,47);";
  }
  t.style.cssText = "background: rgb(192,64,84); color: rgb(236,219,189);";
}