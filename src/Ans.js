function Ans(props){
    return (
        <div style={{display: "flex",
        justifyContent: "center"}}>
            <h1 style={{backgroundColor: "gray",
            color: "rgb(30, 220, 255)", 
            paddingTop: "10px", 
            paddingBottom: "10px", 
            textAlign: "center", 
            height: "60px", 
            fontSize: "40px", 
            fontWeight: "bolder", 
            borderRadius : "10px", 
            width : "432px", 
            margin : "8px 8px 8px 11px"}}>{props.val}</h1>
        </div>
    );
}

export default Ans; 