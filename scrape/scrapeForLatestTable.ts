import Axios from "axios";
import {JSDOM} from 'jsdom';
import { URL_BASE } from "./consts";

async function scrapeForLatestTable(latestUrl) {
    if (!latestUrl) throw Error("Latest URL is required");

    const {data} = await Axios.get(latestUrl);

    const html = new JSDOM(data);
    const table = html.window.document.querySelector("#centerZone > div > table:nth-child(4) > tbody > tr > td > table");
    const tbody = table.querySelector('tbody')    


    return getDataFromBody(tbody);
}

function getElements (element: HTMLElement, tag: string): HTMLElement[] {
    return [].slice.call(element.querySelectorAll(tag)) 
}

function getElement (element: HTMLElement, tag: string): HTMLElement {
    return element.querySelector(tag)
}

function getDataFromBody (tbody: HTMLTableSectionElement): object[] {
    const rows = getElements(tbody, "tr");

    return rows.map(getDataFromRow)
}

function getDataFromRow (tr: HTMLTableRowElement): object {
    const [photoCell, addressCell, typeCell, bedroomsCell, bathsCell, priceCell] = getElements(tr, 'td') 
    
    const photo = (() => {
        const image = getElement(photoCell, 'img') as HTMLImageElement;
        return URL_BASE + image.src.replace("?Teaser", "")
    })()

    const [addressLink, scopeOfWorkLink] = getElements(addressCell, 'a') as HTMLLinkElement[]

    return {
        photo,
        address: addressLink.textContent,
        scopeOfWork: URL_BASE + scopeOfWorkLink.href,
        type: typeCell.textContent,
        bedrooms: bedroomsCell.textContent,
        baths: bathsCell.textContent,
        price: priceCell.textContent.replace(/\$\s/, ""),
        url: URL_BASE + addressLink.href,
        __raw: tr.outerHTML
    }
    
}

export default scrapeForLatestTable