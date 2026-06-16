import { Slide } from '@/lib/quickread-types'
import systemDesignDay01 from '@/lib/quickread/system-design-day-01'
import systemDesignDay02 from '@/lib/quickread/system-design-day-02'
import systemDesignDay03 from '@/lib/quickread/system-design-day-03'
import dsaDay01 from '@/lib/quickread/dsa-patterns-day-01'
import reactUiDay01 from '@/lib/quickread/react-ui-day-01'

/**
 * Registry of Quick Read slide decks, keyed by "<challenge-slug>/<day-slug>".
 *
 * To add a new day's Quick Read:
 * 1. Create src/lib/quickread/<challenge>-<day>.ts exporting a Slide[] array
 * 2. Import it above
 * 3. Add an entry below with key "<challenge-slug>/day-NN"
 */
export const quickReadRegistry: Record<string, Slide[]> = {
  'system-design/day-01': systemDesignDay01,
  'system-design/day-02': systemDesignDay02,
  'system-design/day-03': systemDesignDay03,
  'dsa-patterns/day-01': dsaDay01,
  'react-ui/day-01': reactUiDay01,
}
