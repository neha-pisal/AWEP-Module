let likecnt = 0;

function like1() {
    likecnt = likecnt + 1;

    let newLike = document.querySelector('#div2');

    newLike.innerHTML = likecnt + " likes";

}

function commentHere() {
    let userComment = document.querySelector('#inputId').value;

    let cloneEle = document.querySelector('#refCommentId').cloneNode(true);

    cloneEle.removeAttribute('id');
    cloneEle.style.visibility = 'visible';

    cloneEle.children[0].innerHTML = userComment;

    let commentBox = document.querySelector('#commentBox');

    commentBox.insertBefore(cloneEle, commentBox.firstChild);

    document.querySelector('#inputId').value = "";
}

function deleteComment(btnEle) {
    btnEle.parentElement.remove();
}