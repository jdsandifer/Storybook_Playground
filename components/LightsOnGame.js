import React, { useState } from 'react'

const newBoard = size => new Array(size * size).fill(false)

const LightsOnGame = (props) => {
    const { size = 3 } = props
    const [lights, setLights] = useState(newBoard(size))
    
    const pattern = [-size, -1, 0, 1, size]

    const trigger = (number) => {
        pattern.forEach(offset => {
            const lightToChange = number + offset
            const shouldChange = lightToChange >= 0
                                && lightToChange < size * size
                                && (Math.abs(offset) !== 1 
                                    || Math.floor(number / size) === Math.floor(lightToChange / size))
            if (shouldChange) {
                setLights(prevLights => {
                    const newLights = [...prevLights]
                    newLights[lightToChange] = !prevLights[lightToChange]
                    return newLights
                })
            }
        })
    }

    const reset = () => setLights(newBoard(size))

    return (
        <div style={{ textAlign: 'center' }}>
            <div style={{ 
                backgroundColor: 'tan', 
                display: 'inline-block',
                margin: '20px',
                padding: '10px', 
                width: 'fit-content' 
            }}>
                {new Array(size).fill(0).map((_, row) => (
                    <div>
                        {lights.slice(row * size, (row * size) + size)
                            .map((isOn, col) => {
                            const number = (row * size) + col
                            return (
                                <button
                                    id={`light-${number}`}
                                    style={{ 
                                        backgroundColor: isOn ? 'white' : 'grey',
                                        border: 'solid brown 2px',
                                        color: 'white',
                                        height: '60px',
                                        margin: '5px',
                                        width: '60px'
                                    }}
                                    onClick={isOn ? () => {} : () => { trigger(number) }}
                                />
                            )
                        })}
                    </div>
                ))}
            </div>
            <div>
                <button onClick={() => { reset() }} >
                    Reset Board
                </button>
            </div>
        </div>
    )
}

export default LightsOnGame
