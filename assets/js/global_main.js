// Top Nav MenuBar Star //
nav_item ='<div class="container">';
nav_item +='<div class="navbar-header">';
nav_item +='<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">';
nav_item +='<span class="sr-only">Toggle navigation</span>';
nav_item +='<span class="icon-bar"></span>';
nav_item +='<span class="icon-bar"></span>';
nav_item +='<span class="icon-bar"></span>';
nav_item +='</button>';
nav_item +='<a class="navbar-brand" href="index.html"><img style="height:100%;" src="assets/images/hejun_logo.png"></a>';
nav_item +='</div>';
nav_item +='<div id="navbar" class="navbar-collapse collapse">';
nav_item +='<ul class="nav navbar-nav">';
nav_item +='<li><a href="index.html"><i class="flaticon-home"></i> Home</a></li>';
nav_item +='<li><a href="product.html"><i class="flaticon-circle"></i> 产品</a></li>';
nav_item +='<li><a href="course.html"><i class="flaticon-calendar-1"></i> 课程</a></li>';
nav_item +='<li class="dropdown">';
nav_item +='<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="flaticon-profile-1"></i> 会员 <span class="caret"></span></a>';
nav_item +='<ul class="dropdown-menu" role="menu">';
nav_item +='<li><a href="userprofile.html">會員檔案</a></li>';
nav_item +='<li><a href="u2.html">課程訂單</a></li>';
nav_item +='<li><a href="u3.html">積分交易紀錄</a></li>';
nav_item +='<li><a href="u4.html">代幣交易紀錄</a></li>';
nav_item +='<li><a href="u5.html">課程卡儲值紀錄</a></li>';
nav_item +='<li><a href="u6.html">好友邀請紀錄</a></li>';
nav_item +='<li><a href="u7.html">系統通知</a></li>';
nav_item +='<li><a href="u8.html">幫助中心</a></li>';
nav_item +='<li class="divider"></li>';
nav_item +='<li><a href="#0">Sign out</a></li>';
nav_item +='</ul>';
nav_item +='</li>';
nav_item +='<li><a href="activity.html"><i class="flaticon-favorites"></i> 活动</a></li>';
nav_item +='<li><a href="piguy.html"><i class="flaticon-edit"></i> 管理區</a></li>';
nav_item +='</ul>';
nav_item +='<ul class="nav navbar-nav navbar-right">';
nav_item +='<li><a data-toggle="modal" data-target="#SearchModal" href="#"><i class="fa fa-search"></i> Search</a></li>';
nav_item +='<li class="dropdown">';
nav_item +='<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="flaticon-profile-1"></i> 会员 <span class="caret"></span></a>';
nav_item +='<ul class="dropdown-menu" role="menu">';
nav_item +='<li><a href="userprofile.html">會員檔案</a></li>';
nav_item +='<li><a href="u2.html">課程訂單</a></li>';
nav_item +='<li><a href="u3.html">積分交易紀錄</a></li>';
nav_item +='<li><a href="u4.html">代幣交易紀錄</a></li>';
nav_item +='<li><a href="u5.html">課程卡儲值紀錄</a></li>';
nav_item +='<li><a href="u6.html">好友邀請紀錄</a></li>';
nav_item +='<li><a href="u7.html">系統通知</a></li>';
nav_item +='<li><a href="u8.html">幫助中心</a></li>';
nav_item +='<li class="divider"></li>';
nav_item +='<li><a href="login.html">Sign in</a></li>';
nav_item +='</ul>';
nav_item +='</li>';
nav_item +='</ul>';
nav_item +='</div><!--/.nav-collapse -->';
nav_item +='</div>';
$('#navBar').append(nav_item);
// Top Nav MenuBar End //

// Bootstrap Nav MenuBar Hover Effects Star //
$('ul.nav li.dropdown').hover(function() {
	$(this).find('.dropdown-menu').stop(true, true).delay(100).fadeIn(250);
}, function() {
	$(this).find('.dropdown-menu').stop(true, true).delay(200).fadeOut(250);
});
// Bootstrap Nav MenuBar Hover Effects End //

// footMenu_btn Star //
footMenu_item ='<ul class="table-box footMenu_btn">';
footMenu_item +='<li><button class="btn btn-block btn-deault" onclick="indexPage()"><i class="flaticon-home"></i>首頁</button></li>';
footMenu_item +='<li><button class="btn btn-block btn-deault" onclick="productPage()"><i class="flaticon-circle"></i>产品</button></li>';
footMenu_item +='<li><button class="btn btn-block btn-deault" onclick="coursePage()"><i class="flaticon-calendar-1"></i>课程</button></li>';
footMenu_item +='<li><button class="btn btn-block btn-deault" onclick="userPage()"><i class="flaticon-profile-1"></i>会员</button></li>';
footMenu_item +='<li><button class="btn btn-block btn-deault" onclick="activityPage()"><i class="flaticon-favorites"></i>活动</button></li>';
footMenu_item +='</ul>';
$('#footMenuBar').append(footMenu_item);
// footMenu_btn End //

