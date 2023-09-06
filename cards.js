// отображение кнопок product
const product__buttons = document.querySelector('.product__buttons')

const buttons = [
  {title : 'свадьба'},
  {title : 'мужу'},
  {title : 'жене'},
  {title : 'партнеру'},
  {title : 'колекции'},
  {title : 'редкость'},

]


buttons.forEach(object => {
  const newButton = document.createElement('button')
  newButton.classList.add('product__buttons-item')
  newButton.textContent = object.title
  product__buttons.append(newButton)
});

console.log(product__buttons);


// отображение картинок product
const productImgHolder = document.querySelector('.product__images')

const productCards = [
  { cardLink: '1' ,imgSrc : 'public/images/Rectangle 5 (3).png', title: 'кольца'},
  { cardLink: '2' ,imgSrc : 'public/images/Rectangle 5 (3).png', title: 'серьги'},
  { cardLink: '3' ,imgSrc : 'public/images/Rectangle 5 (4).png', title: 'подвески'},
  { cardLink: '4' ,imgSrc : 'public/images/Rectangle 5 (5).png', title: 'запонки'},
  { cardLink: '5' ,imgSrc : 'public/images/Rectangle 5 (6).png', title: 'браслеты'},
  { cardLink: '6' ,imgSrc : 'public/images/Rectangle 5.png', title: 'часы'},

]

productCards.forEach(object => {
  const newImage = `
  <a class="product__images_container" href="${object.cardLink}">
    <img src="${object.imgSrc}" alt="" />
    <p class="product__images_title">${object.title}</p>
  </a>`;

  productImgHolder.innerHTML += newImage;
});

// 
const artImgHolder = document.querySelector('.usefoolArticles__images');

const artCards = [
  {artLink : '1', artImgSrc : 'public/images/Rectangle 5 (1).png', artAlt : '#', title : 'Как выбрать<br/> часы для своей<br/> будущей жены'},
  {artLink : '2', artImgSrc : 'public/images/Rectangle 5 (7).png', artAlt : '#', title : 'Запонки для мужа:<br/> 7 ключевых правил<br/> покупки аксессуара'},
  {artLink : '3', artImgSrc : 'public/images/Rectangle 5 (8).png', artAlt : '#', title : 'Как выбрать обручальные кольца молодоженам'},

]

artCards.forEach((item) => {
  const newArtCard = `
    <a class="usefoolArticles__images_container" href="${item.artLink}">
      <img class='usefoolArticles__images-image' src="${item.artImgSrc}" alt="${item.artAlt}" />
      <div class='usefoolArticles-title'>${item.title}</div>
    </a>`;

  artImgHolder.innerHTML += newArtCard;
  
});

          
          