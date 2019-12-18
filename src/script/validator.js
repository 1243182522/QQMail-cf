import { $, ajax } from "./tools.js";
class Validator{
    constructor(){
        this.inp=$('.inp-other','all')
        this.error=$('.error')
    }
    init(){
        
    }
    namevalidator(){
        let reg=/^(.[^(\s\b)]){24,}$/g
        if(this.inp[0].value==''){
            this.error[0].innerHTML='昵称不能为空'
            this.inp[0].style.border='1px solid #ff5b5b;'
        }
    }
}
export{Validator}