import Http from '../http'

const makeFetcher = (resource) => {
  const getAllData = () => Http.get(`/${resource}`)

  const getDataByQuery = (query) => Http.get(`/${resource}/?search=${query}`)

  return { getAllData, getDataByQuery }
}

export default makeFetcher
