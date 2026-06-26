import { Slide } from '@/lib/quickread-types'
import systemDesignDay01 from '@/lib/quickread/system-design-day-01'
import systemDesignDay02 from '@/lib/quickread/system-design-day-02'
import systemDesignDay03 from '@/lib/quickread/system-design-day-03'
import systemDesignDay04 from '@/lib/quickread/system-design-day-04'
import systemDesignDay05 from '@/lib/quickread/system-design-day-05'
import systemDesignDay06 from '@/lib/quickread/system-design-day-06'
import systemDesignDay07 from '@/lib/quickread/system-design-day-07'
import systemDesignDay08 from '@/lib/quickread/system-design-day-08'
import systemDesignDay09 from '@/lib/quickread/system-design-day-09'
import dsaDay01 from '@/lib/quickread/dsa-patterns-day-01'
import dsaDay02 from '@/lib/quickread/dsa-patterns-day-02'
import dsaDay03 from '@/lib/quickread/dsa-patterns-day-03'
import dsaDay04 from '@/lib/quickread/dsa-patterns-day-04'
import dsaDay05 from '@/lib/quickread/dsa-patterns-day-05'
import dsaDay06 from '@/lib/quickread/dsa-patterns-day-06'
import dsaDay07 from '@/lib/quickread/dsa-patterns-day-07'
import reactUiDay01 from '@/lib/quickread/react-ui-day-01'
import reactUiDay02 from '@/lib/quickread/react-ui-day-02'
import reactUiDay03 from '@/lib/quickread/react-ui-day-03'
import reactUiDay04 from '@/lib/quickread/react-ui-day-04'
import reactUiDay05 from '@/lib/quickread/react-ui-day-05'
import reactUiDay06 from '@/lib/quickread/react-ui-day-06'
import reactUiDay07 from '@/lib/quickread/react-ui-day-07'

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
  'system-design/day-04': systemDesignDay04,
  'system-design/day-05': systemDesignDay05,
  'system-design/day-06': systemDesignDay06,
  'system-design/day-07': systemDesignDay07,
  'system-design/day-08': systemDesignDay08,
  'system-design/day-09': systemDesignDay09,
  'dsa-patterns/day-01': dsaDay01,
  'dsa-patterns/day-02': dsaDay02,
  'dsa-patterns/day-03': dsaDay03,
  'dsa-patterns/day-04': dsaDay04,
  'dsa-patterns/day-05': dsaDay05,
  'dsa-patterns/day-06': dsaDay06,
  'dsa-patterns/day-07': dsaDay07,
  'react-ui/day-01': reactUiDay01,
  'react-ui/day-02': reactUiDay02,
  'react-ui/day-03': reactUiDay03,
  'react-ui/day-04': reactUiDay04,
  'react-ui/day-05': reactUiDay05,
  'react-ui/day-06': reactUiDay06,
  'react-ui/day-07': reactUiDay07,
}
