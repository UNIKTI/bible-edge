
const test = require('ava')
const { connection, errorHandler } = require('./setup')
const dependencies = { connection, errorHandler }
const passages = require('../passages')(dependencies)

test('Obter Passagem por Id', async t => {
  const expected = await passages.one(1)
  t.is(expected.passage.text, 'No princípio Deus criou os céus e a terra.')
})

test('Obter Próxima Passagem Bíblica Válida', async t => {
  const expected = await passages.next(31061)
  t.is(expected.passage.text, 'A graça do Senhor Jesus seja com todos. Amém.')
})

test('Obter Passagem Bíblica Anterior Válida', async t => {
  const expected = await passages.previous(2)
  t.is(expected.passage.text, 'No princípio Deus criou os céus e a terra.')
})
