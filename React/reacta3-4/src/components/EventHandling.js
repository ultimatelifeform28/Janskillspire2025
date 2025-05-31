function ButtonClick(){

    let handleClick = () =>{
        console.log("Hello World!")
    }

    return (
        <div>
            <h3>Click Button</h3>

            <button onClick={handleClick}>Click Me!</button>
        </div>
    );
}

export default ButtonClick;