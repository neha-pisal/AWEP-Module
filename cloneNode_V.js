var count = 0;
var count1 = 0;
function like() {
    let likecount = document.querySelector("#like")
    count++;
    likecount.innerHTML = count;
}

function dislike() {

    let dislikecount = document.querySelector("#dislike")
    count1++;
    dislikecount.innerHTML = count1;
}

function comment() {
    let cmt = document.querySelector("#comment").value
    let cloneValue = document.querySelector("#placeComment").cloneNode(true)

    cloneValue.innerHTML = cmt;

    let commentDiv = document.querySelector("#cmtdiv")


    //commentDiv.insertAfter(cloneValue, commentDiv.children[1])

}