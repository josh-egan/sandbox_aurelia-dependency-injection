import chai from 'chai'
import sinon from 'sinon'
import Main from './main'

const expect = chai.expect

describe('Main', function() {
  let main
  let mockSpeaker

  beforeEach(function() {
    mockSpeaker = {
      getSpeech: sinon.stub()
    }
    main = new Main(mockSpeaker)
  })

  describe('.hello()', function() {

    beforeEach(function() {
      main.hello()
    })
    
    it('should call the getSpeech method', function() {
      expect(mockSpeaker.getSpeech.called).to.be.true
    })
  })
})
