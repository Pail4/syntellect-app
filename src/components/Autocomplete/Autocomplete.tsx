import React, { ChangeEvent, useState } from "react";

import styles from './Autocomplete.module.css'
import { TextControll } from "../TextControll/TextControll";
import { TextControllViewModel } from "../../viewModels/TextControllViewModel";
import { observer } from "mobx-react-lite";
import { SuggestionModel } from "../../models/SuggestionModel";
import { SuggestionList } from "../SuggestionList/SuggestionList";
import { CountryInfo } from "../../api/apiService";

interface Props {
    textState: TextControllViewModel
    suggestionState: SuggestionModel
}

export const Autocomplete: React.FC<Props> = observer(({ textState, suggestionState }) => {
    const [hideSuggest, setHideSuggest] = useState(false)

    const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement> ) => {
        textState.handleChange(target.value)
        setHideSuggest(false)

        suggestionState.setIsLoading(true)
        suggestionState.updateSuggestions(textState.text)
    }

    const handleSuggestClick = (suggest: CountryInfo) => {
        textState.handleChange(suggest.name)
        setHideSuggest(true)
    }

    return (
        <div className={styles.AutocompleteWrapper}>
            <TextControll onChange={handleChange} value={textState.text} />

            <SuggestionList
                state={suggestionState}
                onClick={handleSuggestClick}
                hide={hideSuggest}
            />
        </div>
    )
})