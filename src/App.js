import Header from "./Header"

function App() {
    const name = "Alex"

    return (
        <div className="container">
            <Header title={`Hello from react, ${name}!`}/>
        </div>
    )
}

export default App
