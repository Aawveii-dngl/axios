
import Personlist from './Components/Personlist';
import PersonInput from './Components/PersonInput';
import Persondelete from './Components/Persondelete'

function App() {
  return (
    <div className="App">
      <PersonInput/>
      <Persondelete/>
      <Personlist/>
    </div>
  );
}

export default App;
