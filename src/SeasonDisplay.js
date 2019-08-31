import React from 'react';
import './SeasonDisplay.css';

const SeasionDisplay = props => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season];

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>        
    );
};

const seasonConfig = {
    summer:{
        text: 'Vamos a la playa!',
        iconName:'sun'
    },
    winter:{
        text:'Que frio!',
        iconName:'snowflake'
    }
};

const getSeason = (lat, month) => {
    if(month > 2 && month < 9){
        return lat > 0 ? 'summer' : 'winter';
    }
    else{
        return lat > 0 ? 'winter' : 'summer';
    }
}

export default SeasionDisplay;