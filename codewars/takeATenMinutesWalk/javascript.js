function isValidWalk(walk) {
  if (walk.length !== 10) return false
  let x = 0
  let y = 0

  const directions = {
    'n': () => y += 1,
    's': () => y -= 1,
    'e': () => x += 1,
    'w': () => x -= 1,
  }
  
  walk.forEach(direction => {
    directions[direction]()
  })

  return x === 0 && y === 0
}