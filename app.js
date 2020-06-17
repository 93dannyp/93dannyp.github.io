// console.log('connected')

//implementing amazon products API (link:'')

const pillowAsin = 'B086DJ9Z3D'
const sofaAsin = 'B019516ZP8'
const endTableAsin = 'B01NBVTJPV'
const lampAsin = 'B073751DMJ'
const vaseAsin = 'B08119Z2BR'


let settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://amazon-products1.p.rapidapi.com/product?country=US&asin=" + selections[i],
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "amazon-products1.p.rapidapi.com/product?",
		"x-rapidapi-key": ""
	}
}

// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });


let $sofa = $('#sofa')
let $pillow = $('#pillow')
let $lamp = $('lamp')

// make an array of pushed variables
//make a form that accepts input


$(() => {
    //the selections array should have the ASIN values from the product selected from the checklist
    let selections = []

// console.log($('[type=checkbox]'))

//put input from form inside the array
$('#submit').on('click', () => {

    const $inputValue = $('#input-box').val
    ()
    selections.push($inputValue)


    event.preventDefault()

    let $newInput = $('<div>').text(selections[selections.length-1])

    $('.design-board').append($newInput)
    
    const $remove = $('<button>').text('Remove Item').addClass('remove')

    $newInput.append($remove)

    $remove.on('click', (event) => {
        
        $(event.currentTarget).parent().remove()
    })

})

//////////This is the if logic for matching the value of the checked box and the corresponding constant with the ASIN number.//////////


// // this is supposed to use the vairable assigned to the sofa html element
// if (selector[0] = $sofa) {
//     //this selects the url and adds the ASIN number to it
//     settings.url + sofaAsin

    //// this uses the API to Get the desired information for the thumbnail

    // $.ajax(settings).done(function (response) {
// 	console.log(response);
// });
// }

})


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



//// an attempt to get my API to function ////
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



//// attempted to use checkboxes in order to limit the response field. could not get multiple selected values to populate inside the array on one 'submit' click. Switched to a search box input. ////

//**** the next two lines of code need work. Only accepting first checked box and not all checked boxes. ****//
// const $inputValue = $('input[name=\'item\']:checked').each((i) => {
//     val[i] = selections.push($(this).val())
// })


// console.log('input[name=\'item\']:checked')

//     console.log($inputValue)
// selections.push($inputValue)
// prevents default refresh


