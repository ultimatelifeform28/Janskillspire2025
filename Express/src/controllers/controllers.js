const getData = (request,response)=>{
    response.send({"status":[1,2,3,4,5]})
}

const postData = (request,response)=>{
    console.log("POST DATA: ", request.body )
}

module.exports = {
    getData,
    postData
}