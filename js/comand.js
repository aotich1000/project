// import 'slide.js';
function currency(num) {
  return num.toString().replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1.') + ' ₫';
}
createProduct();
createBanner();
// list_product_pagi(1);
function createProduct() {
 
    var ProductArray = [
    { productId: 1, category: '1', img: 'anh-cho-Akita-5.jpg', nameP: 'Chó Akita', price: 452},
    { productId: 2, category: '1', img: 'anh-cho-alaska-182921.jpg', nameP: 'Chó alaska', price: 682 },
    { productId: 3, category: '1', img: 'anh-cho-bac-ha-8.jpg', nameP: 'Chó Bắc Hà', price: 782},
    { productId: 4, category: '1', img: 'anh-cho-Becgie-2.jpg', nameP: 'Chó Becgie', price: 479},
    { productId: 5, category: '2', img: '2-bengal-1252-1247x1496.jpg', nameP: 'Mèo Bengal', price: 641},
    { productId: 6, category: '2', img: '2-nhan-su-ma-1257-1-1247x1496.jpg', nameP: 'Mèo nhân sư', price: 990},
    { productId: 7, category: '2', img: 'aln-xam-trang-chan-lun-tai-cup-1247x1496.jpg', nameP: 'Mèo xám trắng chân lùn tai cụt', price: 699},
    { productId: 8, category: '2', img: 'anh-meo-anh-long-ngan-822929228899-1247x956.jpg', nameP: 'Mèo Anh lông ngắn', price: 711},
    { productId: 9, category: '2', img: 'anh-meo-ba-tu-29292988977.jpg', nameP: 'Mèo Ba Tư', price: 624},
    { productId: 10, category: '2', img: 'anh-meo-bengal-940404000944-1247x1496.jpg', nameP: 'Mèo bengal', price: 545},
    { productId: 11, category: '1', img: 'anh-cho-Boder-Collie.jpg', nameP: 'Chó Boder Clollie', price:656},
    { productId: 12, category: '1', img: 'anh-cho-bully.jpg', nameP: 'Chó Bully', price: 731},
    { productId: 13, category: '1', img: 'anh-cho-Dom-7.jpg', nameP: 'Chó Dom', price: 821},
    { productId: 14, category: '1', img: 'anh-cho-Phu-Quoc.jpg', nameP: 'Chó Phú Quốc', price: 510},
    { productId: 15, category: '2', img: 'anh-meo-himalaya-888838-1247x1496.jpg', nameP: 'Mèo Himalaya', price: 530},
    { productId: 16, category: '2', img: 'anh-meo-mi-long-ngan-9929929292.jpg', nameP: 'Mèo mi lông ngắn', price: 610},
    { productId: 17, category: '2', img: 'anh-meo-Munchkin-94949-1247x956.jpg', nameP: 'Mèo Munchkin', price: 620},
    { productId: 18, category: '2', img: 'anh-meo-Muop-3.jpg', nameP: 'Mèo Mướp', price: 661},
    { productId: 19, category: '2', img: 'anh-meo-ragdoll-9393939a-1247x1496.jpg', nameP: 'Mèo Ragdoll', price: 499},
    { productId: 20, category: '2', img: 'anh-meo-tai-xoan-929299a88824.jpg', nameP: 'Mèo tai xoắn', price: 475},
    { productId: 21, category: '1', img: 'anh-cho-Pitbull-3.jpg', nameP: 'Chó Pitbull', price: 644},
    { productId: 22, category: '1', img: 'anh-cho-pug-mat-xe.jpg', nameP: 'Chó Pug mặt xệ', price: 788},
    { productId: 23, category: '1', img: 'anh-cho-Rottweiler-4-1.jpg', nameP: 'Chó Rottweiler', price: 669},
    { productId: 24, category: '1', img: 'anh-cho-Samoyed.jpg', nameP: 'Chó Samoyed', price: 622},
    { productId: 25, category: '2', img: 'anhlongdaitruongthanh1533-1247x1496.jpg', nameP: 'Mèo lông dài', price: 533},
    { productId: 26, category: '2', img: 'anh-meo-mi-long-ngan-992992929288999-1080x1496.jpg', nameP: 'Mèo mi lông ngắn', price: 478},
    { productId: 27, category: '2', img: 'anh-meo-Muop-5.jpg', nameP: 'Mèo Mướp', price: 612},
    { productId: 28, category: '2', img: 'anh-meo-ragdoll-2002020090900-1242x1496.jpg', nameP: 'Mèo Rangdoll', price: 810},
    { productId: 29, category: '2', img: 'anhlongngantabby1522a-1247x1496.jpg', nameP: 'Mèo lông ngắn Tabby', price: 478},
    { productId: 30, category: '2', img: 'meo-himalaya-90030303-1216x1496.jpg', nameP: 'Mèo Himalaya', price: 617},
    { productId: 31, category: '1', img: 'anh-cho-Shiba-5.jpg', nameP: 'Chó Shiba', price: 638},
    { productId: 32, category: '1', img: 'cho-beagle.jpg', nameP: 'Chó Beagle', price: 952},
    { productId: 33, category: '1', img: 'cho-chihuahua.jpg', nameP: 'Chó chihuahua', price: 645},
    { productId: 34, category: '1', img: 'cho-chow-chow.jpg', nameP: 'Chó Chow CHow', price: 799},
    { productId: 35, category: '2', img: 'meo-maincoon-9299992992920000099-1247x1496.jpg', nameP: 'Mèo Maincoon', price: 461},
    { productId: 36, category: '2', img: 'meo-himalaya-9200202020890-1247x1496.jpg', nameP: 'Mèo Himalaya', price: 681},
    { productId: 37, category: '2', img: 'anh-meo-ba-tu-29292988977.jpg', nameP: 'Mèo Ba Tư', price: 641},
    { productId: 38, category: '2', img: 'anh-meo-mi-long-ngan-992992929288999-1080x1496.jpg', nameP: 'Mèo mi lông ngắn', price: 514},
    { productId: 39, category: '2', img: 'anh-meo-himalaya-888838-1247x1496.jpg', nameP: 'Mèo Himalaya', price: 481},
    { productId: 40, category: '2', img: 'anh-meo-Munchkin-94949-1247x956.jpg', nameP: 'Mèo Munchkin', price: 884},
    { productId: 41, category: '1', img: 'cho-corgi-chanlun.jpg', nameP: 'Chó Corgi chân lùn', price: 611},
    { productId: 42, category: '1', img: 'cho-doberman-1-1.jpg', nameP: 'Chó doberman', price: 573},
    { productId: 43, category: '1', img: 'cho-golden.jpg', nameP: 'Chó goldem', price: 546},
    { productId: 44, category: '1', img: 'cho-husky.jpg', nameP: 'Chó husky', price: 712},
    { productId: 45, category: '2', img: 'anh-meo-ragdoll-9393939a-1247x1496.jpg', nameP: 'Mèo Rangdoll', price: 461},
    { productId: 46, category: '2', img: 'anh-meo-Muop-5.jpg', nameP: 'Mèo Mướp', price: 593},
    { productId: 47, category: '2', img: 'anh-meo-tai-xoan-929299a88824.jpg', nameP: 'Mèo tai xoắn', price: 541},
    { productId: 48, category: '2', img: 'anhlongngantabby1522a-1247x1496.jpg', nameP: 'Mèo lông ngắn Tabby', price: 477},
    { productId: 49, category: '1', img: 'cho-labrador.jpg', nameP: 'Chó labrador', price: 818},
    { productId: 50, category: '1', img: 'cho-lapxuong.jpg', nameP: 'Chó lạp xưởng', price: 433},
    ];
    localStorage.setItem('product', JSON.stringify(ProductArray));
}
function createBanner() {
 
  var BannerArray = [
    { BannerId: 1, img: 'Banner_1.jpg', nameP: 'Banner 1'},
    { BannerId: 2, img: 'Banner_2.jpg', nameP: 'Banner 2'},
    { BannerId: 3, img: 'Banner_3.jpg', nameP: 'Banner 3'}
  ];
  localStorage.setItem('banner', JSON.stringify(BannerArray));
}

