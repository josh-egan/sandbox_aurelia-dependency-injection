import Speaker from './speaker'
import {inject} from 'aurelia-dependency-injection'

@inject(Speaker)
export default class Main {
  constructor(speaker) {
    this.speaker = speaker
  }

  hello() {
    return this.speaker.getSpeech()
  }
}
