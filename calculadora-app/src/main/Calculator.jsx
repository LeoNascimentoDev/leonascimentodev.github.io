import React, { Component } from "react";
import './Calculator.css'
import Button from '../components/Button'
import Display from '../components/Display'

const initialState = {
    displayValue: 0,
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}

export default class Calculator extends Component {
    state = { ...initialState }
    constructor(props) {
        super(props)
        this.clearMemory = this.clearMemory.bind(this)
        this.setOperation = this.setOperation.bind(this)
        this.addDig = this.addDig.bind(this)
        this.clearDig = this.clearDig.bind(this)
    }
    clearMemory() {
        this.setState({ ...initialState })
    }
    clearDig() {
        console.log('limpar dig');
    }
    setOperation(operation) {
        if (this.state.current === 0) {
            this.setState({ operation, current: 1, clearDisplay: true })
        }
        else {
            const equals = operation === "="
            const currentOperation = this.state.operation

            const values = [...this.state.values]
            try{
                values[0] = eval(`${values[0]} ${currentOperation} ${values[1]}`)
                if (isNaN(values[0])|| !isFinite(values[0])){
                    this.clearMemory()
                    return
                }
            }
            catch(e){
                values[0]=this.state.values
            }
            values[1] = 0
            this.setState({ displayValue: values[0], operation: equals ? null : operation, current: equals ? 0 : 1, clearDisplay: !equals, values })
        }
    }
    addDig(dig) {
        if (dig === '.' && this.state.displayValue.includes('.')) {
            return
        }
        const clearDisplay = this.state.displayValue === 0 || this.state.clearDisplay
        const currentValue = clearDisplay ? ' ' : this.state.displayValue
        const displayValue = currentValue + dig

        this.setState({ displayValue: displayValue, clearDisplay: false })

        if (dig !== '.') {
            const i = this.state.current
            const newValue = parseFloat(displayValue)
            const values = [...this.state.values]
            values[i] = newValue
            this.setState({ values: values })
        }
    }
    result(res) {
        console.log('resultado');
    }
    render() {

        return (
            // em jsx utiliza-se className para classes em jsx
            <div className="calculator">
                <Display value={this.state.displayValue} />
                <div className="buttons">

                    <Button double value="AC" click={this.clearMemory} />
                    <Button value="del" click={this.clearDig} />
                    <Button operation value="/" click={this.setOperation} />
                    <Button value="7" click={this.addDig} />
                    <Button value="8" click={this.addDig} />
                    <Button value="9" click={this.addDig} />
                    <Button operation value="*" click={this.setOperation} />
                    <Button value="4" click={this.addDig} />
                    <Button value="5" click={this.addDig} />
                    <Button value="6" click={this.addDig} />
                    <Button operation value="-" click={this.setOperation} />
                    <Button value="1" click={this.addDig} />
                    <Button value="2" click={this.addDig} />
                    <Button value="3" click={this.addDig} />
                    <Button operation value="+" click={this.setOperation} />
                    <Button value="0" click={this.addDig} />
                    <Button value="." click={this.addDig} />
                    <Button double value="=" click={this.setOperation} />
                </div>
            </div>

        )
    }

}
