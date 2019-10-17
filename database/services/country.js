'use strict'

module.exports = function setupCountryService (CountryModel) {
  async function create (country) {
    const name = country.name
    const existing = await CountryModel.findOne({
      where: { name }
    })
    if (!existing) {
      const created = await CountryModel.create(country)
      return created || Promise.reject(new Error('error'))
    } else {
      return Promise.reject(new Error('Country exists with same name'))
    }
  }

  async function getAllCountries () {
    const q = await CountryModel.findAll({
      raw: true
    })
    return q || Promise.reject(new Error('No hay paises cargados'))
  }

  async function getByCode (code) {
    const q = await CountryModel.findOne({
      where: {
        code
      },
      raw: true
    })
    return q || Promise.reject(new Error('No se encontro país para el code'))
  }

  async function getByContinent (continent) {
    const q = await CountryModel.findAll({
      attributes: ['country', 'flag'],
      where: {
        in_continent: continent
      },
      raw: true
    })
    return q || Promise.reject(new Error('No se encentran paises en ese continente'))
  }

  async function getBySubregion (subregion) {
    const q = await CountryModel.findAll({
      attributes: ['country', 'flag'],
      where: {
        subregion: subregion
      },
      raw: true
    })
    return q || Promise.reject(new Error('No se encentran paises en ese continente'))
  }

  async function getNameByContinent (continent) {
    const q = await CountryModel.findAll({
      attributes: ['country'],
      where: {
        data: {
          region: continent
        }
      },
      raw: true
    })
    return q || Promise.reject(new Error('No se encentran paises en ese continente'))
  }

  async function getNameById (id) {
    const q = await CountryModel.findOne({
      attributes: ['country'],
      where: {
        id
      },
      raw: true
    })
    return q || Promise.reject(new Error('No se encentran paises en ese continente'))
  }

  return {
    create,
    getAllCountries,
    getByCode,
    getByContinent,
    getBySubregion,
    getNameByContinent,
    getNameById
  }
}
