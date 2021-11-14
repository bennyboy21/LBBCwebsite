document.getElementById("menu-Icon").addEventListener('click', function() {
    document.getElementById("menu-Page").style.animation = "ShowMenuPage 1.5s forwards ease-in-out"
    document.getElementById("menu-Full-Page").style.animation = "ShowMenuFullPage 1s forwards ease-in-out"
})

document.getElementById("circle-Three-Button-Holder").addEventListener("click", function() {
    document.getElementById("change-Pages").style.animation = "switchPages 1.25s forwards ease-in-out";

    var counter = 0
    setInterval(function(){
        counter++;
        if(counter > 13 && counter < 15) {
            window.location = "Youth Page.html"
        }
    }, 100)
})

document.getElementById("lightHouse-Icon").addEventListener("click", function() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
})

document.getElementById("circle-Two-Button-Holder").addEventListener("click", function() {
    window.location = "https://www.youtube.com/watch?v=dFqa7cn4AiA";  
})

var controller = new ScrollMagic.Controller();

var scene = new ScrollMagic.Scene({triggerElement: "#trigger1"})
					// trigger animation by adding a css class
					.setClassToggle("#top-Bar", "fadeTopBar")
					.addTo(controller);

var scene = new ScrollMagic.Scene({triggerElement: "#trigger2"})
					.addTo(controller)
                    .setClassToggle("#Logo", "animated")
                    
var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger3", triggerHook:1})
					// trigger animation by adding a css class
					.setClassToggle("#friday-Night", "fadeText")
					.addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger3", triggerHook:1})
					// trigger animation by adding a css class
					.setClassToggle("#youth", "fadeText")
					.addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger3", triggerHook:1})
					// trigger animation by adding a css class
					.setClassToggle("#youth-Sub-Text", "fadeText")
					.addTo(controller);

var scene2 = new ScrollMagic.Scene({triggerElement: "#trigger3", triggerHook:1})
					// trigger animation by adding a css class
					.setClassToggle("#circle-Three-Button-Holder", "fadeText")
					.addTo(controller);

var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger4", triggerHook:1})
					// trigger animation by adding a css class
					.setClassToggle("#young-Adults", "fadeText2")
					.addTo(controller);

var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger4", triggerHook:1})
					// trigger animation by adding a css class
					.setClassToggle("#group", "fadeText2")
					.addTo(controller);

var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger4", triggerHook:1})
					// trigger animation by adding a css class
					.setClassToggle("#young-Adults-Text", "fadeText2")
					.addTo(controller);

var scene3 = new ScrollMagic.Scene({triggerElement: "#trigger4", triggerHook:1})
					// trigger animation by adding a css class
					.setClassToggle("#circle-Four-Button-Holder", "fadeText2")
					.addTo(controller);


                    // .addIndicators() // add indicators (requires plugin)