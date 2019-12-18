import { ajax, $ } from "./tools.js"

class Random {
    constructor() {
        this.url = 'http://localhost/QQMail-cf/php/'
        this.urls = 'http://localhost/QQMail-cf/php/'
        this.bigpic = $(".adbox", "all")
        this.smallpic = $(".clearfix li", "all")
        this.nav = $(".bottommain .all")
        this.xialaanniu = $('.icon-xialaanniu')
        this.navlist = $('.secondnav')
        this.login = $('.topmain .login')
        this.loginbox = $('#background')
        this.close = $('#background #loginbox .close')
        this.qqlogin = $('.login-method .qq-login a')
        this.wxlogin = $('.login-method .wx-login a')
        this.qqloginbox = $('#loginbox .qq')
        this.wxloginbox = $('#loginbox .wx')
        this.qqlogintext = $('.login-method .qq-login a span')
        this.wxlogintext = $('.login-method .wx-login a span')
        this.zhlogin = $('.checklist a')
        this.zhloginbox = $('.zh')
        this.zhtext = $('.uinArea .inputOuter')
        this.zhinp = $('.uinArea .inputstyle')
        this.password = $('.pwdArea .inputOuter')
        this.passwordinp = $('.pwdArea .inputstyle')
        this.submit = $('.submit .login_button .btn')
        this.top = $('#totop a')
        this.floornav = $('.navmain .list .title', 'all')

    }
    init() {
        let _this = this
        ajax({
            url: _this.url + 'indexrandom.php',
            dataType: 'json'
        }).then(function (data) {
            _this.rander(data)
        })
        ajax({
            url: _this.urls + 'indexrandom(s).php',
            dataType: 'json'
        }).then(function (datas) {
            _this.randers(datas)
        })
        this.effect()
        this.floor()
    }
    rander(data) {
        for (let i = 0; i < this.bigpic.length; i++) {
            let str = ''
            str +=
                `
                    <a href="javascript:;" class="ad-link">
                    <img src="${data[i].src}" alt="" width="1180" height="240">
                    </a>
                `
            this.bigpic[i].innerHTML = str
        }
    }
    randers(datas) {
        for (let j = 0; j < this.smallpic.length; j++) {
            let strs = ''
            strs +=
                `
            <a href="javascript:;">
            <img src="${datas[j].src}" alt="" style="width:100%;">
            <div class="good-info">
                <p class="good-name">${datas[j].title}</p>
                <p class="good-pri">￥${datas[j].price}</p>
            </div>
            </a>
            `
            this.smallpic[j].innerHTML = strs
        }
    }
    effect() {
        let that = this
        let ft = true
        this.nav.onclick = () => {
            if (ft === true) {
                that.navlist.style.display = 'block'
                that.xialaanniu.style.visibility = 'hidden'
                ft = false
            } else {
                that.navlist.style.display = 'none'
                that.xialaanniu.style.visibility = 'visible'
                ft = true
            }
        }
        this.login.onclick = () => {
            that.loginbox.style.display = 'block'
        }
        this.close.onclick = () => {
            that.loginbox.style.display = 'none'
        }
        this.qqlogin.onclick = () => {
            that.qqloginbox.style.display = 'block'
            that.wxloginbox.style.display = 'none'
            that.zhloginbox.style.display = 'none'
            that.qqlogin.style.background = '#31a4f6'
            that.wxlogin.style.background = '#f1f1f1'
            that.qqlogintext.style.color = '#ffffff'
            that.wxlogintext.style.color = '#b1b1b1'
        }
        this.wxlogin.onclick = () => {
            that.wxloginbox.style.display = 'block'
            that.qqloginbox.style.display = 'none'
            that.zhloginbox.style.display = 'none'
            that.wxlogin.style.background = '#4ab218'
            that.qqlogin.style.background = '#f1f1f1'
            that.qqlogintext.style.color = '#b1b1b1'
            that.wxlogintext.style.color = '#ffffff'
        }
        this.zhlogin.onclick = () => {
            that.zhloginbox.style.display = 'block'
            that.qqloginbox.style.display = 'none'
            that.wxloginbox.style.display = 'none'
        }
        this.zhinp.onfocus = () => {
            that.zhtext.style.backgroundPosition = '-1px -45px'
            that.zhinp.onblur = () => {
                that.zhtext.style.backgroundPosition = '-1px -1px'
            }
        }
        this.passwordinp.onfocus = () => {
            that.password.style.backgroundPosition = '-1px -45px'
            that.passwordinp.onblur = () => {
                that.password.style.backgroundPosition = '-1px -1px'
            }
        }
        this.submit.onclick = () => {
            alert('登陆成功')
            that.login.style.visibility = 'hidden'
            that.loginbox.style.display = 'none'
            return false
        }
    }
    floor() {
        let these = this
        this.top.onclick = () => {
            scrollTo(0, 0)
        }
        let floorarr = [2700, 2000, 1300, 500]
        for (let i = 0; i < this.floornav.length; i++) {
            this.floornav[i].onclick = () => {
                document.documentElement.scrollTop = floorarr[i]
                these.navlist.style.display = 'none'
                these.xialaanniu.style.visibility = 'visible'
            }
        }
    }
}
export { Random }
