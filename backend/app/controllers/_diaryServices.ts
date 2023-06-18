import { DiaryEntry, newDiaryEntry, NoComment } from '../interfaces/types'
// import diaryData from '../services/diaries.json'

const diaries: DiaryEntry[] = diaryData as DiaryEntry[]

export const getEntries = (): DiaryEntry[] => diaries

export const findById = (id: number): NoComment | undefined => {
  const entry = diaries.find(d => d.id == id)
  if (entry != null) {
    const { comment, ...restOfDiary } = entry
    return restOfDiary
  }
  return undefined
}

export const getNoComment = (): NoComment[] => {
  return diaries.map(({ id, date, weather, visibility }) => {
    return {
      id,
      date,
      weather,
      visibility
    }
  })
}

export const addEntry = (newDiaryEntry: newDiaryEntry): DiaryEntry => {
  const newEntry = {
    // id: diaries.length + 1
    id: Math.max(...diaries.map(d => d.id)) + 1,
    ...newDiaryEntry
  }

  diaries.push(newEntry)
  return newEntry
}

export const getEntries = async (): Promise<PublicacionInterface[]> => {
  const publicaciones = await publicacion.findAll({ where: {} })
  return publicaciones
}
