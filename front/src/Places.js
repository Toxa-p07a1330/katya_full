import React from 'react'
import {MyContext} from "./Context";
class Places extends React.Component{
    render() {
        let style = {

        }
        return (
            <div style={style}>
                <h2>Распределение мест</h2>
                <MyContext.Consumer>
                    {(context)=>{
                        return <div>
                            {context.data.place.map((value)=>{
                                let hall = context.data.hall.filter((hallIterator)=>{return hallIterator.id === value.hallId})[0]
                                return <div style={{display: "inline-block", padding: "1%"}}>
                                    <div>Зал: {hall.name}</div>
                                    <div>Место: {value.number}</div>
                                    <div>Ряд: {value.row}</div>
                                </div>
                            })}
                        </div>
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
export default Places