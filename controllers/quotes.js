// step one, delete app.get routing part and make functions out of the different routing bits
const Quote = require('../models/Quote')


// app.get('/', (req, res) => {
//     res.send(`Welcome to the quotes API! There are ${quotes.length} available.`);
// })

// app.get('/quotes', 


const index = (req, res) => {
    try{
        const quotes = Quote.showAll();
        res.send(quotes);
    } catch(err){
    res.status(500).send({err: 'Server error'})
    }
}

// app.get('/quotes/random', 

const random = (req, res) => {
    try{
        const quote = Quote.showRandom();
        res.send(quote)
    }catch(err) {
        res.status(500).send({err: 'Server error'})
    };
}

//any numbers that come from the browser, parseInt them
const show = (req, res) => {
    const idx = parseInt(req.params.id);

  try{
   const quote = Quote.show();
   res.send(quote);
  }catch(err){
    res.status(404).send({err: 'Quote not found'})
  }
}


module.exports = {
    index,
    random,
    show
}
