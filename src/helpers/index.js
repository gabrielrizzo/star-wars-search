export const returnArray = (data, attribute) => {
  var arr
  if (Array.isArray(data) === false) {
    arr = []
    arr.push(data) // se por acaso não for um array e sim só um obj
  } else {
    arr = data
  }
  if (attribute !== undefined) {
    const newArray = arr.map(m => (m[attribute]))
    return newArray
  } else {
    const newArray = arr.map(m => m)
    return newArray
  }
}
