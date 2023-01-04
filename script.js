var mainDiv = document.getElementById("mainDiv")
mainDiv.classList.add('card_container')

var leftCol = document.getElementsByClassName("left_col")[0]
 leftCol.innerHTML += `<img src="${productData.preview}" id="prod_image">`

var rightCol = document.getElementsByClassName("right_col")[0]
rightCol.innerHTML += 
                  `
                    <h1 class="product_title">${productData.name}</h1>
                    <h2 class="product_subtitle">${productData.brand}</h2>
                    <h3 class="product_subtitle">Price: Rs <span class="price">${productData.price}</span></h3>
                    <h4 class="product_subtitle">Description </h4>
                    <p class="product_desc">${productData.description}</p>
                    <h4 class="product_subtitle">Product Preview</h4>
                    `

var previewImg = document.createElement('div')
    previewImg.className = "previewImg"
    for(var j=0;j<productData.photos.length;j++){
        var prod_prevImg = document.createElement('img')
        prod_prevImg.id = "img" +[j]
        prod_prevImg.className = "listsIMG"
        prod_prevImg.src = productData.photos[j]
        previewImg.appendChild(prod_prevImg)
    }    
rightCol.appendChild(previewImg)

rightCol.innerHTML += `<div class="btn">
<a href="#"><button id="btnCart">Add to Cart</button></a>
</div>`

  
// click function 

var getImg = document.getElementById('prod_image')


for(var i=0; i<productData.photos.length; i++){
    var prevListsimg = document.getElementsByClassName('listsIMG')[i]
    document.getElementsByClassName('listsIMG')[0].classList.add('active')
    
    prevListsimg.addEventListener("click", function(){
        var actClass = document.getElementsByClassName("active");

        if (actClass.length > 0) {
            actClass[0].className = actClass[0].className.replace(" active", "");
        }

        this.className += " active";
      var result = this.src
      getImg.src = result;
})
}



