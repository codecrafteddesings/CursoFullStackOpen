import { useState } from "react";

const App = () => {
  const [information, setInformation] = useState ({
    name: "Name",
    number: "Number",
  });

  const hancdleChange = (event) => {
    event.preventDefault();
    setInformation({ ...information, [event.target.name]: event.target.value });
  }
  return (
    <>
      <div>
        
        <form>
          <div>
            name: <input name="name" value={information.name} onChange={hancdleChange} />
          </div>
          <div>
            number: <input name="number" value={information.number} onChange={hancdleChange} />
          </div>
          <div>
            <button type="submit">add</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default App;
