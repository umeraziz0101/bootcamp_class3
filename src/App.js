import Student from "./student";
import "./App.css";

function App() {
    return (
        <div className="App">
            <h1 style={{ fontSize: 35, color: "#135497" }}>Top three students of CNC class</h1>
            <hr width="350" />
            <br />
            <Student id="3658" name="Umer Aziz" email="umeraziz0101@gmail.com" city="Dera Ghazi Khan" />
            <hr width="200" />
            <Student id="954" name="Iftikhar Ali" email="iffi@gmail.com" city="Karachi" />
            <hr width="200" />
            <Student id="468" name="Dilawer Shah" email="shahg@gmail.com" city="Lahore" />
        </div>
    );
}

export default App;
