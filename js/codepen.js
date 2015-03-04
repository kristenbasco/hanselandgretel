// When the DOM is ready
$(function() {
	var controller = new ScrollMagic({ globalSceneOptions: { triggerHook: 'onLeave' } });
	var pinani = new TimelineMax().add(TweenMax.to('#wipe', 1, { transform: 'translateY(0)' })).add(TweenMax.to('#second-wipe', 1, { transform: 'translateY(0)' })).add(TweenMax.to('#slide', 1, {
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
	]).add(TweenMax.to('#slide-dos', 1, { transform: 'translateX(0)' })).add(TweenMax.from('#unpin', 0.5, { top: '100%' }));
	var scene = new ScrollScene({
	    triggerElement: 'section#pin',
	    duration: 1100
	}).setTween(pinani).setPin('section#pin').addTo(controller);
});