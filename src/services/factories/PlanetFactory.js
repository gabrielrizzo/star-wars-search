import Http from '../http'

const planet = () => {
  const getPlanetByUrl = (url) => Http.get(url)

  const getAllPlanet = () => Http.get('/planets')

  const getPlanet = (name) => Http.get('/planets/?search=' + name)

  return {getPlanetByUrl, getAllPlanet, getPlanet}
}

export default planet