var current_page = 1;
var limit = 15;
var count_page;
var current_category;
var productArray = JSON.parse(localStorage.getItem('product'));
{/*                   <div class="card">
                        <div class="card-header"></div>
                        <div class="card-body">
                            <img src="./img/logo.jpg" alt="anh1">
                        </div>
                        <div class="card-footer">
                            <p><a href=""><b>Whotao?</b></p>
                            <p>None Price</a></p>
                        </div>
                        <div class="card-overlay hidden">
                            
                            <div class="overlay-item">
                                <a href="#"> Chi tiết
                            </div>
                        </div> */}
//show produc 
//có hai dạng xem thử và xem theo sản phảm/phân loại/tìm kiếm có phân trang
function showProduct(listitem){
  var s ='';
  var a =''
  var productArray = JSON.parse(localStorage.getItem(`${listitem}`));
  if (productArray && productArray.length > 0) {
  for (var i = 0; i < productArray.length; i++) {
      a+= '<div class="card">'+
          '<div class="card-header"></div>'+
          '<div class="card-body">'+
          '<img src="./img/'+ productArray[i].img +'" alt="anh1"></img>'+
          '</div>'+
          '<div class="card-footer">'+
              '<p><a href=""><b>'+ productArray[i].nameP +'</b></p>'+
              '<p>'+ productArray[i].price +'</a></p>'+
          '</div>'+
          '<div class="card-overlay hidden">'+
              '<div class="overlay-item">'+
                  '<a onclick="showProductInfo('+productArray[i].productId+')"> Xem chi tiết </a>'+
              '</div>'+
          '</div> </div>';
  }
  // console.log(current_page);
  s +=  '<div class="container"><div class="flex-container middle-content flex-wrap">' + a +'</div>' + loadPage() + blockProductInfo() + '</div>';

  return s;
  }
}



