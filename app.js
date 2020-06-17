// console.log('connected')

//implementing amazon products API (link:'')

// let asin = input

// let settings = {
// 	"async": true,
// 	"crossDomain": true,
// 	"url": "https://amazon-products1.p.rapidapi.com/product?country=US&asin=B07WVNBY1G",
// 	"method": "GET",
// 	"headers": {
// 		"x-rapidapi-host": "amazon-products1.p.rapidapi.com/product?",
// 		"x-rapidapi-key": ""
// 	}
// }

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

// make an array of pushed variables
const selections = []
//make a form that accepts input


$(() => {


//put input from form inside the array
$('.submit').on('click', () => {
    const $inputValue = $('.check-Box')
    selections.push($inputValue)
})

})
console.log(selections)

let $sofa = $('#sofa')
let $pillow = $('#pillow')
let $lamp = $('lamp')

//user will input information into a form
//form will match URL to an asin number
//promise will execute and bring back data in the form of an object
//will use the object to access information for our tiles
//new tiles will be a <div> with a class that matches the item
//the tiles will be appended to another <div> called the design board
//tiles will use flex box properties to be moved and arranged on the design board
//tiles will have 
    //a button to remove tile
        //button will be appended to the tile <div>
        //button will have an event listener and can use the .remove() jQuery method to remove tiles from the design board
    //a thumbnail image of the product
        //link the image so that it links out to where it was brought from
    //the price of the product
    // a short product description
//





//////////////////////////////// code graveyard ////////////////////////////

// const baseURL = `https://` + settings.headers['x-rapidapi-host']
// const apiKey = `apikey=` + settings.headers['x-rapidapi-key']
// // console.log(settings.headers['x-rapidapi-host'])
// // console.log(settings.headers['x-rapidapi-key'])
// const queryType = `country=US&asin=`
// let asinExample = 'B07WVNBY1G'
// let queryURL = baseURL + apiKey + '&' + queryType + asinExample
// console.log(queryURL)

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });

