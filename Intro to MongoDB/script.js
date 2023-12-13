// Fetch all products and display them
function fetchAndDisplayProducts() {
  fetch("http://localhost:3000/fetchAllProducts")
    .then((response) => response.json())
    .then((products) => {
      renderProductList(products);
    })
    .catch((error) => {
      console.error("Error fetching products:", error);
    });
}

// Render product list
function renderProductList(products) {
  const productList = document.getElementById("product-list");
  productList.innerHTML = ""; // Clear previous data before rendering

  products.forEach((product) => {
    const productDiv = document.createElement("div");
    productDiv.classList.add("product-item");

    const title = document.createElement("p");
    title.textContent = `Title: ${product.title}`;

    const price = document.createElement("p");
    price.textContent = `Price: ${product.price}`;

    // Add more elements for other product details if needed

    const updateBtn = document.createElement("button");
    updateBtn.textContent = "Update";
    updateBtn.addEventListener("click", () => updateProduct(product._id));

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => deleteProduct(product._id));

    productDiv.appendChild(title);
    productDiv.appendChild(price);
    productDiv.appendChild(updateBtn);
    productDiv.appendChild(deleteBtn);

    productList.appendChild(productDiv);
  });
}

// Add a new product
function addProduct() {
  const newProduct = {
    title: document.getElementById("title").value,
    price: parseFloat(document.getElementById("price").value),
    // Add more fields as required
  };

  fetch("http://localhost:3000/addProduct", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newProduct),
  })
    .then(() => {
      fetchAndDisplayProducts(); // Refresh product list after addition
    })
    .catch((error) => {
      console.error("Error adding product:", error);
    });
}

// Function to update product details
function updateProduct(productId) {
  const updatedTitle = prompt("Enter updated product title:");
  const updatedPrice = parseFloat(prompt("Enter updated product price:"));

  const updatedProduct = {
    title: updatedTitle,
    price: updatedPrice,
    // Add more fields as required
  };

  fetch(`http://localhost:3000/updateProduct/${productId}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(updatedProduct),
  })
    .then(() => {
      fetchAndDisplayProducts(); // Refresh product list after update
    })
    .catch((error) => {
      console.error("Error updating product:", error);
    });
}

// Function to delete a product by ID
function deleteProduct(productId) {
  const confirmDelete = confirm(
    "Are you sure you want to delete this product?"
  );
  if (confirmDelete) {
    fetch(`http://localhost:3000/deleteProduct/${productId}`, {
      method: "DELETE",
    })
      .then(() => {
        fetchAndDisplayProducts(); // Refresh product list after deletion
      })
      .catch((error) => {
        console.error("Error deleting product:", error);
      });
  }
}

document.addEventListener("DOMContentLoaded", fetchAndDisplayProducts);
