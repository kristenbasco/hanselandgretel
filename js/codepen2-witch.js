// When the DOM is ready
$(function() {
	// function pathPrepare ($el) {
	// 	var lineLength = $el[0].getTotalLength();
	// 	$el.css("stroke-dasharray", lineLength);
	// 	$el.css("stroke-dashoffset", lineLength);
	// }

	// var $word = $("path.mytitle");
	// var $dot = $("path.smokestuff");

	// // prepare SVG
	// pathPrepare($word);
	// pathPrepare($dot);


	var controller = new ScrollMagic({ globalSceneOptions: { 
		triggerHook: 0.05 
	} });
	var pinani = new TimelineMax()
	
	// .add(TweenMax.to($word, 0.9, {strokeDashoffset: 0, ease:Linear.easeNone})) // draw word for 0.9
	// .add(TweenMax.to($dot, 0.1, {strokeDashoffset: 0, ease:Linear.easeNone}))  // draw dot for 0.1
	// .add(TweenMax.to("path", 1, {stroke: "#fff", ease:Linear.easeNone}), 0)			// change color during the whole thing

	.add(TweenMax.to('#fades', 1, { 
		transform: 'translateY(0)'
	}))
	.add(TweenMax.to('#fades', 4, {
		opacity: 1,
		delay: 0.5
	}))
	.add(TweenMax.to('#fades img#treetwo', 4, {
		transform: 'translateX(0)',
		opacity: .90,
		delay: 5,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#fades h3#onceupon', 4, {
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#fades h3#onceupon', 1, {
		opacity: 0,
	}))
	.add(TweenMax.to('#fades img#treeone', 4, {
		transform: 'translateX(0)',
		opacity: 1,
		delay: 5,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#fades h3#onceupon2', 4, {
		opacity: 1,
		delay: 2
	}))
	.add(TweenMax.to('#fades h3#onceupon2', 1, {
		opacity: 0,
	}))
	.add(TweenMax.to('#fades img#treethree', 4, {
		transform: 'translateX(0)',
		opacity: 1,
		delay: 5,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#fades img#treeone', .5, {
		opacity: .98,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#fades h3#onceupon3', 4, {
		opacity: 1,
		delay: 2
	}))
	.add(TweenMax.to('#fades h3#onceupon3', 1, {
		opacity: 0,
	}))
	.add(TweenMax.to('#fades img.bread', 4, {
		opacity: .9,
		delay: 5,
		ease: Linear.easeNone
	}))

	// .add(TweenMax.to('#fades img#bread', 4, {
	// 	opacity: .1,
	// 	delay: 5,
	// 	ease: Linear.easeNone
	// }))
	// .add(TweenMax.to('#fades img#bread', 4, {
	// 	onUpdate: function () {
	// 		  $("#bread").attr("src", "img/breadcrumbs_color.png"); // set the image source
	// 	},
	// 	opacity: 1,
	// 	ease: Linear.easeNone
	// }))

	.add(TweenMax.to('#kitchen', 1, { transform: 'translateY(0)' }))
	.add(TweenMax.to('#kitchen', 4, {
		opacity: 1,
	}))

	


	.add(TweenMax.to('#wipe', 1, { 
		transform: 'translateY(0)'
	}))
	.add(TweenMax.to('#wipe', 4, {
		opacity: 4,
		delay: 5
	}))
	
	.add(TweenMax.to('#wipe', 4, {
		opacity: 1,
		delay: 5
	}))

	.add(TweenMax.to('#wipe img#oven-outline', 4, {
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#wipe img#broom', 4, {
		transform: 'translateX(0)',
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#wipe img#redbg', 1, {
		opacity: 0.5,
	}))

	

	.add(TweenMax.to('#wipe img#fire1', 4, {
		opacity: 1,
		delay: 5
	}))

	.add(TweenMax.to('#wipe img#redbg', 4, {
		opacity: 1 ,
	}))



	.add(TweenMax.to('#wipe h3#witchdead1', 4, {
		transform: 'translateX(0)',
		opacity: 1,
		delay: 6
	}))
	.add(TweenMax.to('#wipe h3#witchdead2', 4, {
		transform: 'translateX(0)',
		opacity: 1,
	}))




	.add(TweenMax.to('#wipe img#empty-cage', 4, {
		transform: 'translateX(0)',
		opacity: 1,
		delay: 5
	}))

	.add(TweenMax.to('#wipe h3#witchdead1', 1, {
		opacity: 0,
	}))

	.add(TweenMax.to('#wipe img#legs', 4, {
		delay: 5,
		opacity: 1
	}))

	.add(TweenMax.to('#wipe h3#witchdead2', 4, {
		opacity: 1,
		delay: 8
	}))


	

	.add(TweenMax.to('#wipe', 4, {
		opacity: 1,
		delay: 5
	}))



	.add(TweenMax.to('#second-wipe', 1, { transform: 'translateY(0)' }))
	.add(TweenMax.to('#slide', 1, {
	    top: '0%',
	    ease: Bounce.easeOut,
	    delay: 0.2
	})).add([
	    TweenMax.to('#slide h3:first-child', 0.2, { autoAlpha: 0 }),
	    TweenMax.from('#slide h3:last-child', 0.2, { autoAlpha: 0 })
	]).add([
	    TweenMax.to('#slide', 0.3, { backgroundColor: 'yellow' }),
	    TweenMax.to('#slide h3:last-child', 0.3, { color: 'blue' })
	]).add([
	    TweenMax.to('#slide', 0.3, { backgroundColor: 'green' }),
	    TweenMax.to('#slide h3:last-child', 0.3, { color: 'red' })
	]).add([
	    TweenMax.to('#slide', 0.3, { backgroundColor: 'red' }),
	    TweenMax.to('#slide h3:last-child', 0.3, { color: 'white' })
	]).add([
	    TweenMax.to('#slide', 0.3, { backgroundColor: '#c7e1ff' }),
	    TweenMax.to('#slide h3:last-child', 0.3, { color: 'black' })
	])
	.add(TweenMax.from('#unpin', 0.5, { top: '100%' }));
	var scene = new ScrollScene({
	    triggerElement: 'section#pin',
	    duration: 10000
	}).setTween(pinani).setPin('section#pin').addTo(controller);
});