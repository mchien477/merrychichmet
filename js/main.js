$(document).ready(function(){

	CSSPlugin.defaultSmoothOrigin = false;
	
	$('.bcgAlign').focusPoint();

	//Setup Variables
	$bcgMaster = $('#bcg-01 img');
	$xmas = $('#xmas, #intro, #windowOutlines');
	
	//Default SVG offsets
	var svgWidth = $bcgMaster.width(),
		svgHeight = $bcgMaster.height(),
		svgTop = $bcgMaster.css('top'),
		svgLeft = $bcgMaster.css('left');

	//Resize SVG on page load
	resizeSVG(svgWidth,svgHeight,svgTop,svgLeft);

	//On window resize, get offset values from the first background image and resize SVG
	$(window).resize(function() {
		
		setTimeout(function() {

			//Updated SVG offsets
			svgWidth = $bcgMaster.width();
			svgHeight = $bcgMaster.height();
			svgTop = $bcgMaster.css('top');
			svgLeft = $bcgMaster.css('left');
		      
			//Resize SVG on page resize
			resizeSVG(svgWidth,svgHeight,svgTop,svgLeft);
			  
		}, 200);
	});

	function resizeSVG(svgWidth,svgHeight,svgTop,svgLeft){
		$('#xmas, #intro, #windowOutlines')
			.height(svgHeight)
			.width(svgWidth)
			.css({left: svgLeft, top: svgTop});
	}

	/* Main SVG Christmas Magic Timeline */

	/* Global Variables */
	var $intro = $('#intro'),
		$outline = $('#outline'),
		$mouseDarkBlack = $('#MouseDarkBlack'),
		$mouseDark = $('#MouseDark'),
		$MouseInTree = $('#MouseInTree'),
		$eylid = $('.eyelid'),
		$nose = $('.nose'),
		$eyeBulb = $('.eyeBulb'),
		$eyes = $('.eyes'),
		$xmas = $('#xmas'),
		$windowRight = $('#WindowRight'),
		$windowLeft = $('#WindowLeft'),
		$windowOutlines = $('#windowOutlines'),
		$windowLeftOutline = $('#windowLeftOutline'),
		$windowRightOutline = $('#windowRightOutline'),
		$snowflakes1 = $('#Snowflakes'),
		$snowflakes1b = $('#SnowflakesB'),
		$snowflakes1c = $('#SnowflakesC'),
		$snowflakes2 = $('#Snowflakes_1_A'),
		$snowflakes2b = $('#Snowflakes_1_B'),
		$snowflakes2c = $('#Snowflakes_1_C'),
		$snowflake = $('.snowflake'),
		$ShadowTree = $('#ShadowTree'),
		$XmasTree = $('#XmasTree'),
		$Presents = $('#Presents'),
		$box = $('.box'),
		$PresentA = $('#PresentA'),
		$PresentB = $('#PresentB'),
		$PresentC = $('#PresentC'),
		$PresentO = $('#PresentOpen'),
		$StarLight = $('#StarLight'),
		$StarLightCircle = $('#StarLight circle'),
		$MouseRight = $('#MouseRight'),
		$mouseRightHover = $('#mouseRightHover'),
		$mouseRightSmall = $('#MouseRightSmall'),
		$MouseLeft = $('#MouseLeft'),
		$BaublesStriped = $('#BaublesStriped'),
		$BaublesStripedItems = $('#BaublesStriped g'),
		$BaublesFlat = $('#BaublesFlat'),
		$BaublesFlatItems = $('#BaublesFlat circle'),
		$BaublesString = $('#BaublesString'),
		$BaublesStringString = $('#BaublesString g'),
		$BaublesStringCircle = $('#BaublesString circle'),
		$ribbonP1 = $('#Merry'),
		$ribbonP2 = $('#RibbonBack'),
		$ribbonP3 = $('#Christmas'),
		$star = $('#Star'),
		$trunk = $('#Trunk'),
		$Tree = $('#Tree'),
		$tree1 = $('#TreePart_1'),
		$tree2 = $('#TreePart_2'),
		$tree3 = $('#TreePart_3'),
		$tree4 = $('#TreePart_4'),
		$tree5 = $('#TreePart_5'),
		$tree6 = $('#TreePart_6'),
		$logo = $('#logoIcon'),
		$socialLinks = $('#socialLinks'),
		$sIcons = $('.sIcon'),
		$sIconsPath = $('.sIcon path'),
		$mouseClick = $('#mouseClick'),
		$MaskMerry = $('#MaskMerry'),
		$MaskBack = $('#MaskBack'),
		$MaskFront = $('#MaskFront'),
		$txtChristmas = $('#txtChristmas'),
		$txtMerry = $('#txtMerry'),
		$Lolypop1 = $('#Lolypop1'),
		$Lolypop2 = $('#Lolypop2'),
		$socialLinkP = $('.socialLinkP'),
		$banner = $('#carbonads-container');

	/* Scale background and animate line */
	function getMainTimeline(){
		
		/* CLEAR stage */
		tlClear = new TimelineLite();
		tlClear.set([$windowRight, $banner, $windowLeft, $Tree, $star, $StarLight, $ShadowTree,$MouseInTree, $BaublesStriped, $BaublesFlat, $BaublesString, $BaublesStringString, $MouseRight, $MouseLeft], {autoAlpha: 0})
		.set($MouseLeft, {xPercent: 150, yPercent: 36})
		.set($MouseRight, {xPercent: -650, yPercent: 40})
		.set($trunk, {scale: 0.2, xPercent: 1100, transformOrigin:"center bottom"});

		/* Intro Outline */
		tlIntro = new TimelineMax();
		tlIntro.set($intro, {xPercent: 40, yPercent: 30, scale: 3, transformOrigin:"right bottom"})
		.from($intro, 2, {autoAlpha: 0})
		.to($outline, 4, {strokeDashoffset: 0}, "3");

		/* Blink */
		tlBlink = new TimelineMax({repeat: -1, repeatDelay: 2});	
		tlBlink.set($mouseDarkBlack, {xPercent: -70})
		.fromTo($eylid, 0.2, {yPercent: 70, ease:Power4.easeOut}, {yPercent: 0})
		.fromTo($eyeBulb, 0.3, {xPercent: 0, ease:Power4.easeIn}, {xPercent: -90}, "left")
		.fromTo($nose, 0.1, {xPercent: 0}, {xPercent: -30}, "left")
		.fromTo($eylid, 0.2, {yPercent: 70, ease:Power4.easeOut}, {yPercent: 0})
		.fromTo($eyeBulb, 0.3, {xPercent: -90, ease:Power4.easeIn}, {xPercent: 0}, "right")
		.fromTo($nose, 0.1, {xPercent: -30}, {xPercent: 0}, "right");

		/* Intro out */
		tlOutline = new TimelineMax();
		tlOutline.to([$mouseDark], 0.3 , {yPercent: 50, autoAlpha: 0, ease:Back.easeIn})
		.fromTo($mouseDarkBlack, 0.7, {xPercent: -70}, {xPercent: 500, autoAlpha: 0, ease:Power4.easeIn}, "+=0.3")
		.to($intro, 0.7, {xPercent: 0, yPercent: 0, scale: 1, transformOrigin:"right bottom", ease:Power4.easeOut})
		.to($intro, 1, {autoAlpha: 0}, "fadeOut")
		.to($xmas, 1, {autoAlpha: 1}, "fadeOut");

		/* Bring in the tree boys */
		tlTree = new TimelineMax();
		tlTree
		.set($MouseLeft, {autoAlpha: 1})
		.fromTo($MouseLeft, 2.4,{xPercent: 150, yPercent: 36}, {xPercent: -280, yPercent: 36, ease:Power2.easeOut})
		.to($trunk, 2.4, {scale: 0.2, xPercent: 0, transformOrigin:"center bottom", ease:Power2.easeOut}, '0')
		.set($MouseLeft, {rotationY: 180, transformOrigin:"center bottom"})
		.to($MouseLeft, 1.2, {xPercent: 150, yPercent: 36, ease:Power4.easeOut});

		/* Grow the tree */
		tlTreeGrow = new TimelineMax();
		tlTreeGrow.set($Tree, {autoAlpha:1})
		.set([$tree1, $tree2, $tree3, $tree4, $tree5, $tree6], {autoAlpha:0})
		.to($trunk, 0.4, {scale: 0.5, transformOrigin:"center bottom", ease:Power4.easeOut})
		.fromTo($tree6, 0.4, {yPercent: 270, xPercent: -5, autoAlpha:0, scale: 0.3, transformOrigin:"center bottom"}, {yPercent: 130, xPercent: 0, autoAlpha:1, scale: 0.5, transformOrigin:"center bottom"}, "0.1")
		.fromTo($tree5, 0.4, {yPercent: 150, xPercent: -2, autoAlpha:0, scale: 0.3, transformOrigin:"center bottom"}, {yPercent: 75, xPercent: 0, autoAlpha:1, scale: 0.5, transformOrigin:"center bottom"}, "0.16")
		.fromTo($tree4, 0.4, {yPercent: 100, xPercent: -2, autoAlpha:0, scale: 0.3, transformOrigin:"center bottom"}, {yPercent: 50, xPercent: 0, autoAlpha:1, scale: 0.5, transformOrigin:"center bottom"}, "0.25")
		.fromTo($tree3, 0.4, {yPercent: 90, xPercent: -2, autoAlpha:0, scale: 0.3, transformOrigin:"center bottom"}, {yPercent: 56, xPercent: 0, autoAlpha:1, scale: 0.5, transformOrigin:"center bottom"}, "0.25")
		.fromTo($tree2, 0.4, {yPercent: 50, xPercent: -2, autoAlpha:0, scale: 0.3, transformOrigin:"center bottom"}, {yPercent: 20, xPercent: 0, autoAlpha:1, scale: 0.5, transformOrigin:"center bottom"}, "0.34")
		.fromTo($tree1, 0.4, {yPercent: 10, xPercent: -2, autoAlpha:0, scale: 0.3, transformOrigin:"center bottom"}, {yPercent: 0, xPercent: 0, autoAlpha:1, scale: 0.5, transformOrigin:"center bottom"}, "0.4")
		.to([$tree6, $tree5, $tree4, $tree3, $tree2, $tree1, $trunk], 1, {yPercent: 0, xPercent: 0, scale: 1, transformOrigin:"center bottom", ease:Back.easeInOut}, "0.5")
		.fromTo($ShadowTree, 0.3, {scale: 1, transformOrigin:"center center", autoAlpha: 0}, {scale: 1, autoAlpha: 1, ease:Back.easeInOut}, "0.5")
		.from($mouseClick, 0.4, {autoAlpha:0, scale: 0.3})
		.to($mouseClick, 1, {autoAlpha:0.3, autoAlpha:1, scale: 1.8, repeat: -1, yoyo: true});

		/* Rotating Baubles */
		tlRotatingBaubles = new TimelineMax({repeat: -1, yoyo: true});

		$BaublesStripedItems.each(function(index, element){
			tlRotatingBaubles.add(TweenMax.fromTo(element, 2, {rotation: -2, transformOrigin:"top center"}, {rotation: 2, transformOrigin:"top center", ease:Power1.easeInOut}),"0");
		});

		/* Starlight */
		tlStarLight = new TimelineMax({yoyo: true, repeat: -1});
		tlStarLight.fromTo($StarLight, 0.6, {autoAlpha: 0.2}, {autoAlpha: 1, rotation: 10, transformOrigin:"center center"}, "+=0.8")
		.staggerFromTo($StarLightCircle, 8, {scale: 0.1, fill: '#928685', transformOrigin:"center center"}, {scale: 0.5, fill: '#FBB03B'}, 0.1, "0")
		.staggerTo($StarLightCircle, 0.6, {fill: '#ffffff'}, 0.2)
		.staggerTo($BaublesFlatItems, 2, {fill: '#E85E4D'}, 0.2)
		.staggerTo($BaublesStringCircle, 2, {fill: '#00938E'}, 0.2, "-=0.5")
		.staggerTo($BaublesStringCircle, 2, {stroke: '#00938E'}, 0.2, "-=2");

		/* Social links and IHT logo In */
		tlLogos = new TimelineMax({paused: true});
		tlLogos.fromTo($logo,  0.4, {xPercent: -300, immediateRender: true}, {xPercent: 0, ease:Power4.easeOut, autoAlpha: 1})
		.fromTo($socialLinks,  0.4, {xPercent: 200, autoAlpha: 0, immediateRender: true}, {xPercent: 0, ease:Power4.easeOut, autoAlpha: 1}, "socialIn")
		.staggerFromTo($sIcons,  0.6, {xPercent: 500, autoAlpha: 0}, {xPercent: 0, autoAlpha: 1, ease:Power4.easeOut}, 0.1, "socialIn")	
		.fromTo($banner,  0.4, {xPercent: 200, immediateRender: true}, {xPercent: 0, ease:Power4.easeOut, autoAlpha: 1})
		.add(tlStarLight, 0)
		.add(tlRotatingBaubles, 0);

		/* Highlight Sharing */
		tlHighlightShare = new TimelineMax({yoyo: true, repeat: -1, delay: 4, repeatDelay: 2});
		tlHighlightShare.staggerTo($sIcons, 0.6, {rotation: 360, transformOrigin:"center center", ease:Power4.easeOut}, 0.1)
		.staggerTo($sIconsPath, 0.6, {fill: "#ffffff"}, 0.1, "0");

		/* DECORATING MAIN TIMELINE - START*/
		/* Snow fall - left */
		snowLeft = new TimelineMax({repeat: -1});
		snowLeft
		.set([$snowflakes1b, $snowflakes1, $snowflakes1c], {autoAlpha: 0, yPercent: 0})
		.to($snowflakes1, 2, {autoAlpha: 1, yPercent: 40, xPercent: -1, ease:Linear.easeNone})
		.add("firstIn")
		.to($snowflakes1, 8, {autoAlpha: 0, yPercent: 140, ease:Linear.easeNone})
		.to($snowflakes1b, 5, {autoAlpha: 1,  yPercent: 70, xPercent: 2, ease:Linear.easeNone}, "firstIn" )
		.add("secondIn")
		.to($snowflakes1b, 6, {autoAlpha: 0,  yPercent: 130, ease:Linear.easeNone}, "firstIn+=5")
		.to($snowflakes1c, 5, {autoAlpha: 1, yPercent: 60, ease:Linear.easeNone}, "secondIn-=5")
		.to($snowflakes1c, 5, {autoAlpha: 0, yPercent: 140, ease:Linear.easeNone}, "secondIn");
		
		/* Snow fall -right */
		snowRight = new TimelineMax({repeat: -1});
		snowRight
		.set([$snowflakes2, $snowflakes2b, $snowflakes2c], {autoAlpha: 0, yPercent: 0})
		.to($snowflakes2, 2, {autoAlpha: 1, yPercent: 40, xPercent: -2, ease:Linear.easeNone})
		.add("firstIn")
		.to($snowflakes2, 8, {autoAlpha: 0, yPercent: 140, ease:Linear.easeNone})
		.to($snowflakes2b, 5, {autoAlpha: 1,  yPercent: 70, xPercent: 1, ease:Linear.easeNone}, "firstIn" )
		.add("secondIn")
		.to($snowflakes2b, 6, {autoAlpha: 0,  yPercent: 130, ease:Linear.easeNone}, "firstIn+=5")
		.to($snowflakes2c, 5, {autoAlpha: 1, yPercent: 60, ease:Linear.easeNone}, "secondIn-=5")
		.to($snowflakes2c, 5, {autoAlpha: 0, yPercent: 140, ease:Linear.easeNone}, "secondIn");

		/* Move Snoflakes */
		snowflakeMove = new TimelineMax({repeat: -1, yoyo: true});

		$snowflake.each(function(index, element){
			snowflakeMove.add(TweenLite.to(element, 5, {xPercent: Math.random() * 300, ease:Linear.easeNone}),"0");
			snowflakeMove.add(TweenLite.to(element, 5, {xPercent: Math.random() * 400, ease:Linear.easeNone}),"0");
		});

		/* Bring Presents */
		tlPresents = new TimelineMax();
		tlPresents.set([$Presents, $PresentA, $PresentB, $PresentC, $MouseRight], {autoAlpha: 1})
		.set($PresentO, {autoAlpha: 0})
		.set($MouseRight, {rotationY: 180, transformOrigin:"center bottom"})
		.add("firstPresetnIn")
		.fromTo($MouseLeft, 2, {xPercent: -882, yPercent: 18, ease:Power4.easeOut}, {xPercent: -482, yPercent: 18, ease:Cubic.easeInOut}, "firstPresetnIn")
		.fromTo($PresentA, 2, {xPercent: -402, ease:Power4.easeOut}, {xPercent: 0, ease:Cubic.easeInOut}, "firstPresetnIn")
		.set($MouseLeft, {rotationY: 360, transformOrigin:"center bottom"})
		.to($MouseLeft, 1.0, {xPercent: -882, ease:Cubic.easeOut})
		.add("secondPresetnIn")
		.fromTo($MouseRight, 2, {xPercent: 470, yPercent: 60, ease:Power4.easeOut}, {xPercent: -20, yPercent: 60, ease:Cubic.easeInOut}, "secondPresetnIn-=1")
		.fromTo($PresentC, 2, {xPercent: 302, ease:Power4.easeOut}, {xPercent: 0, ease:Cubic.easeInOut}, "secondPresetnIn-=1")
		.set($MouseRight, {rotationY: 360, transformOrigin:"center bottom"})
		.to($MouseRight, 1.0, {xPercent: 370, ease:Cubic.easeOut})
		.add("thirdPresetnIn")
		.set($MouseLeft, {yPercent: 62, xPercent: -822, rotationY: 180, transformOrigin:"center bottom"}, "thirdPresetnIn-=1") 
		.fromTo($MouseLeft, 2, {yPercent: 62, xPercent: -822}, {xPercent: -397, ease:Cubic.easeInOut}, "thirdPresetnIn-=1")
		.fromTo($PresentB, 2, {xPercent: -392, ease:Power4.easeOut}, {xPercent: 0, ease:Cubic.easeInOut}, "thirdPresetnIn-=1")
		.set($MouseLeft, {rotationY: 360, transformOrigin:"center bottom"})
		.to($MouseLeft, 1.0, {xPercent: -822, ease:Cubic.easeOut, onComplete:finalAnimation});

		/* Decorating Tree */
		tlDecoration = new TimelineMax({paused: true});
		tlDecoration.add("BaublesFlat")
		.to($mouseClick, 0.4, {autoAlpha:1, scale: 2.5, ease:Power4.easeOut})
		.to($mouseClick, 0.2, {autoAlpha:0, scale: 0.1})
		.to($BaublesFlat, 0.4, {autoAlpha: 1})
		.staggerFromTo($BaublesFlatItems, 0.3, {autoAlpha: 0, scale: 0.7}, {autoAlpha: 1, scale: 1, ease:Back.easeOut}, 0.1)
		.add("BaublesStriped")
		.set($BaublesStriped, {autoAlpha: 1})
		.staggerFromTo($BaublesStripedItems, 0.4, {autoAlpha: 0, rotation: -10, transformOrigin:"top center", ease:Back.easeOut}, {autoAlpha: 1, rotation: -2, transformOrigin:"top center", ease:Back.easeOut}, 0.2)
		.add("BaublesString")
		.set($BaublesStringCircle, {autoAlpha: 0, scale: 0.3})
		.set($BaublesString, {autoAlpha: 1})
		.staggerFromTo($BaublesStringString, 0.2, {autoAlpha: 0, yPercent: -30}, {autoAlpha: 1, yPercent: 0}, 0.15)
		.staggerFromTo($BaublesStringCircle, 0.2, {autoAlpha: 0, rotation: -10, transformOrigin:"top center"}, {autoAlpha: 1, rotation: 0, scale: 1, transformOrigin:"top center"}, 0.06)
		.fromTo($Lolypop1, 0.3, {rotation: 10, autoAlpha: 0, transformOrigin:"top center"}, {rotation: 0, autoAlpha: 1, ease:Back.easeOut})
		.fromTo($Lolypop2, 0.3, {rotation: -10, autoAlpha: 0, transformOrigin:"top center"}, {rotation: 0, autoAlpha: 1, ease:Back.easeOut}, "-=0.15")
		.to($windowLeftOutline, 2, {strokeDashoffset: 0, ease:Power1.easeOut})
		.to($windowRightOutline, 2, {strokeDashoffset: 0, ease:Power1.easeOut}, "-=0.4")
		.to([$windowRight,$windowLeft], 0.5, {autoAlpha: 1})
		.set($windowOutlines, {autoAlpha: 0})
		.add("snow")
		.add(snowLeft, "snow")
		.add(snowRight, "snow")
		.add("presents")
		.add(tlPresents, "snow");
		/* DECORATING MAIN TIMELINE - END*/

		/* Mouse In Tree */
		tlMouseInTree = new TimelineMax({paused: true, onComplete:showLogos});
		tlMouseInTree.set($MouseRight, {rotationY: 180, transformOrigin:"center bottom"})
		.to($MouseRight, 0.7, {xPercent: -50, yPercent: 80, ease:Power1.easeOut})
		.to($MouseRight, 0.3, {xPercent: -185, yPercent: 34, ease:Power1.easeIn, rotation: 45})
		.to($MouseRight, 0.1, {xPercent: -212, yPercent: -24, rotation: 90, autoAlpha: 0, ease:Linear.easeNone})
		.staggerFromTo([$tree1,$tree2,$tree3,$tree4,$tree5,$tree6], 0.1, {rotation: 0, transformOrigin:"top bottom", ease:RoughEase.easeInOut}, {rotation: 2, transformOrigin:"top bottom", ease:RoughEase.easeInOut, repeat: 4}, 0.05)
		.to($MouseInTree, 0.3, {autoAlpha: 1}, "+=0.5");

		/* Star and ribbon in */
		tlStar = new TimelineMax({paused: true});
		tlStar
		.set($star, {autoAlpha: 1})
		.fromTo($star, 0.4, {yPercent: -600}, {yPercent: 0, ease:Power4.easeOut})
		.fromTo($MaskMerry, 0.6, {xPercent: 100}, {xPercent: 0, ease:Power2.easeInOut}, "+=0.3")
		.fromTo($MaskBack, 0.8, {xPercent: -100}, {xPercent: 0, ease:Linear.easeNone})
		.fromTo($MaskFront, 0.6, {xPercent: 100}, {xPercent: 0, ease:Power2.easeInOut})
		.fromTo($txtMerry, 0.8, {scale: 1.5, autoAlpha:0, x: -10, y: -10}, {scale:1, autoAlpha:1, x: 0, y: 0, ease:Back.easeOut})
		.fromTo($txtChristmas, 0.8, {scale: 1.5, autoAlpha:0, x: -10, y: -10}, {scale:1, autoAlpha:1, x: 0, y: 0, ease:Back.easeOut, onComplete:mouseToTree}, "-=0.4");

		function finalAnimation() {
			tlStar.play();
		}

		function mouseToTree(){
			tlMouseInTree.play();
		}

		function showLogos(){
			tlLogos.play();
		}

		/* Mouse out of the tree */
		tlMouseAway = new TimelineMax({paused: true});
		tlMouseAway.to([$MouseInTree, $Lolypop2], 0.2, {autoAlpha: 0, scale: 0.5, ease:Power1.easeIn})
		.set($MouseRight, {rotationY: "0", xPercent: -162, yPercent: 16, transformOrigin:"center center"})
		.staggerFromTo([$tree5,$tree4,$tree3,$tree2,$tree1], 0.1, {rotation: 0, transformOrigin:"top bottom", ease:RoughEase.easeInOut}, {rotation: 2, transformOrigin:"top bottom", ease:RoughEase.easeInOut, repeat: 4}, 0.05)
		.to($MouseRight, 0.3, {xPercent: -162, yPercent: 46, rotation: "45", autoAlpha: 1, ease:Power1.easeIn}, "+=0.2")
		.to($MouseRight, 0.3, {xPercent: -162, yPercent: 66, rotation: "0", ease:Linear.easeNone})
		.to($mouseRightSmall, 0.2, {scale: 0.5, autoAlpha: 0, x: '+=10', y: '+=10', transformOrigin:"top center"})
		.fromTo($mouseRightHover, 0.5, {scale: 0.2, autoAlpha: 0}, {scale: 0.5, autoAlpha: 1, transformOrigin:"bottom center"}, "-=0.2");

		$MouseInTree.mouseenter(function() {
			tlMouseAway.play();
		})

		var mainTimeline = new TimelineMax();
		mainTimeline
		.add(tlClear)
		.add(tlIntro, "intro")
		.add(tlBlink, "intro")
		.add(tlOutline, "intro+=6")
		.add(tlTree, "intro+=9")
		.add(tlTreeGrow, "intro+=12");

		// mainTimeline.seek("intro+=12").play();
		// tlTreeGrow.timeScale(5);
		// tlPresents.timeScale(5);
		// tlDecoration.timeScale(5);
		// tlStar.timeScale(5);
		// tlMouseInTree.timeScale(5);
		mainTimeline.play();

		return mainTimeline;
	}

	/* Jump Presents */
	tlJumpPresent = new TimelineMax({paused: true});

	$box.mouseenter(function(){

		$PresentBox = $(this).find('.PresentBox'),
		$PresentBoxShadow = $(this).find('.PresentBoxShadow');
		
		tlJumpPresent
		.to($PresentBox, 0.5, {scaleX: 0.8, transformOrigin:"bottom center", y: -20, ease:Power4.easeInOut})
		.to($PresentBox, 0.2, {scaleX: 1, transformOrigin:"bottom center", y: 0, ease:Bounce.easeOut})
		.to($PresentBoxShadow, 0.5, {scaleX: 0.8, transformOrigin:"bottom center", ease:Power4.easeInOut}, "0")
		.to($PresentBoxShadow, 0.2, {scaleX: 1, transformOrigin:"bottom center", ease:Bounce.easeOut}, "0.5");
		
		tlJumpPresent.play();

	});

	$box.click(function(){
		event.preventDefault();

		$thisBox = this,
		$PresentBoxRibbon = $(this).find('.PresentBoxRibbon'),
		$PresentBoxTop = $(this).find('.boxTop'),
		$PresentBoxTopShadow = $(this).find('.boxTopShadow'),
		$PresentRibbonSide = $(this).find('.ribbonSide'),
		$socialLinkP = $(this).find('.socialLinkP');

		/* Open Present */
		tlOpenPresent = new TimelineMax({paused: true});
		tlOpenPresent
		.to($PresentBoxRibbon, 0.4, {yPercent: 252, ease:Power4.easeInOut})
		.to($PresentBoxTop, 0.4, {yPercent: -80, ease:Power4.easeOut}, "0")
		.to($PresentBoxTopShadow, 0.2, {autoAlpha: 0}, "0")
		.to($PresentRibbonSide, 0.4, {scaleY: 0.3, transformOrigin:"bottom center", onComplete: stopHover, onCompleteParams: [$thisBox]}, "0.2")
		// .to($PresentBoxTop, 0.2, {rotation: -720, transformOrigin:"center center", ease:Power4.easeInOut}, "0.2")
		// .to($PresentBoxTop, 0.4, {xPercent: -15, transformOrigin:"left center", ease:Bounce.easeOut}, "0.4")
		// .to($PresentBoxTop, 0.4, {yPercent: 450, ease:Power4.easeOut}, "0.4");

		.to($PresentBoxTop, 0.4, {rotation: -90, transformOrigin:"left center", ease:Power4.easeInOut}, "0")
		.to($PresentBoxTop, 0.3, {yPercent: 400, transformOrigin:"left center", ease:Bounce.easeOut}, "0.4")
		.to($PresentBoxTop, 0.4, {rotation: -180, transformOrigin:"left center", ease:Power4.easeIn}, "0.7")
		.to($socialLinkP, 0.6, {scale: 1.4, yPercent: -130, transformOrigin:"top center", ease:Power4.easeInOut}, "-=0.4");

		tlOpenPresent.play();

		function stopHover(element){
			$(element).unbind('mouseenter click');
			$(element).css('cursor: default');
		}

	});

	$mouseClick.click(function(){
		event.preventDefault();
		tlLogos.stop();
		tlDecoration.play();

	});

	/* Init function */
	function init(){
		getMainTimeline();
	}

	init();

});
