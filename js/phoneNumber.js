function createPhoneNumber(numbers){
 var format = "(xxx) xxx-xxxx";
  for (var i=0; i<10; i++){
    format = format.replace('x', numbers[i]);
  }

  return format;
}
