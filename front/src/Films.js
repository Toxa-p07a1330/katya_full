import React from 'react'
import {MyContext} from "./Context";
class Films extends React.Component{
    render() {
        let style = {
            marginLeft:"18%",
            marginRight:"18%"
        }
        return (
            <div style={style}>
                <h2>Фильмы</h2>
            <MyContext.Consumer>
                {(context)=>{
                    return <div>
                        {context.data.film.map((value)=>{
                            let imageRef = "https"+value.Image.split("https")[2];
                            imageRef = imageRef.split("?")[0];
                            console.log(imageRef)
                            let imageStyle = {
                                float: "left",
                                width: "12%",
                                height:"50%",
                                display: "block",
                                padding:"1%"
                            }
                            return(<div style={{padding: "2%", display: "block"}}>
                                    <div>
                                        <img src={imageRef} style={imageStyle}/>
                                    </div>
                                    <div>Название:<br/>{value.name}</div>
                                    <div>Gо согласованию с:<br/> {value.dogovor}</div>
                                    <div>В период: <br/>{value.Period}</div>
                                    <div>Описание: <br/>{value.Description}</div>
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
export default Films