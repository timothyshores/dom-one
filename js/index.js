const siteContent = {
	nav: {
		"nav-item-1": "Services",
		"nav-item-2": "Product",
		"nav-item-3": "Vision",
		"nav-item-4": "Features",
		"nav-item-5": "About",
		"nav-item-6": "Contact",
		"img-src": "img/logo.png"
	},
	cta: {
		h1: "DOM Is Awesome",
		button: "Get Started",
		"img-src": "img/header-img.png"
	},
	"main-content": {
		"features-h4": "Features",
		"features-content":
			"Features content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"about-h4": "About",
		"about-content":
			"About content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"middle-img-src": "img/mid-page-accent.jpg",
		"services-h4": "Services",
		"services-content":
			"Services content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"product-h4": "Product",
		"product-content":
			"Product content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis.",
		"vision-h4": "Vision",
		"vision-content":
			"Vision content elementum magna eros, ac posuere elvit tempus et. Suspendisse vel tempus odio, in interdutm nisi. Suspendisse eu ornare nisl. Nullam convallis augue justo, at imperdiet metus scelerisque quis."
	},
	contact: {
		"contact-h4": "Contact",
		address: "123 Way 456 Street Somewhere, USA",
		phone: "1 (888) 888-8888",
		email: "sales@greatidea.io"
	},
	footer: {
		copyright: "Copyright Great Idea! 2018"
	}
};

// Example: Update the img src for the logo
let logo = document.getElementById("logo-img");
logo.setAttribute("src", siteContent["nav"]["img-src"]);

// Navbar links

let navLinks = document.getElementsByTagName("a");
navLinks[0].textContent = siteContent.nav["nav-item-1"];
navLinks[1].textContent = siteContent.nav["nav-item-2"];
navLinks[2].textContent = siteContent.nav["nav-item-3"];
navLinks[3].textContent = siteContent.nav["nav-item-4"];
navLinks[4].textContent = siteContent.nav["nav-item-5"];
navLinks[5].textContent = siteContent.nav["nav-item-6"];

// cta
let ctaText = document.getElementsByClassName("cta-text")[0];
ctaText.children[0].textContent = siteContent.cta.h1;
ctaText.children[1].textContent = siteContent.cta.button;

document
	.getElementById("cta-img")
	.setAttribute("src", siteContent.cta["img-src"]);

// main content
const mainContent = siteContent["main-content"];
let topContent = document.getElementsByClassName("top-content")[0];

// features
let features = topContent.children[0];
features.children[0].textContent = mainContent["features-h4"];
features.children[1].textContent = mainContent["features-content"];

// about
let about = topContent.children[1];
about.children[0].textContent = mainContent["about-h4"];
about.children[1].textContent = mainContent["about-content"];

// middle image
let middleImg = document.getElementById("middle-img");
middleImg.setAttribute("src", mainContent["middle-img-src"]);

// bottom content
let bottomContent = document.getElementsByClassName("bottom-content")[0];

// Service
let services = bottomContent.children[0];
services.children[0].textContent = mainContent["services-h4"];
services.children[1].textContent = mainContent["services-content"];

// Product
let product = bottomContent.children[1];
product.children[0].textContent = mainContent["product-h4"];
product.children[1].textContent = mainContent["product-content"];

// Vision
let vision = bottomContent.children[2];
vision.children[0].textContent = mainContent["vision-h4"];
vision.children[1].textContent = mainContent["vision-content"];

// contact
let contact = document.getElementsByClassName("contact")[0];
contact.children[0].textContent = siteContent.contact["contact-h4"];
contact.children[1].textContent = siteContent.contact.address;
contact.children[2].textContent = siteContent.contact.phone;
contact.children[3].textContent = siteContent.contact.email;

// footer
let footer = document.getElementsByTagName("footer")[0];
footer.children[0].textContent = siteContent.footer.copyright;
