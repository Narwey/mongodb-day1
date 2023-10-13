const express = require("express");
const app = express();
const {run} = require('./db')
const products = require('./Models/products')
const port = 3000;
app.use(express.json());

app.post('/', async(req,res)=> {
    const db = await run();
    const addProduct = db.collection('product').insertMany(products);
    res.send('HAHOWA MCHA');
})

app.get('/get', async(req,res) => {
  const db = await run();
  const query = {price:{$lt:3000}}
  const ajiLhnaya = await db.collection('product').find(query).toArray();
  res.send(ajiLhnaya);
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});
