import React, { ChangeEvent, useState } from "react";

import styles from './Autocomplete.module.css'
import { TextControll } from "../TextControll/TextControll";
import { TextControllViewModel } from "../../viewModels/TextControllViewModel/TextControllViewModel";
import { observer } from "mobx-react-lite";

interface Props {

}

export const Autocomplete: React.FC<Props> = observer((props) => {
    const [state] = useState(() => new TextControllViewModel())

    const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement> ) => {
        state.handleChange(target.value)
    }

    return (
        <div className={styles.AutocompleteWrapper}>
            <TextControll onChange={handleChange} value={state.text} />
        </div>
    )
})