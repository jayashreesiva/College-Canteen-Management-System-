let cart = [];


// Add item to cart

function addToCart(name, price) {

    cart.push({
        name: name,
        price: price
    });

    updateCart();

    alert(name + " added to cart!");
}


// Update cart

function updateCart() {

    document.getElementById("cartCount").innerText = cart.length;

    let cartItems = document.getElementById("cartItems");

    cartItems.innerHTML = "";

    let total = 0;

    if (cart.length === 0) {

        cartItems.innerHTML = "<p>Your cart is empty.</p>";

    } else {

        cart.forEach((item, index) => {

            total += item.price;

            cartItems.innerHTML += `
                <div class="cart-item">

                    <span>
                        ${item.name} - ₹${item.price}
                    </span>

                    <button
                        class="remove-btn"
                        onclick="removeItem(${index})">
                        Remove
                    </button>

                </div>
            `;

        });
    }

    document.getElementById("totalPrice").innerText = total;
}


// Remove item

function removeItem(index) {

    cart.splice(index, 1);

    updateCart();
}


// Show cart

function showCart() {

    document.getElementById("cartBox").style.display = "block";

}


// Close cart

function closeCart() {

    document.getElementById("cartBox").style.display = "none";

}


// Checkout

function checkout() {

    if (cart.length === 0) {

        alert("Please add food items to your cart first.");

        return;
    }

    closeCart();

    document.getElementById("orderBox").style.display = "block";
}


// Close order form

function closeOrder() {

    document.getElementById("orderBox").style.display = "none";

}


// Place order

function placeOrder() {

    let name =
        document.getElementById("studentName").value;

    let registerNumber =
        document.getElementById("registerNumber").value;

    let department =
        document.getElementById("department").value;

    let phone =
        document.getElementById("phone").value;

    let pickupTime =
        document.getElementById("pickupTime").value;


    if (
        name === "" ||
        registerNumber === "" ||
        department === "" ||
        phone === "" ||
        pickupTime === ""
    ) {

        alert("Please fill all the details.");

        return;
    }


    let total = cart.reduce(
        (sum, item) => sum + item.price,
        0
    );


    let orderId =
        "CAN" + Math.floor(1000 + Math.random() * 9000);


    alert(
        "Order Placed Successfully!\n\n" +
        "Order ID: " + orderId + "\n" +
        "Student: " + name + "\n" +
        "Total: ₹" + total + "\n" +
        "Pickup Time: " + pickupTime
    );


    cart = [];

    updateCart();

    closeOrder();


    document.getElementById("studentName").value = "";
    document.getElementById("registerNumber").value = "";
    document.getElementById("department").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("pickupTime").value = "";

}