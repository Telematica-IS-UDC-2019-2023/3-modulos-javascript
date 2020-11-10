module.exports= function greetr(){
    this.message='Archivo greet4.js'
    this.greet = function(){
       console.log(this.message) 
    }
}