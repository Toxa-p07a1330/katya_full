import React from 'react'
import {MyContext} from "./Context";
class Schedule extends React.Component{
    render() {
        let style = {

        }
        return (
            <div style={style}>
                <MyContext.Consumer>
                    {(context)=>{
                        return <div>
                            {context.data.schedule.map((value)=>{
                                console.log("***"+JSON.stringify(value))
                                let film = context.data.film.filter((filmIterator)=>{return filmIterator.id === value.FilmId})[0]
                                let hall = context.data.hall.filter((hallIterator)=>{return hallIterator.id === value.HallId})[0]
                                let price = context.data.price.filter((priceIterator)=>{return priceIterator.id === value.PriceId})[0]
                                return (<div style={{display: "inline-block", padding: "2%", lineHeight:"2",
                                    textAlign: "center"}}>
                                    <div>Название фильма<br/>{film.name}</div>
                                    <div>Время<br/>{value.Time}</div>
                                    <div>Зал<br/>{hall.name}</div>
                                    <div>Цена<br/>{price.price}</div>
                                    <div>

                                            <button onClick={()=>{
                                                let place = prompt("Введите желаемое место");
                                                if (hall.size<place) {
                                                    alert("Такого места нет")
                                                    return;
                                                }
                                                for (let i of context.data.ticket)
                                                {
                                                    if (i.placeId == place)
                                                    {
                                                        console.log(JSON.stringify(i) + "_-_-_-_")
                                                        if (i.hallId == hall.id){
                                                            if (i.filmId == film.id)
                                                            {
                                                                alert("Занято")
                                                                return null;
                                                            }
                                                        }
                                                    }
                                                }


                                                let placeId = context.data.place.filter((value)=>{
                                                    return value.number == place;
                                                })[0].id;
                                                console.log(placeId);
                                                let request = "http://localhost:3001/" +
                                                    "insert into ticket (filmId, time, hallId, priceId, placeId) " +
                                                    `values (${film.id}, '${value.Time}', ${hall.id},`+
                                                    `${price.id}, ${placeId})`;
                                                fetch(request);
                                                console.log(request)
                                                alert("Билет куплен! Оплатите его при  получении")
                                                window.location.reload();

                                            }}>
                                                Купить билет
                                            </button>

                                    </div>
                                </div>)
                            })}
                        </div>
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
export default Schedule