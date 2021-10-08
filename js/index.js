function slideShow(){
    const arr =["https://cdn.shopify.com/s/files/1/0415/0548/9058/files/SmoothSkin_Bare_banner_1800x.jpg?v=1612962118","https://cdn.shopify.com/s/files/1/0415/0548/9058/files/desktop-banner-blue_16-06-21_1800x.png?v=1623847903"];
    let div = document.getElementById("slider_section");
    div.style.width="100%";
    div.style.height="500px";
    div.style.display="inline-block";
    let img = document.createElement('img');

    img.style.width="100%";
    img.style.height="100%";
    img.style.marginTop="2px";
    
    let i=0;
    img.src = arr[0]
    div.append(img);

    setInterval(function(){
        if(i==arr.length){
            i=0;
        }
        img.src=arr[i];
        i++;
    },4000)
}
function buynow(){
    window.location.href="product.html";
}
slideShow();
