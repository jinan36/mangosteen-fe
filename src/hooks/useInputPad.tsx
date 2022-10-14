import NP from 'number-precision'
import { $$, $computed, $ref } from 'vue/macros'

export const useInputPad = () => {
  let amount = $ref('0.0')
  const plusIndex = $computed(() => amount.indexOf('+'))
  const minusIndex = $computed(() => amount.indexOf('-'))
  const plusOrMinusOnEnd = $computed(
    () => plusIndex >= amount.length - 1 || minusIndex >= amount.length - 1,
  )

  const amountList = $computed(() =>
    minusIndex > 0 ? amount.split('-') : amount.split('+'),
  )
  const currentAmount = $computed(() => amountList[amountList.length - 1])
  const dotIndex = $computed(() => currentAmount.indexOf('.'))

  const calculate = () => {
    return amountList.reduce((prev, current) => {
      return plusIndex > 0
        ? NP.plus(prev, current).toString()
        : NP.minus(prev, current).toString()
    })
  }

  const reset = () => {
    amount = '0.0'
  }

  const appendText = (n: number | string) => {
    const numberS = n.toString()

    if (amount.length >= 20)
      return

    if (
      dotIndex >= 0
      && currentAmount.length - dotIndex > 2
      && numberS !== '+'
      && numberS !== '-'
    )
      return

    if (numberS === '.') {
      if (dotIndex >= 0 || plusOrMinusOnEnd) {
        // 已经有小数点和加减号了
        return
      }
    }
    else if (numberS === '+' || numberS === '-') {
      if (plusOrMinusOnEnd) {
        return
      }
      else {
        if (plusIndex >= 0 || minusIndex >= 0)
          amount = calculate()
      }
    }
    if (amount.indexOf('-') === 0 || amount === '0')
      reset()
    if (amount === '0.0') {
      if (numberS === '+' || numberS === '-')
        return

      amount = ''
    }

    amount += numberS
  }

  const backspace = () => {
    if (amount === '0.0')
      return
    amount = amount.substring(0, amount.length - 1)
    if (amount.length === 0)
      reset()
  }

  return {
    amount: $$(amount),
    appendText,
    backspace,
    reset,
    calculate,
  }
}
