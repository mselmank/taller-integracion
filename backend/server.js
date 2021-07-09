import express from 'express';
import data from './data';

const app = express ();

app.get('/api/products',(req, res)=>{
    res.send(data.products);

});
/*app.get('/', (req, res)=> {
    res.send ('Servidor esta listo');
});*/

const port = process.env.PORT || 5000;
app.listen(port,()=>{
    console.log(`Servidor http://localhost:${port}`);    
});
