import Axios from "axios";
import {JSDOM} from 'jsdom';
import { URL_BASE } from "./consts";

async function scrapeForLatestLink() {
    const {data} = await Axios.get("https://city.milwaukee.gov/DCD/CityRealEstate/CityHouses");
    const html = new JSDOM(data);

    const {href}: HTMLAnchorElement = html.window.document.querySelector('a[href^="/Current-Listing"')

    if (href) {
        return URL_BASE + href
    } else {
        throw new Error("Latest Link not found")
    }

}

export default scrapeForLatestLink