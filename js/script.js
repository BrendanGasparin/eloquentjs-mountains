const MOUNTAINS = [
    {name: "Kilimanjaro", height: 5895, place: "Tanzania"},
    {name: "Everest", height: 8848, place: "Nepal"},
    {name: "Mount Fuji", height: 3776, place: "Japan"},
    {name: "Vaalserberg", height: 323, place: "Netherlands"},
    {name: "Denali", height: 6168, place: "United States"},
    {name: "Popocatepetl", height: 5465, place: "Mexico"},
    {name: "Mont Blanc", height: 4808, place: "Italy/France"}
];

const mountainDiv = document.querySelector('#mountains');
const table = document.createElement('table');
mountainDiv.appendChild(table);

const headRow = document.createElement('tr');
const head1 = document.createElement('th');
head1.textContent = 'name';
const head2 = document.createElement('th');
head2.textContent = 'height';
const head3 = document.createElement('th');
head3.textContent = 'place';

headRow.appendChild(head1);
headRow.appendChild(head2);
headRow.appendChild(head3);
table.appendChild(headRow);

for(let i = 0, len = MOUNTAINS.length; i < len; i++) {
    const row = document.createElement('tr');
    const td1 = document.createElement('td');
    td1.textContent = MOUNTAINS[i]['name'];
    const td2 = document.createElement('td');
    td2.textContent = MOUNTAINS[i]['height'];
    td2.style.textAlign = 'right';
    const td3 = document.createElement('td');
    td3.textContent = MOUNTAINS[i]['place'];
    row.appendChild(td1);
    row.appendChild(td2);
    row.appendChild(td3);
    table.appendChild(row);
}