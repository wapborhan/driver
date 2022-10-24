/* =====================================
All JavaScript fuctions Start
======================================*/
(function ($) {
	
    'use strict';
/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/	

	/*Submot contact form*/

	jQuery(document).on('submit', 'form.contact-form', function(e){
		e.preventDefault();
		var form = jQuery(this);
		/* sending message */
		jQuery.ajax({
			url: 'http://serviothemes.com/designer/doctor/contact-form.php',
			data: form.serialize() + "&action=contactform",
			type: 'POST',
			dataType: 'JSON',
			beforeSend: function() {
				jQuery('.alert').remove();
				jQuery('.loading-area').show();
			},

			success:function(data){
				jQuery('.loading-area').hide();
				if(data['success']){
				jQuery("<div class='alert alert-success'>"+data['message']+"</div>").insertBefore('form.contact-form');
				jQuery('.alert-success').delay(20000).fadeOut(500);
				}else{
				jQuery("<div class='alert alert-danger'>"+data['message']+"</div>").insertBefore('form.contact-form');
				}
			}
		});
	});	

// popovers initialization - on hover
	// Image Popover = jquery.prettyPhoto.js ================= // 	
	function image_popover(){	
		jQuery("[data-toggle=popover]").each(function() {
			jQuery(this).popover({
				html: true,
				content: function() {
				var id = jQuery(this).attr('id')
				return jQuery('#popover-content-' + id).html();
				}
			});
		});
	}
    
	// Datepicker = datepicker.min.js ================= // 	
	function datepicker(){	
        jQuery('#datepicker').datepicker();  
   } 
    
    jQuery('.aon-scrolling-nav li').on('click', function() {
        jQuery(this).addClass('active').siblings().removeClass('active');
    });  

    jQuery('.scrollbar-inner').scrollbar();
    

// Video responsive function by = custom.js ========================= //	
	function video_responsive(){	
		jQuery('iframe[src*="youtube.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');
		jQuery('iframe[src*="vimeo.com"]').wrap('<div class="embed-responsive embed-responsive-16by9"></div>');	
	}
    
    
// Team Right Side Panel function by = custom.js ========================= //	
	function team_popSlide(){	
	   jQuery('.add-team-btn, .cs-message-close').on('click', function () { 
		jQuery('body').toggleClass('active-team');
	}); 
	}

 // Edit Profile Slide Right function by = custom.js ========================= //	
	function edit_profile_slide(){	
	   jQuery('.edit-profile-btn, .cs-editProfile-close').on('click', function () { 
		jQuery('body').toggleClass('active-edit-pro');
	}); 
	}   
    
 // Create New Chart Slide Right function by = custom.js ========================= //	
	function new_chart_slide(){	
	   jQuery('.add-newchart-btn, .cs-newchart-close').on('click', function () { 
		jQuery('body').toggleClass('active-new-chart');
	}); 
	} 
 // Create New Chart Slide Right function by = custom.js ========================= //	
	function block_calender_slide(){	
	   jQuery('.book-appointment-btn, .books-appointment-close').on('click', function () { 
		jQuery('body').toggleClass('active-books-appointment');
	}); 
	} 
    
 // Edit Appointments Slide Right function by = custom.js ========================= //	
	function edit_appointments_slide(){	
	   jQuery('.aon-book-appoint-block, .edit-appointments-close').on('click', function () { 
		jQuery('body').toggleClass('active-edit-appointments');
	}); 
	}     
    
    // Edit Availibility Slide Right function by = custom.js ========================= //	
	function edit_availibility_slide(){	
	   jQuery('.aon-availibility-edit, .aon-avai-edit-btn, .cs-availibility-close').on('click', function () { 
		jQuery('body').toggleClass('active-availibility-slide');
	}); 
	}     
    
// Create New Chart Slide Right function by = custom.js ========================= //	
	function block_time_slide(){	
	   jQuery('.edit-time-btn, .cs-edit-time-close').on('click', function () { 
		jQuery('body').toggleClass('active-time-slide');
	}); 
	}    
    
// Create New Chart Slide Right function by = custom.js ========================= //	
	function block_feedback_slide(){	
	   jQuery('.give-feedback-btn, .cs-feedback-close').on('click', function () { 
		jQuery('body').toggleClass('active-feedback-slide');
	}); 
	}    
        
// Product Slider function by = owl.carousel.js
	function shop_style1_slider(){
		jQuery('.shop-style1-slider').owlCarousel({
			rtl: false,
			loop:false,
			margin:30,
			nav:true,
			dots: false,
			items:1,
			navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
			responsive:{
				0:{
					items:1
				},
				480:{
					items:2
				},		
				991:{
					items:2
				},
				1200:{
					items:4
				}
			}			
		})
	}	
    

 	// Test Booked Two Carousel function by = owl.js
    function aon_booked_test_carousel(){
        jQuery('.aon-booked-test-carousel').owlCarousel({
            loop:true,
            margin:30,
            center: false,
            nav:true,
            dots: false,
            navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
            responsive:{
                0:{
                    items:1,
                    center:false,
                },
                767:{
                    items:2
                },
                1024:{
                    items:3,
                },
				1366:{
                    items:5,
                },

            }
        });
    } 
    
 	// Booked Appointment Carousel function by = owl.js
    function aon_book_appoint_carousel(){
        jQuery('.aon-book-appoint-carousel').owlCarousel({
            loop:true,
            margin:30,
            center: false,
            nav:true,
            dots: false,
            navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
            responsive:{
                0:{
                    items:1,
                    center:false,
                },
                 600:{
                    items:2
                },               
                767:{
                    items:2
                },
                 991:{
                    items:2,
                },
                1200:{
                    items:2,
                },                
                1400:{
                    items:3,
                },
            }
        });
    }     
    
   
    
    	// Povider Profile Video Slider function by = owl.js
		function aon_provider_video_slider(){
			jQuery('.aon-provi-video-slider').owlCarousel({
				loop:true,
				margin:30,
				center: false,
				nav:true,
				dots: false,
				navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
                responsive:{
					0:{
						items:1,
						center:false,
					},
					767:{
						items:2
					},
					991:{
						items:1,
					},


				}
			});
	   }    
    
	// Health Concern Carousel function by = owl.js
		function aon_health_concer_carousel(){
			jQuery('.aon-health-concer-carousel').owlCarousel({
				loop:true,
				margin:30,
				center: false,
				nav:true,
				dots: false,
				navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
				responsive:{
					0:{
						items:1,
						center:false,
					},
					767:{
						items:2
					},
					1024:{
						items:3,
					},
					1366:{
						items:5,
					},

				}
			});
	}    

    
	// Health checkup Carousel function by = owl.js
	function aon_health_checkup_carousel(){
		jQuery('.aon-health-checkup-carousel').owlCarousel({
			loop:true,
			margin:30,
			center: false,
			nav:true,
			dots: false,
			navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
			responsive:{
				0:{
					items:1,
					center:false,
				},
				767:{
					items:2
				},
				1024:{
					items:3,
				},
				1366:{
					items:4,
				},

			}
		});
	}
	    
    
    
    
 
//Maximum input box fields function Start by custom.js==============//

	var max_fields      = 100; //maximum input boxes allowed
	var wrapper   		= $(".input_fields_youtube"); //Fields wrapper
	var add_button_youtube      = $(".add_field_youtube"); //Add button ID
	
	var x = 1; //initlal text box count
	$(add_button_youtube).click(function(e){ //on add input button click
		e.preventDefault();
		if(x < max_fields){ //max input box allowed
			x++; //text box increment
			$(wrapper).append('<div class="input_Timing-box"><a href="#" class="remove_field input-timing-close"><i class="feather-x"></i></a><h4 class="aon-timing-title">Session 1</h4> <div class="row"> <div class="col-lg-6"> <div class="form-group"> <label for="exampleInputEmail1">Start Time</label> <div class="aon-inputicon-box"> <input class="form-control sf-form-control" name="company_name" type="text" placeholder="DD / MM / YYYY"> <i class="aon-input-icon fa fa-calendar"></i> </div> </div> </div> <div class="col-lg-6"> <div class="form-group"> <label for="exampleInputEmail1">End Time</label> <div class="aon-inputicon-box"> <input class="form-control sf-form-control" name="company_name" type="text" placeholder="DD / MM / YYYY"> <i class="aon-input-icon fa fa-calendar"></i> </div> </div> </div> </div> <div class="aon-divider-line m-t20 m-b10"></div> <h4 class="aon-timing-title">Session 2</h4> <div class="row"> <div class="col-lg-6"> <div class="form-group"> <label for="exampleInputEmail1">Start Time</label> <div class="aon-inputicon-box"> <input class="form-control sf-form-control" name="company_name" type="text" placeholder="DD / MM / YYYY"> <i class="aon-input-icon fa fa-calendar"></i> </div> </div> </div> <div class="col-lg-6"> <div class="form-group"> <label for="exampleInputEmail1">End Time</label> <div class="aon-inputicon-box"> <input class="form-control sf-form-control" name="company_name" type="text" placeholder="DD / MM / YYYY"> <i class="aon-input-icon fa fa-calendar"></i> </div> </div> </div> </div> </div>'); //add input box
		}
	});
	

	$(wrapper).on("click",".remove_field", function(e){ //user click on remove text
		e.preventDefault(); $(this).parent('div').remove(); x--;
	})

	
//Maximum input box fields function End by custom.js==============//
    
    
 	//  On off button	
	jQuery('.new-chart-selet').on('change', function(e){
		jQuery('.create-user-infos').fadeIn(500);
		e.preventDefault();
	});	   
    
 	//  On off button	
	//jQuery('.new-chart-selet ').on('change', function(e){
		//jQuery('.create-user-notess ').fadeIn(500);
		//e.preventDefault();
	//});	   
        
    
    
            
// Bootstrap Slider function by  = bootstrap-slider.min.js   
    function Bootstrap_Slider(){
        jQuery('#ex1').slider({
            formatter: function(value) {
                return 'Current value: ' + value;
            }
        });  
        jQuery('#ex2').slider({
            formatter: function(value) {
                return 'Current value: ' + value;
            }
        });     
        
        jQuery('#ex3').slider({
            formatter: function(value) {
                return 'Current value: ' + value;
            }
        });           
        
        
    }

	//  On off button	
	jQuery('.sf-toogle-btn').on('click', function(e){
		jQuery(this).parent('.header-widget').toggleClass('active');
		jQuery(this).parent().siblings(".header-widget").removeClass('active');
		e.preventDefault();
	});		
    
 	//  On off button	
	jQuery('.admin-area-heading').on('click', function(e){
		jQuery('.admin-area-mid').toggleClass('active-plan');
		e.preventDefault();
	});		
    
    
       
    

 // > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
 	function lightbox_popup(){
        lc_lightbox('.elem', {
            wrap_class: 'lcl_fade_oc',
            gallery : true,	
            thumb_attr: 'data-lcl-thumb', 
            
            skin: 'minimal',
            radius: 0,
            padding	: 0,
            border_w: 0,
        });
	}			

// > magnificPopup for video function	by = magnific-popup.js ===================== //	
	function magnific_video(){	
		jQuery('.mfp-video').magnificPopup({
			type: 'iframe',
		});
	}
	// > magnificPopup function	by = magnific-popup.js =========================== //
	function magnific_popup(){
		jQuery('.mfp-gallery').magnificPopup({
		delegate: '.mfp-link',
		type: 'image',
		tLoading: 'Loading image #%curr%...',
		mainClass: 'mfp-img-mobile',
		gallery: {
			enabled: true,
			navigateByImgClick: true,
			preload: [0,1] // Will preload 0 - before current, and 1 after the current image
		},
		image: {
			tError: '<a href="%url%">The image #%curr%</a> could not be loaded.',
		}
	});
	}

// Vertically center Bootstrap modal popup function by = custom.js ==============//
	function popup_vertical_center(){	
		jQuery(function() {
			function reposition() {
				var modal = jQuery(this),
				dialog = modal.find('.modal-dialog');
				modal.css('display', 'block');
				
				// Dividing by two centers the modal exactly, but dividing by three 
				// or four works better for larger screens.
				dialog.css("margin-top", Math.max(0, (jQuery(window).height() - dialog.height()) / 2));
			}
			// Reposition when a modal is shown
			jQuery('.modal').on('show.bs.modal', reposition);
			// Reposition when the window is resized
			jQuery(window).on('resize', function() {
				jQuery('.modal:visible').each(reposition);
			});
		});
	}

// > Main menu sticky on top  when scroll down function by = custom.js ========== //		
	function sticky_header(){
		if(jQuery('.sticky-header').length){
			var sticky = new Waypoint.Sticky({
			  element: jQuery('.sticky-header')
			});
		}
	}

	// > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
	function sticky_sidebar(){		
		$('.rightSidebar')
			.theiaStickySidebar({
				additionalMarginTop: 100
			});		
	}


// > page scroll top on button click function by = custom.js ===================== //	
	function scroll_top(){
		jQuery("button.scroltop").on('click', function() {
			jQuery("html, body").animate({
				scrollTop: 0
			}, 1000);
			return false;
		});

		jQuery(window).on("scroll", function() {
			var scroll = jQuery(window).scrollTop();
			if (scroll > 900) {
				jQuery("button.scroltop").fadeIn(1000);
			} else {
				jQuery("button.scroltop").fadeOut(1000);
			}
		});
	}
	
// > input type file function by = custom.js ========================== //	 	 
	function input_type_file_form(){
		jQuery(document).on('change', '.btn-file :file', function() {
			var input = jQuery(this),
				numFiles = input.get(0).files ? input.get(0).files.length : 1,
				label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
			input.trigger('fileselect', [numFiles, label]);
		});

		jQuery('.btn-file :file').on('fileselect', function(event, numFiles, label) {
			var input = jQuery(this).parents('.input-group').find(':text'),
				log = numFiles > 10 ? numFiles + ' files selected' : label;
			if (input.length) {
				input.val(log);
			} else {
				if (log) alert(log);
			}
		});	
	}


	
// > accordion active calss function by = custom.js ========================= //	
	function accordion_active() {
		$('.acod-head a').on('click', function() {
			$('.acod-head').removeClass('acc-actives');
			$(this).parents('.acod-head').addClass('acc-actives');
			$('.acod-title').removeClass('acc-actives'); //just to make a visual sense
			$(this).parent().addClass('acc-actives'); //just to make a visual sense
			($(this).parents('.acod-head').attr('class'));
		 });
	}	

	// > Nav submenu show hide on mobile by = custom.js
	function mobile_nav(){
		jQuery(".sub-menu").parent('li').addClass('has-child');
		jQuery("<div class='fa fa-angle-right submenu-toogle'></div>").insertAfter(".has-child > a");

		jQuery('.has-child a+.submenu-toogle').on('click',function(ev) {

			jQuery(this).parent().siblings(".has-child ").children(".sub-menu").slideUp(500, function(){
				jQuery(this).parent().removeClass('nav-active');
			});

			jQuery(this).next(jQuery('.sub-menu')).slideToggle(500, function(){
				jQuery(this).parent().toggleClass('nav-active');
			});

			ev.stopPropagation();
		});
	
	}
	

	 
	// Mobile side drawer function by = custom.js
	function mobile_side_drawer(){
		jQuery('#mobile-side-drawer').on('click', function () { 
			jQuery('.mobile-sider-drawer-menu').toggleClass('active');
		});
	}	
    
	//  Search Panel function by = custom.js
	function search_filter_panel(){
		jQuery('.aon-search-filter').on('click', function () { 
			jQuery('.page-content').toggleClass('active-searchbar');
		});
 		jQuery('.sf-seach-panel-close').on('click', function () { 
			jQuery('.page-content').toggleClass('active-searchbar');
		});       
	}    

 
    
	// Categories carousel function by = owl.js
    function categories_carousel_owl (){
        jQuery('.categories-carousel-owl').owlCarousel({
            loop:true,
            margin:30,
            center: true,
            nav:true,
            dots: false,
            navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
            responsive:{
                0:{
                    items:1,
                    center:false,
                },
                480:{
                    items:3
                },			
                767:{
                    items:3
                },
                1024:{
                    items:5,
                    center:true
                },

            }
        });
    }
    
    
	// Featurd Provider Carousel function by = owl.js
    function featurd_provider_carousel (){
        jQuery('.aon-featurd-provider-carousel').owlCarousel({
            loop:true,
            margin:20,
            nav:true,
            dots: false,
            navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
            responsive:{
                0:{
                    items:1
                },
                600:{
                    items:2
                },			
                1000:{
                    items:2
                },
                1200:{
                    items:3
                }
            }
        });    
    }
    
    
	// Featurd Provider Two Carousel function by = owl.js
	function aon_vendor_provider_two_carousel() {
		jQuery('.aon-vendor-provider-two-carousel').owlCarousel({
			loop:true,
			margin:20,
			nav:true,
			dots: false,
			navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
			responsive:{
				0:{
					items:1
				},
				600:{
					items:2
				},			
				1000:{
					items:2
				},
				1200:{
					items:3
				}
			}
		});
	}    
    
    
    
 	// Testimonials Carousel function by = slick.js
    function slick_testimonials_carousel(){   
        jQuery('.slick-testimonials-carousel').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            arrows: false,
            fade: false,
            asNavFor: '.slick-testimonials-thumbnails',
         });

         jQuery('.slick-testimonials-thumbnails').slick({
            slidesToShow:3,
            slidesToScroll:1,
            centerMode: true,
            asNavFor: '.slick-testimonials-carousel',
            dots: false,
            focusOnSelect: true,
            responsive: [
            {
              breakpoint: 1200,
              settings: {
                slidesToShow:2
              },
              breakpoint:767,
              settings: {
                slidesToShow:1
              }
            }
          ]
         });
    
    }
    
	// testimonial Carousel function by = owl.js
    function aon_med_testimonial(){    
        jQuery('.aon-med-testimonial').owlCarousel({
            loop:true,
            margin:30,
            items:1,
            nav:true,
            dots: false,
            navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
        });
    }

	// testimonial Carousel function by = owl.js
    function aon_med_testimonial2(){    
        jQuery('.aon-med-testimonial2').owlCarousel({
            loop:true,
            margin:30,
            items:1,
            nav:true,
            dots: false,
            navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
        });
    }
    
   	// Related Provider Sidebar Carousel function by = owl.js
    function aon_related_provi_sidebar (){    
        jQuery('.aon-related-provi-sidebar').owlCarousel({
            loop:true,
            margin:0,
            items:1,
            nav:true,
            dots: false,
            navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
        });
    }

	// Job Related Provider Sidebar Carousel function by = owl.js
    function aon_recentpost_carousel (){    
        jQuery('.aon-recentpost-carousel').owlCarousel({
            loop:true,
            margin:0,
            items:1,
            nav:true,
            dots: false,
            navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
        });
    }
    
   	// Testimonials Two Carousel function by = owl.js
    function testimonials_two_carousel_owl (){
        jQuery('.testimonials-two-carousel-owl').owlCarousel({
            loop:true,
            margin:0,
            center: true,
            nav:true,
            dots: false,
            navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
            responsive:{
                0:{
                    items:1,
                    center:false,
                },
                767:{
                    items:2
                },
                1024:{
                    items:3,
                    center:true
                },

            }
        });
    } 
    
    
