export const setBoolModifiers = (obj) => {
  let modifiers = []
  const objKeys = Object.keys(obj)
  const objVals = Object.values(obj)
  objVals.forEach((val, index) => {
    if(val) modifiers.push(objKeys[index])
  })
  return modifiers
}