function blockProductInfo()
{
  var s='';
  var a= '<div id="info">'+
     '<button type="button" class="close" onClick="closeProductInfo()">+</button>'+
      '<div class="left">'+
          '<img id="imgbig" src="">'+
      '</div>'+
      '<div class="right">'+
          '<h2 id="productname"></h2>'+
          '<h4 id="productprice"></h4>'+
          '<div class="right-flex">'+
          '<h4>Số lượng</h4>'+
          '<div>'+
          '<button class="quantitydown" onClick="quantitydown()">-</button><input type="text" id="quantity" value="1"><button class="quantityup" onClick="quantityup()">+</button>'+
         '</div>'+
          '</div>'+
          '<button class="addtocart">Thêm vào giỏ</button>'+
          '<div id="share-buttons">'+
              '<a class="facebook" target="blank"><i class="fab fa-facebook"></i></a>'+
              '<a class="twitter" target="blank"><i class="fab fa-twitter"></i></a>'+                          
              '<a class="reddit" target="blank"><i class="fab fa-reddit"></i></a>'+                         
              '<a class="telegram" target="blank"><i class="fab fa-telegram"></i></a>'+          
          '</div>'+

            '<div class="callphone">'+
              '<p>Gọi mua hàng:'+
                '<a>1111.1111.111</a>'+
                '<span>(9h-16h)</span>'+
              '</p>'+
            '</div>'+
                '<div class="r-note"><i class="fa-solid fa-truck-fast fa-lg"></i><p>Giao hàng tận nơi</p></div>'+
                '<div class="r-note"><i class="fa-solid fa-hand-holding-dollar fa-lg"></i><p>Ưu đãi mỗi ngày</p></div>'+
                '<div class="r-note"><i class="fa-regular fa-credit-card fa-lg"></i></i><p>Thanh toán COD,BANK,MOMO</p></div>'+
      '</div>'+
  '</div>';
s='<div id="productInfo" class="modal">'+a+'</div>';
return s;
}


