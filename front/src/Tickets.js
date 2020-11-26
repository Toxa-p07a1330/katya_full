import React from 'react'
import {MyContext} from "./Context";
class Tickets extends React.Component{
    render() {
        let style = {

        }
        return (
            <div style={style}>
                <h2>Купленные билеты</h2>
                <MyContext.Consumer>
                    {(context)=>{
                        return <div>
                            {context.data.ticket.map((value)=>{
                                let film = context.data.film.filter((filmIterator)=>{return filmIterator.id === value.filmId})[0]
                                let hall = context.data.hall.filter((hallIterator)=>{return hallIterator.id === value.hallId})[0]
                                let price = context.data.price.filter((priceIterator)=>{return priceIterator.id === value.priceId})[0]
                                let place = context.data.place.filter((placeIterator)=>{return placeIterator.id === value.placeId})[0]
                                console.log(JSON.stringify(place))
                                return (<div style={{display: "inline-block", padding: "2%", lineHeight:"2",
                                    textAlign: "center"}}>
                                    <div>Название фильма<br/>{film.name}</div>
                                    <div>Время<br/>{value.time}</div>
                                    <div>Зал<br/>{hall.name}</div>
                                    <div>Ряд<br/>{place.row}</div>
                                    <div>Место<br/>{place.number}</div>
                                    <div>Цена<br/>{price.price}</div>
                                </div>)
                            })}
                        </div>
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
export default Tickets