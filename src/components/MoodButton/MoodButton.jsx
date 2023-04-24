export default function MoodButton(mood) {
 return (<div className="column is-one-fifth">
 <button className="button boldButton">
  {mood.mood}
 </button>
 </div>
 )
}

export function createMoodButton(mood){
 return (
  <MoodButton
  key={mood.id}
  mood={mood.mood}
  />
 )
}

export const moods = [{id: 0, mood: 'Happy'}, {id: 1, mood:"Tear-Jerker"}, {id: 2, mood:"Chillin"}, {id: 3, mood:"Heart Eyes"}, {id: 4, mood:"I believe"}]