// Video Gallery Carousel function by = owl.js
    function aon_video_carousel (){   
	jQuery('.aon-video-carousel').owlCarousel({
        loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
		responsive:{
			0:{
				items:1,
			},
			480:{
				items:2
			},			
			767:{
				items:3
			}
		}
	});    
    
}
    
    
	jQuery('.aon-ow-provi-related').owlCarousel({
        loop:true,
		margin:20,
		nav:true,
		dots: false,
		navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
		responsive:{
			0:{
				items:1
			},
			600:{
				items:2
			},			
			1000:{
				items:2
			},
			1200:{
				items:3
			}
		}
	});	 
	
	
		jQuery('.owl-caty-carousel').owlCarousel({
        loop:true,
		margin:30,
		nav:true,
		dots: false,
		navText: ['<span class="ar-left"></span>', '<span class="ar-right"></span>'],
		responsive:{
			0:{
				items:1,
                center:false,
			},
			480:{
				items:2
			},			
			767:{
				items:3
			},
            1024:{
                items:4
            }
		}
	});     

	
    // > TouchSpin box function by  = jquery.bootstrap-touchspin.js =============== // 
    function input_number_vertical_form(){	
	jQuery("input[name='demo_vertical2']").TouchSpin({
	  verticalbuttons: true
	});	
}		