function showProductInfo(productid)
{
  document.getElementById('productInfo').style.display = 'block';
  var productArray=JSON.parse(localStorage.getItem('product'));
  for(var i=0;i<productArray.length;i++){
		if(productArray[i].productId==productid){
			document.getElementById('productname').innerHTML = productArray[i].nameP;
			document.getElementById('productprice').innerHTML = 'Giá: '+ currency(productArray[i].price);
			document.getElementById('imgbig').src='./img/'+productArray[i].img;
			document.getElementById('quantity').value = 1;
			//document.querySelector('#info .right button.addtocart').setAttribute();
		}
	}
const link = encodeURI(window.location.href);
const msg = encodeURIComponent('Product here');
const title = encodeURIComponent('Welcome');

const fb = document.querySelector('.facebook');
fb.href = `https://www.facebook.com/share.php?u=${link}`;

const twitter = document.querySelector('.twitter');
twitter.href = `http://twitter.com/share?&url=${link}&text=${msg}&hashtags=javascript,programming`;

const reddit = document.querySelector('.reddit');
reddit.href = `http://www.reddit.com/submit?url=${link}&title=${title}`;

const telegram = document.querySelector('.telegram');
telegram.href = `https://telegram.me/share/url?url=${link}&text=${msg}`;
}
function closeProductInfo(){

	document.getElementById('productInfo').style.display = 'none';
}



function showArray(array){
  var getItemP = localStorage.getItem(`${array}`);
  var showItem = JSON.parse(getItemP);
  console.log(showItem);
  // for(i=0; i<showItem.length;i++){
  //   console.log(showItem[i].img);
  // }
  
}

//Phần trang
// page_num = 1 trang hiện tại
// limit = 10 số phần tử tối đa cho mỗi trang
// start_point điểm bắt đầu
// các trạng thái điểm bắt đầu gồm
// 1, khởi đầu với trang đầu tiên start_point = 1
// 2, khời đầu với trang thứ n start_point = (page_num-1)*limit
// VD: page_num = 2
// với công thức ta có start_point =  (2-1)*10 = 10
// page_num = 3
// với công thức ta có start_point =  (3-1)*10 = 20
// khi load trang mặc định pagi = 1
// được quy định ở hàm showProduct
// để hiển thị được sản phẩm theo phân loại
// cần lọc mảng sản phẩm theo phân loại
// tính toán lại số trang
// set lại trang ban đầu 
// 
function ArrayProductForCategory(category, start_price, end_price){
  var productArray = JSON.parse(localStorage.getItem('product'));
  var productArrayCategory = [];
  var temp = 0;
  //tìm kiếm theo danh mục
  for(i = 0; i <  productArray.length; i++){
    if(productArray[i].category === category){
      productArrayCategory[temp] = productArray[i];
      temp = temp +  1;
    }
    //tìm kiếm theo tên
    if(productArray[i].nameP === category){
      productArrayCategory[temp] = productArray[i];
      temp = temp +  1;
    }
    //tìm kiếm theo khoảng giá
    if(parseInt(productArray[i].price)  > parseInt(start_price) && parseInt(productArray[i].price)  < parseInt(end_price)){
      productArrayCategory[temp] = productArray[i];
      temp = temp +  1;
    }

    //*chưa thể tìm kiếm multi tag
  }
  localStorage.setItem('productcategory', JSON.stringify(productArrayCategory));
  // count_page = Math.ceil(productArrayCategory.length/limit);
  showArray('productcategory');

}

