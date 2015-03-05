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

	.add(TweenMax.to('#scene1', 1, { 
		transform: 'translateY(0)'
	}))
	.add(TweenMax.to('#scene1', 4, {
		opacity: 1,
		delay: 0.5
	}))


	 // once upon a time
	.add(TweenMax.to('#scene1 h3#onceupon', 4, {
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#scene1 h3#onceupon', 1, {
		opacity: 0,
	}))

	// forest
	.add(TweenMax.to('#scene1 img#treetwo', 3, {
		transform: 'translateY(0)',
		opacity: .90,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene1 img#treeone', 2, {
		transform: 'translateY(0)',
		opacity: 1,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene1 img#treethree', 1, {
		transform: 'translateY(0)',
		opacity: 1,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene1 img#treeone', .5, {
		opacity: .98,
		ease: Linear.easeNone
	}))

	// they were very poor
	.add(TweenMax.to('#scene1 h3#onceupon2', 4, {
		opacity: 1,
		delay: 2
	}))
	.add(TweenMax.to('#scene1 h3#onceupon2', 1, {
		opacity: 0,
	}))

	// so they left a trail of bread crumbws
	.add(TweenMax.to('#scene1 h3#onceupon3', 4, {
		opacity: 1,
		delay: 2
	}))
	.add(TweenMax.to('#scene1 h3#onceupon3', 1, {
		opacity: 0,
	}))

	// moving trees
	.add(TweenMax.to('#scene1 img#treethree', 1, {
		transform: 'translateX(-600px)',
		delay: 1,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene1 img#treeone', 1, {
		transform: 'translateX(700px)',
		opacity: 1,
		delay: 1,
		ease: Linear.easeNone
	}))

	.add(TweenMax.to('#scene1 img.bread', 4, {
		opacity: .9,
		delay: 2,
		ease: Linear.easeNone
	}))
	
	
	.add(TweenMax.to('#scene2', 1, { 
		transform: 'translateY(0)',
		delay: 5
	}))
	.add(TweenMax.to('#scene2', 4, {
		opacity: 1,
		delay: 0.5
	}))


	// wandering through forest
	.add(TweenMax.to('#scene2 h3#onceupon4', 4, {
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#scene2 h3#onceupon4', 1, {
		opacity: 0,
	}))
	// forest
	// .add(TweenMax.to('#scene2 img#forest_scene2', 3, {
	// 	transform: 'translateX(0)',
	// 	opacity: .90,
	// 	ease: Linear.easeNone
	// }))
	// // kids
	// .add(TweenMax.to('#scene2 img#forest_scene2', 3, {
	// 	transform: 'translateX(0)',
	// 	opacity: .90,
	// 	ease: Linear.easeNone
	// }))
	// .add(TweenMax.to('#scene2 img#hansel_walking', 3, {
	// 	transform: 'translateX(0)',
	// 	opacity: .90,
	// 	ease: Linear.easeNone
	// }))
	// .add(TweenMax.to('#scene2 img#hansel_walking', 6, {	
	// 	transform: 'scale(2)',
 // 		ease: Cubic.easeOut,
 //  		repeat: -1, // this negative value repeats the animation
 //  		yoyo: true
	// }))


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
	]).add(TweenMax.to('#slide-dos', 1, { transform: 'translateX(0)' }))
	.add(TweenMax.from('#unpin', 0.5, { top: '100%' }));
	var scene = new ScrollScene({
	    triggerElement: 'section#pin',
	    duration: 10000
	}).setTween(pinani).setPin('section#pin').addTo(controller);
});