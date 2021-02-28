const productData = [{ 
    img: "images2/lightred.jpg",
    h5: "Product 1",
    p: "25.99",
    button: "Add to Cart"
},

{ 
    img: "images2/images-3.jpg",
    h5: "Product 1",
    p: "25.99",
    button: "Add to Cart"
}]

const container = document.getElementById('grid');

productData.forEach((result) => {



const card = document.createElement('div');

const content = ` <div class="container">
<div class="row">
<div class="col col-md-3">
<div class="card h-100"> 
<div id="cards">
<img src="${result.img}" class="card-img-top" alt="blue-shirt">
<h5 class="card-title">${result.h5}</h5>
<p class="text-center">${result.p}</p>
</div>
<div class="card-footer">
<div class="d-grid gap-2 col-6 mx-auto">
<button id="button" class="btn btn-secondary btn-sm">${result.button}</button>
</div>
<small class="text-muted"></small>
</div>


</div>

</div>
</div>
</div>`
    

container.innerHTML += content;
})