// footMenu goto where page star
function indexPage(){
	if (confirm("Go back Homepage？")==true)
	location.href = "index.html";
}

function productPage(){
	location.href = "product.html";
}

function coursePage(){
	location.href = "course.html";
}

function userPage(){
	location.href = "userprofile.html";
}

function activityPage(){
	location.href = "activity.html";
}
// footMenu goto where page end

// items Star //
var index_text =[{
	//item_title:"VOGUE 风格野餐日",item_date:"4月22日",item_loc:"华山艺文中心",item_img:"http://img.accupass.com/userupload/8cc6fe084f61462b88ee8620cd642216.jpg",item_url:"#0",item_join:"grey"
	//},{
	//item_title:"中華三菱野餐音樂匯",item_date:"4月23日",item_loc:"华山艺文中心",item_img:"http://static-us.fever38.com/hotdeals/activity_image/2014072911320931352_810X.jpg",item_url:"#0",item_join:"grey"
	//},{
	//item_title:"/// 2016 VOGUE 風格野餐日///",item_date:"4月21日",item_loc:"华山艺文中心",item_img:"https://gc.meepcloud.com/meepshop/shop/onestory/layout/55f12eb5b94d66bc4f5da89d/images/86287-vogue%E9%87%8E%E9%A4%90%E7%89%B9%E6%83%A0-01.jpg",item_url:"#0",item_join:"grey"
	//},{
	//item_title:"2016 臺東野餐生活節",item_date:"4月21日",item_loc:"华山艺文中心",item_img:"http://tour.taitung.gov.tw/zh-tw/Event/DisplayEventPhoto?imageId=2711&type=Activity",item_url:"#0",item_join:"grey"
	//},{
	item_title:"Title",item_date:"mm月dd日",item_loc:"Location",item_img:"http://placehold.it/720x480/#666/e65d4f",item_url:"#0",item_join:"grey"
	},{
	item_title:"Title",item_date:"mm月dd日",item_loc:"Location",item_img:"http://placehold.it/720x480/#666/e65d4f",item_url:"#0",item_join:"grey"
	},{
	item_title:"Title",item_date:"mm月dd日",item_loc:"Location",item_img:"http://placehold.it/720x480/#666/e65d4f",item_url:"#0",item_join:"grey"
	},{
	item_title:"Title",item_date:"mm月dd日",item_loc:"Location",item_img:"http://placehold.it/720x480/#666/e65d4f",item_url:"#0",item_join:"grey"
	},{
	item_title:"Title",item_date:"mm月dd日",item_loc:"Location",item_img:"http://placehold.it/720x480/#666/e65d4f",item_url:"#0",item_join:"grey"
	},{
	item_title:"Title",item_date:"mm月dd日",item_loc:"Location",item_img:"http://placehold.it/720x480/#666/e65d4f",item_url:"#0",item_join:"grey"
	}
];
$.each(index_text,function(index,obj)
{
	index_items = '<section class="col-sm-6 col-md-4">';
	index_items += '<div class="card">';
	index_items += '<a class="img_link" href="'+ obj.item_url +'"><img src="'+ obj.item_img +'"></a>';
	index_items += '<div class="caption">';
	index_items += '<h3>'+ obj.item_title +'</h3>';
	index_items += '<p>'+ obj.item_date +' ‧ '+ obj.item_loc +'</p>';
	index_items += '<p>';
	index_items += '<button class="pushy-btn btn--link grey-lighter interested" role="button">有兴趣</button>';
	index_items += '<button class="pushy-btn btn--link btn--'+ obj.item_join +' grey-lighter join"><i class="fa fa-check"></i> 参加</button>';
	index_items += '</p>';
	index_items += '</div>';
	index_items += '</div>';
	index_items += '</section>';
	$('#home_items').append(index_items);
});

// btns toggleClass
$('.favorite').click(function() {
	if ($(this).hasClass('red')== true){
		alert("Remove a favorite");
	}
	if ($(this).hasClass('red')== false){
		alert("Add a favorite");
	}
	$(this).toggleClass('red');
});

// 按讚
$('.thumbs').click(function() {
	$(this).toggleClass('blue');
});

// 参加
$('.join').click(function() {
	$(this).toggleClass('red');
});

// 有兴趣
$('.interested').click(function() {
	$(this).toggleClass('black');
});