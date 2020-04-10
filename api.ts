import express from 'express';
import cors from 'cors';
import scrapeForLatestTable from './scrape/scrapeForLatestTable';
import scrapeForLatestLink from './scrape/scrapeForLatestLink';

const PORT = process.env.API_PORT || 5000;

(async () => {
    const app = express()

    app.use(cors())

    app.get('/', async (req, res) => {
        const foreclosedData = await scrapeForLatestTable(await scrapeForLatestLink())

        res.json(foreclosedData);
    })

    app.listen(PORT, () => {
        console.log(`Started Foreclosure API 🏘️ | ${PORT}`)
    })
})()
