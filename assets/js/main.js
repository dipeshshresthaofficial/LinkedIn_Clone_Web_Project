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
});