//  Counter Section function by = counterup.min.js
	function counter_section(){
		jQuery('.counter').counterUp({
			delay: 10,
			time: 3000
		});	
	}	
		
	jQuery('.nav-tabs a').on('click', function() {
		e.preventDefault();
		jQuery(this).tab('show');
	});
	
	jQuery('.wt-accordion a').on('click', function() {
		e.preventDefault();
		jQuery(this).tab('show');
	});	
    



	// Before After Image function by = twentytwenty.js
	function image_BeforeAfter(){
		jQuery('#sidebarCollapse').on('click', function () { 
			jQuery('#header-admin, #sidebar-admin-wraper, #content').toggleClass('active');
		});
	}    


    
    //DataTable function by = custom.js	
    function DataTable(){		
        jQuery('.example-dt-table').DataTable();
    }  
    
    
   // Link Click Page Scroll = custom.js ================= // 
   // function link_scrolling(){	
    $('.scroll-nav a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 1000, function() {
              // Callback after animation
              // Must change focus!
              var $target = $(target);
              $target.focus();
              if ($target.is(":focus")) { // Checking if the target was focused
                return false;
              } else {
                $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                $target.focus(); // Set focus again
              };
            });
          }
        }
      });   
   // }  
    
	// clock run = jquery.custom.js ================= // 	
	function countdown_clock(){	
        function getTimeRemaining(endtime) {
          const total = Date.parse(endtime) - Date.parse(new Date());
          const seconds = Math.floor((total / 1000) % 60);
          const minutes = Math.floor((total / 1000 / 60) % 60);
          const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
          const days = Math.floor(total / (1000 * 60 * 60 * 24));

          return {
            total,
            days,
            hours,
            minutes,
            seconds
          };
    }

    function initializeClock(id, endtime) {
      const clock = document.getElementById(id);
      const daysSpan = clock.querySelector('.days');
      const hoursSpan = clock.querySelector('.hours');
      const minutesSpan = clock.querySelector('.minutes');
      const secondsSpan = clock.querySelector('.seconds');

  function updateClock() {
    const t = getTimeRemaining(endtime);

    daysSpan.innerHTML = t.days;
    hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
    minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
    secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

    if (t.total <= 0) {
      clearInterval(timeinterval);
    }
  }

	  updateClock();
	  const timeinterval = setInterval(updateClock, 1000);
	}
	
	if(jQuery('#clockdiv').length){
	const deadline = new Date(Date.parse(new Date()) + 15 * 24 * 60 * 60 * 1000);
	initializeClock('clockdiv', deadline);
	}
	}     

    

