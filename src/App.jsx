import react from "react"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Card from "./components/Card"
import data from "./data.jsx"
import './style.css'



export default function App() {
    const cards = data.map(item => {
        return (
            <Card
                key={item.id}
                {...item} />
        )
    })
    return (
        <div>
            <div className="container">
                <Navbar />
                <Hero />
                <div className="cards">
                    {cards}
                </div>

            </div>
        </div>
    )

}