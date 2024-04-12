import { useState } from "react"

export const CountryCode=()=>{

    const [country,setCountry]=useState('');
    const [tip,setTip]=useState('');

    const handlerCountry=(e)=>{
        setCountry(e.target.value)
        switch(e.target.value){
            case "India":
                setTip("+919959222482")
                break;
            case "Usa":
                setTip("+1(99)(54)(23)(123)")
                break;
            case "England":
                setTip("+(12)(123)(1234)(12345)")
                break;
        }
    }

    return(
        <>
        <div>
            <dl>
                <dt>Country</dt>
                <dd>
                    <select className="form-select w-50" onChange={handlerCountry}>
                        <option>select Country</option>
                        <option>India</option>
                        <option>Usa</option>
                        <option>England</option>
                    </select>
                </dd>
                <dt>Mobile</dt>
                <dd><input type="text"placeholder={tip}></input></dd>
            </dl>
        </div>
        </>
    )
}