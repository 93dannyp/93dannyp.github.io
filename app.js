// console.log('connected')

//implementing amazon products API (link:'')

const pillowAsin = 'B086DJ9Z3D'
const sofaAsin = 'B019516ZP8'
const tableAsin = 'B01C1A5BMS'
const lampAsin = 'B073751DMJ'
const vaseAsin = 'B08119Z2BR'


const settings = {
	"async": true,
	"crossDomain": true,
	"url": "https://amazon-products1.p.rapidapi.com/product?country=US&asin=",
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "amazon-products1.p.rapidapi.com/product?",
		"x-rapidapi-key": ""
	}
}

const apiURL = settings.url
// $.ajax(settings).done(function (response) {
// 	console.log(response);
// });



// make an array of pushed variables
//make a form that accepts input


$(() => {
    //the selections array should have the ASIN values from the product selected from the checklist
    let selections = []
    let shuffleArray = []
// console.log($('[type=checkbox]'))




//Put input from form inside the array.

// This is an event listener for when the Add button is clicked.
$('#submit').on('click', (event) => {

    // assigning the input string to the constant $inputValue.
    const $inputValue = $('#input-box').val()
    
    // Pushing the input string inside the selections array.
   if (selections.length < 5) {
    selections.push($inputValue)

    console.log(selections)
   } else {
       alert('Your Design Board is full!")')
   }
   
 
   
    // Preventing the webpage from automatically refreshing so it does not lose state.
    event.preventDefault()


    // Assigning the varible $newInput to the <div>'s. The value of these <div>'s will appear on the webpage.
    let $newInput = $('<div>').text(selections[selections.length-1])
    $newInput.addClass('item').attr('id', $inputValue)

   

    // Appending the new input values to the design board so we have a visual list of input values (the items).
    $('.design-board').append($newInput)
    
    
        
    
    
    // Making a button and assigning it to the constant $remove. This has an event listener and event handler so that when the button is clicked, it will remove the items from the design board.
    const $remove = $('<button>').text('X').addClass('remove')


    $newInput.prepend($remove)

    $remove.on('click', (event) => {
        
        $(event.currentTarget).parent().remove()
        selections.pop()
    })



    const sofaInfo = () => {
        settings.url = settings.url + sofaAsin
            $.ajax(settings).done(function (response) {
                // Appending the item image to the tile
                    const sofaImageLink = response.images[0]                
                    const sofaImage = $('<img>').attr('src', sofaImageLink)
                    const sofaImgClick = $('<a>').attr('href', response.full_link).attr('id', 'sofa-click').attr('target', '_blank')
                    $('#sofa').append(sofaImgClick)
                    $('#sofa-click').append(sofaImage)
            // Appending the item price to the tile
            const sofaPrice = $('<div>').text('$' + `${response.prices.current_price}`).addClass('price')
            $('#sofa').append(sofaPrice)
            // Assigning a <div> to a constant with the item rating and number of reviews and with the class 'rating-review'.
            const sofaRatingReview = $('<div>').text('Rating: ' + `${response.reviews.stars}` + '/5' + ' Reviews: ' + `${response.reviews.total_reviews}`).addClass('rating-review')
            // Appending the constant to the sofa div.
            $('#sofa').append(sofaRatingReview)
                })
            settings.url = "https://amazon-products1.p.rapidapi.com/product?country=US&asin="
    }

    
    const lampInfo = () => {
        settings.url = settings.url + lampAsin
        $.ajax(settings).done(function (response) {
            const lampImageLink = response.images[0]
            const lampImage = $('<img>').attr('src', lampImageLink)
            const lampImgClick = $('<a>').attr('href', response.full_link).attr('id', $inputValue).attr('id', 'lamp-click').attr('target', '_blank')
            $('#lamp').append(lampImgClick)
            $('#lamp-click').append(lampImage)        
            const lampPrice = $('<div>').text('$' + `${response.prices.current_price}`).addClass('price')
        $('#lamp').append(lampPrice)
        const lampRatingReview = $('<div>').text('Rating: ' + `${response.reviews.stars}` + '/5' + ' Reviews: ' + `${response.reviews.total_reviews}`).addClass('rating-review')
        $('#lamp').append(lampRatingReview)
        })
        settings.url = "https://amazon-products1.p.rapidapi.com/product?country=US&asin="
    }

    const vaseInfo = () => {
        settings.url = settings.url + vaseAsin
        $.ajax(settings).done(function (response) {
            const vaseImageLink = response.images[0]
            const vaseImage = $('<img>').attr('src', vaseImageLink)
            const vaseImgClick = $('<a>').attr('href', response.full_link).attr('id', 'vase-click').attr('target', '_blank')
            $('#vase').append(vaseImgClick)
            $('#vase-click').append(vaseImage)
            const vasePrice = $('<div>').text('$' + `${response.prices.current_price}`).addClass('price')
        $('#vase').append(vasePrice)
        const vaseRatingReview = $('<div>').text('Rating: ' + `${response.reviews.stars}` + '/5' + ' Reviews: ' + `${response.reviews.total_reviews}`).addClass('rating-review')
        $('#vase').append(vaseRatingReview)
        })
        settings.url = "https://amazon-products1.p.rapidapi.com/product?country=US&asin="
    }

    const pillowInfo = () => {
        settings.url = settings.url + pillowAsin
        $.ajax(settings).done(function (response) {
            const pillowImageLink = response.images[0]
            const pillowImage = $('<img>').attr('src', pillowImageLink)
            const pillowImgClick = $('<a>').attr('href', response.full_link).attr('id', 'pillow-click').attr('target', '_blank')
            $('#pillow').append(pillowImgClick)
            $('#pillow-click').append(pillowImage)
            const pillowPrice = $('<div>').text('$' + `${response.prices.current_price}`).addClass('price')
        $('#pillow').append(pillowPrice)
        const pillowRatingReview = $('<div>').text('Rating: ' + `${response.reviews.stars}` + '/5' + ' Reviews: ' + `${response.reviews.total_reviews}`).addClass('rating-review')
        $('#pillow').append(pillowRatingReview)
        })
        settings.url = "https://amazon-products1.p.rapidapi.com/product?country=US&asin="
    }

    const tableInfo = () => {
        settings.url = settings.url + tableAsin
        $.ajax(settings).done(function (response) {
            const tableImageLink = response.images[0]
            const tableImage = $('<img>').attr('src', tableImageLink)
            const tableImgClick = $('<a>').attr('href', response.full_link).attr('id', 'table-click').attr('target', '_blank')
            $('#table').append(tableImgClick)
            $('#table-click').append(tableImage)
            const tablePrice = $('<div>').text('$' + `${response.prices.current_price}`).addClass('price')
        $('#table').append(tablePrice)
        const tableRatingReview = $('<div>').text('Rating: ' + `${response.reviews.stars}` + '/5' + ' Reviews: ' + `${response.reviews.total_reviews}`).addClass('rating-review')
        $('#table').append(tableRatingReview)
        })
        settings.url = "https://amazon-products1.p.rapidapi.com/product?country=US&asin="
    }



    if ($inputValue == 'sofa') { 
        sofaInfo()
        shuffleArray.push($newInput)
    } else if ($inputValue == 'lamp') {
        lampInfo()
        shuffleArray.push($newInput)

    } else if ($inputValue == 'vase') {
        vaseInfo()
        shuffleArray.push($newInput)

    } else if ($inputValue == 'pillow') {
        pillowInfo()
        shuffleArray.push($newInput)

    } else if ($inputValue == 'table') {
        tableInfo()
        shuffleArray.push($newInput)

    }
    console.log(shuffleArray)
    

    })

    

//// this is the code for shuffling the items////

    // listen for shuffle button
$('#mix-up').on('click', () => {

     // Randomize array.
     // NOTE: this randomization code was borrowed from stackoveflow.com (LINK: https://stackoverflow.com/questions/2450954/how-to-randomize-shuffle-a-javascript-array).
    shuffleArray.sort(()=>{
        return .5-Math.random()
    })

    // for loop append array into div.
    for (let i = 0; i < shuffleArray.length; i++) {
        $('.design-board').append(shuffleArray) 
        }
     
    })

})



// 




// this is the closing bracket for the add button event listener



    


//////////This is the if logic for matching the value of the checked box and the corresponding constant with the ASIN number.//////////


// // this is supposed to use the vairable assigned to the sofa html element
// if (selections[0] = $sofa) {
//     //this selects the url and adds the ASIN number to it
//     settings.url + sofaAsin

    //// this uses the API to Get the desired information for the thumbnail

    // $.ajax(settings).done(function (response) {
// 	console.log(response);
// });
// }


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
    // Product rating
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
