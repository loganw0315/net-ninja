import { useRef, useState } from "react";
import "./NewEventForm.css"

const NewEventForm = ({addEvent}) => {

    // const [title, setTitle] = useState('')
    // const [date, setDate] = useState('')
    const title = useRef()
    const date = useRef()


    const resetForm = () => {
        // setTitle('')
        // setDate('')
    }

    const handleSubmit = (e) => {
      e.preventDefault()

      const event = {
          title: title,
          date: date,
          id: Math.floor(Math.random()*10000)
      }
      addEvent(event);
      console.log(event);
      resetForm()
    }

    

    return (
        <form className="new-event-form" onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input 
                    type="text" 
                    ref={title}
                    // onChange={(e)=> setTitle(e.target.value)}
                    // value={title}
                />
            </label>
            <label>
                <span>Event Date:</span>
                <input 
                    type="date" 
                    ref={date}
                    // onChange={(e)=> setDate(e.target.value)}
                    // value={date}
                />
            </label>
            <button>Submit</button>
        </form>
      );
}
 
export default NewEventForm;