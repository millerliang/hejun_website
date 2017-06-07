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
//nav_item +='<li><a href="userprofile.html">會員檔案</a></li>';
//nav_item +='<li><a href="u2.html">課程訂單</a></li>';
//nav_item +='<li><a href="u3.html">積分交易紀錄</a></li>';
//nav_item +='<li><a href="u4.html">代幣交易紀錄</a></li>';
//nav_item +='<li><a href="u5.html">課程卡儲值紀錄</a></li>';
//nav_item +='<li><a href="u6.html">好友邀請紀錄</a></li>';
//nav_item +='<li><a href="u7.html">系統通知</a></li>';
//nav_item +='<li><a href="u8.html">幫助中心</a></li>';
nav_item +='<li><a href="sign_up.html">Sign up</a></li>';
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

// Search Modal Star //
Search_Modal ='<article class="modal-dialog" role="document">';
Search_Modal +='<section class="modal-content">';
Search_Modal +='<header class="modal-header">';
Search_Modal +='<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
Search_Modal +='<h4 class="modal-title" id="myModalLabel"><i class="fa fa-search"></i> Search Modal title</h4>';
Search_Modal +='</header>';
Search_Modal +='<section class="modal-body">';
Search_Modal +='<p class="modal-subTitle">按专业</p>';
Search_Modal +='<div class="checkbox_btn">';
Search_Modal +='<input type="checkbox" id="type_1" value="option1" checked>';
Search_Modal +='<label for="type_1" class="checkbox-inline">局势大观</label>';
Search_Modal +='<input type="checkbox" id="type_2" value="option2" checked>';
Search_Modal +='<label for="type_2" class="checkbox-inline">职业发展</label>';
Search_Modal +='<input type="checkbox" id="type_3" value="option3" checked>';
Search_Modal +='<label for="type_3" class="checkbox-inline">互连网+</label>';
Search_Modal +='<input type="checkbox" id="type_4" value="option4">';
Search_Modal +='<label for="type_4" class="checkbox-inline">案例解析</label>';
Search_Modal +='</div>';
Search_Modal +='<p class="modal-subTitle">按类型</p>';
Search_Modal +='<div class="checkbox_btn">';
Search_Modal +='<input type="checkbox" id="compny" value="option1" checked>';
Search_Modal +='<label for="compny" class="checkbox-inline">企业在线班</label>';
Search_Modal +='</div>';
Search_Modal +='<p class="modal-subTitle">上课方式</p>';
Search_Modal +='<div class="checkbox_btn">';
Search_Modal +='<input type="checkbox" id="line_up" value="option1" checked>';
Search_Modal +='<label for="line_up" class="checkbox-inline">线上</label>';
Search_Modal +='<input type="checkbox" id="line_down" value="option2">';
Search_Modal +='<label for="line_down" class="checkbox-inline">线下</label>';
Search_Modal +='</div>';
Search_Modal +='</section>';
Search_Modal +='<footer class="modal-footer">';
Search_Modal +='<button type="button" class="pushy-btn btn--grey" data-dismiss="modal">Close</button>&nbsp;';
Search_Modal +='<button type="button" class="pushy-btn btn--red">Search</button>';
Search_Modal +='</footer>';
Search_Modal +='</section>';
Search_Modal +='</article>';
$('#SearchModal').append(Search_Modal);
// Search Modal End //

