interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: 'name1',
  lastName: 'last1',
  age: 20,
  location: 'location 1111',
};

const student2: Student = {
  firstName: 'name2',
  lastName: 'last2',
  age: 30,
  location: 'location 2222',
};

const studentsList: Student[] = [student1, student2];

const table: HTMLTableElement = document.createElement('table');
const trh: HTMLTableRowElement = document.createElement('tr');
const th: HTMLTableCellElement = document.createElement('th');
const th2: HTMLTableCellElement = document.createElement('th');
const th3: HTMLTableCellElement = document.createElement('th');
const th4: HTMLTableCellElement = document.createElement('th');

th.innerHTML = 'firstName';
trh.appendChild(th);
th2.innerHTML = 'lastName';
trh.appendChild(th2);
th3.innerHTML = 'age';
trh.appendChild(th3);
th4.innerHTML = 'location';
trh.appendChild(th4);

table.appendChild(trh);

studentsList.forEach((val) => {
  const tr: HTMLTableRowElement = document.createElement('tr');
  const td1: HTMLTableCellElement = document.createElement('td');
  const td2: HTMLTableCellElement = document.createElement('td');
  const td3: HTMLTableCellElement = document.createElement('td');
  const td4: HTMLTableCellElement = document.createElement('td');

  td1.innerHTML = val.firstName;
  td2.innerHTML = val.lastName;
  td3.innerHTML = `${val.age}`;
  td4.innerHTML = val.location;

  tr.appendChild(td1);
  tr.appendChild(td2);
  tr.appendChild(td3);
  tr.appendChild(td4);

  table.appendChild(tr);
});

document.body.appendChild(table);
