console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!

//create global variable basket array
let basket = [];
console.log(basket);

//create function addItem
function addItem( item ) {
  basket.push( item );
  return true;
}//end addItem
console.log('Test - should show "true"', addItem( "pears" ));
console.log(basket);

addItem("apples");
addItem("bananas");
console.log(basket);

//create function listItems
function listItems( basket ) {
  for (var i = 0; i < basket.length; i++) {
    console.log(basket[i]);
  }
  return basket[i];
}
console.log('Test', listItems( basket ));

//create function empty
function empty( basket ) {
  basket = [];
  return basket;
}//end empty
console.log('Test', empty( basket ));
