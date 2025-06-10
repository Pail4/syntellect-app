import React, { useState } from "react";
import styles from "./App.module.css";
import { Autocomplete } from "./components/Autocomplete/Autocomplete";
import { ButtonControll } from "./components/ButtonControll/ButtonControll";
import { Button } from "./components/Button/Button";
import { TextControllViewModel } from "./viewModels/TextControllViewModel";
import { SuggestionModel } from "./models/SuggestionModel";

function App() {
    const [firstGroupState] = useState(() => new TextControllViewModel())
    const [secondGroupState] = useState(() => new TextControllViewModel())

    const [autocompleteTextState] = useState(() => new TextControllViewModel())
    const [autocompleteSuggestState] = useState(() => new SuggestionModel(3))

    const [autocompleteSecondTextState] = useState(() => new TextControllViewModel())
    const [autocompleteSecondSuggestState] = useState(() => new SuggestionModel(10))
    
    const firstGroupRightSideButtons = [
        <Button
            key='1'
            title="Clear Input"
            onClick={firstGroupState.clearText}
        />,
        <Button
            key='2'
            title="Hello World!"
            onClick={() => firstGroupState.handleChange('Hello World!')}
        />,
    ]
    
    const secondGroupRightSideButtons = [
        <Button
            key='3'
            title="Alert"
            onClick={() => alert(secondGroupState.text)}
        />,
    ]
    
    const secondGroupLeftSideButtons = [
        <Button
            key='4'
            title="Alert If Number"
            onClick={() => { 
                const num = +secondGroupState.text

                if (secondGroupState.text && (num || num === 0)) {
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
                <div>3 suggests limit</div>
                <Autocomplete textState={autocompleteTextState} suggestionState={autocompleteSuggestState} />
            </div>

            <div>
                <div>10 suggests limit</div>
                <Autocomplete textState={autocompleteSecondTextState} suggestionState={autocompleteSecondSuggestState} />
            </div>
        </div>
    )
}

export default App;
