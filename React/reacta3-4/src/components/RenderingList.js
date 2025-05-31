function RenderingList(){
    let fruits = ["Apple", 'Banana', "Orange", "Strawberry"] 

    return <div>
    <ul>
        {
            fruits.map((fruit)=>(
                <li>{ fruit }</li>
            ))
        }

    </ul>
</div>
}

export default RenderingList