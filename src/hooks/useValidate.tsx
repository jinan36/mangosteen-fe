import { ref } from 'vue'

interface FData {
  [k: string]: string | number | null | undefined | FData
}
interface RequiredRule {
  type: 'required'
}
interface PatternRule {
  type: 'pattern'
  regex: RegExp
}
type Rule<T> = {
  key: keyof T
  message: string
} & (RequiredRule | PatternRule)

export type Rules<T> = Rule<T>[]

type Errors<T> = {
  [k in keyof T]?: string[]
}
export const useValidate = <T extends FData>(formData: T, rules: Rules<T>) => {
  const errors = ref<Errors<T>>({})

  const validate = () => {
    errors.value = {}
    rules.forEach((rule) => {
      const { key, message, type } = rule
      const value = formData[key]
      switch (type) {
        case 'required':
          if (isEmpty(value)) {
            if (!errors.value[key])
              errors.value[key] = []
            errors.value[key].push(message)
          }
          break
        case 'pattern':
          if (!isEmpty(value) && !rule.regex.test(value!.toString())) {
            errors.value[key] = errors.value[key] ?? []
            errors.value[key]?.push(message)
          }
          break
        default:
      }
    })
  }

  return {
    validate,
    errors,
  }
}

function isEmpty(value: null | undefined | string | number | FData) {
  return value === null || value === undefined || value === ''
}
