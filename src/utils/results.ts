import type { FormState, ResultDataItem } from '../types'

// Safely convert unknown values to numbers; return null if not finite.
const toNum = (v: unknown): number | null => {
  const n = Number(v)
  return Number.isFinite(n) ? n : null
}

// Create a derived results array by applying the user's form values
// to the static results content. This is pure and testable.
export const hydrateResults = (
  base: ReadonlyArray<ResultDataItem>,
  form: Partial<FormState>
): ResultDataItem[] => {
  const { gender, bodyFat, bmi, dailyCalorieTarget, cupsOfWater, weeklyWeightLossGoal, daysToSeeResults } = form

  return base.map((item) => {
    const updated: ResultDataItem = { ...item }

    if (item.id === 'body-fat' && typeof bodyFat === 'number') {
      updated.title = `Your Body Fat Percentage Is ${bodyFat}%`
    }
    if (item.id === 'bmi' && typeof bmi === 'number') {
      updated.title = `Your BMI Is ${bmi}`
    }
    if (item.id === 'calories' && typeof dailyCalorieTarget === 'number') {
      updated.highlight = `${dailyCalorieTarget} Calories`
    }
    if (item.id === 'hydration' && typeof cupsOfWater === 'number') {
      updated.title = `Your Body Needs ${cupsOfWater} Cups of Water Daily`
    }
    if (item.id === 'weight-rate' && typeof weeklyWeightLossGoal === 'number') {
      updated.highlight = `${weeklyWeightLossGoal} lbs / Week`
    }
    if (item.id === 'timeline' && typeof daysToSeeResults === 'number') {
      updated.title = `You Could See Results in as Little as ${daysToSeeResults} Days`
    }

    if (item.conditionalParagraphs && item.conditionalParagraphs.length > 0) {
      let selected: string | undefined

      if (item.id === 'body-fat' && typeof bodyFat === 'number') {
        const bf = toNum(bodyFat)
        const g = (gender || '').toLowerCase()
        if ((g === 'male' && (bf ?? 0) < 24) || (g === 'female' && (bf ?? 0) < 31)) {
          selected = item.conditionalParagraphs[0]
        } else if ((g === 'male' && (bf ?? 0) >= 25 && (bf ?? 0) <= 31) || (g === 'female' && (bf ?? 0) >= 32 && (bf ?? 0) <= 39)) {
          selected = item.conditionalParagraphs[1]
        } else if ((g === 'male' && (bf ?? 0) >= 32) || (g === 'female' && (bf ?? 0) >= 40)) {
          selected = item.conditionalParagraphs[2]
        }
      } else if (item.id === 'bmi' && typeof bmi === 'number') {
        const bmiVal = toNum(bmi)
        if ((bmiVal ?? 0) < 26) {
          selected = item.conditionalParagraphs[0]
        } else if ((bmiVal ?? 0) >= 30 && (bmiVal ?? 0) <= 34.9) {
          selected = item.conditionalParagraphs[1]
        } else if ((bmiVal ?? 0) >= 35) {
          selected = item.conditionalParagraphs[2]
        }
      } else if (item.id === 'calories' && typeof dailyCalorieTarget === 'number') {
        const cal = toNum(dailyCalorieTarget)
        if ((cal ?? 0) >= 1300 && (cal ?? 0) <= 1500) {
          selected = item.conditionalParagraphs[0]
        } else if ((cal ?? 0) >= 1100 && (cal ?? 0) <= 1299) {
          selected = item.conditionalParagraphs[1]
        } else if ((cal ?? 0) < 1100) {
          selected = item.conditionalParagraphs[2]
        }
      } else if (item.id === 'hydration' && typeof cupsOfWater === 'number') {
        const cups = toNum(cupsOfWater)
        if ((cups ?? 0) > 6) {
          selected = item.conditionalParagraphs[0]
        } else if ((cups ?? 0) >= 3 && (cups ?? 0) <= 6) {
          selected = item.conditionalParagraphs[1]
        } else if (cups === 2) {
          selected = item.conditionalParagraphs[2]
        } else if ((cups ?? 0) <= 1) {
          selected = item.conditionalParagraphs[3]
        }
      }

      if (typeof selected === 'string') {
        updated.selectedConditionalParagraph = selected
      }
    }

    return updated
  })
}

