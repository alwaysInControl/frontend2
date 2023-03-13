var starbucks = {
    coffee: {
        cappuccino: 'Dark, rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.',
        espresso: 'Our smooth signature Espresso Roast with rich flavor and caramelly sweetness is at the very heart of everything we do.',
        americano: false
    },
    tea: {
        chai: 'Black tea infused with warm clove, cardamom, cinnamon and ginger notes. A bold, distinctive chai tea.',
        matcha: false,
        majesty: 'A blend of mint and a pinch of lemon verbena creates a refreshing flavor that is supercool for a caffeine-free herbal tea.'
    }
}


var order = prompt('Choose your coffee or tea:').toLowerCase();
if (starbucks.coffee.hasOwnProperty(order) || starbucks.tea.hasOwnProperty(order)) {
    if (starbucks.coffee[order] === false || starbucks.tea[order] === false) {
        console.log('Sold out!')
    } else {
        console.log('Expect your order pls.');
    }
} else {
    console.log('Invalid item, choose again pls!');
}
