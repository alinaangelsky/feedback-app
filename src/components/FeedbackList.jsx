// import PropTypes from "prop-types"
import { useContext } from "react"
import FeedbackItem from './FeedbackItem'
import FeedbackContext from "../context/FeedbackContext"
import Spinner from "./shared/Spinner"

// NOTE: added layout prop for nicer animation
// https://www.framer.com/docs/animation/#layout-animations

function FeedbackList() {
  const {feedback, isLoading } = useContext(FeedbackContext)
    if(!isLoading && !(feedback || feedback.length === 0)){
        return <p>'No Feedback Yet'</p>
    }
  return isLoading ? <Spinner/> : (
    <div className="feedback-list">
      {feedback.map((item)=>(
        <FeedbackItem key={item.id} item={item}
        />
      ))}
    </div>
  )
}
// FeedbackList.propTypes = {
// feedback: PropTypes.arrayOf(
//   PropTypes.shape({
//     id: PropTypes.number.isRequired,
//     text: PropTypes.string.isRequired,
//     rating: PropTypes.number.isRequired,
//     })
//   ),
// }

export default FeedbackList
