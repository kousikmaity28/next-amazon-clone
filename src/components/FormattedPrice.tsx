import React from 'react'
interface props{
    amount:number
}

const FormattedPrice = ({amount}:props) => {
    const formattedAmount= new Number(amount).toLocaleString("en-us",{
        style:"currency",
        currency:"INR",
        minimumFractionDigits:2,
    })

  return (
    <span>{formattedAmount}</span>
  )
}

export default FormattedPrice