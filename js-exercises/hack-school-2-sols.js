// exercise 1: function to see if a destination exists in an array
function arrContains(arr, destination) {
    for (element in arr){
        if (element === destination){
            return true;
        }
    }
    return false;
}

// log the output for this function
let colleges = ['Warren', 'Marshall', 'Muir', 'ERC', 'Sixth', 'Seventh', 'Revelle', 'Eighth']
console.log(arrContains(colleges, 'ERC'));

// exercise 2: async function to create new travel entry
function visitNewPlace(visitedNewPlace) {
    return new Promise((resolve, reject) => {
        setTimeout(() => { // Set a 2000ms (2 second) timeout
            if (visitedNewPlace) {
                // success
                resolve('I visited a new place');
            } else {
                // failure
                reject('I stayed in');
            }
        }, 2000); 
    });
}

// log the success / fail message
visitNewPlace(true).then((message) => {
    console.log(message)
}).catch((message) => {
    console.log(message)
})