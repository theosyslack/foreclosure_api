import path from 'ramda/src/path';
import data from './table.json';

// const getTable =        path([0, "children"]);

// const getHeadersFromData = path([0, "children", 0, "children", 0, "children"]);
// const getRowsFromData    = path([0, "children", 1, "children"]);
// const getTextFromHeader = path(["children", 0, "children", 0, "text" ]);
const thead = path([0, "children", 0], data);
const tbody = path([0, "children", 1], data);
// const {thead, tbody} = Object.entries(data).reduce((acc, [key, value], index) => {
//     console.log(key, value)
//     return acc
// }, {})

console.log(body)



// const headers = getHeadersFromData(data)
// const headerText = headers.map(getTextFromHeader)

// const rows = getRowsFromData(data);
// const rowsText = rows.map((row) => {
//     const [photo, address, ...text] = row.children;
 
//     const sanitizedImage = photo.children[0].src
//     const imageUrl = `https://city.milwaukee.gov/${sanitizedImage}`
//     console.log(imageUrl)
//     console.log("------")
//     // console.log(row.children.map((child) => child.text))
//     return 
// })

// const result = getRowsFromData(data)[0]
// console.log(result);