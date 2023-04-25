import './MoodButton.css'

export default function MoodButton({mood, setCurrentMood}) {
 return (
 <div  onClick={() => setCurrentMood(mood)} className="column is-one-fifth">
  <button className="button boldButton">
   {mood}
  </button>
 </div>
 )
}


export const moods = ['Happy',"Tear-Jerker","Chillin","Heart Eyes","I Believe"]
