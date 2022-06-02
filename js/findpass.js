// 获取密码
var pass = document.getElementsByClassName('pass')[0]
var masking = document.getElementsByClassName('masking')[0]
var pass_code = document.getElementsByClassName('pass_code')[0]
var phone = document.getElementsByClassName('phone')[0]
// 确认密码
var pass_again = document.getElementsByClassName('pass_again')[0]
// 密码验证
touch.on(pass_again, 'tap', function () {
    pass_again.onblur = function () {
        if (pass_again.value == '') {
            masking.style.display = 'block'
            masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '确认密码不能为空'
        } else if (pass_again.value != pass.value) {
            masking.style.display = 'block'
            masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '两次密码不一致'
        } else if (pass_again.value == pass.value) {

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
        masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '验证码不能为空'
    } else if (pass_again.value == '') {
        masking.style.display = 'block'
        masking.firstElementChild.firstElementChild.firstElementChild.innerHTML = '确认密码不能为空'
    } else {
        document.form1.submit()
    }
}