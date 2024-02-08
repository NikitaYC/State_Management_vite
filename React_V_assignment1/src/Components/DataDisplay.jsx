import React from "react";
import './DataDisplay.css'


const DataDisplay =({ data }) =>{

    if (data.length === 0) {
     return <p className="no-data-message">No data available.</p>;
    }

    const formattedData = data.map((item) => 
        <div key = {item.id}>
            <h3>{item.title}</h3>
            <p>{item.body}</p>
        </div>
    )

    return(
        <div className="data-display">
            {formattedData}
        </div>
    )
}

export default DataDisplay;