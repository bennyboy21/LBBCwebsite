document.getElementById("lightHouse-Icon").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
					// trigger animation by adding a css class
					.setClassToggle("#top-Bar", "fadeTopBar")
					.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#trigger2"})
					.addTo(controller)
                    .setClassToggle("#Logo", "animated")