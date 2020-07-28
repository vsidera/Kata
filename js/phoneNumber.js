function createPhoneNumber(numbers){
 var format = "(xxx) xxx-xxxx";
  for (var i=0; i<10; i++){
    format = format.replace('x', numbers[i]);
  }

  return format;
}

//https://www.codewars.com/kata/525f50e3b73515a6db000b83/train/javascript
