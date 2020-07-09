sz=screen.height;
sz=sz-145;
p=0;
$('header').css('height',sz+'px');
$(document).scroll(function(){
	jq=$(document).scrollTop();
	if(jq>50&&p==0){
		$('.flow-1').animate({left:'-30%',top:'-25%'},700);
		$('.flow-2').animate({right:'-30%',top:'-25%'},700);
		$('.flow-3').animate({left:'-30%',bottom:'-25%'},700);
		$('.flow-4').animate({right:'-30%',bottom:'-15%'},700);
		$('.mny').slideDown(500);
		p=p+1;
	}
	else if(jq<50&&p>=1){
		$('.flow-1').animate({left:'0px',top:'0px'},700);
		$('.flow-2').animate({right:'0px',top:'0px'},700);
		$('.flow-3').animate({left:'0px',bottom:'0px'},700);
		$('.flow-4').animate({right:'0px',bottom:'0px'},700);
		$('.mny').css('display','none');
		p=0;
	}

	else if(jq<50&&p==-1){
		$('.flow-1').animate({left:'-10%',top:'-15%'},700);
		$('.flow-2').animate({right:'-15%',top:'-15%'},700);
		$('.flow-3').animate({left:'-15%',bottom:'-10%'},700);
		$('.flow-4').animate({right:'-15%',bottom:'-10%'},700);
	}
	
});
var pio;
function my(){
	$('.mny').css('display','none');
	for(var i=5;i<11;i++){
	ka=$('body').children()[i];
	$(ka).css('display','none');
}
	$('#imav').css('display','none');
	$('.own-men').css('display','block');
	p=-1;
	}
	$('.cls').on('mouseover',function(){
		$('.cls img ').attr('src','https://avatanplus.com/files/resources/original/574c146dc9344155012fcd00.png');
	});
	$('.cls').on('mouseout',function(){
		$('.cls img ').attr('src','https://avatanplus.com/files/resources/original/5968a2c8f2ed115d40bbe123.png');

	});


	var testa;
	$('.cls').on('click',testa=function(){
		$('header').css('display','flex');
		$('.cont').css('display','flex');
		$('.m-1').css('display','block');
		$('.menu').css('display','block');
		$('.mena').css('display','block');
		$('.mena-2').css('display','block');
		$('footer').css('display','block');
		$('#imav').css('display','block');
		$('.own-men').css('display','none');
		p=0;
	});
	$('#ula').children().on('mouseover',function(){
		jq=$(this);
		jqq=$(jq).children();
		$(jqq).addClass('ej');
		$(jqq).addClass('ej2');
		pio=jqq;
	});
	$('#ula').on('mouseout',function(){
		$(jqq).removeClass('ej');
		$(jqq).removeClass('ej2');

	});
	$('.m-2').on('click','a',function(event){
		event.preventDefault();
		rak=$(this).attr('href');
		rak2=parseInt($(rak).offset().top);
		console.log(rak2);
		$('body,html').animate({scrollTop:rak2},1500);
	});

	$('#ula li').on('click',function(event){
		event.preventDefault();
		bq=$(event.target).attr('href');
		console.log(bq);
		if(bq=='#ka'){
		window.open('https://justedesplantes.ca/');
	}	
		// else if(bq=='#fasa'){
		// 	window.open('https://www.facebook.com/Lecafefrida');
		// }
		else{
		testa();
		console.log(bq);
		bq2=parseInt($(bq).offset().top);
		console.log(bq2);
		$('body,html').scrollTop(bq2);
	}
	});