import { PropType } from 'vue'
import { useRouter } from "vue-router";

export function required<T>(type: PropType<T>) {
  return { type, required: true } as const
}

export function optional<T>(type: PropType<T>) {
  return { type, required: false } as const
}

export function withDefault<T>(type: PropType<T>, defaultValue: (() => T)) {
  return { type, default: defaultValue } as const
}

export const navigateToSurvey = (id: string) => {
  const { push } = useRouter()
  push('/survey/' +id)
}