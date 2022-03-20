import contact from "../contact.json"
import Contact from "./Contact"

function Main(){
    return(
        <div>
            {
                contact.results.map((resultData, index)=>{
                    return <Contact resultData={resultData} key={index} />
                })
            }
        </div>


    )


}

export default Main