function list_product_pagi(page_num,id,category){
    start_point = (page_num - 1)*limit;
    end_point = page_num*limit;
    var productArrayPagi = [];
    // console.log(start_point);
    var temp = 0;

    if(category != null){
      ArrayProductForCategory(category);
      var productArray = JSON.parse(localStorage.getItem('productcategory'));
      count_page = Math.ceil(productArray.length/limit);
    }else{
      var productArray = JSON.parse(localStorage.getItem('product'));
      count_page = Math.ceil(productArray.length/limit);
    }
    if( productArray.length < end_point){
      end_point = productArray.length + start_point;
    }
    if ( productArray.length < end_point && productArray.length > limit ){
      end_point = productArray.length;
    }

    for(i = start_point; i <  end_point; i++){
      productArrayPagi[temp] = productArray[i];
      temp = temp +  1;
    }
    localStorage.setItem('productpagi', JSON.stringify(productArrayPagi));
    showArray('productpagi');
    
    current_category = category;
    current_page = page_num;
    
    document.getElementById(`${id}`).innerHTML = showProduct('productpagi');
    // console.log(loadPage(current_page));
    // loadPage(1);
    // console.log(current_page);
    localStorage.removeItem('productpagi');
}

function loadPage(){
  var s='';
  for(i=1;i<=count_page;i++){
    if(i==current_page){
      s+= '<button class="pagi-item active" id="'+i+'">'+ i +'</button>';
    }
    else{
      s+= '<button class="pagi-item" id="'+i+'">'+ i +'</button>';
    }
  } 
  s = '<div class="pagination">' + s + '</div>';

  // document.getElementById('pagi').innerHTML=s;
  return s;
}
// xemThem();

function xemThem(){
  var xt = document.getElementById('xemthem').addEventListener('click', function(event){
    event.preventDefault();
    console.log('check');
  });
}

changePage();

function changePage(){
  document.addEventListener('click', function(event){
    var targetElement = event.target;
    var targetElementId = targetElement.id;
    // console.log(event.target.value);
    if(targetElement.id === 'action' && targetElement.value === 'showall'){
      list_product_pagi(1,'main');
    }
    if(targetElement.id === 'action' && targetElement.value === 'index'){
      document.getElementById('main').innerHTML = "";
      showBanner('main');
      showPreviewProduct();
    }
    if(event.target.className === 'pagi-item') 
       list_product_pagi(targetElementId,'main',current_category);
  });
}

{/* <div class="banner">
                <div class="container flex-container">
                    <div class="slideshow-container">

                        <!-- Full-width images with number and caption text -->
                        <div class="mySlides fade">
                            <div class="numbertext">1 / 3</div>
                            <img src="./img/illust_86644511_20220711_152248.jpg" style="width:100%">
                            <div class="text">Caption Text</div>
                        </div>

                        <div class="mySlides fade">
                            <div class="numbertext">2 / 3</div>
                            <img src="./img/illust_86644511_20220711_152252.jpg" style="width:100%">
                            <div class="text">Caption Two</div>
                        </div>

                        <div class="mySlides fade">
                            <div class="numbertext">3 / 3</div>
                            <img src="./img/illust_86644511_20220711_152255.jpg" style="width:100%">
                            <div class="text">Caption Three</div>
                        </div>

                        <!-- Next and previous buttons -->
                        <a class="prev" onclick="plusSlides(-1)">&#10094;</a>
                        <a class="next" onclick="plusSlides(1)">&#10095;</a>
                    </div>


                    <!-- The dots/circles -->
                    <div style="text-align:center" class="dot-place">
                        <span class="dot" onclick="currentSlide(1)"></span>
                        <span class="dot" onclick="currentSlide(2)"></span>
                        <span class="dot" onclick="currentSlide(3)"></span>
                    </div>
                </div>
            </div> */}

// Limit banner là 3
// tạo một banner mới là 

