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
nav_item +='<li><a href="#0">Logout</a></li>';
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
Comment_Modal +='<button class="btn btn-danger" type="button"><i class="fa fa-chevron-right"></i></button>';
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
	c_url:"#0",c_comm:"0",c_title:"課程名稱 AAA",c_img:"http://placehold.it/720x480/dfdfdf/333"
	},{                                                                   
	c_url:"#0",c_comm:"1",c_title:"課程名稱 BBB",c_img:"http://www.mindriverad.com/images/case-online/rado/rado-3.jpg"
	},{                                                                   
	c_url:"#0",c_comm:"2",c_title:"課程名稱 CCC",c_img:"http://placehold.it/720x480/dfdfdf/333"
	},{                                                                   
	c_url:"#0",c_comm:"3",c_title:"課程名稱 DDD",c_img:"https://cdn0-techbang.pixfs.net/system/images/368769/original/b10abb16ffa2c7b7a32ab73ee5d828b2.jpg"
	},{                                                                   
	c_url:"#0",c_comm:"0",c_title:"課程名稱",c_img:"http://placehold.it/720x480/dfdfdf/333"
	},{                                                                   
	c_url:"#0",c_comm:"0",c_title:"課程名稱",c_img:"http://www.cheesead.com.tw/w2/files/w03-4.jpg"
	},{                                                                   
	c_url:"#0",c_comm:"0",c_title:"課程名稱",c_img:"http://placehold.it/720x480/dfdfdf/333"
	},{                                                                   
	c_url:"#0",c_comm:"0",c_title:"課程名稱",c_img:"http://placehold.it/720x480/dfdfdf/333"
	}
];
$.each(course_text,function(index,obj)
{
	course_item ='<div class="price col-xs-6 col-sm-6 col-md-4">';
	course_item +='<article class="card">';
	course_item +='<section class="clearfix">';
	course_item +='<a href="'+ obj.c_url +'"><img class="img-responsive" src="'+ obj.c_img +'"></a>';
	course_item +='<header><h4>'+ obj.c_title +'</h4></header>';
	course_item +='<ul class="table-box" style="padding:.8rem 0;">';
	course_item +='<li><button class="btn btn-block btn--link red"><i class="fa fa-video-camera"></i> <span class="hidden-xs">課程</span>錄製</button></li>';
	course_item +='<li><button class="btn btn-block btn--link grey"><span class="hidden-xs">新</span>討論 '+ obj.c_comm +'則</button></li>';
	course_item +='</ul>';
	course_item +='</section>';
	course_item +='</article>';
	course_item +='</div>';
	$('#Course').append(course_item);
});
// Course Modal End //

// Operation Modal Star //
var operation_text =[{
	o_url:"p6.html",o_name:"陳大強",o_time:"4月25日 12:06",o_title:"題目名稱",o_img:"assets/images/avatar/user_4.jpg",o_icoType:"list"
	},{                                                                                                          
	o_url:"p6.html",o_name:"張立強",o_time:"4月24日 11:14",o_title:"題目名稱",o_img:"assets/images/avatar/user_2.png",o_icoType:"multimedia"
	},{
	o_url:"p6.html",o_name:"Dr, 琼斯",o_time:"5月22日 13:05",o_title:"題目名稱",o_img:"assets/images/avatar/user_3.jpg",o_icoType:"multimedia"
	},{
	o_url:"p6.html",o_name:"Janet Carton",o_time:"6月7日 20:02",o_title:"Gun attacks and suicide bomb in Tehran",o_img:"assets/images/avatar/a6.jpg",o_icoType:"list"
	},{
	o_url:"p6.html",o_name:"王国军",o_time:"5月28日 19:34",o_title:"題目名稱",o_img:"assets/images/avatar/user_1.png",o_icoType:"list"
	}
];
$.each(operation_text,function(index,obj)
{
	operation_item ='<div class="col-sm-6">';
	operation_item +='<article class="card">';
	operation_item +='<header class="media brb" style="padding:.5em 0 .3em .5em;border-left: 3px solid #e65d4f;">';
	operation_item +='<div class="media-left">';
	operation_item +='<img class="media-object" src="'+ obj.o_img +'">';
	operation_item +='</div>';
	operation_item +='<div class="media-body">';
	operation_item +='<div class="pull-right" style="margin-right:1em;"><i class="flaticon-'+ obj.o_icoType +' fz14"></i></div>';
	operation_item +='<h4 class="media-heading">'+ obj.o_name +'</h4>';
	operation_item +='<p><small class="text-muted">'+ obj.o_time +'</small></p>';
	operation_item +='</div>';
	operation_item +='</header>';
	operation_item +='<a href="'+ obj.o_url +'"><section style="padding:.3rem .6rem">'+ obj.o_title +'</section></a>';
	operation_item +='</article>';
	operation_item +='</div>';
	$('#Operation').append(operation_item);
});
// Operation & Course Modal End //

