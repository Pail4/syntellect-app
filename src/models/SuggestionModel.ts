import { action, makeObservable, observable, runInAction } from "mobx"
import { CountryInfo, getCountryByName } from "../api/apiService"
import { debounce } from "../utils/debounce"

export class SuggestionModel {
    constructor(
        readonly maxLength: number
    ) {
        makeObservable(this)
    }

    @observable isLoading = false

    @observable suggestionList: CountryInfo[] = []

    @action setIsLoading = (value: boolean) => {
        this.isLoading = value
    }

    updateSuggestions = debounce(
        async (text: string) => {
            const list = await getCountryByName(text)

            runInAction(() => {
                this.suggestionList = list.slice(0, this.maxLength)
                this.setIsLoading(false)
            })
        },
    200)
}