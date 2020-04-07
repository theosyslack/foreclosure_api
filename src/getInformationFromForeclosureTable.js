import path from 'ramda/src/path';
import table from './table.json';

const getThead = path([0, "children", 0, "children", 0, "children"]);

console.log(getThead(table));