const express = require('express');
const cors = require('cors');
const authRoutes = require('./routes/auth');
const sellerRoutes = require('./routes/seller');
const buyerRoutes = require('./routes/buyer');

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use('/api/seller', sellerRoutes);
app.use('/api/buyer', buyerRoutes);

app.get('/',(req, res)=>{
    res.send("chalra hu")
})

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
