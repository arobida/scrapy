const index = require('./bin/index')
const desk = require('./bin/index').desk



test('checking output', () => {
	expect(index).toEqual({})
})
