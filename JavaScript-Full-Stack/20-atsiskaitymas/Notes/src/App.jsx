function App() {
  return (
    <>
      <div className="App">
        <h1>Sveiki, Kostai</h1>
        <h4>Tavo užduotys</h4>

        <div className="todos">

          <div className="todo">
            <div className="checkbox"></div>

            <div className="text">Get the bread</div>

            <div className="istrinti-todo">X</div>
          </div>

          <div className="todo is-complete">
            <div className="checkbox"></div>

            <div className="text">Get the milk</div>

            <div className="istrinti-todo">X</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
