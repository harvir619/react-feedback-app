import React from 'react'
import { useState } from 'react'
import Card from './shared/Card'
import PropTypes from 'prop-types'


function FeedbackItem({item}) {
    const [rating,setRating] = useState(item.rating)
    const [text, setText] = useState(item.text)
    
    // const handleClick = () => {
    //     setRating(10)
    // }
    
    return (
      <Card reverse={true}>
        <div className="num-display">{rating}</div>
        <div className="text-display">{text}</div>
      </Card>
  )
}

FeedbackItem.propTypes = {
    item: PropTypes.object,
}


export default FeedbackItem