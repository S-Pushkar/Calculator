function Entry(props){
    
    return (
        <div style={{display: "flex",
        justifyContent: "center"}}>
            <input autoFocus style={{height: "60px", 
            fontSize: "larger", 
            fontWeight: "bolder", 
            borderRadius : "10px", 
            width : "432px", 
            margin : "8px 8px 8px 16px"}} value={props.val} type="text" onChange={(e) => props.fun(e.target.value)}/>
        </div>
    );
}

export default Entry;