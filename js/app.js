let tableDiv = document.querySelector('.someDiv');
tableDiv.style.display="table"
let someNumber = 1;
for (let i =0; i < 10; i++){
    let tableRow = document.createElement('tableRow');
    tableDiv.appendChild(tableRow)  
    tableRow.style.cssText=`
    display: flex;
    justify-content: space-between;
    gap: 2px`
    for (let i =0; i < 10; i++){
        let tableElem = document.createElement('tableElem');
        let elemText = document.createTextNode(`${someNumber}`)
        tableRow.appendChild(tableElem)
        tableElem.appendChild(elemText)
        someNumber++
    }
}