// Comment Modal Star //
Comment_Modal ='<article class="modal-dialog" role="document">';
Comment_Modal +='<section class="modal-content">';
Comment_Modal +='<header class="modal-header">';
Comment_Modal +='<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>';
Comment_Modal +='<h4 class="modal-title" id="myModalLabel"><i class="fa fa-comments"></i> 谘询 / Comments - Modal</h4>';
Comment_Modal +='</header>';
Comment_Modal +='<section class="modal-body">';
Comment_Modal +='<div class="media">';
Comment_Modal +='<div class="media-left">';
Comment_Modal +='<a href="#">';
Comment_Modal +='<img class="media-object" src="assets/images/avatar/user_4.jpg">';
Comment_Modal +='</a>';
Comment_Modal +='</div>';
Comment_Modal +='<div class="media-body">';
Comment_Modal +='<h4 class="media-heading">王小明</h4>';
Comment_Modal +='<p>者我開員緊，深程信每絕子自育明源，為險多萬比臺身平女體，因格同稱庭克選，文不人起反配聽係笑：日是大。</p>';
Comment_Modal +='<p class="text-muted">4月23日 17:23 /<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#re_1" aria-expanded="false" aria-controls="re_1">回覆</button></p>';
Comment_Modal +='<div class="collapse" id="re_1">';
Comment_Modal +='<footer class="input-group col-sm-7">';
Comment_Modal +='<input type="text" class="form-control" placeholder="Messenger...">';
Comment_Modal +='<span class="input-group-btn">';
Comment_Modal +='<button class="btn btn-danger_" type="button"><i class="fa fa-chevron-right"></i></button>';
Comment_Modal +='</span>';
Comment_Modal +='</footer><!-- /input-group -->';
Comment_Modal +='</div>';
Comment_Modal +='</div>';
Comment_Modal +='</div>';
Comment_Modal +='<div class="media">';
Comment_Modal +='<div class="media-left">';
Comment_Modal +='<a href="#">';
Comment_Modal +='<img class="media-object" src="assets/images/avatar/user_1.png">';
Comment_Modal +='</a>';
Comment_Modal +='</div>';
Comment_Modal +='<div class="media-body">';
Comment_Modal +='<h4 class="media-heading">王国军</h4>';
Comment_Modal +='<p>家運至經，看依工投衣的改金廣理知就電，內接然不，發人樣的理近進相止中問色成、看主時幾出臺調來日人票斯識一大商現教其讀裡車是流影大口最。生為師。女告果馬的史念後華客的海</p>';
Comment_Modal +='<p class="text-muted">4月22日 22:45 /<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#re_2" aria-expanded="false" aria-controls="re_2">回覆</button></p>';
Comment_Modal +='<div class="collapse" id="re_2">';
Comment_Modal +='<footer class="input-group col-sm-7">';
Comment_Modal +='<input type="text" class="form-control" placeholder="Messenger...">';
Comment_Modal +='<span class="input-group-btn">';
Comment_Modal +='<button class="btn btn-danger_" type="button"><i class="fa fa-chevron-right"></i></button>';
Comment_Modal +='</span>';
Comment_Modal +='</footer><!-- /input-group -->';
Comment_Modal +='</div>';
Comment_Modal +='<div class="media">';
Comment_Modal +='<div class="media-left">';
Comment_Modal +='<a href="#">';
Comment_Modal +='<img class="media-object" src="assets/images/avatar/user_3.jpg">';
Comment_Modal +='</a>';
Comment_Modal +='</div>';
Comment_Modal +='<div class="media-body">';
Comment_Modal +='<h4 class="media-heading">Dr, 琼斯 <small class="text-muted">4月22日 23:16</small></h4>';
Comment_Modal +='Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.';
Comment_Modal +='</div>';
Comment_Modal +='</div>';
Comment_Modal +='</div>';
Comment_Modal +='</div>';
Comment_Modal +='</section>';
Comment_Modal +='<footer class="modal-footer">';
Comment_Modal +='<!-- <button type="button" class="pushy-btn btn--grey" data-dismiss="modal">Close</button>';
Comment_Modal +='<button type="button" class="pushy-btn btn--red">Search</button> -->';
Comment_Modal +='<div class="input-group">';
Comment_Modal +='<input type="text" class="form-control" placeholder="Messenger...">';
Comment_Modal +='<span class="input-group-btn">';
Comment_Modal +='<button class="btn btn-danger_" type="button"><i class="fa fa-chevron-right"></i></button>';
Comment_Modal +='</span>';
Comment_Modal +='</div><!-- /input-group -->';
Comment_Modal +='</footer>';
Comment_Modal +='</section>';
Comment_Modal +='</article>';
$('#commentModal').append(Comment_Modal);
// Comment Modal End //

