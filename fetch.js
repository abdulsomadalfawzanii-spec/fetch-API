let products = [];

const productsContainer = document.getElementById('products');

const searchInput = document.getElementById('search');




fetch('https://dummyjson.com/products/category/motorcycle')

.then(response => response.json())

.then(function(data){

  products = data.products;

  displayProducts(products);

});





function displayProducts(items){

  let productsArray = items.map(function(value){

    return `

      <div class="card rounded-3xl p-4">

        <div class="relative overflow-hidden rounded-2xl">

          <img
            src="${value.images[0]}"
            class="w-full h-[250px] object-cover rounded-2xl"
          >

          <div class="overlay"></div>

        </div>

        <div class="mt-5">

          <h2 class="text-2xl font-bold mb-3">
            ${value.title}
          </h2>

          <div class="space-y-2 text-slate-300">

            <p>
              <span class="text-red-400 font-bold">
                Brand:
              </span>

              ${value.brand}
            </p>

            <p>
              <span class="text-red-400 font-bold">
                Price:
              </span>

              $${value.price}
            </p>

            <p>
              <span class="text-red-400 font-bold">
                Category:
              </span>

              ${value.category}
            </p>

            <p>
              <span class="text-red-400 font-bold">
                Stock:
              </span>

              ${value.stock}
            </p>

            <p>
              <span class="text-red-400 font-bold">
                Rating:
              </span>

               ${value.rating}
            </p>

          </div>

          

        </div>

      </div>

    `;

  });

  productsContainer.innerHTML = productsArray.join("");

}



// SEARCH FUNCTION

searchInput.addEventListener('input', function(e){

  let searchValue = e.target.value.toLowerCase();

  let filteredProducts = products.filter(function(item){

    return (
      item.title.toLowerCase().includes(searchValue) ||
      item.brand.toLowerCase().includes(searchValue) ||
      item.category.toLowerCase().includes(searchValue)
    );

  });

  displayProducts(filteredProducts);

});