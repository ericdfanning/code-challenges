package kata

func SimpleMultiplication(n int) int {
  if n%2 == 0 {
    return n*8
  }
  return n*9
}

// someone elses below, is pretty smart. It's clean because 9 becomes the default
// and if it's 0, then it has no effect and works for both
func SimpleMultiplication(n int) int {
  return n * (8 + n % 2)
}