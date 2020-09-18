const portfolioItem = document.querySelectorAll('.portfolio-item-wrapper')

portfolioItem.forEach(item => {
    item.addEventListener('mouseover', () => {
        console.log(item.childNodes[1].classList.add('img-darken'))
    })

    item.addEventListener('mouseout', () => {
        console.log(item.childNodes[1].classList.remove('img-darken'))
    })
})