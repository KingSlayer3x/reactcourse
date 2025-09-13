import "./App.css";
import { useEffect, useState } from "react";

const DataFetcher = ({render, url}) => {
    const [data, setData] = useState([]);
    useEffect(()=> {
        if (url.includes("desserts")){
            setData(["cake","ice cream", "pie", "brownie"]);
        } else {
            setData(["water", "soda", "juice", "Cola" ,"MilkShake"]);
        }
    },[]);
    return render(data);
};

const DessertsCount = () => {
    return (
        <DataFetcher
        url="https://littlelemon/desserts"
        render={(data) => <p>{data.length} desserts</p>}
        />
    );
};

const DrinksCount = () => {
    return(
        <DataFetcher
        url="https://littlelemon/drinks"
        render={(data) => <h3>{data.length} Drinks</h3>}
        />
    )
}
export default function App(){
    return (
        <>
        <div className="App">
            <header className="Header">Little Resturant</header>
            <DessertsCount />
            <DrinksCount />
        </div>
        </>
    );
}