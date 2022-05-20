//Create a stopwatch object that has four properties and three methods

let stopWatch = {}

stopWatch.color = 'red'
stopWatch.size = 'medium'
stopWatch.shape = 'round'
stopWatch.model = 'model'

stopWatch.start = function(){
    console.log('start...')
}

stopWatch.stop = function(){
    console.log('stop...')
}

stopWatch.lap = function(){
    console.log('lap...')
}