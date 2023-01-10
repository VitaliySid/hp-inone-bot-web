import './App.css';
import { useEffect } from "react";
import { useTelegram } from "./hooks/useTelegram";
import Header from "./components/Header/Header";
import { Route, Routes } from 'react-router-dom'
import EventList from "./components/Events/EventList";
import EventView from "./components/Events/EventView";

function App() {
    const { onToggleButton, tg } = useTelegram();

    useEffect(() => {
        tg.ready();
    }, [])

    return (
        <div className="App">
            <Header />
            <Routes>
                <Route index element={<EventList />} />
                <Route path={"events/:id"} element={<EventView />} />
            </Routes>
        </div>
    );
}

export default App;