/*--------------------------------------------------------------------------------------------
	Window on load ALL FUNCTION START
---------------------------------------------------------------------------------------------*/


	// > masonry function function by = isotope.pkgd.min.js ========================= //	
	function masonryBox() {
        if ( jQuery().isotope ) {      
            var $container = jQuery('.masonry-wrap');
                $container.isotope({
                    itemSelector: '.masonry-item',
                    transitionDuration: '1s',
					originLeft: true,
					stamp: '.stamp'
                });

            jQuery('.masonry-filter li').on('click',function() {                           
                var selector = jQuery(this).find("a").attr('data-filter');
                jQuery('.masonry-filter li').removeClass('active');
                jQuery(this).addClass('active');
                $container.isotope({ filter: selector });
                return false;
            });
    	}
	}
    
    
   
	

// > page loader function by = custom.js ========================= //		
	function page_loader() {
		$('.loading-area').fadeOut(1000);
        
        jQuery(".aon-banner-wrap").delay(100000).addClass("aon-banner-animate");
        jQuery(".aon-banner2-wrap").delay(100000).addClass("aon-banner2-animate");        
		
	}

/*--------------------------------------------------------------------------------------------
    Window on scroll ALL FUNCTION START
---------------------------------------------------------------------------------------------*/

    function color_fill_header() {
        var scroll = $(window).scrollTop();
        if(scroll >= 100) {
            $(".is-fixed").addClass("color-fill");
        } else {
            $(".is-fixed").removeClass("color-fill");
        }
    }
    
	

