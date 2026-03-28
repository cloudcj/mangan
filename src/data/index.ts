const modules = import.meta.glob('./recipes/*.json', { eager: true })

export interface Macros {
  calories: number
  protein: number
  carbs: number
  fat: number
}

export interface Recipe {
  slug: string
  title: string
  description: string
  category: string[]
  tags?: string[]
  prepTime: string
  cookTime: string
  servings: number
  servingSize: string
  difficulty: string
  image: string
  ingredients: string[]
  instructions: string[]
  macros: Macros
  featured: boolean
}

export const recipes: Recipe[] = Object.values(modules) as Recipe[]

export const categories = [...new Set(recipes.flatMap(r => r.category))]

export function getRecipeBySlug(slug: string): Recipe | undefined {
  return recipes.find(r => r.slug === slug)
}

