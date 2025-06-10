import React from "react";

import styles from './Button.module.css'

interface Props {
    title: string
    onClick: () => void
}

export const Button: React.FC<Props> = (props) => {
    const { onClick, title } = props

    return (
        <button
            className={styles.Button}
            onClick={onClick}
        >
            {title}
        </button>
    )
}