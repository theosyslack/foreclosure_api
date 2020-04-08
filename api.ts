import express from 'express';
import scrapeForLatestTable from './scrape/scrapeForLatestTable';
import scrapeForLatestLink from './scrape/scrapeForLatestLink';

const PORT = process.env.API_PORT || 5000;

(async () => {
    const app = express()

    app.get('/', async (req, res) => {
        const foreclosedData = await scrapeForLatestTable(await scrapeForLatestLink())

        res.json(foreclosedData);
    })

    app.listen(PORT, () => {
        console.log(`Started Foreclosure API 🏘️ | ${PORT}`)
    })
})()
