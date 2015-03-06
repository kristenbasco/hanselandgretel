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
	.add(TweenMax.to('#scene2 img#forestscene2', 3, {
		transform: 'translateX(0)',
		opacity: .8,
		ease: Linear.easeNone
	}))
	// kids
	.add(TweenMax.to('#scene2 img#hansel_walking', 3, {
		transform: 'translateX(0)',
		opacity: 1,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene2 img#gretel_walking', 3, {
		transform: 'translateX(0)',
		opacity: 1,
		ease: Linear.easeNone
	}))
	// breadcrumbs
	.add(TweenMax.to('#scene2 img#breadcrumbs', 1, {
		opacity: 1,
		ease: Linear.easeNone
	}))
	// sun
	.add(TweenMax.to('#scene2 img#sun', 1, {
		transform: 'translateY(0)',
		opacity: 1,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene2 img#sun', 1, {
		transform: 'translateY(150px)',
		opacity: 0,
		delay: 3,
		ease: Linear.easeNone
	}))
	// moon
	.add(TweenMax.to('#scene2 img#moon', 1, {
		transform: 'translateY(0)',
		opacity: 1,
		ease: Linear.easeNone
	}))
	// wandering through forest2
	.add(TweenMax.to('#scene2 h3#onceupon5', 4, {
		opacity: 1,
	}))
	.add(TweenMax.to('#scene2 h3#onceupon5', 1, {
		opacity: 0,
	}))
	// kids
	.add(TweenMax.to('#scene2 img#hansel_walking', 1.5, {
		transform: 'translateY(-30px)',
		transform: 'rotateY(180deg)'
	}))
	.add(TweenMax.to('#scene2 img#gretel_walking', 1.5, {
		transform: 'translateY(-30px)',
		transform: 'rotateY(180deg)'
	}))
	// breadcrumbs
	.add(TweenMax.to('#scene2 img#breadcrumbs', 3, {
		opacity: 0,
		ease: Linear.easeNone
	}))
	// wandering through forest3
	.add(TweenMax.to('#scene2 h3#onceupon6', 4, {
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#scene2 h3#onceupon6', 1, {
		opacity: 0
	}))



	// finding witch's house
	.add(TweenMax.to('#scene3', 1, { 
		transform: 'translateY(0)'
	}))
	.add(TweenMax.to('#scene3', 4, {
		opacity: 1,
		delay: 0.5
	}))
	// text one for this scene
	.add(TweenMax.to('#scene3 h3#onceupon7', 4, {
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#scene3 h3#onceupon7', 1, {
		opacity: 0
	}))

	// all forests, right, left and bottom
	.add(TweenMax.to('#scene3 img#forest_left', 3, {
		transform: 'translateX(0)',
		opacity: .8,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene3 img#forest_right', 3, {
		transform: 'translateX(0)',
		opacity: .8,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene3 img#forest_bottom', 3, {
		transform: 'translateY(0)',
		opacity: .8,
		ease: Linear.easeNone
	}))

	// hansel and gretel
	.add(TweenMax.to('#scene3 img#hansel_head', 1, {
		transform: 'translateY(0)',
		opacity: 1,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene3 img#gretel_head', 1, {
		transform: 'translateY(0)',
		opacity: 1,
		ease: Linear.easeNone
	}))
	// text two for this scene
	.add(TweenMax.to('#scene3 h3#onceupon8', 4, {
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#scene3 h3#onceupon8', 1, {
		opacity: 0
	}))

	// hansel and gretel
	.add(TweenMax.to('#scene3 img#hansel_head', 1, {
		transform: 'translateX(150px)',
		opacity: 1,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene3 img#gretel_head', 1, {
		transform: 'translateX(-150px)',
		opacity: 1,
		ease: Linear.easeNone
	}))
	// house
	.add(TweenMax.to('#scene3 img#house', 1, {
		transform: 'translateY(0)',
		transform: 'scale(2.5)',
		opacity: 1,
		ease: Linear.easeNone
	}))


	// eating witch's house
	.add(TweenMax.to('#scene4', 1, { 
		transform: 'translateY(0)',
		delay: .5
	}))
	.add(TweenMax.to('#scene4', 4, {
		opacity: 1,
		delay: 0.5
	}))
	// text one for this scene
	.add(TweenMax.to('#scene4 h3#onceupon9', 4, {
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#scene4 h3#onceupon9', 1, {
		opacity: 0
	}))

	// forest/house
	.add(TweenMax.to('#scene4 img#forest_back', 1, {
		transform: 'translateX(0)',
		opacity: .8,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene4 img#blackhouse', 1, {
		transform: 'translateX(0)',
		opacity: 1,
		ease: Linear.easeNone
	}))
	// kids
	.add(TweenMax.to('#scene4 img#hansel_candy', 1, {
		opacity: 1,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene4 img#gretel_candy', 1, {
		opacity: 1,
		ease: Linear.easeNone
	}))
	// witch
	.add(TweenMax.to('#scene4 img#witch_intro', 1, {
		transform: 'translateX(-70px)',
		opacity: 1,
		ease: Linear.easeNone
	}))
	// last words
	.add(TweenMax.to('#scene4 h3#onceupon10', 4, {
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#scene4 h3#onceupon10', 1, {
		opacity: 0
	}))
	.add(TweenMax.to('#scene4 img#witch_intro', 3, {
		onUpdate: function () {
			$('#witch_intro').attr("src","img/witch nice mouth.png")
		},
		delay: 2
	}))
	// peppermint
	.add(TweenMax.to('#scene4 img#peppermint', 6, {
		opacity: 1,
		rotation: -90,
		// transform: 'rotate(30deg)',
		// repeat: 1
	}))



	// scene 5, 4 technically
	.add(TweenMax.to('#scene5', 1, { 
		transform: 'translateY(0)',
		delay: 5
	}))
	.add(TweenMax.to('#scene5', 4, {
		opacity: 1,
	}))


	//scene 5 witch transition
	
	.add(TweenMax.to('#scene5 h3#onceupon11', 4, {
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#scene5 h3#onceupon11', 1, {
		opacity: 0
	}))

	.add(TweenMax.to('#scene5 img#witch_nice', 4, {
		opacity: 1,
		ease: Linear.easeNone,
		delay:4
			
	}))
	.add(TweenMax.to('#scene5 img#witch_nice', 1, {
		transform:'rotate(2deg)',
			
	}))
	.add(TweenMax.to('#scene5 img#witch_nice', 1, {
		transform:'rotate(-2deg)',
			
	}))
	.add(TweenMax.to('#scene5 img#witch_nice', 1, {
		transform:'rotate(2deg)',
			
	}))
	.add(TweenMax.to('#scene5 img#witch_nice', 1, {
		transform:'rotate(-4deg)',
			
	}))


	.add(TweenMax.to('#scene5 img#witch_evil', 4, {
		transform: 'scale(2.0)',
		opacity: 1,
		delay: 2,
		ease: Linear.easeNone

	}))
	
	.add(TweenMax.to('#scene5 img#witch_nice', 1, {
		opacity: 0.7,
		ease: Linear.easeNone,
		
			
	}))


	.add(TweenMax.to('#scene5 img#witch_nice', 1, {
		opacity: 0,
			
	}))


	.add(TweenMax.to('#scene5 h3#onceupon11-1', 6, {
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#scene5 img#witch_evil', 1, {
		opacity:0
	}))
	.add(TweenMax.to('#scene5 h3#onceupon11-1', 1, {
		opacity: 0
	}))

	.add(TweenMax.to('#scene5 h3#onceupon12', 6, {
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#scene5 h3#onceupon12', 1, {
		opacity: 0
	}))







	// scene 6, 5 technically (hansel in cage)
	.add(TweenMax.to('#scene6', 1, { 
		transform: 'translateY(0)'
	}))
	.add(TweenMax.to('#scene6', 4, {
		opacity: 1,
		delay: 0.5
	}))



	.add(TweenMax.to('#scene6 img#table', 1, {
		
		opacity: 1,
		ease: Linear.easeNone
	}))

	.add(TweenMax.to('#scene6 img#pie', 1, {
		transform: 'translateY(0)',

		opacity: 1,
		ease: Linear.easeNone
	}))


	.add(TweenMax.to('#scene6 img#caged-hansel', 4, {
		transform: 'translateX(0)',

		opacity: 1,
		ease: Linear.easeNone,
		delay:0.3
	}))
	.add(TweenMax.to('#scene6 img#gretel-crying', 1, {
		opacity: 1,
		ease: Linear.easeNone
	}))



	// scene 6, 5 technically
	.add(TweenMax.to('#scene6', 1, { 
		transform: 'translateY(0)',
		delay: 5

	}))
	.add(TweenMax.to('#scene6', 4, {
		opacity: 1,
	}))

	.add(TweenMax.to('#scene6 h3#onceupon13', 4, {
		opacity: 1,
		delay: 5
	}))



	.add(TweenMax.to('#scene6 img#oven-outline0', 1, {
		transform: 'translateY(0)',

		opacity: 1,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene6 img#broom0', 1, {
		opacity: 1,
		ease: Linear.easeNone
	}))

	.add(TweenMax.to('#scene6 h3#onceupon13', 1, {
		opacity: 0
	}))

	.add(TweenMax.to('#scene6 h3#onceupon14', 4, {
		opacity: 1,
		delay: 5
	}))

	.add(TweenMax.to('#scene6 img#redbg0', 1, {
		opacity: 0.7,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene6 img#fire0', 1, {
		opacity: 0.8,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene6 img#fire0', 1, {
		opacity: 0.7,
		transform:'scale(1.6)',

		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene6 img#fire0-1', 1, {
		opacity: 0.9,
		transform:'scale(1)',
	
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene6 img#fire0', 1, {
		opacity: 0
	}))
	.add(TweenMax.to('#scene6 img#fire0', 1, {
		opacity: 0.4
	}))

	.add(TweenMax.to('#scene6 img#fire0-1', 1, {
		opacity: 0.4,
	
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene6 img#fire0', 1, {
		opacity: 0.8,
	}))
	.add(TweenMax.to('#scene6 img#fire0', 1, {
		opacity: 0
	}))
	.add(TweenMax.to('#scene6 img#fire0', 1, {
		opacity: 0.4
	}))

	.add(TweenMax.to('#scene6 img#fire0-1', 1, {
		opacity: 0.4,
	
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene6 img#fire0', 1, {
		opacity: 0.9,
		
	}))
	.add(TweenMax.to('#scene6 img#fire0', 1, {
		opacity: 0
	}))
	.add(TweenMax.to('#scene6 img#fire0', 1, {
		opacity: 0.4
	}))

	.add(TweenMax.to('#scene6 img#fire0-1', 1, {
		opacity: 0.6,
	
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene6 img#fire0', 1, {
		opacity: 0.8,
		
	}))
	.add(TweenMax.to('#scene6 img#fire0', 1, {
		opacity: 0
	}))
	.add(TweenMax.to('#scene6 img#fire0', 1, {
		opacity: 0.8
	}))

	.add(TweenMax.to('#scene6 img#fire0-1', 1, {
		opacity: 0.4,
	
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene6 img#fire0', 1, {
		opacity: 0.9,
		
	}))








	// scene 6 (witch burns)
	.add(TweenMax.to('#wipe', 1, { 
		transform: 'translateY(0)'
	}))
	.add(TweenMax.to('#wipe', 4, {
		opacity: 1,
		delay: 0.5
	}))
	.add(TweenMax.to('#wipe img#oven-outline', 4, {
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#wipe img#fire3', 4, {
		opacity: 1,
	}))
	.add(TweenMax.to('#wipe img#broom', 4, {
		transform: 'translateX(0)',
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#wipe img#redbg', 1, {
		opacity: 1,
	}))
	.add(TweenMax.to('#wipe img#fire1', 4, {
		opacity: 0.5,
	}))
	.add(TweenMax.to('#wipe img#fire2', 4, {
		opacity: 0.9,
	}))
	
	.add(TweenMax.to('#wipe h3#witchdead1', 4, {
		transform: 'translateX(0)',
		opacity: 1,
	}))
	.add(TweenMax.to('#wipe h3#witchdead1', 1, {
		transform: 'translateX(-500px)',
		opacity: 0,
		delay: 6
	}))
	.add(TweenMax.to('#wipe h3#witchdead2', 4, {
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#wipe img#empty-cage', 4, {
		transform: 'translateX(0)',
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#wipe img#legs', 4, {
		delay: 1,
		opacity: 1
	}))
	.add(TweenMax.to('#wipe img#legs', 1, {
		transform: 'rotate(30deg)',
	}))
	.add(TweenMax.to('#wipe img#legs', 4, {
		transform: 'rotate(-15deg)',
	}))
	.add(TweenMax.to('#wipe img#legs', 4, {
		transform: 'rotate(20deg)',
	}))
	.add(TweenMax.to('#wipe img#legs', 4, {
		transform: 'rotate(0deg)',
	}))
	

	// 7
	.add(TweenMax.to('#scene7', 1, { 
		transform: 'translateY(0)',
		delay: 5
	}))
	.add(TweenMax.to('#scene7', 4, {
		opacity: 1
	}))
	// text one for this scene
	.add(TweenMax.to('#scene7 img#running_trees', 1, {
		transform: 'translateX(0)',
		opacity: .9,
		delay: 5
	}))
	.add(TweenMax.to('#scene7 img#running_house', 1, {
		transform: 'translateX(0)',
		opacity: 1,
		ease: Linear.easeNone
	}))
	.add(TweenMax.to('#scene7 img#running_hansel', 1, {
		transform: 'translateX(0)',
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#scene7 img#running_gretel', 1, {
		transform: 'translateX(0)',
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#scene7 img#running_trees1', 1, {
		transform: 'translateX(0)',
		opacity: 1,
		delay: 5
	}))
		// text one for this scene
	.add(TweenMax.to('#scene7 h3#backtoforest', 4, {
		opacity: 1,
		delay: 5
	}))
	.add(TweenMax.to('#scene7 img#peppermint_fire', 6, {
		opacity: 1,
		rotation: -90,
	}))
	.add(TweenMax.to('#scene7 h3#backtoforest', 1, {
		opacity: 0,
		delay: 5
	}))




	// scene 8
	.add(TweenMax.to('#scene8', 4, { 
		transform: 'translateY(0)',
		delay: 5
	}))
	.add(TweenMax.to('#scene8', 4, { 
		opacity: 1
	}))
	// .add(TweenMax.to('#scene8 img#endtree4', 1, {
	// 	opacity: 1
	// }))
	// .add(TweenMax.to('#scene8 img#endtree3', 1, {
	// 	opacity: 1
	// }))
	// .add(TweenMax.to('#scene8 img#endtree2', 1, {
	// 	opacity: 1
	// }))
	// .add(TweenMax.to('#scene8 img#endtree1', 1, {
	// 	opacity: 1
	// }))	
	.add(TweenMax.to('#scene8 img#hug', 1, {
		opacity: 1
	}))
	.add(TweenMax.to('#scene8 h3', 1, {
		opacity: 0
	}))
	.add(TweenMax.to('#scene8 img#endtree2', 1, {
		transform: "translateX(-800px)"
	}))
	.add(TweenMax.to('#scene8 img#endtree1', 1, {
		transform: "translateX(1000px)"
	}))
	.add(TweenMax.to('#scene8 img#endtree3', 1, {
		transform: "translateX(700px)"
	}))
	.add(TweenMax.to('#scene8 img#peppermint_end', 1, {
		opacity: .1,
		rotation: -90,
		delay: 5
	}))
	.add(TweenMax.to('#scene8 h2', 1, {
		opacity: 1
	}))
	// .add(TweenMax.to('#scene8 img#endtree4', 1, {
	// 	transform: "translateX(-700px)"
	// }))	

	// .add(TweenMax.to('#scene8 h3#happyend', 4, {
	// 	opacity: 1,
	// 	delay: 5
	// }))
	// .add(TweenMax.to('#scene8 h3#happyend', 1, {
	// 	opacity: 0
	// }))
	// .add(TweenMax.to('#scene8 h3#end', 4, {
	// 	opacity: 1,
	// 	delay: 5
	// }))
	;
