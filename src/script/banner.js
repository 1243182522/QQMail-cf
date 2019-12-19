import { ajax, $, addClass, removeClass } from "./tools.js"

class Banner {
    constructor() {
        this.url = 'http://10.31.161.152/QQMail-cf/php/'
        this.banner = $('.slidebann')
        this.time = ''
        this.flag = true
    }
    init() {
        let _this = this
        ajax({
            url: _this.url + 'banner.php',
            dataType: 'json'
        }).then(function (data) {
            _this.render(data)
        })
    }
    render(data) {
        let strban = ''
        for (let v of data) {
            strban +=
                `<a href="javascript:;"><img src="${v.src}" alt=""></a>`
        }
        this.banner.innerHTML = strban + `<div class="flash_bar">
        <div class="dq"></div>
        <div class="no"></div>
        </div>`
        let banpic = $(".slidebann a", "all")
        let banbtn = $(".flash_bar div", "all")
        this.effect(banpic, banbtn)
        // this.hover(banpic, banbtn)
    }
    effect(banpic, banbtn) {
        banpic[1].style.display = 'none'
        this.time = setInterval(() => {
            if (this.flag == true) {
                banpic[0].style.display = 'none'
                banpic[1].style.display = 'block'
                removeClass(banbtn[0])
                addClass(banbtn[0], 'no')
                removeClass(banbtn[1])
                addClass(banbtn[1], 'dq')
                this.flag = false
            } else {
                banpic[0].style.display = 'block'
                banpic[1].style.display = 'none'
                removeClass(banbtn[0])
                addClass(banbtn[0], 'dq')
                removeClass(banbtn[1])
                addClass(banbtn[1], 'no')
                this.flag = true
            }
        }, 3500)
    }
    // hover(banbtn, banpic) {
    //     let _this = this;
    //     banbtn[0].onmouseover = function () {
    //         clearInterval(_this.time)
    //         banbtn[0].onmouseout = function () {

    //             _this.time = setInterval(() => {
    //                 banpic[0].style.display = 'none'
    //             banpic[1].style.display = 'block'
    //                 if (this.flag == true) {
    //                     banpic[0].style.display = 'none'
    //                     banpic[1].style.display = 'block'
    //                     removeClass(banbtn[0])
    //                     addClass(banbtn[0], 'no')
    //                     removeClass(banbtn[1])
    //                     addClass(banbtn[1], 'dq')
    //                     this.flag = false
    //                 } else {
    //                     banpic[0].style.display = 'block'
    //                     banpic[1].style.display = 'none'
    //                     removeClass(banbtn[0])
    //                     addClass(banbtn[0], 'dq')
    //                     removeClass(banbtn[1])
    //                     addClass(banbtn[1], 'no')
    //                     this.flag = true
    //                 }
    //             }, 2000)
    //         }
    //     }
    // }

}

export { Banner }
