

// slider
$('.slider').slick({
	draggable: true,
	arrows: false,
	dots: false,
	fade: true,
	speed: 1000,
	autoplay: true,
	autoplaySpeed: 1000,
	infinite: true,
	cssEase: 'ease-in-out',
	touchThreshold: 100,
	pauseOnHover:false
	})
	const slickSliderExampleObserver = new IntersectionObserver(entries => {
		entries.forEach(entry => {
			if (entry.isIntersecting) {
				// When the slider is in the viewport, start autoplay
				slickSliderExample.slick('slickPlay');
			} else {
				// When the slider is out of the viewport, pause autoplay
				slickSliderExample.slick('slickPause');
			}
		});
	});

	const slickSliderExampleElement = document.querySelector('#slickSliderExample');
	if (slickSliderExampleElement) {
		slickSliderExampleObserver.observe(slickSliderExampleElement);
	}

//growing sections

function createAnimation(triggerID, targetID, rotationAxis, rotationValue, autoAlpha) {
	const tl = gsap.timeline({
		scrollTrigger: {
			trigger: triggerID,
			scrub: 1.5,
			start: "top center",
			end: "+=400",
			ease: "power1.out"
		}
	});
	tl.to(triggerID, { duration: 1, scale: 1 });
	const rotationProp = {};
	rotationProp[rotationAxis] = rotationValue;
	tl.to(targetID, { ...rotationProp });
	if (triggerID === "#grow3") {
		tl.fromTo(targetID, { filter: "grayscale(100%)" }, { filter:"grayscale(0%)", duration: 1 }); // Animate autoAlpha from 0 to 1 for #mobile-image
	}
	else if (triggerID === "#live-tagging"){
		tl.fromTo(targetID, { filter: "grayscale(100%)" }, { filter:"grayscale(0%)", duration: 1 });
	}
}

// Create animations
createAnimation("#grow", "#icon", "rotateZ", "360");
createAnimation("#grow2", "#captured-image", "rotateY", "360");
createAnimation("#grow3", "#mobile-image", "", ""); 
createAnimation("#grow4");
createAnimation("#grow5");
createAnimation("#grow6");
createAnimation("#grow7", "#grow7 .icon-wrap img", "rotateY", "360");
createAnimation("#live-tagging", "#live-tagging-image");
createAnimation("#multicam");
createAnimation("#case-study");

// slider
$('.film-review-slider').slick({
	draggable: true,
	arrows: false,
	dots: true,
	fade: false,
	speed: 1500,
	autoplay: true,
	autoplaySpeed: 1500,
	infinite: true,
	cssEase: 'ease-in-out',
	touchThreshold: 100,
	pauseOnHover:false
	});

//   video on scroll

const video = document.querySelector(".full-video-wrap");
let src = video.currentSrc || video.src;
console.log(video, src);

/* Make sure the video is 'activated' on iOS */
function once(el, event, fn, opts) {
	var onceFn = function (e) {
	el.removeEventListener(event, onceFn);
	fn.apply(this, arguments);
	};
	el.addEventListener(event, onceFn, opts);
	return onceFn;
}

once(document.documentElement, "touchstart", function (e) {
	video.play();
	video.pause();
});


/* ---------------------------------- */
/* Scroll Control! */



let t2 = gsap.timeline({
	defaults: { duration: 1 },
	scrollTrigger: {
	trigger: "#grow5",
	start: "top center",
	end: "bottom",
	scrub: true,
	}
});

once(video, "loadedmetadata", () => {
	t2.fromTo(
	video,
	{
		currentTime: 0
	},
	{
		currentTime: video.duration || 1
	}
	);
});

// enhances security section rotated thumbnail
//   rotate
const t3 = gsap.timeline({
	scrollTrigger: {
	  scrub: 1,
	  trigger: "#grow6",
	  start: "50% 50%",
	  endTrigger: "#image-wrap",
	  end: "bottom",
	},
  });
  
  t3.to("#red-circle", {
	rotateZ: 180,
  });

//snipback sidelie video
//   video on scroll
	
const video2 = document.querySelector(".video-background");
let src2 = video.currentSrc || video.src;
console.log(video, src2);

/* Make sure the video is 'activated' on iOS */
function once(el, event, fn, opts) {
  var onceFn = function (e) {
    el.removeEventListener(event, onceFn);
    fn.apply(this, arguments);
  };
  el.addEventListener(event, onceFn, opts);
  return onceFn;
}

