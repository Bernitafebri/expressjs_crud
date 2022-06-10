import express from "express";
import db from "./config/database.js";
import productRoute from "./routes/index.js";

const app = express();

try {
    await db.authenticate();
    console.log('Database terhubung');
} catch (error) {
    console.error('Koneksi error', error);
}

app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE, OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Autorization');
    next();
    
});
app.use(express.json());
app.use('/products', productRoute);


app.listen(5000, () => console.log('Server running at port 5000'));