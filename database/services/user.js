'use strict'

// const uuid = require('uuid-base62')
// const utils = require('./utils')

module.exports = function setupUserService (UserModel) {
  // function _saveImage (image, callback) {}
  // Guarda la foto de perfil del usuario

  function findById (id) {
    return UserModel.findByPk(id)
  }

  function findByUsername (username) {
    return UserModel.findOne({
      where: {
        username
      }
    })
  }

  async function findByEmail (email) {
    const q = await UserModel.findOne({
      where: {
        email
      },
      raw: true
    })
    return q || Promise.reject(new Error('No se encontro por email'))
  }

  function findByName (name) {
    return UserModel.findAll({
      where: {
        name
      }
    })
  }

  function findConnected () {
    return UserModel.findAll({
      where: {
        connected: true
      }
    })
  }

  function findAll () {
    return UserModel.findAll()
  }

  async function saveUser (user) {
    const cond = {
      where: { username: user.username }
    }
    const existingUser = await UserModel.findOne(cond)
    if (!existingUser) {
      const newUser = (await UserModel.create(user)).toJSON()
      return newUser
    }
    return Promise.reject(new Error('User already exists'))
  }

  async function addPhotoURL (username, photo) {
    const result = await UserModel.update({
      photo
    },
    {
      where: { username }
    })
    return result || Promise.reject(new Error('Photo no add'))
  }

  async function updateInfo (username, payload) {
    const result = await UserModel.update({
      name: payload.name,
      lastname: payload.lastname,
      datebirth: payload.datebirth || null,
      service: payload.service,
      photo: payload.fileName
    },
    {
      where: { username }
    }
    )
    return result || Promise.reject(new Error('Info user no add'))
  }

  return {
    findById,
    findByUsername,
    findByEmail,
    findByName,
    findConnected,
    findAll,
    saveUser,
    addPhotoURL,
    updateInfo
  }
}
