import CardLan from "./components/card/CardLan";
import Header from "./components/header/Header";
import data from "./helper/data"

function App() {
  return (
    <div className="App">
      <Header />
      <div className="cardApp">
        {data.map((item) => {
          const { img, name, options } = item
          return <CardLan img={img} name={name} options={options} />

        })}
      </div>

    </div>
  );
}

export default App;
