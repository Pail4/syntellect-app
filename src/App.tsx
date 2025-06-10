import React, { useState } from "react";
import styles from "./App.module.css";
import { Autocomplete } from "./components/Autocomplete/Autocomplete";
import { ButtonControll } from "./components/ButtonControll/ButtonControll";
import { Button } from "./components/Button/Button";
import { TextControllViewModel } from "./viewModels/TextControllViewModel/TextControllViewModel";

function App() {
    const [firstGroupState] = useState(() => new TextControllViewModel())
    const [secondGroupState] = useState(() => new TextControllViewModel())
    
    const firstGroupRightSideButtons = [
        <Button
            title="Clear Input"
            onClick={firstGroupState.clearText}
        />,
        <Button
            title="Hello World!"
            onClick={() => firstGroupState.handleChange('Hello World!')}
        />,
    ]
    
    const secondGroupRightSideButtons = [
        <Button
            title="Alert"
            onClick={() => alert(secondGroupState.text)}
        />,
    ]
    
    const secondGroupLeftSideButtons = [
        <Button
            title="Alert If Number"
            onClick={() => { 
                const num = +secondGroupState.text

                if (num || num === 0) {
                    alert(num)
                }
            }}
        />,
    ]

    return (
        <div className={styles.App}>
            <div className={styles.Header}>Syntellect app test</div>

            <div>
                <ButtonControll
                    state={firstGroupState}
                    rightSideButtons={firstGroupRightSideButtons}
                />
            </div>

            <div>
                <ButtonControll
                    state={secondGroupState}
                    leftSideButtons={secondGroupLeftSideButtons}
                    rightSideButtons={secondGroupRightSideButtons}
                />
            </div>

            <div>
                <Autocomplete />
            </div>
        </div>
    )
}

export default App;
