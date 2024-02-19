'use client'

interface Props {
    text: string
    className: string
}

const Button = ({text, className}:Props) => {
    if(!className){
        className = 'rounded-lg p-5 font-bold'
    }
    return(
        <button className={className}>{text}</button>
    )
}
export default Button;