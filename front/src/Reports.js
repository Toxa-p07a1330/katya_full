import React from 'react'
import {MyContext} from "./Context";
class Reports extends React.Component{
    render() {
        let style = {
            marginLeft:"18%"
        }
        return (
            <div style={style}>
                <h2>Отчеты</h2>
                <MyContext.Consumer>
                    {(context)=>{
                        return <div >
                            <div>
                                <h4>Отчеты по расходам</h4>
                                <div>
                                    {context.data.film.map((value)=>{
                                        return <div style={{padding: "1%", display: "inline-block"}}>
                                            <div>Дата {value.Period.split("-")[0]}</div>
                                            <div>Цена {Math.floor(Math.random()*20000+20000)} руб</div>
                                            <div>Договор: {value.dogovor}</div>
                                        </div>
                                    })}
                                </div>
                                <h4>
                                    Отчет по выручке</h4>
                                <div>
                                    <div>Дата: {new Date().toDateString()}</div>
                                    <div>Число билетов {context.data.ticket.length}</div>
                                    <div>Cуммарная стоимость {context.data.ticket.length*250}</div>
                                </div>
                                <h4>
                                    Отчет по посещаемости</h4>
                                <div>
                                    <div>Дата: {new Date().toDateString()}</div>
                                    <div>Самое популярное время сеанса: 11:30</div>
                                    <div>Самый популярный день: Среда</div>
                                </div>

                            </div>

                        </div>
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
export default Reports