// function checkLogin() {
// 	if(localStorage.getItem('userlogin'))
// 	{
// 		var user = JSON.parse(localStorage.getItem('userlogin'));
// 		welcomeMessageElement.style.display="block";
// 		document.querySelector("#welcome-message .showname").innerHTML = "Xin chào: " + a.username + "!";
// 		document.getElementById("login-icon").style.display = "none";
// 	}
// 	else {
// 		return;
// 	}
// }

function add1()
{
	var s='';
	s='<div id="st-container">'+
	'<div class="st-left-col">'+
		'<div class="block-menu">'+


			'<div class="block-item-menu">'+
				'<a onclick="add2(\'info\')" href="#" id="info">'+
				'<div class="item-menu">'+
					'<i class="fa-solid fa-house fa-lg"></i>'+
					'<p>Thông tin khách hàng</p>'+
				'</div>'+
			'</a>'+
			'</div>'+
		   
			'<div class="block-item-menu">'+
				'<a onclick="add2(\'invoice\')" href="#" id="invoice">'+
				'<div class="item-menu">'+
					'<i class="fa-solid fa-clock-rotate-left fa-lg"></i>'+
					'<p>Hóa đơn đã mua</p>'+
				'</div>'+
			'</a>'+
			'</div>'+

			'<div class="block-item-menu">'+
				'<a onclick="add2(\'exit\')" href="#" id="exit">'+
				'<div class="item-menu">'+
					'<i class="fa-solid fa-arrow-right-to-bracket fa-lg"></i>'+
					'<p>Thoát</p>'+
				'</div>'+
			'</a>'+
			'</div>'+
		  
		'</div>'+
	'</div>'+
	'<div class="st-right-col">'+
		   '<div class="block-1">'+

		   '</div>'+

		   '<div class="block-2">'+

		   '</div>'+

		   '<div class="block-3 modal">'+
			'<button type="button" class="close" onClick="closebillDT()">+</button>'+
			   '<div class="bill-dt">'+

			  '</div>'+
		   '</div>'+
	'</div>'+
'</div>';
	s = `<div class="container"> ${s} </div>`
 document.getElementById("main").innerHTML=s;
//  document.getElementById("main").style.display="none";
}




