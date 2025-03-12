require("dotenv").config();
const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const tourRoutes = require('./routes/tourRoutes');
const campaignRoutes = require("./routes/campaignRoutes");
const dbConnect = require("./config/db")


const app = express();
const PORT =  8000;


app.use(cors());
app.use(bodyParser.json());
dbConnect();

app.use('/api/tours', tourRoutes);
app.use('/api/campaigns', campaignRoutes);

app.get('/', (req,res)=>{
  res.status(200).json({ status: 'ok' });
})

app.get('/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});


app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

module.exports = app;
