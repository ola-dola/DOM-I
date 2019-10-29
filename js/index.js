const siteContent = {
  "nav": {
    "nav-item-1": "Services",
    "nav-item-2": "Product",
    "nav-item-3": "Vision",
    "nav-item-4": "Features",
    "nav-item-5": "About",
    "nav-item-6": "Contact",
    "img-src": "img/logo.png"
  },
  "cta": {
    "h1": "DOM Is Awesome",
    "button": "Get Started",
    "img-src": "img/header-img.png"
  },
  "main-content": {
    "features-h4":"Features",
    "features-content": "Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "about-h4":"About",
    "about-content": "About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "middle-img-src": "img/mid-page-accent.jpg",
    "services-h4":"Services",
    "services-content": "Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "product-h4":"Product",
    "product-content": "Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
    "vision-h4":"Vision",
    "vision-content": "Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
  },
  "contact": {
    "contact-h4" : "Contact",
    "address" : "123 Way 456 Street Somewhere, USA",
    "phone" : "1 (888) 888-8888",
    "email" : "sales@greatidea.io",
  },
  "footer": {
    "copyright" : "Copyright Great Idea! 2018"
  },
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute('src', siteContent["nav"]["img-src"])

//---nav items-----
const nav1 = document.querySelector('a');
nav1.textContent = siteContent["nav"]["nav-item-1"];

const nav2 = document.querySelector('a:nth-of-type(2)');
nav2.textContent = siteContent["nav"]["nav-item-2"];

const nav3 = document.querySelector('a:nth-of-type(3)');
nav3.textContent = siteContent["nav"]["nav-item-3"];

const nav4 = document.querySelector('a:nth-of-type(4)');
nav4.textContent = siteContent["nav"]["nav-item-4"];

const nav5 = document.querySelector('a:nth-of-type(5)');
nav5.textContent = siteContent["nav"]["nav-item-5"];

const nav6 = document.querySelector('a:nth-of-type(6)');
nav6.textContent = siteContent["nav"]["nav-item-6"];

//---Cta Section----
const ctaHead = document.querySelector('.cta .cta-text h1');
ctaHead.textContent = siteContent.cta["h1"];

const ctaButton = document.querySelector('.cta .cta-text button');
ctaButton.textContent = siteContent.cta["button"];

const ctaImage = document.getElementById('cta-img');
ctaImage.src = siteContent.cta["img-src"];

//---Top Content----
let featuresHeading = document.querySelector('.main-content .top-content .text-content:nth-of-type(1) h4');
featuresHeading.textContent = siteContent["main-content"]["features-h4"];

let featuresText = document.querySelector('.main-content .top-content .text-content:nth-of-type(1) p');
featuresText.textContent = siteContent["main-content"]["features-content"];

let aboutHead = document.querySelector('.main-content .top-content .text-content:nth-of-type(2) h4');
aboutHead.textContent = siteContent["main-content"]["about-h4"];

let aboutText = document.querySelector('.main-content .top-content .text-content:nth-of-type(2) p');
aboutText.textContent = siteContent["main-content"]["about-content"];

let midImage = document.getElementById('middle-img');
midImage.src = siteContent["main-content"]["middle-img-src"];

let serviceHead = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(1) h4');
serviceHead.textContent = siteContent["main-content"]["services-h4"];

let serviceText = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(1) p');
serviceText.textContent = siteContent["main-content"]["services-content"];

let productHead = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(2) h4');
productHead.textContent = siteContent["main-content"]["product-h4"];

let productText = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(2) p');
productText.textContent = siteContent["main-content"]["product-content"];

let visionHead = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(3) h4');
visionHead.textContent = siteContent["main-content"]["vision-h4"];

let visionText = document.querySelector('.main-content .bottom-content .text-content:nth-of-type(3) p');
visionText.textContent = siteContent["main-content"]["vision-content"];