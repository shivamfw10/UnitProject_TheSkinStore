var data_div = document.getElementById('product');
function appnedLocations(el){
    var div = document.createElement('div');
    div.setAttribute("class","column");

    let img_div = document.createElement('div');
    img_div.style.height="50%";
    img_div.style.width="90%";

    let cont_div = document.createElement('div');
    cont_div.style.height="50%";
    img_div.style.width="90%";

    let name = document.createElement('p');
    name.innerHTML =el.pr_name;
    name.style.color="midnightblue";
    name.style.fontWeight="700";
    name.style.textAlign="left";
    name.style.lineHeight="28px";
    name.style.height="80px";

    let brand = document.createElement('p');
    brand.innerHTML =el.pr_brand;
    brand.style.color="marron";
    brand.style.textAlign="left";
    brand.style.lineHeight="28px";

    let price = document.createElement('p');
    price.innerHTML ="Rs. "+el.pr_price;
    price.style.color="marron";
    price.style.fontWeight="700";
    price.style.lineHeight="30px";
    price.style.textAlign="left";

    let img = document.createElement('img');
    img.src =el.pr_image;

    let btn = document.createElement('button');
    btn.textContent='Add to cart';
    btn.style.marginBottom="10px";
    btn.setAttribute("class","button");
    btn.addEventListener("click",function(){
        addtoCart(el);
    })
    btn.style.display="block";

    let quickbtn = document.createElement('button');
    quickbtn.textContent='Quick View';
    quickbtn.setAttribute("class","button");
    quickbtn.style.backgroundColor="white";
    quickbtn.style.color="black";
    quickbtn.style.border="1px solid black";
    quickbtn.addEventListener("click",function(){
        quickview(el);
    })
    quickbtn.style.display="block";

    img_div.append(img);
    cont_div.append(brand,name,price,btn,quickbtn);
    div.append(img_div,cont_div)
    //div.append(img,brand,name,price,btn,quickbtn);

    data_div.append(div)
}
function showProduct(){
    let data = JSON.parse(localStorage.getItem("face"));
    data.forEach(function(el){
        appnedLocations(el);
    });
}
function addtoCart(obj){
    let arr;
    arr = localStorage.getItem('skillcart');
    let newarr = JSON.parse(arr);
    if(arr==null){
        arr=[];
    }
    else{
        arr = JSON.parse(localStorage.getItem('skillcart'));
    }
    for(let i=0;i<arr.length;i++)
    {
      if(arr[i].pr_name===obj.pr_name){
        alert("Already in cart");
        return;
      }
    }
    arr.push(obj);
    localStorage.setItem('skillcart',JSON.stringify(arr));    
}
showProduct();