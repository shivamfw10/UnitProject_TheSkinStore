let cart_div = document.getElementById("left");
let total =0;
function append_product(el){
    let product_div = document.createElement('div');
    product_div.setAttribute('class','product-div');

    let prod_image_div = document.createElement('div');
    prod_image_div.setAttribute('class', 'prod-image');
    let prod_image_url = document.createElement('img');
    prod_image_url.src = el.pr_image;
    prod_image_div.append(prod_image_url);
    product_div.append(prod_image_div);
    cart_div.append(product_div)

    let prod_name_div = document.createElement('div');
    prod_name_div.setAttribute('class','prod-name-div')
    let prod_name = document.createElement('p');
    prod_name.innerHTML = el.pr_name;
    prod_name_div.append(prod_name);
    product_div.append(prod_name_div)
    cart_div.append(product_div)

    let quant_div = document.createElement('div');
    quant_div.setAttribute('id', 'quant-div')
    let button_low = document.createElement('button');
    button_low.textContent = '-';
    button_low.addEventListener('click', function(){
        decrease();
    })

    let quant_box = document.createElement('input');
    quant_box.setAttribute('id','input')
    quant_box.readOnly = 'readonly';
    quant_box.value = '1';

    let button_high = document.createElement('button');
    button_high.textContent = '+';
    button_high.addEventListener('click', function(){
        increase();
    })

    let prod_price_div = document.createElement('div');
    prod_price_div.setAttribute('class','prod-price-div')
    let prod_price = document.createElement('p');
    prod_price.innerHTML = `₹ ${el.pr_price}`
    prod_price_div.append(prod_price);
    product_div.append(prod_price_div)
    cart_div.append(product_div);

    quant_div.append(button_low,quant_box, button_high);
    product_div.append(quant_div);
    cart_div.append(product_div);

    total = total + Number(el.pr_price);
}
function get_cart_product(){
    let prod = JSON.parse(localStorage.getItem('skillcart'));
    if(prod == null){
        let cart_body = document.getElementById('left');
        let image_div = document.createElement('div');
        image_div.setAttribute('class', 'empty-cart-image');
        let image = document.createElement('img');
        image.src = "https://www.fascal.in/assets/img/empty-cart.jpg";
        image_div.append(image)
        cart_body.append(image_div)

    }
    else{
        //add_product_to_cart();
        prod.forEach(function(el){
        append_product(el)
        }) 
        //get_cart_total_amount();
        let p_total = document.getElementById("total");
        p_total.innerText=`:₹${total}.00`
    }
}
get_cart_product();
function decrease(){
    let count = document.getElementById('input').value;
    if(count>1){
        count--;
        document.getElementById('input').value = count;
    }
}
function increase(){
    let count = document.getElementById('input').value;
    if(count<10){
        count++;
        document.getElementById('input').value = count;
    }
}
function applyPromo(){
    let txt = document.getElementById("promo").value;//taking promo code
    let discount = document.getElementById("discount");
    let payamount = document.getElementById("remain");
    let saveamount = document.getElementById("save");
    let btn = document.getElementById("promo_btn");
    if(txt==="masai30"){
        discount.innerHTML =`Discount on Promo Code - ₹${(total*30)/100}`;
        payamount.innerText=`Payable Amount - ₹ ${total-(total*30)/100}`;
        saveamount.innerText=`Save - ₹ ${(total*30)/100}`;

        btn.disabled=true;
        document.getElementById("promo").readOnly=true;
    }
    else{
        alert("Promo Code is Not Valid");
    }
}
function checkout(){
    if(total>0){
        setTimeout(function(){
            location.href="checkout.html";
        },4000);
    }
    else{
        alert("Cart is Empty!")
    }
}

