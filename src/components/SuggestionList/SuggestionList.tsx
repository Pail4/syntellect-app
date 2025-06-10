import React from "react";

import styles from './SuggestionList.module.css'
import { observer } from "mobx-react-lite";
import { SuggestionModel } from "../../models/SuggestionModel";
import { CountryInfo } from "../../api/apiService";

interface Props {
    state: SuggestionModel
    onClick: (target: CountryInfo) => void
    hide?: boolean
}

export const SuggestionList: React.FC<Props> = observer(({ state, hide, onClick }) => {
    if (state.suggestionList.length === 0 || hide) {
        return <></>
    }

    return (
        <div className={styles.SuggestionList}>
            {state.isLoading
                ? <span>Loading...</span>
                : state.suggestionList.map(
                    (suggest) => (
                        <div
                            key={suggest.flag}
                            className={styles.Suggest}
                            onClick={() => onClick(suggest)}
                        >
                            <span title={suggest.name}>{suggest.name}</span>
                            <span title={suggest.fullName}>{suggest.fullName}</span>
                            <span title={suggest.flag}>{suggest.flag}</span>
                        </div>
                    )
                )
            }
        </div>
    )
})