import { Part } from "./Part" 

export const Content = ({ parts }) => {
    const totalExercises = parts.reduce((sum, part) => sum + part.exercises, 0);
  return (
    <div>
        <ul>
            {parts.map(part =>(
                <Part key={part.id} name={part.name} exercises={part.exercises} />
            ))}
        </ul>
        <p><strong>Total of {totalExercises} exercises</strong></p>
    </div>
  )
}
