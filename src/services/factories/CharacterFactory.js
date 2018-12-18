import Http from '../http'

const character = () => {
  const getAllCharacter = () => Http.get('/people')

  const getCharacter = (name) => Http.get('/people/?search=' + name)

  const getPlanetByUrl = (url) => Http.get(url)

  return {getAllCharacter, getCharacter, getPlanetByUrl}
}

export default character
