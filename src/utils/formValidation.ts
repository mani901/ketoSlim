import { z } from 'zod'
import type { FormState } from '../types'

// Runtime schema for form inputs. This mirrors FormState and ensures
// external data is validated before use/navigation.
export const FormSchema = z.object({
  gender: z.enum(['male', 'female']),
  bodyFat: z.number().min(0).max(100),
  bmi: z.number().min(0).max(40),
  dailyCalorieTarget: z.number().min(0),
  cupsOfWater: z.number().int().min(0),
  weeklyWeightLossGoal: z.number().min(0),
  daysToSeeResults: z.number().int().min(1),
})

export type FormInput = z.input<typeof FormSchema>

// Coerce a loose record (e.g., from query params or storage) into a valid FormState.
export const coerceForm = (input: Record<string, unknown>): FormState => {
  const coerced = {
    gender: String(input.gender ?? 'male') as 'male' | 'female',
    bodyFat: Number(input.bodyFat ?? 0),
    bmi: Number(input.bmi ?? 0),
    dailyCalorieTarget: Number(input.dailyCalorieTarget ?? 0),
    cupsOfWater: Number(input.cupsOfWater ?? 0),
    weeklyWeightLossGoal: Number(input.weeklyWeightLossGoal ?? 0),
    daysToSeeResults: Number(input.daysToSeeResults ?? 0),
  }
  const parsed = FormSchema.safeParse(coerced)
  if (!parsed.success) {
    throw new Error('Invalid form data')
  }
  return parsed.data
}

