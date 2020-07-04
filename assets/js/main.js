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



    var elements = document.getElementsByClassName("like-div");
    var currentLikePost = "";
    var lastLikePost = [0, 0];
    console.log(lastLikePost);
    var myFunction = function() {
        var attribute = this.getAttribute("data-myattribute");
        console.log(attribute)
        currentLikePost = 'like-' + attribute;
        var likeRef = document.getElementById(currentLikePost);
        likeCount = parseInt(likeRef.innerHTML);

        if (lastLikePost[attribute - 1] === 0) {
            likeCount += 1;
            likeRef.innerHTML = "+1";
            likeRef.style.color = "green";
            likeRef.style.animation = "moveup 1s";
            lastLikePost[attribute - 1] += 1;
            elements[attribute - 1].style.transform = "rotate(10deg)";


        } else {
            likeCount -= 1;
            likeRef.innerHTML = "-1";
            likeRef.style.color = "red";
            likeRef.style.animation = "movedown 1s";
            lastLikePost[attribute - 1] -= 1;
            elements[attribute - 1].style.transform = "rotate(-10deg)";

        }

        console.log(lastLikePost)

        function sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        }
        const work = async() => {
            await sleep(500)
            likeRef.style.animation = "none";
            console.log(likeCount)
            likeRef.innerHTML = likeCount;
            likeRef.style.color = "orangered";
            elements[attribute - 1].style.transform = "rotate(0deg)";
            //code
        }

        work()
    };

    for (var i = 0; i < elements.length; i++) {
        elements[i].addEventListener('click', myFunction, false);
    }
});