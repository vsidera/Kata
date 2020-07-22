//https://www.codewars.com/kata/514b92a657cdc65150000006/train/javascript

function solution(number){
 var sum = 0;
for(i = 0; i < 10; i++){
  if(i%3 == 0 || i%5 == 0){
    sum = sum + i;
  }
}
console.log(sum);
}