// 
	// .add(TweenMax.to('#scene2 img#gretel_walking', 3, {
	// 	transform: 'translateY(0)',
	// 	opacity: 1,
	// 	ease: Linear.easeNone
	// }))

	// .add(TweenMax.to('#scene2 img#hansel_walking', 6, {	
	// 	transform: 'scale(2)',
 // 		ease: Cubic.easeOut,
 //  		repeat: -1, // this negative value repeats the animation
 //  		yoyo: true
	// }))


	// .add(TweenMax.to('#second-wipe', 1, { transform: 'translateY(0)' }))
	// .add(TweenMax.to('#slide', 1, {
	//     top: '0%',
	//     ease: Bounce.easeOut,
	//     delay: 0.2
	// })).add([
	//     TweenMax.to('#slide h3:first-child', 0.2, { autoAlpha: 0 }),
	//     TweenMax.from('#slide h3:last-child', 0.2, { autoAlpha: 0 })
	// ]).add([
	//     TweenMax.to('#slide', 0.3, { backgroundColor: 'yellow' }),
	//     TweenMax.to('#slide h3:last-child', 0.3, { color: 'blue' })
	// ]).add([
	//     TweenMax.to('#slide', 0.3, { backgroundColor: 'green' }),
	//     TweenMax.to('#slide h3:last-child', 0.3, { color: 'red' })
	// ]).add([
	//     TweenMax.to('#slide', 0.3, { backgroundColor: 'red' }),
	//     TweenMax.to('#slide h3:last-child', 0.3, { color: 'white' })
	// ]).add([
	//     TweenMax.to('#slide', 0.3, { backgroundColor: '#c7e1ff' }),
	//     TweenMax.to('#slide h3:last-child', 0.3, { color: 'black' })
	// ]).add(TweenMax.to('#slide-dos', 1, { transform: 'translateX(0)' }))
	// .add(TweenMax.from('#unpin', 0.5, { top: '100%', delay: 10 }));
	var scene = new ScrollScene({
	    triggerElement: 'section#pin',
	    duration: 10000
	}).setTween(pinani).setPin('section#pin').addTo(controller);
});