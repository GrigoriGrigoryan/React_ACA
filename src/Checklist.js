import React, { useState } from "react";

function CheckList() {

    const [done, setDone] = useState([]);


    const lists = [
        {string: "Leave for a work at 08:30.", id: 1},
        {string:"Meeting at 11:00.", id: 2},
        {string:"12:00-13:00 lunchtime", id: 3},
        {string:"18:15 shopping at the nearby grocery.", id: 4},
        {string:"Dinner with friends at 19:20.", id: 5},
        {string:"Finish freelance work until 01:00.", id: 6}
    ];

    const handleClick = (id) => {
       
        if(done.includes(id - 1) || id === 1){
            setDone([
                ...done,
                id
            ])
        }
        // if (done.includes(id)) {
        //     const newDone = done.filter(item => item !== id);
        //     console.log(newDone);
        //     setDone(newDone);
        // }
    
    }

    const listItems = lists.map((list) => <li
        className={done.includes(list.id) ? "done" : ""}
        key={list.id}
        onClick={() => handleClick(list.id)}
    >{list.string}</li>);


    return (

        <div className="root-3">
                <ul>
                    {listItems}
                </ul>
        </div>
    )
}

export default CheckList;





