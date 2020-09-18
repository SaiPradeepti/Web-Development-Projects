function HTMLgenerator(imgName, logoName) {
    return `
<div class="portfolio-item-wrapper">
    <div class="portfolio-img-background" style="background-image: url(images/${imgName}.jpg);"></div>
    <div class="img-text-wrapper">
        <div class="logo-wrapper">
            <img src="images/logos/${logoName}.png" alt="">
        </div>
        <div class="subtitle">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptas tempore nemo impedit.
        </div>
    </div>
</div>
`;
}

const imgNames = ['breakfast', 'burger', 'dessert', 'beverage', 'lasagne', 'pasta', 'pizza', 'sandwich', 'shakes', 'soup', 'vegan', 'herbalTea'];

const html = imgNames.map(imgName => HTMLgenerator(imgName, imgName + 'logo')).join(' ');

document.querySelector('.portfolio-items-wrapper').innerHTML = html;

const portfolioItems = document.querySelectorAll('.portfolio-item-wrapper')
portfolioItems.forEach(portfolioItem => {
    portfolioItem.addEventListener('mouseover', () => {
        portfolioItem.childNodes[1].classList.add('img-darken');
    })


    portfolioItem.addEventListener('mouseout', () => {
        portfolioItem.childNodes[1].classList.remove('img-darken');
    })
})