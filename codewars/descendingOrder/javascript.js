function descendingOrder(n){
  return Number(String(n).split('').sort((a,b) => b - a).join(''))
}

// too easy

// looking at others, I could have done + to force a number instead of Number()
// I could have just used reverse instead of sort.