function add2(id)
{
   var s='';
   var user = JSON.parse(localStorage.getItem('userlogin'));
   if(id=='page')
   {
   s='<p>'+'Xin chào '+user.fullname+'</p>';
   document.querySelector('#st-container .st-right-col').innerHTML=s;
   }
   else {
    if(id=='info'){
    s='<div class="from-group"><label for="name">Họ và tên</label>'+
	'<input type="text" id="name" disabled value="'+user.fullname+'"><button class="btn-1" onclick="ishow()"><i class="fa-regular fa-pen-to-square fa-lg"></i></button></div>'+

	'<div class="from-group"><label for="address">Email</label>'+
	'<input type="text" id="address" disabled value="'+user.email+'"><button class="btn-1" onclick="ishow()"><i class="fa-regular fa-pen-to-square fa-lg"></i></button></div>'+

    
	'<div class="from-group"><label for="address">Số điện thoại</label>'+
	'<input type="text" id="address" disabled value="'+user.phonenumber+'"><button class="btn-1" onclick="ishow()"><i class="fa-regular fa-pen-to-square fa-lg"></i></button></div>'+

	'<div class="from-group">'+
	'<button class="block-1-pass" onclick="password()"> Đổi mật khẩu ?</button>'+
	'<div class="block-2-pass"><button onclick="closeBlockPass()" class="close">+</button><div class="block-2-passDT"></div>'+
	'</div></div>'+

	'<div onclick="updateInfo()" class="btn-from-submit-update">Cập nhật thông tin</div>';
    document.querySelector('#st-container .st-right-col').innerHTML=s;
	} else if (id=='invoice')
	{
		//showbill()
	} else if(id=='exit')

	{
		location.reload();
	}
}

 }


 function password()
 {
	document.querySelector('#st-container .st-right-col .from-group:nth-child(4) .block-2-pass').style.display="block";
	var s='';
	s='<div class="pass-form">'+
	'<div class="eye"><input type="password" placeholder="Mật khẩu cũ" id="pass1"><button  id="btn-2-pass1" class="btn-2" onclick="eshow(\'pass1\',\'btn-2-pass1\')"><i class="fa-regular fa-eye fa-lg"></i></button></div></div>'+
	'<div class="pass-form">'+
	'<div class="eye"><input type="password" placeholder="Mật khẩu mới" id="pass2"><button  id="btn-2-pass2" class="btn-2" onclick="eshow(\'pass2\',\'btn-2-pass2\')"><i class="fa-regular fa-eye fa-lg"></i></button></div></div>'+
	'<div class="pass-form">'+
	'<div class="eye"><input type="password" placeholder="Nhập mật khẩu mới" id="pass3"><button  id="btn-2-pass3" class="btn-2" onclick="eshow(\'pass3\',\'btn-2-pass3\')"><i class="fa-regular fa-eye fa-lg"></i></button></div>'+
	'</div><button onclick="outCP()">Xác Nhận</button>';
    document.querySelector('#st-container .st-right-col .from-group:nth-child(4) .block-2-pass .block-2-passDT').innerHTML=s;
 }


 var usernameRegex = /^[a-zA-Z0-9_]{3,}$/;
 var passwordRegex = /^[\w!@#$%^&*]{6,}$/;
 var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
 var phoneRegex = /^\d{10}$/;
 function outCP()
 {
	var user = JSON.parse(localStorage.getItem('userlogin'));
	var x=document.querySelector('#st-container .st-right-col .from-group:nth-child(4) .block-2-pass .block-2-passDT input#pass1').value;
	var y=document.querySelector('#st-container .st-right-col .from-group:nth-child(4) .block-2-pass .block-2-passDT input#pass2').value;
	var z=document.querySelector('#st-container .st-right-col .from-group:nth-child(4) .block-2-pass .block-2-passDT input#pass2').value;
	if(x=='' || y=='' || z=='')
	{
		customAlert('Mời bạn nhập đầy đủ','warning');
		return;
	} else if(user.password!=x)
	{
       customAlert('Bạn nhập sai mật khẩu mời nhập lại','warning');
	   return;
	}
	
	else if(!passwordRegex.test(y))
	{
	   customAlert('Mạt khẩu phải trên 6 kí tự','warning');
	   return;
	}
	else if(z!=y)
	{
	   customAlert('Mật khẩu nhập lại không khớp','warning');
	   return;
	}
	else{
      customAlert('Cập nhật mật khẩu thành công','success');
	  user.password=y;
      var userlist = JSON.parse(localStorage.getItem('user-list'));
      var userlogin = JSON.parse(localStorage.getItem('userlogin'));
      for(var i=0; i<userlist.length ;i++)
      {
        if(userlogin.fullname == userlist[i].fullname)
        {
            if(userlogin.password == userlist[i].password)
        {
           userlist[i].password=user.password;
           localStorage.setItem('userlogin',JSON.stringify(user));
           break;
        }
        }
      }
      localStorage.setItem('user-list',JSON.stringify(userlist));
	  document.querySelector('#st-container .st-right-col .from-group:nth-child(4) .block-2-pass').style.display="none";
	}
 }


 function eshow(inputId, iconId) {
	const passwordInput = document.getElementById(inputId);
	const icon = document.getElementById(iconId);
	// Toggle giữa type là password và text
	passwordInput.type = passwordInput.type === 'password' ? 'text' : 'password';

	// Toggle giữa eye và eye-slash
	if (passwordInput.type === 'password') {
		icon.innerHTML = '<i class="fa-regular fa-eye fa-lg"></i>';
	} else {
		icon.innerHTML = '<i class="fa-regular fa-eye-slash fa-lg"></i>';
	}
}

function closeBlockPass(){
	document.querySelector('#st-container .st-right-col .from-group:nth-child(4) .block-2-pass').style.display="none";
}


function ishow()
{
   var add1=document.querySelector("#st-container .st-right-col .from-group:nth-child(1) .btn-1");
   var add2=document.querySelector("#st-container .st-right-col .from-group:nth-child(2) .btn-1");
   var add3=document.querySelector("#st-container .st-right-col .from-group:nth-child(3) .btn-1");
   
   add1.addEventListener('click',function()
   {
	document.querySelector("#st-container .st-right-col .from-group:nth-child(1) input").disabled=false;
	document.querySelector("#st-container .st-right-col .from-group:nth-child(2) input").disabled=true;
	document.querySelector("#st-container .st-right-col .from-group:nth-child(3) input").disabled=true;
   }
   );

   add2.addEventListener('click',function()
   {
	document.querySelector("#st-container .st-right-col .from-group:nth-child(1) input").disabled=true;
    document.querySelector("#st-container .st-right-col .from-group:nth-child(2) input").disabled=false;
	document.querySelector("#st-container .st-right-col .from-group:nth-child(3) input").disabled=true;
   }
   );

   add3.addEventListener('click',function()
   {
	document.querySelector("#st-container .st-right-col .from-group:nth-child(1) input").disabled=true;
	document.querySelector("#st-container .st-right-col .from-group:nth-child(2) input").disabled=true;
	document.querySelector("#st-container .st-right-col .from-group:nth-child(3) input").disabled=false;
   }
   );
}

function updateInfo()
{
	var user = JSON.parse(localStorage.getItem('userlogin'));
    console.log(user);
	var s='';
	s=document.querySelector('#st-container .st-right-col .from-group:nth-child(1) input').value;
	user.fullname=s;
	s=document.querySelector('#st-container .st-right-col .from-group:nth-child(2) input').value;
	user.email=s;
    s=document.querySelector('#st-container .st-right-col .from-group:nth-child(3) input').value;
	user.phonenumber=s;
    console.log(user);
    var userlist = JSON.parse(localStorage.getItem('user-list'));
    var userlogin = JSON.parse(localStorage.getItem('userlogin'));
    for(var i=0; i<userlist.length ;i++)
    {
      if(userlogin.fullname == userlist[i].fullname)
      {
          if(userlogin.password == userlist[i].password)
      {
         userlist[i].fullname=user.fullname;
         userlist[i].email=user.email;
         userlist[i].phonenumber=user.phonenumber;
         localStorage.setItem('userlogin',JSON.stringify(user));
         break;
      }
      }
    }
    localStorage.setItem('user-list',JSON.stringify(userlist));
	customAlert('Bạn đã cập nhật thành công','success');
    var s=document.querySelectorAll('#st-container .st-right-col .from-group input');
	for(var i=0;i<s.length;i++)
	{
		s[i].disabled=true;
	}
    var a = JSON.parse(localStorage.getItem('user-list'));
    console.log(a);
}

function customAlert(message,type) {
	if (type=='success') {
		document.getElementById("customalert").style.backgroundColor = '#4CAF50';
	}
	if (type=='warning') {
		document.getElementById("customalert").style.backgroundColor = '#f44336';
	}
	document.getElementById("customalert").innerHTML = message;
    var x = document.getElementById("customalert");
    x.className = "show";
    setTimeout(function(){ x.className = x.classList.remove("show"); }, 3500);
}