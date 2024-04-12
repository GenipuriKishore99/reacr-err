export const Props=(props)=>{
    return(
        <>
        <div>
            <form className="border border-primary p-3 m-3">
                <div>
                    <h2>{props.title}</h2>
                </div>
                <div>
                    <label>{props.name}</label>
                    <input type="text"></input>
                </div>
                <div>
                    <label>{props.password}</label>
                    <input type="password"></input>
                </div>
                <div>
                    <button className="btn btn-primary">{props.button}</button>
                </div>
            </form>
        </div>
        </>
    )
}