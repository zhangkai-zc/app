function fn() {
    btn_common.style.borderBottom = '.4rem solid gray';
    btn_sortcut.style.borderBottom = '.4rem solid #FF8A00';
    str = `
        <form action="./BeforLogin.html" class='form' name="form1" method="get">
            <div>
                <input type="text" class="phone" placeholder="请输入手机号码">
                <span class='v-code'>发送验证码</span>
            </div>
        
            <input type="password" class="pass_code" placeholder="请输入短信中的验证码">
        </form>
        <button class='btn'>立即登录</button>`
    con.innerHTML = str
    // button按钮提交   验证码登录
    var phone = document.getElementsByClassName('phone')[0]
    var masking = document.getElementsByClassName('masking')[0]
    var pass_code = document.getElementsByClassName('pass_code')[0]
    var btn = document.getElementsByClassName('btn')[0]
    btn.ontouchstart = function () {
        if (phone.value == '') {
            masking.style.display = 'block'
            masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '手机号不能为空'
        } else if (pass_code.value == '') {
            masking.style.display = 'block'
            masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '验证码不能为空'
        } else {
            document.form1.submit()
        }
    }
}

function mmfn() {
    btn_common.style.borderBottom = '.4rem solid #FF8A00';
    btn_sortcut.style.borderBottom = '.4rem solid gray';
    str = `
        <form action="./BeforLogin.html" class='form' name="form1" method="get">
            <input type="text" class="phone" placeholder="请输入手机号码">
            <input type="password" class="pass" placeholder="请输入密码">
        </form>
        <button class='btn'>登录</button>`
    con.innerHTML = str
    btnlogin()
}


// button按钮提交   密码登录
function btnlogin() {
    var phone = document.getElementsByClassName('phone')[0]
    var masking = document.getElementsByClassName('masking')[0]
    var pass = document.getElementsByClassName('pass')[0]
    var btn = document.getElementsByClassName('btn')[0]
    btn.ontouchstart = function () {
        if (phone.value == '') {
            masking.style.display = 'block'
            masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '手机号不能为空'
        } else if (pass.value == '') {
            masking.style.display = 'block'
            masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '密码不能为空'
        } else {
            document.form1.submit()
        }
    }
}








function nim() {
    // 导航  首页  我的  链接跳转
    var index_tap = document.getElementsByTagName('p')[0].children[0]
    var my_tap = document.getElementsByTagName('p')[0].children[1]
    touch.on(index_tap, 'tap', function () {
        window.location.href = './index.html'
    })
    touch.on(my_tap, 'tap', function () {
        window.location.href = './my.html'
    })

    // 注册  找回密码  链接跳转
    var register_tap = document.getElementsByClassName('foot')[0].children[0]
    var findpass_tap = document.getElementsByClassName('foot')[0].children[1]
    touch.on(register_tap, 'tap', function () {
        window.location.href = './register.html'
    })
    touch.on(findpass_tap, 'tap', function () {
        window.location.href = './findPassword.html'
    })
}




