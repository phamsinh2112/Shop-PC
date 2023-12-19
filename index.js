const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('show');
        } else {
            entry.target.classList.remove('show')
        }
    });
});
var trustus = document.querySelectorAll(".trustus");
trustus.forEach((el) => observer.observe(el));
const zoom = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('add');
        } else {
            entry.target.classList.remove('add')
        }
    });
});
var advise = document.querySelectorAll(".advise");
advise.forEach((el) => zoom.observe(el));
const zoomin = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('zoom');
        } else {
            entry.target.classList.remove('zoom')
        }
    });
});
var voucher = document.querySelectorAll(".voucher");
voucher.forEach((el) => zoomin.observe(el));
const left = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('right');
        } else {
            entry.target.classList.remove('right')
        }
    });
});
var blogcontent = document.querySelectorAll(".blog-content");
blogcontent.forEach((el) => left.observe(el));
const righttoAsus = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('righttoAsus');
        } else {
            entry.target.classList.remove('righttoAsus')
        }
    });
});
var asuscontain = document.querySelectorAll(".right-left");
asuscontain.forEach((el) => righttoAsus.observe(el));
const lefttoMSI = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if(entry.isIntersecting) {
            entry.target.classList.add('lefttoMSI');
        } else {
            entry.target.classList.remove('lefttoMSI')
        }
    });
});
var msicontain = document.querySelectorAll(".left-right");
msicontain.forEach((el) => lefttoMSI.observe(el));

document.addEventListener("DOMContentLoaded", function() {
    const smallImages = document.querySelectorAll(".product-image-extra-small");
    smallImages.forEach(function(image) {
        image.addEventListener("click", function() {
            const mainImage = document.querySelector(".product-image-main img");
            const imageContainer = this.closest(".product-image");
            const imageopacity = Array.from(imageContainer.querySelectorAll(".product-image-extra-small img"));
            const clickedImageSrc = this.querySelector(".image-change").src;
            mainImage.src = clickedImageSrc;   
            const currentIndex = imageopacity.findIndex(function(img) {
                return img.src === mainImage.src;
            });
            const nextIndex = (currentIndex) % imageopacity.length; 
            imageopacity.forEach(function(img) {
                img.style.opacity = 0.5;
            });
            imageopacity[nextIndex].style.opacity = 1.5;
        });   
    });
});
document.addEventListener("DOMContentLoaded", function() {
    const nextIcons = document.querySelectorAll(".next-icon");
    nextIcons.forEach(function(nextIcon) {
        nextIcon.addEventListener("click", function() {
            const imageContainer = this.closest(".product-image");
            console.log(imageContainer)
            const mainImage = document.querySelector(".product-image-main img");
            const smallImages = Array.from(imageContainer.querySelectorAll(".product-image-extra-small img"));
            const currentIndex = smallImages.findIndex(function(img) {
                return img.src === mainImage.src;
            });
            const nextIndex = (currentIndex + 1) % smallImages.length;
            mainImage.src = smallImages[nextIndex].src;
            smallImages.forEach(function(img) {
                img.style.opacity = 0.5; // Set opacity of all small images to 0.5
            });
            smallImages[nextIndex].style.opacity = 1;
        });
        
    });
    
});
document.addEventListener("DOMContentLoaded", function() {
    const nextIcons = document.querySelectorAll(".pre-icon");
    nextIcons.forEach(function(nextIcon) {
        nextIcon.addEventListener("click", function() {
            const imageContainer = this.closest(".product-image");
            const mainImage = document.querySelector(".product-image-main img");
            const smallImages = Array.from(imageContainer.querySelectorAll(".product-image-extra-small img"));
            const currentIndex = smallImages.findIndex(function(img) {
                return img.src === mainImage.src;
            });
            const nextIndex = (currentIndex + 4) % smallImages.length;
            mainImage.src = smallImages[nextIndex].src;
            smallImages.forEach(function(img) {
                img.style.opacity = 0.5; // Set opacity of all small images to 0.5
            });
            smallImages[nextIndex].style.opacity = 1;
        });
    });
});
document.addEventListener("DOMContentLoaded", function() {
    var productLinks = document.querySelectorAll(".carousel-product-link");
    productLinks.forEach(function(productLink) {
        productLink.addEventListener("click", function(event) {
            event.preventDefault(); 
            var productTitle = this.querySelector(".carousel-product-body-title h3").textContent;
            var productDetails = this.querySelectorAll(".carousel-text p");
            var productImage = this.querySelector(".image-product")
            var productDetailsArray = Array.from(productDetails).map(function(detail) {
                return detail.textContent;
            });
            var imagePath = productImage.getAttribute("src");
            var productPrice = this.querySelector(".carousel-product-body-bot-money span").textContent;
            localStorage.setItem("productTitle", productTitle);
            localStorage.setItem("productDetails", JSON.stringify(productDetailsArray));
            localStorage.setItem("productPrice", productPrice);
            localStorage.setItem("imagePath", imagePath);
            window.location.href = "/product.html";
            
        });
    });
});
// document.addEventListener("DOMContentLoaded", function() {
//     var productTitle = localStorage.getItem("productTitle");
//     var productDetails = JSON.parse(localStorage.getItem("productDetails"));
//     var productPrice = localStorage.getItem("productPrice");
//     var imagePath = localStorage.getItem("imagePath");
//     var productTitleElement = document.querySelector(".product-detail-title");
//     productTitleElement.textContent = productTitle;
//     var productDetailsElements = document.querySelectorAll(".product-detail-advance-text");
//     productDetails.forEach(function(detail, index) {
//         var detailElement = document.createElement("p");
//         detailElement.textContent = detail;
//         var productDetailElement = productDetailsElements[index];
//         productDetailElement.appendChild(detailElement);
//     });
//     var productPriceElement = document.querySelector(".product-detail-cart-money");
//     productPriceElement.textContent = productPrice;
//     var imageElement = document.querySelector(".product-image-main img");
//     var imageElementextra = document.querySelector(".product-image-extra-small img");
//     imageElement.src = imagePath;
//     imageElementextra.src = imagePath;
//     const productItem = document.querySelector('.product-list');
    
