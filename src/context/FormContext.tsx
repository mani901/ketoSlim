import React, { createContext, useContext, useMemo, useState, useEffect } from 'react'
import type { FormState } from '@/types'
import { FormSchema } from '@/utils/formValidation'

interface FormContextType {
  form: FormState | null
  setForm: (next: FormState) => void
  resetForm: () => void
}

const FormContext = createContext<FormContextType | undefined>(undefined)

const STORAGE_KEY = 'formState'

export const FormProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  // Keep the form state globally to avoid losing data on navigation/reload.
  // Persist only valid data in sessionStorage to survive soft reloads.
  const [form, setFormState] = useState<FormState | null>(() => {
    try {
      const raw = sessionStorage.getItem(STORAGE_KEY)
      if (!raw) return null
      const parsed = JSON.parse(raw)
      const validated = FormSchema.safeParse(parsed)
      return validated.success ? validated.data : null
    } catch {
      return null
    }
  })

  useEffect(() => {
    if (form) {
      sessionStorage.setItem(STORAGE_KEY, JSON.stringify(form))
    }
  }, [form])

  const setForm = (next: FormState): void => setFormState(next)
  const resetForm = (): void => setFormState(null)

  const value = useMemo<FormContextType>(() => ({ form, setForm, resetForm }), [form])

  return <FormContext.Provider value={value}>{children}</FormContext.Provider>
}

export const useFormContext = (): FormContextType => {
  const ctx = useContext(FormContext)
  if (!ctx) throw new Error('useFormContext must be used within a FormProvider')
  return ctx
}


