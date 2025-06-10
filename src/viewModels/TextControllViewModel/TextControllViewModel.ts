import { action, makeObservable, observable } from "mobx"

export class TextControllViewModel {
    constructor() {
        makeObservable(this)
    }

    @observable text: string = ''

    @action handleChange = (value: string) => {
        this.text = value
    }

    @action clearText = () => {
        this.handleChange('')
    }
}