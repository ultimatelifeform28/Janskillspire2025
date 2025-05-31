import ChildComponent from "./ChildComponent"

function ParentComponent(){
    return <div>
        <h1> This is the parent component</h1>

        <ChildComponent firstName = {"Ja'Corey"} lastName= {"Lasane"} age = {28} />
    </div>
}

export default ParentComponent
