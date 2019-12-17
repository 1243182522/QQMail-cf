import { ajax, $ } from "./tools.js"

class Random {
    constructor() {
        this.url = 'http://localhost/QQMail-cf/php/'
        this.urls = 'http://localhost/QQMail-cf/php/'
        this.bigpic = $(".adbox", "all")
        this.smallpic = $(".clearfix li", "all")
        this.nav=$(".bottommain .all")
        this.navlist=$('.secondnav')
        this.navtext=$('.secondnav .navmain li ul li a')
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
    }
    rander(data) {
        for (let i = 0; i < this.bigpic.length; i++) {
            let str = ''
            str +=
                `
                    <a href="" class="ad-link">
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
            <a href="">
            <img src="${datas[j].src}" alt="" style="width:100%;">
            <div class="good-info">
                <p class="good-name">${datas[j].title}</p>
                <p class="good-pri">￥${datas[j].price}</p>
            </div>
            </a>
            `
            this.smallpic[j].innerHTML=strs
        }
    }
    effect(){
        let that=this
        this.nav.onmouseover=function(){
            that.navlist.style.display='block'
            that.navlist.onmouseout=function(){
                that.navlist.style.display='none'
            }
            that.navtext.onmouseover=function(){
                that.navlist.style.display='block'

            }

        }
    }
}
export { Random }