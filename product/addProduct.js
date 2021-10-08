function addProduct(e){
    e.preventDefault();
    let pr_name = document.getElementById("name").value;
    let pr_brand = document.getElementById("brand").value;
    let pr_price = document.getElementById("price").value;
    let pr_image = document.getElementById("image").value;

    let product ={
        pr_name,
        pr_brand,
        pr_price,
        pr_image,
    }
    let arr;
    arr = localStorage.getItem('face');
    if(arr==null){
        arr=[];
    }else{
        arr = JSON.parse(localStorage.getItem('face'));
    }
    arr.push(product);
    localStorage.setItem('face',JSON.stringify(arr));
    alert("Are You Sure!!");
    clear();
}
function clear(){
    document.getElementById("name").value=null;
    document.getElementById("brand").value=null;
    document.getElementById("price").value=null;
    document.getElementById("image").value=null;
}
//------------------------------------------------js of Product.html------------------------------
// var data_div = document.getElementById('product_div');
// function appnedLocations(el){
//     var div = document.createElement('div');

//     let name = document.createElement('p');
//     name.innerHTML =el.pr_name;
//     name.style.color="midnightblue";
//     name.style.fontWeight="700";
//     name.style.textAlign="center";

//     let price = document.createElement('p');
//     price.innerHTML ="Rs. "+el.pr_price;
//     price.style.color="marron";
//     price.style.fontWeight="700";

//     let img = document.createElement('img');
//     img.src =el.pr_image;

//     let btn = document.createElement('button');
//     btn.textContent='Add to cart';
//     btn.setAttribute("class","button");
//     btn.addEventListener("click",function(){
//         addtoCart(el);
//     })
//     btn.style.display="block";

//     div.append(img,name,price,btn);

//     data_div.append(div)
// }
// function showProduct(){
//     let data = JSON.parse(localStorage.getItem("Products"));
//     data.forEach(function(el){
//         appnedLocations(el);
//     });
// }
// //---------------------------------------------------- ------------ js of addcart-------------
// function addtoCart(obj){
//     let arr;
//     arr = localStorage.getItem('cart');
//     let newarr = JSON.parse(arr);
//     if(arr==null){
//         arr=[];
//     }
//     else{
//         arr = JSON.parse(localStorage.getItem('cart'));
//     }
//     for(let i=0;i<arr.length;i++)
//     {
//       if(arr[i].pr_name===obj.pr_name){
//         alert("Already in cart");
//         return;
//       }
//     }
//     arr.push(obj);
//     localStorage.setItem('cart',JSON.stringify(arr));    
// }
// showProduct();