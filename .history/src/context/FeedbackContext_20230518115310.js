import { createContext, useState } from "react";
import {v4 as uuidv4} from 'uuid'
import FeedbackData from "../data/FeedbackData"

const FeedbackContext = createContext()


export const FeedbackProvider = ({children}) => {
    const [feedback, setFeedback] = useState(FeedbackData)
    
    //delete an item
    const deleteFeedback = (id) => {
        if (window.confirm('Are you sure you want to delete?')) {
            setFeedback(feedback.filter((item)=>item.id !== id))
        }
    }
    
    // add an item
    const addFeedback = (newFeedback) => {
        newFeedback.id = uuidv4()
        setFeedback([newFeedback, ...feedback])
    }

    //Update feedback item
    const updateFeedback = (id, updItem) => {
        console.log(id, updItem)
        console.log(feedback)
        setFeedback(
            feedback.map((item) =>
                (item.id === id ? { ...item, ...updItem } : item)
            )  
        )
        console.log(feedback)
        setFeedbackEdit({item:{},edit:false})
    }
    
    //set item to be updated
    const [feedbackEdit, setFeedbackEdit] = useState({
        item: {},
        edit: false
    })
    
    const editFeedback = (item) => {
        setFeedbackEdit({
            item,
            edit:true
        })
    }
    
    return <FeedbackContext.Provider value={{ feedback,deleteFeedback,addFeedback,editFeedback,feedbackEdit,updateFeedback}}>
        {children}
     </FeedbackContext.Provider>
    
}

export default FeedbackContext