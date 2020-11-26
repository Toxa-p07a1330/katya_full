import React from 'react'
import {MyContext} from "./Context";
class Halls extends React.Component{
    render() {
        let style = {
            display: "block",
            marginLeft:"10%"
        }
        return (
            <div style={style}>
                <h2>Залы</h2>
                <MyContext.Consumer>
                    {(context)=>{
                        return <div style={style}>
                            {context.data.hall.map((value)=>{
                                return(
                                    <div style={{padding: "1%"}}>
                                        <div>Название: {value.name}</div>
                                        <div>Вместимость: {value.size}</div>
                                    </div>
                                )
                            })}
                        </div>
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
export default Halls