var limit_banner = 3;
// showBanner();
function showBanner(id){
  var Banner = this.document.createElement('div');
    Banner.id = 'banner';
    Banner.className = 'banner';
    this.document.getElementById(`${id}`).appendChild(Banner);
  var s='<div class="container flex-container">'+
        '<div class="slideshow-container">';
  var j = 1;
  var BannerArray = JSON.parse(localStorage.getItem('banner'));
  for(var i=1;i<=limit_banner;i++){
      s += '<div class="mySlides fade">'+
      '<div class="numbertext">'+ i +' / 3</div>'+
      '<img src="./img/'+BannerArray[i-1].img +'" style="width:100%">'+
      '<div class="text">Caption Text</div>'+
      '</div>';
  }
      s+= '</div>'+
          '<div style="text-align:center" class="dot-place">';
  for(var i=0; i < limit_banner;i++){
    s+= '<span class="dot" onclick="currentSlide('+j+')"></span>';
    j++;
  }
    s+= '</div>';
    document.getElementById('banner').innerHTML=s;
    showSlides();
    
}
function showProduct_none_pagi(listitem){
  var s ='';
  var a =''
  var productArray = JSON.parse(localStorage.getItem(`${listitem}`));
  if (productArray && productArray.length > 0) {
  for (var i = 0; i < productArray.length; i++) {
      a+= '<div class="card">'+
          '<div class="card-header"></div>'+
          '<div class="card-body">'+
          '<img src="./img/'+ productArray[i].img +'" alt="anh1"></img>'+
          '</div>'+
          '<div class="card-footer">'+
              '<p><a href=""><b>'+ productArray[i].nameP +'</b></p>'+
              '<p>'+ currency(productArray[i].price) +'</a></p>'+
          '</div>'+
          '<div class="card-overlay hidden">'+
              '<div class="overlay-item">'+
                  '<a onclick="showProductInfo('+productArray[i].productId+')"> Xem chi tiết </a>'+
              '</div>'+
              '<div class="overlay-item">'+
                  '<a href="#"> + Thêm vào giỏ hàng</a>'+
              '</div>'+
          '</div> </div>';
  }
  // console.log(current_page);
  s +=  '<div class="container"><div class="flex-container middle-content flex-wrap">' + a +'</div>' + blockProductInfo() + '</div>';

  return s;
  }
}

function showPreviewProduct(){
    var previewP = this.document.createElement('div');
    previewP.id = 'previewProduct';
    previewP.className = 'container';
    this.document.getElementById('main').appendChild(previewP);
    var productArray = JSON.parse(localStorage.getItem('product'));
    var preProduct = shuffleArray(productArray);
    localStorage.setItem('preProduct', JSON.stringify(preProduct));
    var s = showTitle('Gợi ý hôm nay') + showProduct_none_pagi('preProduct');
    document.getElementById('previewProduct').innerHTML = s;
}

function showTitle(title){
  var s = '';
  s += '<div class="title-content middle-content">'+
      '<h2>' + title +'</h2>'+
      '<a href="#" onclick="list_product_pagi(1,`main`)">Xem thêm >></a>'+
      '</div>';
  return s;
}

loadWebsite();

function loadWebsite(){
  window.addEventListener('load', function(){
    showBanner('main');
    showPreviewProduct();
  })
}

function quantityup(){
  var newquan = document.getElementById('quantity');
      newquan.value =  parseInt(newquan.value) + 1;
}

function quantitydown(){
  var newquan = document.getElementById('quantity');
  if(newquan.value > 1)
      newquan.value =  parseInt(newquan.value) - 1;
}

function shuffleArray(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  while (currentIndex !== 0) {
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array.slice(0,15);
}
showMenu();
function showMenu(){
  var s = `<div class="container" style="background-color: #04AA6D;"> 
  <div class="flex-container">
      <div class="menu-item"><button id="action" value="index">Trang chủ </button> </div>
      <div class="menu-item"><button id="action" value="showall">Sản phẩm</button> </div>
      <div class="menu-item"><button onclick="list_product_pagi(1,'main','1')">Sp Cho chó</button> </div>
      <div class="menu-item"><button onclick="list_product_pagi(1,'main','2')">Sp Cho mèo</button> </div>
      <div class="dropdown">
          <button class="dropbtn">Danh mục sản phẩm</button>
          <div class="dropdown-content">
              <a href="#">Phân loại 1</a>
              <a href="#">Phân loại 1</a>
              <a href="#">Phân loại 1</a>
              <a href="#">Phân loại 1</a>
          </div>
      </div> 
</div>
</div>`
  document.getElementById('mainmenu').innerHTML = s;
}