function removeDuplicates() {

    var cartInput = document.getElementById("cart-input").value;
    var cart = cartInput.split(" ");


    var newCart = [];

    for (var i = 0; i < cart.length; i++) {
        if (newCart.indexOf(cart[i]) === -1) {
            newCart.push(cart[i]);
        }
    }


    document.getElementById("original-cart").innerHTML = "[" + cart.join(", ") + "]";


    document.getElementById("new-cart").innerHTML = "[" + newCart.join(", ") + "]";
}