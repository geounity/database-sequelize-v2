'use strict'

const uuid = require('uuid-base62')

const user = {
  username: 'seba',
  email: 'sebastiancardoso92@gmail.com',
  password: 'foo123',
  name: 'Sebastian',
  datebirth: new Date(),
  photo: uuid.v4(),
  connected: true,
  oauthID: null,
  society_id: 1
}

const users = [
  user,
  extend(user, { username: 'charly', password: uuid.uuid(), email: `${uuid.v4()}@debategloba.test`, name: 'Carlos', connected: false, datebirth: new Date(), society_id: 1 }),
  extend(user, { username: 'luis', password: uuid.uuid(), email: `${uuid.v4()}@debategloba.test`, name: 'Alberto', connected: false, datebirth: new Date(), society_id: 1 }),
  extend(user, { username: 'gustavo', password: uuid.uuid(), email: `${uuid.v4()}@debategloba.test`, name: 'Gustavo', connected: false, datebirth: new Date(), society_id: 2 }),
  extend(user, { username: 'lenny', password: uuid.uuid(), email: `${uuid.v4()}@debategloba.test`, name: 'Jhon', connected: true, datebirth: new Date(), society_id: 2 }),
  extend(user, { username: 'simpson', password: uuid.uuid(), email: `${uuid.v4()}@debategloba.test`, name: 'Homero', connected: false, datebirth: new Date(), society_id: 3 }),
  extend(user, { username: 'fede', password: uuid.uuid(), email: `${uuid.v4()}@debategloba.test`, name: 'Federuci', connected: false, datebirth: new Date(), society_id: 4 }),
  extend(user, { username: 'tompson', password: uuid.uuid(), email: `${uuid.v4()}@debategloba.test`, name: 'Pedro', connected: false, datebirth: new Date(), society_id: 5 }),
  extend(user, { username: 'albizures', password: uuid.uuid(), email: `${uuid.v4()}@debategloba.test`, name: 'Tomas', connected: false, datebirth: new Date(), society_id: 6 }),
  extend(user, { username: 'bayron', password: uuid.uuid(), email: `${uuid.v4()}@debategloba.test`, name: 'Durazno', connected: false, datebirth: new Date(), society_id: 7 }),
  extend(user, { username: 'bambi', password: uuid.uuid(), email: `${uuid.v4()}@debategloba.test`, name: 'Ludmila', connected: false, datebirth: new Date(), society_id: 7 }),
  extend(user, { username: 'marcoro', password: uuid.uuid(), email: `${uuid.v4()}@debategloba.test`, name: 'Grisel', connected: false, datebirth: new Date(), society_id: 7 }),
  extend(user, { username: 'piocolo', password: uuid.uuid(), email: `${uuid.v4()}@debategloba.test`, name: 'Olga', connected: false, datebirth: new Date(), society_id: 8 }),
  extend(user, { username: 'goku', password: uuid.uuid(), email: `${uuid.v4()}@debategloba.test`, name: 'Kakaroto', connected: false, datebirth: new Date(), society_id: 8 }),
  extend(user, { username: 'vegeta', password: uuid.uuid(), email: `${uuid.v4()}@debategloba.test`, name: 'Juan', connected: false, datebirth: new Date(), society_id: 9 })
]
// Clona un objeto y reemplaza ciertos valores
function extend (obj, values) {
  const clone = Object.assign({}, obj)
  return Object.assign(clone, values)
}

module.exports = {
  single: user,
  all: users,
  connected: users.filter(u => u.connected), // funcion de arreglo de javascript
  findById: id => users.filter(u => u.id === id).shift(),
  findByUsername: username => users.filter(u => u.username === username).shift(),
  findByEmail: email => users.filter(u => u.email === email).shift(),
  findByName: name => users.filter(u => u.name === name).shift()
}
