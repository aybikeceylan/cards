import CardLan from "./components/card/CardLan";
import Header from "./components/header/Header";
import data from "./helper/data"
import "./index.css"

function App() {
  return (
    <div className="App">
      <div className="main">
        <Header />
        <div className="cardApp">
          <h1 className="title">Languages</h1>
          <div className="items">
            {data.map((item) => {
              const { img, name, options } = item
              return <CardLan img={img} name={name} options={options} />

            })}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
