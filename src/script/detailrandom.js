import { $, ajax } from "./tools.js";
class Detailran {
    constructor() {
        this.title = $('#wrap .wrapmain .comm-tit span, .pord-name', 'all')
        this.sid = parseInt(location.search.substring(location.search.indexOf('=')+1,9))
        this.description=$('.product-info .pord-tips')
        this.price=$('.pord-dispri')
        this.delprice=$('.pord-orpri')
        this.promotion=$('.pord-gift span')
        this.type=$('.pord-selbox')
    }

    init() {
        let _this = this
        ajax({
            url: 'http://10.31.161.152/QQMail-cf/php/detail.php',
            dataType: 'json'
        }).then((data) => {
            _this.detailran(data)
        })
    }
    detailran(data) {
        this.title[0].innerHTML = data[parseInt(this.sid)-1].title
        this.title[1].innerHTML = data[parseInt(this.sid)-1].title
        this.description.innerHTML = data[parseInt(this.sid)-1].description
        this.price.innerHTML=data[parseInt(this.sid)-1].price.split(',')[0]
        this.delprice.innerHTML=data[parseInt(this.sid)-1].price.split(',')[1]
        this.promotion.innerHTML=data[parseInt(this.sid)-1].promotion
        this.type.innerHTML=data[parseInt(this.sid)-1].type
    }
}
export { Detailran }