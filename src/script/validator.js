import { $, ajax } from "./tools.js";
class Validator {
    constructor() {
        this.inp = $('.inp-other input', 'all')
        this.error = $('.error .error-tips', 'all')
        this.ok = $('.inp-ok', 'all')
        this.lable = $('.nametitle', 'all')
        this.passtip = $('.password-tips-group')
        this.phone = $('#phone')
        this.inptip = $('.input-tips-wrap')
        this.sub = $('#submit')
        this.userflag = true;
        this.telflag = true;
        this.passflag = true;
    }
    init() {
        this.namevalidator()
        this.submit()
    }
    namevalidator() {
        let _this = this

        //用户名验证
        this.inp[0].onfocus = function () {
            _this.lable[0].innerHTML = ''
            _this.error[0].innerHTML = ''
            _this.ok[0].style.background = ''
            this.style.borderColor = '#aaa'
            this.style.color = '#000'
        }
        this.inp[0].onblur = function () {
            let reguser1 = /^[a-zA-Z]{1,14}$/g;
            let reguser2 = /^[\u4e00-\u9fa5]+$/g;
            let reguser3 = /^[a-zA-Z\u4e00-\u9fa5]+$/g;
            if (this.value !== '') { //表单内容不为空，进行正则判断
                let len = this.value.replace(/[\u4e00-\u9fa5]/g, '**').length;
                if (len <= 14) { //判断长度
                    if (reguser1.test(this.value) || reguser2.test(this.value) || reguser3.test(this
                        .value)) { //正则判断
                        _this.ok[0].style.background = 'url(https://4.url.cn/zc/v3/img/tick.png) no-repeat'
                        _this.userflag = true;
                    } else {
                        _this.error[0].innerHTML = '用户名只能含有字母或中文';
                        this.style.borderColor = '#ff5b5b'
                        this.style.color = '#ff5b5b'
                        _this.userflag = false;
                    }
                } else {//长度过长
                    _this.error[0].innerHTML = '用户名长度太长';
                    this.style.borderColor = '#ff5b5b'
                    this.style.color = '#ff5b5b'
                    _this.userflag = false;
                }
            } else { //表单内容为空，报错
                _this.error[0].innerHTML = '用户名不不能为空';
                this.style.borderColor = '#ff5b5b'
                this.style.color = '#ff5b5b'
                _this.userflag = false;
            }
        }

        //密码验证
        this.inp[1].onfocus = function () {
            _this.passtip.style.height = 'auto'
            _this.passtip.style.display = 'block'
            _this.lable[1].innerHTML = ''
            _this.error[1].innerHTML = '';
            _this.ok[1].style.background = ''
            this.style.borderColor = '#aaa'
            this.style.color = '#000'
        };
        this.inp[1].onblur = function () {
            _this.passtip.style.display = 'none'
            if (this.value !== '') { //表单内容不为空，进行正则判断
                if (this.value.length >= 8 && this.value.length <= 16) {
                    let regnum = /\d+/;
                    let reglower = /[a-z]+/;
                    let regupper = /[A-Z]+/;
                    let other = /[\W\_]+/;
                    if (regnum.test(this.value) || reglower.test(this.value) || regupper.test(this.value) || other.test(this.value)) {
                        _this.ok[1].style.background = 'url(https://4.url.cn/zc/v3/img/tick.png) no-repeat'
                        _this.passflag = true
                    } else {
                        _this.error[1].innerHTML = '密码不符合规定';
                        this.style.borderColor = '#ff5b5b'
                        this.style.color = '#ff5b5b'
                        _this.passflag = false;
                    }
                } else {
                    _this.error[1].innerHTML = '密码长度有误';
                    this.style.borderColor = '#ff5b5b'
                    this.style.color = '#ff5b5b'
                    _this.passflag = false;
                }
            } else {
                _this.error[1].innerHTML = '密码不能为空';
                this.style.borderColor = '#ff5b5b'
                this.style.color = '#ff5b5b'
                _this.passflag = false;
            }
        }

        //手机号
        this.phone.onfocus = function () {
            _this.lable[2].innerHTML = ''
            _this.error[2].innerHTML = ''
            _this.ok[2].style.background = ''
            this.style.borderColor = '#aaa'
            this.style.color = '#000'
        }
        this.phone.onblur = function () {
            let phonenumreg = /^[1](([3][0-9])|([4][5-9])|([5][0-3,5-9])|([6][5,6])|([7][0-8])|([8][0-9])|([9][1,8,9]))[0-9]{8}$/
            if (this.value != '') {
                if (phonenumreg.test(this.value)) {
                    _this.ok[2].style.background = 'url(https://4.url.cn/zc/v3/img/tick.png) no-repeat'
                    _this.telflag = true
                }
            } else {
                _this.error[2].innerHTML = '手机号不能为空';
                _this.inptip.style.visibility = 'hidden'
                this.style.borderColor = '#ff5b5b'
                this.style.color = '#ff5b5b'
                _this.telflag = false;
            }
        }
    }
    
    submit() {
        let _this = this
        this.sub.onclick = function () {
            _this. username = _this.inp[0].value
            _this. password = _this.inp[1].value
            console.log(123);
            console.log(_this.inp[1].value);
            
            _this. phonenum = _this.phone.value
            if (_this.inp[0].value === '') {
                _this.error[0].innerHTML = '用户名不不能为空';
                this.style.borderColor = '#ff5b5b'
                this.style.color = '#ff5b5b'
                _this.userflag = false;
            }
            if (_this.inp[1].value === '') {
                _this.error[1].innerHTML = '密码不能为空';
                this.style.borderColor = '#ff5b5b'
                this.style.color = '#ff5b5b'
                _this.passflag = false;
            }
            if (_this.phone.value === '') {
                _this.error[2].innerHTML = '手机号不能为空';
                _this.inptip.style.visibility = 'hidden'
                this.style.borderColor = '#ff5b5b'
                this.style.color = '#ff5b5b'
                _this.telflag = false;
            }
            if (!_this.userflag || !_this.telflag || !_this.passflag) {
                return false
            } else {
                ajax({
                    url: 'http://10.31.161.152/QQMail-cf/php/register.php',
                    type: 'post',
                    data: {
                        username: _this.username,
                        password: _this.password,
                        phonenum: _this.phonenum
                    }
                })
                alert('注册成功！')
            }
        }
    }
}
export { Validator }