import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  title = 'Password Generator';
  length = 5
  result = ''
  useLetters = false
  useNumbers = false
  useSymbols = false

  onPasswordLengthChange (length: number) {
    this.length = length
  }

  onChangeUseLetters () {
    this.useLetters = !this.useLetters
  }
  
  onChangeUseNumbers() {
    this.useNumbers = !this.useNumbers
  }
  
  onChangeUseSymbols() {
    this.useSymbols = !this.useSymbols
  }

  onButtonClick () {

    this.result = ''
    const letters = this.useLetters ? 'abcdefghijklmnoprstuvwxyzABCDEFGHIJKLMNOPRSTUVWXYZ' : ''
    const numbers = this.useNumbers ? '1234567890' : ''
    const symbols = this.useSymbols ? '~!@#$%^&*()_+|{}<>?/:;' : ''

    const validChars = `${letters}${numbers}${symbols}`
    
    for (let index = 0; index < this.length; index++) {
      this.result += validChars[Math.floor(Math.random() * validChars.length)]
    }
  } 

  isMissingInfo() {
    return (!this.useLetters && !this.useNumbers && !this.useSymbols) || this.length <= 0
  }
}

