export const numberFormatter = (value) => {
  const safeValue = String(value).replace(/[^\d]/g, '')
  const safeNumber = Number(safeValue)

  if (Number.isNaN(safeNumber) || !safeValue) {
    return ''
  }

  return safeNumber
}

export const rangeFormatter = (range = []) => (value) => {
  const [
    bottom,
    top
  ] = range

  const formattedNumber = numberFormatter(value)

  const isGreater = value > bottom
  const isLess = value < top

  if (isGreater && isLess) {
    return formattedNumber
  }

  const safeString = String(formattedNumber)
  const len = safeString.length
  return safeString.slice(0, len - 1)
}

export const alphanumericFormatter = (value) => {
  const safeValue = String(value).replace(/[^\d\w]/g, '')

  return safeValue
}
