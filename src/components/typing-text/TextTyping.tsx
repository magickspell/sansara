import React, {useEffect, useState} from "react";

interface propsI {
    text: number
}

export const TextTyping = (props: propsI) => {
    const fullText = String(props.text).split('').map(i => i).join('')
    const [text, setText] = useState("")
    const [index, setIndex] = useState(0)
    useEffect(() => {
        if (index < fullText.length) {
            setTimeout(() => {
                setText(text + fullText[index])
                setIndex(index + 1)
            }, 100)
        }
        return () => {
        }
    }, [index])

    /* trigger changes */
    useEffect(() => {
        setText("")
        setIndex(0)
    }, [fullText])

    return (
        <>{text}</>
    )
}