// Chat Star End //
chat_item ='<div class="media">';
chat_item +='<div class="media-left">';
chat_item +='<a href="#">';
chat_item +='<img class="media-object" src="assets/images/avatar/user_4.jpg">';
chat_item +='</a>';
chat_item +='</div>';
chat_item +='<div class="media-body">';
chat_item +='<h4 class="media-heading">王小明</h4>';
chat_item +='<p>者我開員緊，深程信每絕子自育明源，為險多萬比臺身平女體，因格同稱庭克選，文不人起反配聽係笑：日是大。</p>';
chat_item +='<p class="text-muted">4月23日 17:23 /<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse_1" aria-expanded="false" aria-controls="collapse_1">回覆</button></p>';
chat_item +='<div class="collapse" id="collapse_1">';
chat_item +='<footer class="input-group col-sm-7">';
chat_item +='<input type="text" class="form-control" placeholder="Messenger...">';
chat_item +='<span class="input-group-btn">';
chat_item +='<button class="btn btn-danger_" type="button"><i class="fa fa-chevron-right"></i></button>';
chat_item +='</span>';
chat_item +='</footer>';
chat_item +='</div>';
chat_item +='</div>';
chat_item +='</div>';
chat_item +='<div class="media">';
chat_item +='<div class="media-left">';
chat_item +='<a href="#">';
chat_item +='<img class="media-object" src="assets/images/avatar/user_1.png">';
chat_item +='</a>';
chat_item +='</div>';
chat_item +='<div class="media-body">';
chat_item +='<h4 class="media-heading">王国军</h4>';
chat_item +='<p>家運至經，看依工投衣的改金廣理知就電，內接然不，發人樣的理近進相止中問色成、看主時幾出臺調來日人票斯識一大商現教其讀裡車是流影大口最。生為師。女告果馬的史念後華客的海</p>';
chat_item +='<p class="text-muted">4月22日 22:45 /<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse_2" aria-expanded="false" aria-controls="collapse_2">回覆</button></p>';
chat_item +='<div class="collapse" id="collapse_2">';
chat_item +='<footer class="input-group col-sm-7">';
chat_item +='<input type="text" class="form-control" placeholder="Messenger...">';
chat_item +='<span class="input-group-btn">';
chat_item +='<button class="btn btn-danger_" type="button"><i class="fa fa-chevron-right"></i></button>';
chat_item +='</span>';
chat_item +='</footer>';
chat_item +='</div>';
chat_item +='<div class="media">';
chat_item +='<div class="media-left">';
chat_item +='<a href="#">';
chat_item +='<img class="media-object" src="assets/images/avatar/user_3.jpg">';
chat_item +='</a>';
chat_item +='</div>';
chat_item +='<div class="media-body">';
chat_item +='<h4 class="media-heading">Dr, 琼斯 <small class="text-muted">4月22日 23:16</small></h4>';
chat_item +='Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.';
chat_item +='</div>';
chat_item +='</div>';
chat_item +='</div>';
chat_item +='</div>';
chat_item +='<div class="media">';
chat_item +='<div class="media-left">';
chat_item +='<a href="#">';
chat_item +='<img class="media-object" src="assets/images/avatar/user_2.jpg">';
chat_item +='</a>';
chat_item +='</div>';
chat_item +='<div class="media-body">';
chat_item +='<h4 class="media-heading">Angela baby</h4>';
chat_item +='<p>本名楊穎，出生於上海，是香港女模特兒、女演員，目前為華誼兄弟藝人、風尚國際（Style International Management）之旗下模特 ...</p>';
chat_item +='<p class="text-muted">4月22日 10:18 /<button class="btn btn-link" type="button" data-toggle="collapse" data-target="#collapse_3" aria-expanded="false" aria-controls="collapse_3">回覆</button></p>';
chat_item +='<div class="collapse" id="collapse_3">';
chat_item +='<footer class="input-group col-sm-7">';
chat_item +='<input type="text" class="form-control" placeholder="Messenger...">';
chat_item +='<span class="input-group-btn">';
chat_item +='<button class="btn btn-danger_" type="button"><i class="fa fa-chevron-right"></i></button>';
chat_item +='</span>';
chat_item +='</footer>';
chat_item +='</div>';
chat_item +='</div>';
chat_item +='</div>';
chat_item +='<footer class="input-group" style="margin-top:2rem;">';
chat_item +='<input type="text" class="form-control" placeholder="Messenger...">';
chat_item +='<span class="input-group-btn">';
chat_item +='<button class="btn btn-danger" type="button"><i class="fa fa-chevron-right"></i></button>';
chat_item +='</span>';
chat_item +='</footer>';
$('#ChatModal').append(chat_item);
// Chat Modal End //

