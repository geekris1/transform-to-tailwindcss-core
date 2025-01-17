import { getFirstName, getVal, isCalc, transformImportant } from './utils'

export function max(key: string, val: string) {
  const [value, important] = transformImportant(val)

  const all = key.split('-')
  // calc value has '-'
  // getFirstName causes the value to be lost
  const attributeValue = isCalc(value) ? getVal(value) : getVal(getFirstName(value))
  return `${important}${all[0]}-${all[1][0]}${attributeValue}`
}
