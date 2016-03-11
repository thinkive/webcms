    $(function() {
			   
		//////////     MOBILE CHECK    //////////   
		var iOS = /(iPad|iPhone|iPod)/g.test( navigator.userAgent );
		var android = /mobile|android/i.test (navigator.userAgent);
		
		if(iOS || android){
			$("html").addClass("isMobile");
			if(iOS) { $(".form-control").css("-webkit-appearance","caret"); }
			$("select.input-sm,select.input-lg ").css("line-height","1.3");
		 }
		 
		 
		//////////     CAPLET COLOR    //////////
		var cepletColor=({ 
			"primary":"#0090d9",
			"info":"#B5D1D8",
			"success":"#2ECC71",
			"warning":"#FFCC33",
			"danger":"#E15258",
			"inverse":"#62707D",
			"theme":"#f35958",
			"theme-inverse":"#0aa699",
			"palevioletred":"#372b32" ,
			"green":"#99CC00",
			"lightseagreen":"#1ABC9B",
			"purple":"#736086",
			"darkorange":"#f9ba46",
			"pink":"#d13a7a"
		});
		$.inColor= function(value, obj) {
			var foundVal;
				$.each(obj, function(key, val) {
					if (value === key) {
						foundVal =  val;
						return;
					}
				});
			return foundVal;
		};
		$.fillColor= function(obj) {
			var inColor=$.inColor(obj.data("color") || obj.data("toolscolor") || obj.data("counter-color") , cepletColor);
			var codeColor= inColor || obj.data("color") || obj.data("toolscolor") || obj.data("counter-color") ;
			return codeColor;
		};
		$.rgbaColor=function( hex, opacity) {
		    var bigint = parseInt(hex.replace("#",""), 16),
				r = (bigint >> 16) & 255,
				g = (bigint >> 8) & 255,
				b = bigint & 255;
				if(opacity || opacity<=1){
		    			return "rgba("+r + "," + g + "," + b+","+ ( opacity || 1 )+")";
				}else{
					return "rgb("+r + "," + g + "," + b+")";
				}
		}
		
		var capletOverlay=$('<div id="caplet-overlay">');
		$.overlay=function(opacity){
			$("body").append(capletOverlay);
			capletOverlay.fadeTo( "slow" , opacity || 0.8 );
		}
		$.clearOverlay=function(){
			capletOverlay.fadeTo( "slow" , 0 ,function(){
				capletOverlay.remove();
			});
		}
		



    // Responsive nav
    selectnav('navigation', {
        label: 'NAVIGATE...',
        autoselect: false,
        nested: true,
        indent: "-"
    });
		
		
	$("a[rel=preview]").fancybox({
		'titlePosition' 	: 'over',
		'titleFormat'       : function(title, currentArray, currentIndex, currentOpts) {
		    return '<span id="fancybox-title-over">' +  (currentIndex + 1) + ' / ' + currentArray.length + ' ' + title + '</span>';
		}
	});

		//////////     TOP SEARCH     //////////
		$(".btn-header-search , .close-header-search").on('click',function(){
				var navSearch=$(".widget-top-search");
				navSearch.toggleClass("nav-top-search");
				if($(this).hasClass("close-header-search")){
					$.clearOverlay();
					return true;
				}
				//navSearch.find("input").focus();
				$.overlay(0.4);
		});
		$('.parallex').parallax("50%", 0.1, false);

 $(".animated").waypoint(function(direction) {
		var el=$(this),
		e=el.data("effect"),
		startTime=el.data("start");
		if(startTime){
			setTimeout(function () {
				el.toggleClass(e);
				el.toggleClass("showing");
			}, startTime );  
		}else{
			$(this).toggleClass(e);
			$(this).toggleClass("showing");
		}
    }, {
        offset: "90%"
  });

 
$(window).scroll(function() {
   if ($(window).width() > 768 ) {
		  if ($(window).scrollTop() > 70) {
			$('#header').addClass('fixedHeader');
		  } else {
			$('#header').removeClass('fixedHeader');
		  }
		  if ($(window).scrollTop() > 500) {
			$('#header').addClass('colorHeader');
		  }  else {
			$('#header').removeClass('colorHeader');
		  }
  }
});

$( window ).resize(function() {
 	if ($(window).width() < 767 ) {
		$('#header').removeClass('fixedHeader');
	}
});
		 
		
  $("#owl-demo").owlCarousel({
    autoPlay : 5000,
    stopOnHover : true,
    paginationSpeed : 5000,
    goToFirstSpeed : 3000,
    singleItem : true,
    autoHeight : true,
    transitionStyle:"backSlide"
  });
  $("#owl-cilent").owlCarousel({
      autoPlay: 3000, //Set AutoPlay to 3 seconds
      items : 6,
      itemsDesktop : [1199,5],
      itemsDesktopSmall : [979,4]
  });	

		

		
		
		
    });
    
    