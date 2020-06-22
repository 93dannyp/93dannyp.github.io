# 93dannyp.github.io

Design Board is an interior design web app that lets you visualize home decore and furnature selections from amazon.com. Often, when online shopping, we find ourselves wondering: "will that vase look right on top of that end table?" "How will the lamp fit into the mix?" "What kind of throw pillows on my sofa would look feng shui with the rest of my stuff?" This app is designed to help the consumer visualize these items together to ensure confidence in their purchases.

This app was built with the 'Amazon Products' API. This API was built by user ZombieBest on RapidAPI.com and can be found on RapidAPI.com

As on now, the app is limited due to constraints with the freemium plan on Rapid API.

How to use Design Board The user will type in one of the following inputs to search for a household item 'sofa', 'pillow', 'lamp', 'vase', or 'table' one at a time. Click the 'add' button and wait for a card to appear containing the information of your desired item.

The card will include: the title of your item, a picture with a clickable link to the Amazon web page where the information originated, the price of the item, the product rating on Amazon (out of five stars), and how many customer reviews the product has.

The Mechanics of the Code //The user will input information into the text box and it will be interpreted as a string datatype. //The input text box adds the associated ASIN to the end of the API URL. Every product listed on amazon has an ASIN. ASIN means Amazon Standard Identification Number. The ASIN can be found near the bottom of every product information page. // A new variable is created based of the string input in this form: // // https://www.example.com/some_numbers+some_letters+ASIN //The promise will execute and bring back data various product information in the form of an object. //The code then uses the object to access information for our cards made with jQuery. //New cards are created the form of an HTML

with a class 'item' and an ID specific to the individual item. Each item has the desired information from its Amazon product webpage diplayed on its card. //The cards get appended to another
called the 'design board'. // Cards have a remove button if the user want's to take them off their design board. //Every time a new
is added, it gets pushed into an array so that the divs can be manipulated in different ways such as shuffling the cards around randomly to see different combinations of items side by side.