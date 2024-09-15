const wrapper=document.querySelector(".sliderWrapper")

const menuItem=document.querySelectorAll(".menuItem");


const products=[
    {
        id:1,
        title:"AIR FORCE",
        price:119,
        colors:[
            {
                code:"black",
                img:"img/air.png",
            },
            {
                code:"darkblue",
                img:"img/air2.png",
            },
        ],
    },
    {
        id:2,
        title:"AIR JORDAN",
        price:149,
        colors:[
            {
                code:"gray",
                img:"img/jordan.png",
            },
            {
                code:" rgb(47, 137, 47)",
                img:"img/jordan2.png",
            },
        ],
    },
    {
        id:3,
        title:"BLAZER",
        price:109,
        colors:[
            {
                code:"lightgray",
                img:"img/blazer.png",
            },
            {
                code:"rgb(28, 104, 28)",
                img:"img/blazer2.png",
            },
        ],
    },
    {
        id:4,
        title:"CRATER",
        price:129,
        colors:[
            {
                code:"black",
                img:"img/crater.png"
            },
            {
                code:"lightgray",
                img:"img/crater2.png",
            },
        ],
    },
    {
        id:5,
        title:"HIPPIE",
        price:99,
        colors:[
            {
                code:"darkgray",
                img:"img/hippie.png",
            },
            {
                code:"black",
                img:"img/hippie2.png",
            },
        ],
    },
];


let choosenProduct=products[0];
const currentProductImg=document.querySelector(".productImage");
const currentProductTitle=document.querySelector(".productTitle");
const currentProductPrice=document.querySelector(".productPrice");
const currentProductColors=document.querySelectorAll(".color");
const currentProductSize=document.querySelectorAll(".size");




menuItem.forEach((item,index)=>{
    item.addEventListener("click",()=>{

        //changing the current slide
        wrapper.style.transform=`translateX(${-100*index}vw)`;

        //change the choosen product
        choosenProduct=products[index];
       updateProduct(choosenProduct);

    });
});


//Products of specific items
function updateProduct(product){
        //change text of current product

    currentProductImg.src=choosenProduct.colors[0].img;
    currentProductTitle.textContent=choosenProduct.title;
    currentProductPrice.textContent="$"+choosenProduct.price;    

    //Assigning new Colors
    currentProductColors.forEach((color,index)=>{
        color.style.backgroundColor=choosenProduct.colors[index].code;
    })
}

///changing the colors of the shoes  
currentProductColors.forEach((color,index)=>{
    color.addEventListener("click",()=>{
        currentProductImg.src=choosenProduct.colors[index].img
    })
})


/**
 * Changing current slide with a time difference of 2.5s
 *  */ 
let currentSlide=0;
const totlaSlides=menuItem.length;

function moveSlider(index){
    wrapper.style.transform=`translate(${-100*index}vw)`
    currentSlide=index;
}

function autoSLide(){
    currentSlide=(currentSlide+1)%totlaSlides;
    moveSlider(currentSlide);
}

setInterval(autoSLide,2500);



//While on slide you click any of the product It will only show for buying
const buyButtons=document.querySelectorAll(".buyButton");
console.log(buyButtons);


buyButtons.forEach((button,index)=>{
    button.addEventListener("click",()=>{
        // clearInterval(autoSlideInterval);
        choosenProduct=products[index];
        updateProduct(choosenProduct);
    });
});




currentProductSize.forEach((size,index)=>{
    size.addEventListener('click',()=>{

        //this will first set all the colors to white and black
        currentProductSize.forEach((size)=>{
            size.style.backgroundColor="white";
            size.style.color="black";
        })
        //then it will choose to specific and check to desired color
        size.style.backgroundColor="black";
        size.style.color="white";

    })
});


const productButton =document.querySelector(".productButton");
const payment=document.querySelector(".payment");
const close=document.querySelector(".close");

productButton.addEventListener('click',()=>{
    payment.style.display="flex";
})

close.addEventListener('click',()=>{
    payment.style.display="none";
})
const payButton=document.querySelector(".payButton");
payButton.addEventListener('click',()=>{
    alert("Order Confirmed"); 
   close.click();
    
})

// const buyNow=document.getElementsByClassName(".productButton");

// buyNow.addEventListener('click',()=>{
//     buyNow.style.display="flex";
// })