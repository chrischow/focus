const monthConversion = {
  0: 'Jan',
  1: 'Feb',
  2: 'Mar',
  3: 'Apr',
  4: 'May',
  5: 'Jun',
  6: 'Jul',
  7: 'Aug',
  8: 'Sep',
  9: 'Oct',
  10: 'Nov',
  11: 'Dec',
}

/**
 * Format date to dd MMM yyyy
 * @param {Date} date
 * @param {boolean} isUpperCase
 */
export const formatDate = (date, isUpperCase) => {
  const year = date.getFullYear()
  const month = monthConversion[date.getMonth()]
  const day = date.getDate()

  return `${day} ${isUpperCase ? month.toUpperCase() : month} ${year}`
}
