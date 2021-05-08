/*
    mountains.js
    Author: Brendan Gasparin
    Date: 2021-05-09
    An exercise from:
    https://eloquentjavascript.net/14_dom.html
*/

function setup() {
    const MOUNTAINS = [
        {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
        {name: "Everest", height: 8848, place: "Nepal"},
        {name: "Mount Fuji", height: 3776, place: "Japan"},
        {name: "Vaalserberg", height: 323, place: "Netherlands"},
        {name: "Denali", height: 6168, place: "United States"},
        {name: "Popocatepetl", height: 5465, place: "Mexico"},
        {name: "Mont Blanc", height: 4808, place: "Italy/France"}
    ];
    const table = document.createElement('table');
    const props = Object.getOwnPropertyNames(MOUNTAINS[0]); // array of object keys

    document.querySelector('#mountains').appendChild(table);

    // table heading
    const headingRow = document.createElement('tr');
    for (let i = 0, len = props.length; i < len; i++) {
        const heading = document.createElement('th');
        heading.appendChild(document.createTextNode(props[i]));
        headingRow.appendChild(heading);
    }
    table.appendChild(headingRow);

    // rest of table
    for (let i = 0, len = MOUNTAINS.length; i < len; i++) {
        const row = document.createElement('tr');
        for (let j = 0, len = props.length; j < len; j++) {
            const cell = document.createElement('td');
            cell.appendChild(document.createTextNode(MOUNTAINS[i][props[j]]));
            if (typeof(MOUNTAINS[i][props[j]]) == 'number') {
                cell.style.textAlign = 'right';
            }
            row.appendChild(cell);
        }
        table.appendChild(row);
    }
}

// Your code here
document.addEventListener('DOMContentLoaded', setup);