let string, paddedString, length, diff

const applyLeft = _ => {
  apply()
  paddedString += string
}

const applyRight = _ => {
  paddedString += string
  apply()
}

const apply = _ => {
  for (let i = 0; i < diff; i++) paddedString += " "
}

const pad = (str, targetLength, direction) => {

  paddedString = ""
  string = String(str)
  length = string.length
  diff = Math.max(0, targetLength - length)

  switch (direction) {
    case "left":
      applyRight()
      break
    case "right":
      applyLeft()
      break
    default:
      applyRight()
  }

  return paddedString
}

module.exports = pad
