import React from 'react'
class Header extends React.Component{
render() {
    let style = {
        height: "10vh",
        width:"100vw",
        backgroundColor: "#00416a",
        display: "inline-block"
    }
return <div style={style}>
    <h1 style={{color:"white", paddingLeft:"3%"}}>CinemaGo</h1>
</div>
}
}
export default Header;