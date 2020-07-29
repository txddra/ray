const Ray = function(length =0) {
  return {
length : length,
push: function(value){
this[this.length++]=value;
},
pop:function(){

}
}
}

module.exports = Ray
