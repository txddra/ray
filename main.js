const Ray = function(length =0) {
  return {
length : length,
push: function(value){
this[this.length++]=value;
},
pop:function(){
    let last = this[this.length - 1]
    delete this[this.length -1 ]
    this.length--
    return last

}
}
}

module.exports = Ray
