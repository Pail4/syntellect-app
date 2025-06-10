import React, { ChangeEvent, ReactElement } from "react";

import styles from './ButtonControll.module.css'
import { TextControll } from "../TextControll/TextControll";
import { TextControllViewModel } from "../../viewModels/TextControllViewModel";
import { observer } from "mobx-react-lite";

interface Props {
    state: TextControllViewModel
    leftSideButtons?: ReactElement[]
    rightSideButtons?: ReactElement[]
}

export const ButtonControll: React.FC<Props> = observer((props) => {
    const { state, leftSideButtons, rightSideButtons } = props

    const handleChange = ({ target }: ChangeEvent<HTMLTextAreaElement> ) => {
        state.handleChange(target.value)
    }

    return (
        <div className={styles.ButtonControllWrapper}>
            <div className={styles.ButtonList}>
                {leftSideButtons}
            </div>

            <div>
                <TextControll
                    onChange={handleChange}
                    value={state.text}
                />
            </div>
            
            <div className={styles.ButtonList}>
                {rightSideButtons}
            </div>
        </div>
    )
})