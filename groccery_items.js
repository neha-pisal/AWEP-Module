function submitItem() {
    let addedItem = document.querySelector('#inputId').value;

    let cloneNode = document.querySelector('#refItemId').cloneNode(true);

    cloneNode.removeAttribute('id');
    cloneNode.style.visibility = "visible";

    cloneNode.children[0].innerHTML = addedItem;

    let itemBox = document.querySelector('#itemBox');

    itemBox.appendChild(cloneNode);

    document.querySelector('#inputId').value = "";

}

function removeItem(btnEle) {
    btnEle.parentElement.remove();
}

function clearItem() {
    let clearAll = document.querySelector('#itemBox');

    clearAll.remove();
}