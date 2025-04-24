const Note = ({ note, toggleImponrtance }) => {
  const label = note.important ? "make not important" : "make important";

  return (
  <li>
    {note.content}
    <button onClick={toggleImponrtance}>{label}</button>
  </li>
)}

export default Note