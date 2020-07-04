document.addEventListener('DOMContentLoaded', e => {

    var seeMoreBtnRef = document.querySelector('.see-more');


    seeMoreBtnRef.addEventListener('click', e => {
        var showMoreContent = document.querySelector('.more-content');
        if (seeMoreBtnRef.innerHTML == 'see more') {
            console.log('visible')
            showMoreContent.style.display = "inline-block";
            seeMoreBtnRef.innerHTML = 'see less';
            seeMoreBtnRef.style.fontWeight = "bolder";
        } else {
            console.log('hidden')
            showMoreContent.style.display = "none";
            seeMoreBtnRef.innerHTML = 'see more';
            seeMoreBtnRef.style.fontWeight = "bolder";
        }
    });


    // var likeBtnRef = document.querySelector(".like-div");
    // likeBtnRef.addEventListener('click', e => {
    //     console.log(e);
    // });

    var elements = document.getElementsByClassName("like-div");

    var myFunction = function() {
        var attribute = this.getAttribute("data-myattribute");

        var likeRef = document.getElementById('like-' + attribute);
        likeCount = parseInt(likeRef.innerHTML);
        likeCount += 1;
        likeRef.innerHTML = "+1";
        likeRef.style.color = "green";
        likeRef.style.animation = "mover 1s";

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        const work = async() => {
            await sleep(500)
            likeRef.style.animation = "none";
            likeRef.innerHTML = likeCount;
            likeRef.style.color = "orangered";
            //code
        }
        work()
    };

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }
});