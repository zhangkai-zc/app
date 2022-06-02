// 正则验证隐藏
function regular() {
    var masking = document.getElementsByClassName('masking')[0]
    var tap_none = masking.firstElementChild.firstElementChild.children[1]
    touch.on(tap_none, 'tap', function () {
        masking.style.display = 'none'
    })
}

// 验证码登录封装
function PassCode() {
    // 获取手机号
    var phone = document.getElementsByClassName('phone')[0]
    // 手机号密码验证判断弹框
    var masking = document.getElementsByClassName('masking')[0]
    // 手机号验证
    var pwd = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
    touch.on(phone, 'tap', function () {
        phone.onblur = function () {
            if (phone.value == '') {
                masking.style.display = 'block'
                masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '手机号不能为空'
            } else if (!pwd.test(phone.value)) {
                masking.style.display = 'block'
                masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '手机号格式错误'
            } else if (pwd.test(phone.value)) {
            }
        }
    })
    // 获取验证码
    var pass_code = document.getElementsByClassName('pass_code')[0]
    // 验证码输入验证
    touch.on(pass_code, 'tap', function () {
        pass_code.onblur = function () {
            if (pass_code.value == '') {
                masking.style.display = 'block'
                masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '验证码不能为空'
            } else if (pass_code.value != sum) {
                masking.style.display = 'block'
                masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '验证码错误'
            } else if (pass_code.value == sum) {

            }
        }
    })
    // 发送验证码   公共js
    var num = 60
    var sum = ''
    var ma_code = document.getElementsByClassName('ma_code')[0]
    var note_con = document.getElementsByClassName('note_con')[0]
    var note_foot = document.getElementsByClassName('note_foot')[0]
    // 发送短信
    var v_code = document.getElementsByClassName('v-code')[0]
    var code = note_foot.children[2]
    for (var i = 0; i < 6; i++) {
        sum += String(Math.floor(Math.random() * 10))
    }

    // 隐藏短信
    touch.on(code, 'tap', function () {
        ma_code.style.top = '-12rem';
        v_code.innerHTML = '发送验证码'
        num = 60
    })

    // 短信判断弹出
    touch.on(v_code, 'tap', function () {
        clearInterval(timer)
        note_con.innerHTML = "【找房无忧】&nbsp;验证码" + sum + "，&nbsp;5分钟内有效，请勿泄露"
        if (phone.value == '') {
            masking.style.display = 'block'
            masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '手机号不能为空'
        } else if (!pwd.test(phone.value)) {
            masking.style.display = 'block'
            masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '手机号格式错误'
        } else if (pwd.test(phone.value)) {
            var timer = setInterval(function () {
                num--
                v_code.innerHTML = '(' + num + ')秒后重试'
                if (num < 55) {
                    clearInterval(timer)
                    ma_code.style.top = '1rem'
                }
            }, 1000)
        }
    })
}


// 密码登录封装
function PassVar() {
    // 获取手机号
    var phone = document.getElementsByClassName('phone')[0]
    // 手机号密码验证判断弹框
    var masking = document.getElementsByClassName('masking')[0]
    // 手机号验证
    var pwd = /^(0|86|17951)?(13[0-9]|15[012356789]|166|17[3678]|18[0-9]|14[57])[0-9]{8}$/
    touch.on(phone, 'tap', function () {
        phone.onblur = function () {
            if (phone.value == '') {
                masking.style.display = 'block'
                masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '手机号不能为空'
            } else if (!pwd.test(phone.value)) {
                masking.style.display = 'block'
                masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '手机号格式错误'
            } else if (pwd.test(phone.value)) {
            }
        }
    })
    // 获取密码
    var pass = document.getElementsByClassName('pass')[0]
    // 密码验证
    touch.on(pass, 'tap', function () {
        pass.placeholder = '密码由6位数字,字母组成'
        pass.onblur = function () {
            var reg = /^[a-zA-Z0-9]{6}$/
            if (pass.value == '') {
                masking.style.display = 'block'
                masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '密码不能为空'
            } else if (!reg.test(pass.value)) {
                masking.style.display = 'block'
                masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '密码错误'
            } else if (reg.test(pass.value)) {

            }
        }
    })
}

// 头部链接跳转
function headjl() {
    var logo = document.getElementsByClassName('head')[0].children[0]
    var my_dow = document.getElementsByClassName('my_dow')[0].children[0]
    touch.on(logo, 'tap', function () {
        window.location.href = './index.html'
    })
    touch.on(my_dow, 'tap', function () {
        window.location.href = './my.html'
    })
}