// Product_item1 list Star //
var item1_text =[{
	item1_url:"#0",item1_type:"單課",item1_price:"15",item1_buy:"0",item1_favorite:"0",item1_title:"高考奋斗青春精彩未来",item1_img:"http://img95.699pic.com/photo/50040/6301.jpg_wh300.jpg",item1_icoColor:"c1"
	},{
	item1_url:"#0",item1_type:"套餐",item1_price:"20",item1_buy:"1",item1_favorite:"1",item1_title:"課程標題 xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx xxxx",item1_img:"http://placehold.it/530x300/#666/e65d4f",item1_icoColor:"c3"
	},{
	item1_url:"#0",item1_type:"體驗",item1_price:"25",item1_buy:"0",item1_favorite:"2",item1_title:"課程標題 xxxx xxx xxxx",item1_img:"http://placehold.it/530x300/#666/e65d4f",item1_icoColor:"c2"
	}
];
$.each(item1_text,function(index,obj)
{
	list_item1 ='<table class="card">';
	list_item1 +='<tr>';
	list_item1 +='<td style="width:48%;">';
	list_item1 +='<a class="price2_img" href="'+ obj.item1_url +'">';
	list_item1 +='<img src="'+ obj.item1_img +'">';
	list_item1 +='</a>';
	list_item1 +='</td>';
	list_item1 +='<td class="px-1 align-top">';
	list_item1 +='<h4>'+ obj.item1_title +'</h4>';
	list_item1 +='</td>';
	list_item1 +='</tr>';
	list_item1 +='<tr>';
	list_item1 +='<td>';
	list_item1 +='<ul class="table-box" style="padding:.8rem 0;">';
	list_item1 +='<li><span><i class="fa fa-shopping-cart"></i> 購買 '+ obj.item1_buy +'</span></li>';
	list_item1 +='<li><span class="favorite"><i class="fa fa-star"></i> 收藏 '+ obj.item1_favorite +'</span></li>';
	list_item1 +='</ul>';
	list_item1 +='</td>';
	list_item1 +='<td class="px-1">';
	list_item1 +='<ul class="table-box brt">';
	list_item1 +='<li class="red" style="text-align:left;">$<span class="fz16">'+ obj.item1_price +'</span></li>';
	list_item1 +='<li style="text-align:right;"><span class="badge label_'+ obj.item1_icoColor +'">'+ obj.item1_type +'</span></li>';
	list_item1 +='</ul>';
	list_item1 +='</td>';
	list_item1 +='</tr>';
	list_item1 +='</table>';
	$('#Product_item1').append(list_item1);
});
// Product_item1 list End //

// Product_item2 list Star //
var item2_text =[{
	item2_url:"#0",item2_type:"套餐",item2_price:"20",item2_buy:"1",item2_favorite:"1",item2_title:"課程標題",item2_img:"http://placehold.it/530x300/#666/e65d4f",item2_icoColor:"c3"
	},{
	item2_url:"#0",item2_type:"體驗",item2_price:"25",item2_buy:"0",item2_favorite:"2",item2_title:"高考奋斗青春精彩未来",item2_img:"http://img95.699pic.com/photo/50040/6301.jpg_wh300.jpg",item2_icoColor:"c2"
	},{
	item2_url:"#0",item2_type:"單課",item2_price:"10",item2_buy:"1",item2_favorite:"3",item2_title:"課程標題 xxxx xxxx xxxx xxxx xxxx xxxx",item2_img:"http://placehold.it/530x300/#666/e65d4f",item2_icoColor:"c1"
	}
];
$.each(item2_text,function(index,obj)
{
	list_item2 ='<section class="col-xs-6 col-sm-4">';
	list_item2 +='<div class="card">';
	list_item2 +='<section>';
	list_item2 +='<a class="price2_img" href="'+ obj.item2_url +'">';
	list_item2 +='<img src="'+ obj.item2_img +'">';
	list_item2 +='</a>';
	list_item2 +='<ul class="table-box" style="padding:.8rem 0;">';
	list_item2 +='<li><span><i class="fa fa-shopping-cart"></i> 購買 '+ obj.item2_buy +'</span></li>';
	list_item2 +='<li><span class="favorite"><i class="fa fa-star"></i> 收藏 '+ obj.item2_favorite +'</span></li>';
	list_item2 +='</ul>';
	list_item2 +='</section>';
	list_item2 +='<section>';
	list_item2 +='<h4 class="brt brb h3em" style="padding:.5rem 0 .5rem 1rem;">'+ obj.item2_title +'</h4>';
	list_item2 +='<ul class="table-box">';
	list_item2 +='<li class="pl-1" style="text-align:left;"><span class="badge label_'+ obj.item2_icoColor +'">'+ obj.item2_type +'</span></li>';
	list_item2 +='<li class="red pr-1" style="text-align:right;">$<span class="fz16">'+ obj.item2_price +'</span></li>';
	list_item2 +='</ul>';
	list_item2 +='</section>';
	list_item2 +='</div>';
	list_item2 +='</section>';
	$('#Product_item2').append(list_item2);
});
// Product_item2 list End //

