import React from 'react'
import {MyContext} from "./Context";
class Menu extends React.Component{
    render() {
        let  style = {
            display:"inline-block",
            width:"15vw",
            height:"!00%",
            left: "0",
            float:"left",
            textDecoration: "none",
            margin: "25px",

        }
        return (
            <div style={style}>
                <MyContext.Consumer>
                    {()=>{
                        let styleLink = {
                            border: "1px solid white",
                            padding:"1%",
                            color:"black",
                            backgroundColor: "#87CEEB",
                            width: "100%",
                            display: "block"
                        }
                        return (
                            <div style={{textAlign: "center", lineHeight: "2", paddingLeft:"3%"}}>
                                <a href={"/"} style={styleLink}>Домашняя страница</a><br/>
                                <a href={"/films"} style={styleLink}>Фильмы</a><br/>
                                <a href={"/halls"} style={styleLink}>Залы</a><br/>
                                <a href={"/tickets"} style={styleLink}>Билеты</a><br/>
                                <a href={"/schedule"} style={styleLink}>Расписание</a><br/>
                                <a href={"/prices"} style={styleLink}>Цены</a><br/>
                                <a href={"/places"} style={styleLink}>Места</a><br/>
                                <a href={"/admin"} style={styleLink}>Панель администратора</a>
                            </div>)
                    }}
                </MyContext.Consumer>
            </div>
        );
    }
}
export default Menu
