import React from 'react'
import {MyContext} from "./Context";
class Prices extends React.Component{
    render() {
        let style = {
            marginLeft:"18%"
        }
        return (
            <div style={style}>
                <h2>Цены</h2>
                <MyContext.Consumer>
                    {(context)=>{
                        return <div>
                            {context.data.price.map((val)=>{
                                return <div style={{padding: "1%", display: "inline-block"}}>
                                    <div>День недели {val.dayOfWeek}</div>
                                    <div>Время {val.time}</div>
                                    <div>Тип зала {val.hallType}</div>
                                    <div>Стоимость {val.price}</div>
                                </div>
                            })}
                        </div>
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
export default Prices