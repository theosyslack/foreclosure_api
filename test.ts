import scrapeForLatestLink from "./scrape/scrapeForLatestLink";
import scrapeForLatestTable from "./scrape/scrapeForLatestTable";

(async () => {
    const latest = await scrapeForLatestTable("https://city.milwaukee.gov/Current-Listing-05-04-20.htm");
    console.log(latest)
})()