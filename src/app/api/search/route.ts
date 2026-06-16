import { NextResponse } from 'next/server'
import { getAllChallenges, getChallengeDays } from '@/lib/content'

export async function GET() {
  const challenges = getAllChallenges()
  
  const searchIndex = challenges.flatMap((c) => {
    const days = getChallengeDays(c.slug)
    
    const items = [{
      id: c.slug,
      title: c.title,
      description: c.description,
      type: 'challenge',
      url: `/${c.slug}`
    }]
    
    days.forEach(d => {
      items.push({
        id: `${c.slug}-${d.slug}`,
        title: d.title,
        description: d.topic || c.title,
        type: 'day',
        url: `/${c.slug}/${d.slug}`
      })
    })
    
    return items
  })
  
  return NextResponse.json(searchIndex)
}
