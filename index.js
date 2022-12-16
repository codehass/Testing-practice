function  stringLength(string) {
  if(string.length >= 1 && string.length < 10){
    return string.length;
  }else{
    return 'Erorr';
  }
  
}

function reverseString(string) {
  return string.split("").reverse().join("");
}

class calculator {
  // Constructor
  constructor(a,b) {  
    this.a = a;
    this.b = b;
  }
  
  //Add methode
  add(a,b){
    return this.a + this.b;
  }
  
  //subtract methode
  subtract(){
    return this.a - this.b;
  }
  
  //divide methode
  divide(){
    if(this.b == 0){
      return 'Impossible';
    }else{
      return this.a / this.b;
    }
    
  }
  
  //multiply methode
  multiply(){
    return this.a * this.b;
  }
}

function capitalize(string) {
  return str2 = string.charAt(0).toUpperCase() + string.slice(1);

}

module.exports = {reverseString, stringLength, calculator,capitalize };

