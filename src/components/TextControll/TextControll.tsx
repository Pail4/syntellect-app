import React, { ChangeEvent } from "react";

import styles from './TextControll.module.css'

interface Props {
    value: string
    onChange:  (event: ChangeEvent<HTMLTextAreaElement>) => void
}

export const TextControll: React.FC<Props> = (props) => {
    const { value, onChange } = props

    return (
        <textarea
            className={styles.TextControll}
            value={value}
            onChange={onChange}
            placeholder="Type something..."
        />
    )
}