// Product_item3 list Star //
var item3_text =[{
	item3_url:"p1.html",item3_type:"限時促銷",item3_price:"12",item3_buy:"7",item3_favorite:"0",item3_title:"企业家应该确立的N个产业思维和产业认识",item3_img:"assets/images/item3.jpg",item3_icoColor:"c1"
	},{
	item3_url:"p2.html",item3_type:"一元體驗",item3_price:"66",item3_buy:"0",item3_favorite:"1",item3_title:"品牌营销的理论与实操",item3_img:"assets/images/item2.jpg",item3_icoColor:"c2"
	},{
	item3_url:"p3.html",item3_type:"結帳88折",item3_price:"54",item3_buy:"1",item3_favorite:"3",item3_title:"互联网思维与中国企业创新转型",item3_img:"assets/images/item1.jpg",item3_icoColor:"c3"
	},{
	item3_url:"p4.html",item3_type:"限時促銷",item3_price:"0",item3_buy:"0",item3_favorite:"0",item3_title:"標題名稱",item3_img:"http://placehold.it/640x480/#666/e65d4f",item3_icoColor:"c1"
	}
];
$.each(item3_text,function(index,obj)
{
	list_item3 ='<section class="col-sm-6 price2">';
	list_item3 +='<span class="label_mask label_'+ obj.item3_icoColor +'">'+ obj.item3_type +'</span>';
	list_item3 +='<a class="price2_img" href="'+ obj.item3_url +'">';
	list_item3 +='<h4>'+ obj.item3_title +'</h4>';
	list_item3 +='<img src="'+ obj.item3_img +'">';
	list_item3 +='</a>';
	list_item3 +='<div class="white_bg" style="padding:.5rem 0;">';
	list_item3 +='<ul class="table-box">';
	list_item3 +='<li class="red">$<span class="fz16">'+ obj.item3_price +'</span></li>';
	list_item3 +='<li>'+ obj.item3_type +'</li>';
	list_item3 +='<li style="text-align:left;">購買 '+ obj.item3_buy +'<br>收藏 '+ obj.item3_favorite +'</li>';
	list_item3 +='<li><span class="btn-block grey fz12 favorite"><i class="fa fa-star"></i> 收藏</span></li>';
	list_item3 +='</ul>';
	list_item3 +='</div>';
	list_item3 +='</section>';
	$('#Product_item3').append(list_item3);
});
// Product_item3 list End //

// Recommendations Modal Star //
var rcd_text =[{
	rcd_url:"#0",rcd_title:"互联网思维与中国企业创新转型",rcd_img:"assets/images/item1.jpg"
	},{
	rcd_url:"#0",rcd_title:"品牌营销的理论与实操",rcd_img:"assets/images/item2.jpg"
	},{
	rcd_url:"#0",rcd_title:"企业家应该确立的N个产业思维和产业认识",rcd_img:"assets/images/item3.jpg"
	}
];
rcd_item ='<h4><strong><i class="flaticon-calendar-1 grey"></i> 課程推薦</strong></h4>';
rcd_item +='<ol class="recommendations list-group">';
$.each(rcd_text,function(index,obj)
{
	rcd_item +='<li class="list-group-item clearfix">';
	rcd_item +='<a href="'+ obj.rcd_url +'"><img src="'+ obj.rcd_img +'">'+ obj.rcd_title +'</a>';
	rcd_item +='</li>';
});
rcd_item +='</ol>';
$('#Recommendations').append(rcd_item);
// Recommendations Modal End //

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
	item_title:"2014華航&菲觀局",item_date:"5月16日",item_loc:"長灘島",item_img:"http://www.cheesead.com.tw/w2/files/w03-4.jpg",item_url:"p1.html"
	},{
	item_title:"Title",item_date:"mm月dd日",item_loc:"Location",item_img:"http://placehold.it/720x480/#666/e65d4f",item_url:"p2.html"
	},{
	item_title:"瑞士雷达手表",item_date:"4月23日",item_loc:"瑞士",item_img:"http://www.mindriverad.com/images/case-online/rado/rado-3.jpg",item_url:"p3.html"
	},{
	item_title:"Title",item_date:"mm月dd日",item_loc:"Location",item_img:"http://placehold.it/720x480/#666/e65d4f",item_url:"p4.html"
	},{
	item_title:"Samsung Galaxy A8(2016) 評測",item_date:"10月26日",item_loc:"Taipei",item_img:"https://cdn0-techbang.pixfs.net/system/images/368769/original/b10abb16ffa2c7b7a32ab73ee5d828b2.jpg",item_url:"p5.html"
	},{
	item_title:"Title",item_date:"mm月dd日",item_loc:"Location",item_img:"http://placehold.it/720x480/#666/e65d4f",item_url:"p6.html"
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
	index_items += '<button class="pushy-btn btn--link btn--grey grey-lighter join"><i class="fa fa-check"></i> 参加</button>';
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
