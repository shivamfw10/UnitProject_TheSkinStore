function adduser(){
    let f_name = document.getElementById("f_name").value;
    let l_name = document.getElementById("l_name").value;
    let u_email = document.getElementById("u_email").value;
    let u_password = document.getElementById("u_password").value;

    let user={
        f_name,
        l_name,
        u_email,
        u_password,
    }
    let arr;
    arr = localStorage.getItem('Reg_users');
    if(arr==null){
        arr=[];
    }else{
        arr = JSON.parse(localStorage.getItem('Reg_users'));
    }
    arr.push(user);
    localStorage.setItem('Reg_users',JSON.stringify(arr));
    alert("Are You Sure!!");
    window.location.href="login.html";
    clear();
}
function clear(){
    document.getElementById("f_name").value=null;
    document.getElementById("l_name").value=null;
    document.getElementById("u_email").value=null;
    document.getElementById("u_password").value=null;
}
function userlogin(){
    const username = document.getElementById("u_email").value;
    const password = document.getElementById("u_password").value;
    const admins = JSON.parse(localStorage.getItem("Reg_users"));
    for(let i=0;i<admins.length;i++){
        let u = admins[i].u_email;
        let p = admins[i].u_password;
        if(u===username && p===password){
            alert('Login Successfull');
            window.location.href='index.html';
            break;
        }
        else
        {
            alert("Invalid Credential");
        }
    }
    //console.log(username+" "+password);
}
let lg_btn = document.getElementById("logbtn");
lg_btn.addEventListener("click",userlogin);