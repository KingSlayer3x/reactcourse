import React, { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";

const fetchRandomData = (pageNumber ) => {
    return axios.get(`https://randomuser.me/api?page=${pageNumber}`)
    .then(({data}) => data)
    .catch(err => {
        console.error(err);
    });
};
const getFullUserName = (userInfo) => {
    const {name: {first, last}} = userInfo;
    return `${first} ${last}`;
}
export default function App(){
    const [userInfo, setUserInfo] = useState([]);
    // const [randomUserData, setRandomUserData] = useState('');
    const [nextPageNumber, setNextPageNumber] = useState(1);
    const fetchNextUser =() => {
        fetchRandomData(nextPageNumber).then((randomData) => {
            if (randomData === undefined) return;
            const newUserInfo = [ ...userInfo, ...randomData.results,]
            setUserInfo(newUserInfo);
            setNextPageNumber(randomData.userInfo.page + 1);
        });
    }
    useEffect(() => {
        fetchNextUser();
    },[]); // the warning because the fetchuser could change to overcome that we need to use useRef()
    return (
        <>
        {userInfo.map((userInfo,idx) => (
            <div key={idx}>
            <p >{getFullUserName(userInfo)}</p>
            <img src={userInfo.picture.thumbnail} />
            </div>
        ))}
        <button onClick={ () => {fetchNextUser()}}>Fetch next page</button>
        <p>{}</p>
        </>
    )
}

