export interface Country {
  code: string
  name: string
  native: string
  phone: string
  continent: Continent
  capital: string
  currency: string
  languages: string
  emoji: string
  emojiU: string
  states: string
}

export interface Continent {
  code: String
  name: String
  countries: Country[]
}

export interface Language {
  code: String
  name: String
  native: String
  rtl: Boolean
}

export interface State {
  code: String
  name: String
  country: Country
}