//     // productItem.getAttribute = productId;
//     // console.log(carouselItem)
    
// });
let iconcart = document.querySelector('.cart');
let listProductHTML = document.querySelector('.carousel-item');
let listProducts = [];


const addDataToHTML = () => {
    listProductHTML.innerHTML = '';
    if(listProductHTML.length > 0) {
        listProductHTML.forEach(product => {
            let newProduct = document.createElement('div');
            newProduct.classList.add('carousel-product');
            newProduct.innerHTML = `
                <a href="/product.html" class="carousel-product-link">
                    <div class="carousel-product-body">
                        <div class="carousel-product-body-img">
                            <img class="image-product" src="${product.image}"
                        <div class="carousel-product-body-container">
                            <div class="carousel-product-body-title">
                                <h3>${product.name}</h3>
                            </div>
                            <div class="carousel-product-body-text">                       
                                <div class="s_col_no_bgcolor">
                                    <div class="carousel-icon">
                                        <i class="fa-solid fa-puzzle-piece"></i>
                                    </div>
                                    <div class="carousel-text">
                                        <p>Nvidia GeForce RTX 4070</p>
                                    </div>                                               
                                </div>
                                <div class="s_col_no_bgcolor">
                                    <div class="carousel-icon">
                                        <i class="fa-solid fa-dice"></i>
                                    </div>
                                    <div class="carousel-text">
                                        <p>AMD Ryzen 7 5700X</p>
                                    </div>  
                                </div>
                                <div class="s_col_no_bgcolor">
                                    <div class="carousel-icon">
                                        <i class="fa-brands fa-playstation"></i>
                                    </div>
                                    <div class="carousel-text">
                                        <p>Corsair RGB Vengeance 2x8GB 3200Mhz</p>
                                    </div>  
                                </div>
                                <div class="s_col_no_bgcolor">
                                    <div class="carousel-icon">
                                        <i class="fa-solid fa-hand-fist"></i>
                                    </div>
                                    <div class="carousel-text">
                                        <p>M2 NVMhz</p>
                                    </div>  
                                </div>
                            </div>
                            <div class="carousel-product-body-bot">
                                <div class="carousel-product-body-bot-money">
                                    <span>1.374,92 €</span>
                                </div>
                                <div class="carousel-product-body-bot-learn">
                                    Learn more...
                                </div>
                            </div>
                        </div>
                    </div>
                </a>
            `;
            listProductHTML.appendChild(newProduct);
        })
    }
}
const initApp = () => {
    fetch('products.json')
    .then(response => response.json())
    .then(data => {
        listProducts = data;
        addDataToHTML();
    })
}
initApp();