// Course Modal Star //
var course_text =[{
	c_url:"#0",c_title:"課程名稱 AAA",c_img:"http://placehold.it/1280x720/dfdfdf/333"
	},{                                                                   
	c_url:"#0",c_title:"課程名稱 BBB",c_img:"http://placehold.it/1280x720/dfdfdf/333"
	},{                                                                   
	c_url:"#0",c_title:"課程名稱 CCC",c_img:"http://placehold.it/1280x720/dfdfdf/333"
	},{                                                                   
	c_url:"#0",c_title:"課程名稱 DDD",c_img:"http://placehold.it/1280x720/dfdfdf/333"
	}
];
$.each(course_text,function(index,obj)
{
	course_item ='<div class="col-sm-6">';
	course_item +='<article class="price card">';
	course_item +='<header><h4>'+ obj.c_title +'</h4></header>';
	course_item +='<section>';
	course_item +='<a href="'+ obj.c_url +'"><img class="img-responsive" src="'+ obj.c_img +'"></a>';
	course_item +='<ul class="table-box" style="padding:.8rem 0;">';
	course_item +='<li><button class="btn btn-block btn--link border0 red"><i class="fa fa-video-camera"></i> 課程錄製</button></li>';
	course_item +='<li><button class="btn btn-block btn-default border0">新討論 x則</button></li>';
	course_item +='</ul>';
	course_item +='</section>';
	course_item +='</article>';
	course_item +='</div>';
	$('#Course').append(course_item);
});
// Course Modal End //

// Operation Modal Star //
var operation_text =[{
	o_url:"#0",o_name:"陳大強",o_time:"4月25日 12:06",o_title:"題目名稱",o_img:"assets/images/avatar/user_4.jpg",o_icoType:"list"
	},{                                                                                                          
	o_url:"#0",o_name:"張立強",o_time:"4月24日 11:14",o_title:"題目名稱",o_img:"assets/images/avatar/user_2.png",o_icoType:"multimedia"
	},{
	o_url:"#0",o_name:"Dr, 琼斯",o_time:"5月22日 13:05",o_title:"題目名稱",o_img:"assets/images/avatar/user_3.jpg",o_icoType:"multimedia"
	},{
	o_url:"#0",o_name:"Janet Carton",o_time:"6月7日 20:02",o_title:"Gun attacks and suicide bomb in Tehran",o_img:"assets/images/avatar/a6.jpg",o_icoType:"list"
	},{
	o_url:"#0",o_name:"王国军",o_time:"5月28日 19:34",o_title:"題目名稱",o_img:"assets/images/avatar/user_1.png",o_icoType:"list"
	}
];
$.each(operation_text,function(index,obj)
{
	operation_item ='<div class="col-sm-6">';
	operation_item +='<article class="card">';
	operation_item +='<header class="media brb" style="padding:.5em 0 .3em .5em;border-left: 3px solid #e65d4f;">';
	operation_item +='<div class="media-left">';
	operation_item +='<a href="'+ obj.o_url +'"><img class="media-object" src="'+ obj.o_img +'"></a>';
	operation_item +='</div>';
	operation_item +='<div class="media-body">';
	operation_item +='<div class="pull-right" style="margin-right:1em;"><i class="flaticon-'+ obj.o_icoType +' fz14"></i></div>';
	operation_item +='<h4 class="media-heading">'+ obj.o_name +'</h4>';
	operation_item +='<p><small class="text-muted">'+ obj.o_time +'</small></p>';
	operation_item +='</div>';
	operation_item +='</header>';
	operation_item +='<section style="padding:.3rem .6rem">'+ obj.o_title +'</section>';
	operation_item +='</article>';
	operation_item +='</div>';
	$('#Operation').append(operation_item);
});
// Operation & Course Modal End //

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