const games = [
    {
        img:"https://i5.walmartimages.com/asr/afd341a0-735f-43b0-b917-07f3bd14622a_2.46f3410af681994543dddb67ec00ad4b.jpeg",
        price:"$19.99",
        name:"God of War",
        description:"Dad of war discovers how to be a father by chucking his axe at giant nordic creatures and yell BOY many many times.",
        platform:"playstation"
    },
    {
        img:"https://www.gamerevolution.com/assets/uploads/2014/07/file_8759_killer-instinct-box.jpg",
        price:"$14.99",
        name:"Killer Instinct",
        description:"Bunch of crazy 80s and 90s knock offs fighting using breakers and instinct senses.",
        platform:"xbox"
    },
    {
        img:"https://upload.wikimedia.org/wikipedia/en/thumb/f/fb/DKC5_box_art.jpg/220px-DKC5_box_art.jpg",
        price:"$49.99",
        name:"Donkey Kong Country: Tropical Freeze",
        description:"A giant gorilla and possibly apes quest to unfeeze their island form a bunch of icey animals and collect lots of bananas.",
        platform:"switch"
    }
]
let wrapperEle = document.body.querySelector(".wrapper");
let productEle=document.body.querySelector(".product");
let popUpWrapperEle=document.body.querySelector(".popUpWrapper")


for (i=0;i<games.length;i++){
   
    
        var ele = document.createElement("div");
        ele.className="product";
        ele.id=i; 
        var priceEle = document.createElement("h4");
        var imgEle=document.createElement("img");
        imgEle.src=games[i].img;
        imgEle.className="prdImg";
    
        priceEle.innerHTML = games[i].price;
    
    
        if (games[i].platform=="playstation"){
            ele.className+= " playstation";
            var img=document.createElement("img");
            img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/00/PlayStation_logo.svg/2560px-PlayStation_logo.svg.png";
            img.className="plat";
            ele.appendChild(img);
        }
        
        if (games[i].platform=="xbox"){
            ele.className+= " xbox";
            var img=document.createElement("img");
            img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d7/Xbox_logo_%282019%29.svg/1200px-Xbox_logo_%282019%29.svg.png";
            img.className="plat";
            ele.appendChild(img);
        }
    
        if (games[i].platform=="switch"){
            ele.className+= " switch";
            var img=document.createElement("img");
            img.src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5d/Nintendo_Switch_Logo.svg/1024px-Nintendo_Switch_Logo.svg.png";
            img.className="plat";
            ele.appendChild(img);
        }
    


        ele.appendChild(imgEle);
        ele.appendChild(priceEle);
        console.log(games[i]);
        ele.addEventListener("click", showpopUp);
        wrapperEle.appendChild(ele);

};

function showpopUp(productInfo){
    var ele2 = document.createElement("div");
    ele2.className="popUp";
    ele2.style.display="flex";
    var img=document.createElement("img");
    img.src=games[this.id].img;
    img.className="img"
    ele2.appendChild(img);
    var nameEle = document.createElement("h4");
    var priceEle = document.createElement("h4");
    var descriptionEle = document.createElement("h4");
    var platformEle=document.createElement('h4');

    nameEle.innerHTML =  games[this.id].name;
    priceEle.innerHTML = games[this.id].price;
    descriptionEle.innerHTML = games[this.id].description;
    platformEle.innerHTML= games[this.id].platform;

    if (games[this.id].platform=="playstation"){
        platformEle.style.color="blue";
    }
    
    if (games[this.id].platform=="xbox"){
        platformEle.style.color="green";
    }

    if (games[this.id].platform=="switch"){
        platformEle.style.color="red";
    }
    ele2.appendChild(nameEle);
    ele2.appendChild(priceEle);
    ele2.appendChild(descriptionEle);
    ele2.appendChild(platformEle);

    ele2.addEventListener("click", function(){
        ele2.style.display="none";
    });

    document.body.appendChild(ele2);


};