import {
  CircleDot,
  Droplets,
  Ear,
  Gem,
  Smile,
  Sparkles,
  Stethoscope,
  Zap,
  type LucideIcon,
} from 'lucide-react'
import type { ServiceId } from '../content/site'

export const serviceIcons: Record<ServiceId, LucideIcon> = {
  dermatology: Sparkles,
  laser: Zap,
  cosmetic: Gem,
  dental: Smile,
  general: Stethoscope,
  cupping: CircleDot,
  iv: Droplets,
  ent: Ear,
}
