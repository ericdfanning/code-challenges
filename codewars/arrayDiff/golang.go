package kata

func contains(arr []int, target int) bool {
  doesContain := false
  for _, num := range arr {
    if num == target {
      doesContain = true
      break
    }
  }
  return doesContain
}

func ArrayDiff(a, b []int) []int {
    var noDiffs []int

    for _, number := range a {
      if !contains(b, number) {
        noDiffs = append(noDiffs, number)
      }
    }
  return noDiffs
}