/*--------------------------------------------------------------------------------------------
	document.ready ALL FUNCTION START
---------------------------------------------------------------------------------------------*/
	jQuery(document).ready(function() {
		// Image Popover = jquery.prettyPhoto.js ================= // 	
		image_popover(),
 	    // Datepicker = datepicker.min.js ================= // 	
        datepicker(),
		// > Video responsive function by = custom.js 
		video_responsive(),
        // Team Right Side Panel function by = custom.js ========================= //	
        team_popSlide(),
        // Edit Profile Slide Right function by = custom.js ========================= //	
        edit_profile_slide(),
        // Create New Chart Slide Right function by = custom.js ========================= //	
	    new_chart_slide(),
        // Create New Chart Slide Right function by = custom.js ========================= //	
        block_calender_slide(),  
        // Edit Appointments Slide Right function by = custom.js ========================= //	
        edit_appointments_slide()            
        // Edit Availibility Slide Right function by = custom.js ========================= //	
        edit_availibility_slide(),              
        // Create New Chart Slide Right function by = custom.js ========================= //	
        block_time_slide(),   
        // Create New Chart Slide Right function by = custom.js ========================= //	
        block_feedback_slide(),  
        
        // Product Slider function by = owl.carousel.js
	    shop_style1_slider(),  
            
        // Test Booked Two Carousel function by = owl.js
        aon_booked_test_carousel(),
        // Booked Appointment Carousel function by = owl.js
        aon_book_appoint_carousel(),          
            
    	// Povider Profile Video Slider function by = owl.js
		aon_provider_video_slider(),
	    // Health Concern Carousel function by = owl.js
		aon_health_concer_carousel(),
            
	    // Health checkup Carousel function by = owl.js
	    aon_health_checkup_carousel()           
        
        // Bootstrap Slider function by  = bootstrap-slider.min.js   
        Bootstrap_Slider(),
		 // > LIGHTBOX Gallery Popup function	by = lc_lightbox.lite.js =========================== //      
		lightbox_popup(),
		// > magnificPopup for video function	by = magnific-popup.js
		magnific_video(),
		// > magnificPopup function	by = magnific-popup.js =========================== //
		magnific_popup()
		// > Vertically center Bootstrap modal popup function by = custom.js
		popup_vertical_center();
		// > Main menu sticky on top  when scroll down function by = custom.js		
		sticky_header(),
	    // > Sidebar sticky  when scroll down function by = theia-sticky-sidebar.js ========== //		
		sticky_sidebar(),
		// > page scroll top on button click function by = custom.js	
		scroll_top(),
		// > input type file function by = custom.js	 	
		input_type_file_form(),

		// > accordion active calss function by = custom.js ========================= //			
		accordion_active(),
		// > Nav submenu on off function by = custome.js ===================//
		mobile_nav(),
		// Mobile side drawer function by = custom.js
		mobile_side_drawer(),
        //  Search Panel function by = custom.js
        search_filter_panel()          
        // Categories carousel function by = owl.js
        categories_carousel_owl(),
        // Featurd Provider Carousel function by = owl.js
        featurd_provider_carousel(),
            
        // Featurd Provider Two Carousel function by = owl.js
        aon_vendor_provider_two_carousel(),
        
        // Testimonials Carousel function by = slick.js
        slick_testimonials_carousel(),             
            
        // Related Provider Sidebar Carousel function by = owl.js
        aon_related_provi_sidebar(),
		// testimonial Carousel function by = owl.js
		aon_med_testimonial(),
		// testimonial Carousel function by = owl.js
		aon_med_testimonial2(),
		// Job Related Provider Sidebar Carousel function by = owl.js
		aon_recentpost_carousel (),         
            
        // Testimonials Two Carousel function by = owl.js
        testimonials_two_carousel_owl (),       
        // Video Gallery Carousel function by = owl.js
        aon_video_carousel (),        
		// > TouchSpin box function by  = jquery.bootstrap-touchspin.js 
		input_number_vertical_form(),
		//  Counter Section function by = counterup.min.js
		counter_section()

        // Before After Image function by = twentytwenty.js
	    image_BeforeAfter()
        
        // DataTable function by = custom.js	
        DataTable() 
        
        // clock run = jquery.custom.js ================= // 	
        countdown_clock()        

	}); 	

/*--------------------------------------------------------------------------------------------
	Window Load START
---------------------------------------------------------------------------------------------*/
	jQuery(window).on('load', function () {
		// > masonry function function by = isotope.pkgd.min.js		
		masonryBox(),
		// > page loader function by = custom.js		
		page_loader();
});

 /*===========================
	Window Scroll ALL FUNCTION START
===========================*/

	jQuery(window).on('scroll', function () {
	// > Window on scroll header color fill 
		color_fill_header();
	});
	
/*===========================
	Window Resize ALL FUNCTION START
===========================*/

	jQuery(window).on('resize', function () {


	});jQuery(window).resize();
	
	
})(window.jQuery);




