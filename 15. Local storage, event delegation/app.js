const addItems = document.querySelector('.add-items');
const itemsList = document.querySelector('.plates');
const items = JSON.parse(localStorage.getItem('items')) || [];
//taking an item from local storage or return a blank array

function addItem(e) {
    e.preventDefault();
    const text = (this.querySelector('[name=item]')).value;
    const item = {
        text,
        done: false
    };

    items.push(item); // add to items
    populateList(items, itemsList);
    //local storage takes only a string
    localStorage.setItem('items', JSON.stringify(items));
    this.reset(); // clear the form input box
}

function populateList(plates = [], platesList) { // plates == items
    platesList.innerHTML = plates.map((plate, i) => {
        return `
            <li>
                <input type="checkbox" data-index=${i} id="item${i}" ${plate.done ? 'checked' : ''} />
                <label for="item${i}">${plate.text}</label>
            </li>
        `;
    }).join('');//turns an array from map into one big string
}

function toggleDone(e) {
    if(!e.target.matches('input')) return; // skip this unless it's an input
    const el = e.target;
    const index = el.dataset.index;
    items[index].done = !items[index].done //if true change to false and if false change to true
    localStorage.setItem('items', JSON.stringify(items));
    populateList(items, itemsList);
}

addItems.addEventListener('submit', addItem); //also enter, not click. form is submitted, not button
itemsList.addEventListener('click', toggleDone);

populateList(items, itemsList);