// 获取密码
var pass = document.getElementsByClassName('pass')[0]
var masking = document.getElementsByClassName('masking')[0]
var pass_code = document.getElementsByClassName('pass_code')[0]
var phone = document.getElementsByClassName('phone')[0]

// 密码验证
touch.on(pass, 'tap', function () {
    pass.placeholder = '密码由6位数字,字母组成'
    pass.onblur = function () {
        var reg = /^[a-zA-Z0-9]{6}$/
        var reg2 = /^\d{6}$/
        var reg3 = /^[a-zA-Z]{6}$/
        if (pass.value == '') {
            masking.style.display = 'block'
            masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '密码不能为空'
        } else if (reg2.test(pass.value)) {
            masking.style.display = 'block'
            masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '密码不能全为数字'
        } else if (reg3.test(pass.value)) {
            masking.style.display = 'block'
            masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '密码不能全为字母'
        } else if (!reg.test(pass.value)) {
            masking.style.display = 'block'
            masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '密码错误'
        } else if (reg.test(pass.value)) {

        }
    }
})
var btn = document.getElementsByClassName('btn')[0]
btn.ontouchstart = function () {
    if (phone.value == '') {
        masking.style.display = 'block'
        masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '手机号不能为空'
    } else if (pass.value == '') {
        masking.style.display = 'block'
        masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '密码不能为空'
    } else if (pass_code.value == '') {
        masking.style.display = 'block'
        masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '密码不能为空'
    } else {
        document.form1.submit()
    }
}