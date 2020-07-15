'use strict'
const wrapper = document.getElementById('wrapper');

const parentContainer = document.createElement('div');
parentContainer.classList.add('shop');
wrapper.appendChild(parentContainer);

const shopContainer = document.createElement('div');
shopContainer.classList.add('shop_inner_items');
shopContainer.setAttribute('id', 'categoryBox')
parentContainer.appendChild(shopContainer);

const shopProducts = document.createElement('div');
shopProducts.classList.add('shop_inner_items');
shopProducts.setAttribute('id', 'categoryProducts')
parentContainer.appendChild(shopProducts);

const shopInfo = document.createElement('div');
shopInfo.classList.add('shop_inner_items');
shopInfo.setAttribute('id', 'categoryInfo')
parentContainer.appendChild(shopInfo);

function showCategories() {
    showElement(categories, 'categoryBox', categoryClick);
    // const categoryBox = document.getElementById('categoryBox');

    // for (let i = 0; i < categories.length; i++) {
    //     const categoryElem = document.createElement('a');
    //     categoryElem.setAttribute('href', '#');
    //     categoryElem.innerText = categories[i].name;
    //     categoryElem.setAttribute('data-id', categories[i].id)
    //     categoryElem.classList.add('shop_categories-item');   
    //     categoryBox.appendChild(categoryElem);

    //     categoryElem.addEventListener('click', categoryClick);
    // }
}

function categoryClick(event) {
    const categoryId = event.target.getAttribute('data-id');

    const selectedCategories = categories.find(function(category) {
        return category.id === categoryId;
    });

    const products = selectedCategories.items;
    showProducts(products, categoryId);
}

function showElement(items, parentId, clickElement, newAttributes) {
    const parent = document.getElementById(parentId); 
    parent.innerHTML = '';

    for (let i = 0; i < items.length; i++) {
        const element = document.createElement('a');
        element.setAttribute('href', '#');
        element.innerText = items[i].name;
        element.setAttribute('data-id', items[i].id)
        element.classList.add('shop_categories-item');

        if (newAttributes && newAttributes.length) {
            for (let j = 0; j < newAttributes.length; j++) {
                element.setAttribute(newAttributes[j].key, newAttributes[j].value);
            }
        }

        element.addEventListener('click', clickElement);

        parent.appendChild(element);
    }
}


function showProducts(products, categoryId) {
    const attributes = [
        {
           key: 'data-category-id',
           value: categoryId,
        }
    ];
    showElement(products, 'categoryProducts', productClick, attributes);
    document.getElementById('categoryInfo').innerHTML = '';

    // const categoryProducts = document.getElementById('categoryProducts');

    // for (let i = 0; i < products.length; i++) {
    //     const productElem = document.createElement('a');
    //     productElem.setAttribute('href', '#');
    //     productElem.innerText = products[i].name;
    //     productElem.setAttribute('data-id', products[i].id)
    //     productElem.classList.add('shop_categories-item');
    //     categoryProducts.appendChild(productElem);

    //     productElem.addEventListener('click', productClick);
    // }
}

function productClick(event) {
    const productId = event.target.getAttribute('data-id');
    const categoryId = event.target.getAttribute('data-category-id');

    const selectedCategories = categories.find(function(category) {
        return category.id === categoryId;
    });

    const selectedProduct = selectedCategories.items.find(function(product) {
        return product.id === productId;
    });
   
    showInfo(selectedProduct);

    // const selectProduct = categories.products.find(function(product) {
    //     return product.id === productId;
    // });
    
    // const productInfo = selectProduct.products;
    // showInfo(productInfo);
}

function showInfo(product) {
    const categoryInfo = document.getElementById('categoryInfo');
    categoryInfo.innerHTML = '';
    

    const title = document.createElement('h2');
    title.textContent = product.name;
    title.classList.add('product_title');
    categoryInfo.appendChild(title);

    const price = document.createElement('span');
    price.textContent = product.price;
    price.classList.add('product_price');
    categoryInfo.appendChild(price);

    const btn = document.createElement('button');
    btn.setAttribute('type', 'button');
    btn.textContent = 'Buy';
    btn.classList.add('product_btn');
    categoryInfo.appendChild(btn);

    btn.addEventListener('click', buttonClick);

    // for (let i = 0; i < productInfo.length; i++) {
    //     const infoElem = document.createElement('a');
    //     infoElem.setAttribute('href', '#');
    //     infoElem.innerText = productInfo[i].name;
    //     infoElem.setAttribute('data-id', productInfo[i].id)
    //     infoElem.classList.add('shop_categories-item');
    //     categoryInfo.appendChild(infoElem);

    //     infoElem.addEventListener('click', productClick);
    // }
}

