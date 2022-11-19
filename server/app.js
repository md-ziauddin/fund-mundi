import * as dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import bodyParser from 'body-parser'
import mongoose from 'mongoose'
import cors from 'cors';

import Campaignoutes from './routes/campaigns.js'


const app = express();

app.use('/campaigns', Campaignoutes)

// Default middle for server steup
app.use(bodyParser.json({"limit": "30mb", extended: true}))
app.use(bodyParser.urlencoded({ "limit": "30mb", extended: true }))
app.use(cors())

// DB connection
const CONNECTION_URL = `mongodb+srv://zia02:${process.env.DB_PASSWORD}@fund-mundi-cluster.hpfqsft.mongodb.net/`
const PORT = process.env.PORT || 5000;

mongoose.connect(CONNECTION_URL).then(() => app.listen(PORT, () => console.log(`Server is running on port ${PORT}`))).catch((err) => console.log(err.message))
