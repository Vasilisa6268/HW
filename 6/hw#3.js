//#3
 function work(func) {
    func();
    return function() {
     console.log('21'+'390')
    }
  }
 function argFunc(){
   console.log('12566')
 }
 const resultFunc = work(argFunc);
 resultFunc();
 //"12566"
 //"21390"
