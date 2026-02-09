function squareSum(numbers){
  return numbers.reduce((accum, num = 0) => accum + Math.pow(num, 2), 0)
} // always fun using reduce