import React, {useState, useRef, useEffect} from 'react';

const Hooks = () => {
    let [name, setName] = useState(
        window.localStorage.getItem('name') || 'Thakur'
    )

    //create a ref instance and set to the nameRef variable
    let nameRef = useRef();

    const submitRef = () => {
        console.log(nameRef.current.value);
        setName(nameRef.current.value)
    }

    //on render set the name value to localstorag
    useEffect(
        () =>{
        console.log('use Effect');
        window.localStorage.setItem('name', name) 
        },[name])

    return(
        <>
            <h1 style={{textAlign:'center'}}>Hooks useRef and useEffect</h1>
            <div style={{textAlign:'center'}}>
                <p data-testid="nameValue">{name}</p>
                <input data-testid="inputName" type="text"  ref={nameRef} />
                <button data-testid="submitRefButton" onClick={submitRef}>Submit</button>
            </div>
        </>
    )
}

export default Hooks;