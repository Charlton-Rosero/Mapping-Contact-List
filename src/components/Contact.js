

function Contact(props){
    const{name} = props.resultData;
    return(
        
        <div className="contacts">
            <div className="name">{props.resultData.name.first} {props.resultData.name.last}</div>

           <div className="number">
            Home: {props.resultData.phone}<br/>
            Mobile: {props.resultData.cell}
            </div>

            <img src ={props.resultData.picture.medium} className="image" />
            
            
            
        </div>
        
    )
}

export default Contact