import { $, ajax } from "./tools.js";

class Regrandom {
    constructor() {
        this.url = 'http://localhost/QQMail-cf/php/'
        this.left=$('#left')
    }

    init() {
        let _this = this
        ajax({
            url: _this.url+'register.php',
            dataType: 'json'
        }).then(function (data) {
            _this.banner()
        })
    }
    banner(){
        let num=1
        setInterval(()=>{
            this.left.style.backgroundImage=`url(https://4.url.cn/zc/v3/img/01-${num++}.jpg)`
            if(num==5){
                num=1
            }
            
        },3000)
    }
}
export { Regrandom }