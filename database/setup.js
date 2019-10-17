const db = require('./')

async function setup() {
  let conn = {}
  try {
    conn = await db()
  } catch (error) {
    throw error
  }

  console.log('User: ', conn.User)
}

setup()