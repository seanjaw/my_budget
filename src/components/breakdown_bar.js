import React from 'react';
// import ListRow from './list_row';



const BreakdownBar = (props) =>{
    
    return(
        <div className="col s12 m12 no-padding">
        <div className= "yellow lighten-5 making-height valign-wrapper">
            <div className="col s12 breakdown-bar-font white-text">
                <div className="col s10 offset-s1 green breakdown-bar-margin z-depth-1">
                    <div className="left">Income</div>
                    <div className="right">+${props.posAccumulator}</div>
                </div>
                <div className="col s10 offset-s1 red z-depth-1">
                    <div className="left">Expense</div>
                    <div className="right">-${props.negAccumulator}</div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default BreakdownBar;