once(document.documentElement, "touchstart", function (e) {
  video2.play();
  video2.pause();
});


/* ---------------------------------- */
/* Scroll Control! */



let t4 = gsap.timeline({
  defaults: { duration: 1 },
  scrollTrigger: {
    trigger: "#snipback-sideine-video",
    start: "top center",
    end: "bottom",
    scrub: true,
  }
});

once(video2, "loadedmetadata", () => {
  t4.fromTo(
    video2,
    {
      currentTime: 0
    },
    {
      currentTime: video2.duration || 1
    }
  );
});

// Parallax
let getRatio = el => window.innerHeight / (window.innerHeight + el.offsetHeight);

gsap.utils.toArray("section").forEach((section, i) => {
  section.bg = section.querySelector(".bg"); 

  
  // the first image (i === 0) should be handled differently because it should start at the very top.
  // use function-based values in order to keep things responsive
  gsap.fromTo(section.bg, {
    backgroundPosition: () => i ? `50% ${-window.innerHeight * getRatio(section)}px` : "50% 0px"
  }, {
    backgroundPosition: () => `50% ${window.innerHeight * (1 - getRatio(section))}px`,
    ease: "none",
    scrollTrigger: {
      trigger: section,
      start: () => i ? "top bottom" : "top top", 
      end: "bottom top",
      scrub: true,
      invalidateOnRefresh: true // to make it responsive
    }
  });
});


// banner grow
const growT6 = gsap.timeline({
	scrollTrigger: {
	  trigger: "#banners-container",
	  scrub: 1.5,
	  start: "top center",
	  end: "+=400",
	  ease: "power1.out"
	}
  });
  growT6.to("#banners-container", {
	duration: 1,
	scale: .9
  });
const growT7 = gsap.timeline({
	scrollTrigger: {
	  trigger: "#secondary-banner",
	  scrub: 1.5,
	  start: "top center",
	  end: "+=400",
	  ease: "power1.out"
	}
  });
  growT7.to("#secondary-banner", {
	duration: 1,
	scale: .9
  });

//   secondary banner
// slider
$('#secondary-banner').slick({
	draggable: true,
	arrows: false,
	dots: false,
	fade: true,
	speed: 2000,
	autoplay: true,
	autoplaySpeed: 2000,
	infinite: true,
	cssEase: 'ease-in-out',
	touchThreshold: 100,
	pauseOnHover:false
	})

	// Select all .main-heading elements within section tags
	document.querySelectorAll('#reveal-head').forEach(function(mainHeading) {
		// Create a timeline for each .main-heading element
		let timeline = gsap.timeline({
			scrollTrigger: {
				trigger: mainHeading,
				start: "top bottom",
				end: "=-100",
				scrub: 1,
			}
		});

		// Animation for each .main-heading element
		timeline.from(mainHeading, {
			duration: 1,
			y: 100,
			opacity: 0,
		});
	});
	
	// case-study
	let timeline = gsap.timeline({
		scrollTrigger: {
			trigger: "#case-study-demo", // Trigger when the case-study-demo section comes into view
			start: "top center", // Start the animation when the top of the case-study-demo section reaches the bottom of the viewport
			end: "=-150", // End the animation when the case-study-demo section is 100 pixels above the bottom of the viewport
			scrub: 1,
		}
	});

	// Animation for .main-image elements within case-study-demo section
	timeline.from(" .main-image", {
		duration: 4,
		y: -100,
		opacity: 0,
		delay: 1,
	});
	timeline.from(" .case-study-path", {
		duration: 2,
		y: -100,
		opacity: 0,
		delay: 2,
	});
	timeline.from(".sub-images-wrap", {
		duration: 2,
		y: -100,
		opacity: 0,
		delay: 3
	});


	// multicam images
	let revealContainers = document.querySelectorAll(".thumb");

	revealContainers.forEach((container) => {
	  let image = container.querySelector(".thumb");
	  let tl = gsap.timeline({
		paused: true,
		scrollTrigger: {
		  trigger: container,
		  start: "clamp(top bottom)",
		  toggleActions: "restart none none reset"
		}
	  });
  
	  tl.set(container, { autoAlpha: 1 });
	  tl.from(container, 1.5, {
		xPercent: -100,
		ease: Power2.out
	  });
	  tl.from(image, 1.5, {
		xPercent: 100,
		scale: 1.3,
		ease: Power2.out
	  });
	});
  