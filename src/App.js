import logo from './logo.svg';
import './App.css';
import  Greet   from './components/Greet'
import Welcome from './components/Welcome'
import Hello from './components/Hello'
import Message from './components/Message'
import Counter from './components/Counter'
import ParentComponent from './components/parentComponent';
import CountryCodes from './components/CountryCodes';
function App() {
  return (
    <div className="App">
      {/*<<div>
      Greet name="karthik" iname="369tuf"/>
      <p>function children </p>
      </div>
      <div>
      <Welcome  name="Js" iname="kartzz"/>
      <h4>class children</h4>
      </div>
      <Hello />
    <Message />
    <Counter num={5}/>
    <ParentComponent />*/}
    <CountryCodes />

    </div>
  );
}

export default App;
