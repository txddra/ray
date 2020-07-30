const Ray = function(length =0) {
  return {
length : length,
push: function(value){
this[this.length++]=value;
},
pop: function(){
    let last = this[this.length - 1]
    delete this[this.length -1 ]
    this.length--
    return last

},
includes: function(given){
    for(let i =0; i < this.length; i++){
        if(this[i] === given){
return true
        }
        else if(this[i]!== given){
return false
        }
    }
    // if(given === true){

// return true
    // }

}
}
}

module.exports = Ray
