import makeFetcher from '../factories/GenericFactory'

export const films = makeFetcher('films')

export const people = makeFetcher('people')

export const generic = (resource) => {
  return makeFetcher(resource)
}