function buttonClick() {
    const form = document.createElement('form');
    form.classList.add('userForm');
    form.setAttribute('action', 'https://fom.in.ua/echo');
    form.setAttribute('method', 'POST');
    wrapper.appendChild(form);

    const groupForm = document.createElement('fieldset');
    form.appendChild(groupForm);

    const userName = document.createElement('input');
    userName.classList.add('user_init');
    userName.setAttribute('placeholder', 'Enter your name');
    userName.setAttribute('type', 'text');
    userName.setAttribute('name', 'name');
    userName.setAttribute('required', 'required');
    groupForm.appendChild(userName);

    const userLastName = document.createElement('input');
    userLastName.classList.add('user_init');
    userLastName.setAttribute('placeholder', 'Enter your surname');
    userLastName.setAttribute('type', 'text');
    userLastName.setAttribute('name', 'surname');
    userLastName.setAttribute('required', 'required');
    groupForm.appendChild(userLastName);

    const userCitySelect = document.createElement('select');
    userCitySelect.setAttribute('name', 'city');
    userCitySelect.classList.add('choose_city');
    const userCity1 = document.createElement('option');
    userCity1.textContent = 'Odessa';
    userCitySelect.appendChild(userCity1);
    const userCity2 = document.createElement('option');
    userCity2.textContent = 'Kyiv';
    userCitySelect.appendChild(userCity2);
    const userCity3 = document.createElement('option');
    userCity3.textContent = 'Lviv';
    userCitySelect.appendChild(userCity3);
    groupForm.appendChild(userCitySelect);

    const indexMail = document.createElement('input');
    indexMail.classList.add('indexMail');
    indexMail.setAttribute('placeholder', 'Enter index new mail');
    indexMail.setAttribute('type', 'text');
    indexMail.setAttribute('name', 'indexMail');
    indexMail.setAttribute('required', 'required');
    groupForm.appendChild(indexMail);

    const radioBox = document.createElement('div');
    radioBox.classList.add('radio_box');
    groupForm.appendChild(radioBox);
    const radioLabel1 = document.createElement('label');
    radioLabel1.setAttribute('for', 'payCash');
    radioLabel1.textContent = 'Наложенный платеж';
    radioLabel1.classList.add('radio_Label1');
    radioBox.appendChild(radioLabel1);
    const radioBtn1 = document.createElement('input');
    radioBtn1.setAttribute('type', 'radio');
    radioBtn1.setAttribute('id', 'payCash');
    radioBtn1.setAttribute('name', 'getPick');
    radioBtn1.setAttribute('value', 'payCash');
    radioBtn1.classList.add('radio_btn1');
    radioBox.appendChild(radioBtn1);
    const radioLabel2 = document.createElement('label');
    radioLabel2.setAttribute('for', 'payCard');
    radioLabel2.textContent = 'Oплата банковской картой';
    radioBox.appendChild(radioLabel2);
    const radioBtn2 = document.createElement('input');
    radioBtn2.setAttribute('required', 'required');
    radioBtn2.setAttribute('type', 'radio');
    radioBtn2.setAttribute('id', 'payCard');
    radioBtn2.setAttribute('name', 'getPick');
    radioBtn2.setAttribute('value', 'payCash');
    radioBox.appendChild(radioBtn2);

    const amountProduct = document.createElement('input');
    amountProduct.setAttribute('placeholder', 'Enter the number of items');
    amountProduct.setAttribute('type', 'text');
    amountProduct.setAttribute('name', 'amountProduct');
    amountProduct.setAttribute('required', 'required');
    amountProduct.classList.add('indexMail');
    groupForm.appendChild(amountProduct);

    const userComment = document.createElement('textarea');
    userComment.setAttribute('cols', '30');
    userComment.setAttribute('rows', '10');
    userComment.classList.add('user_comment');
    userComment.setAttribute('name', 'comment');
    userComment.textContent = 'Enter your comment about product';
    groupForm.appendChild(userComment);

    const btnSubmit = document.createElement('button');
    btnSubmit.setAttribute('type', 'submit');
    btnSubmit.textContent = 'Buy';
    btnSubmit.classList.add('product_btn', 'btn_submit');
    groupForm.appendChild(btnSubmit);
}

// function submitForm() {
//     if (userName !== '' && userName !== ' ' && userName !== null);
//     wrapper.innerHTML = '';
// }