const express = require('express')
const app = express()
const PORT = 8000   

const rappers = {
    '21 savage':{
        'age':29,
        'birthName':'Sheyaa',
        'birthLocation':'London, England'
    },
    'chancelor':{
        'age':28,
        'birthName':'Sheyaa',
        'birthLocation':'London, England'
    },
    'dylan':{
        'age':27,
        'birthName':'Sheyaa',
        'birthLocation':'London, England'
    }
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/:rapperName', (request, response)=>{
    const rappersName = request.params.rapperName.toLocaleLowerCase()
    //response.json(rappers)
    if (rappers[rappersName]) {
        response.json(rappers[rappersName])
    }else{
        response.json(rappers['dylan'])
    }
})

app.listen(process.env.PORT || PORT, ()=>{
    console.log(`the server is rinnung on ${PORT}! You better go catch it!`)
})
