jQuery(document).ready(function($) {
    //variables
    $('.portfolio__website').fancybox({
        fitToView: false,
        width: '95%',
        maxWidth: 1200,
        scrolling: 'yes',
    });
    var hijacking = $('body').data('hijacking'),
        animationType = $('body').data('animation'),
        delta = 0,
        scrollThreshold = 2,
        actual = 1,
        animating = false;

    //DOM elements
    var sectionsAvailable = $('.cd-section'),
        verticalNav = $('.cd-vertical-nav'),
        prevArrow = verticalNav.find('a.cd-prev'),
        nextArrow = verticalNav.find('a.cd-next');


    //check the media query and bind corresponding events
    var MQ = deviceType(),
        bindToggle = false;
    bindEvents(MQ, true);

    // FORM POPUP

    $(document.body).on('click', '#showpopup', function(e) {

        e.preventDefault();

        $('.popup').addClass('popup_visible');
        var data = $(this).attr('data-text');
        $('.popup__text_changing').text(data);

        $('.popup').on('click', function(e) {
            if ($(e.target).hasClass('popup_visible')) {
                $('.popup').removeClass('popup_visible');
            }
        });
    });
    // TOPLINE MENU SCROLL TO
    $('.topline').on('click', '.topline__link', function(e) {
        nextSection(e, $(this));
        if ($('.topline__link').index($(this)) == 1) {
            nextSection(e, $(this));
            setTimeout(function() {
                $('.no-scroll').animate({
                    scrollTop: $('.no-scroll .portfolio').offset().top
                });
                return;
            }, 1000);
        }
        if ($('.topline__link').index($(this)) == 2) {
            nextSection(e, $(this));
            setTimeout(function() {
                $('.no-scroll').animate({
                    scrollTop: $('.no-scroll .price').offset().top
                });
                 return;
            }, 1000);
        }

        if ($('.topline__link').index($(this)) == 3) {
            nextSection(e, $(this));
            setTimeout(function() {
                $('.no-scroll').animate({
                    scrollTop: $('.no-scroll .footer').offset().top
                });
                 return;
            }, 1000);
        }

        var points = $('.points');

        $('.programming__in').append(points);

        $('.points__circle-inner').addClass('points__circle-inner_accomplished');
        $('.points__circle-inner:nth-child(1)').removeClass('points__circle-inner_visible');
        $('.points__circle-inner:nth-child(2)').addClass('points__circle-inner_accomplished_2');

        $('.points__circle-inner:nth-child(3)').addClass('points__circle-inner_accomplished_3');

        $('.points__circle-inner:nth-child(4)').addClass('points__circle-inner_visible');
        $('.points__circle-inner:nth-child(4)').removeClass('points__circle-inner_accomplished');
        $('.points__bar-inner').css({
            width: '300px'
        });
    });

    // STEPS

    // STEP NO
    (function() {

        var stepFirst = $('.price__step_1');
        var stepSecond = $('.price__step_2');
        var stepThird = $('.price__step_3');
        var stepForth = $('.price__step_4');
        var stepOk = $('.price__step_ok');
        var stepNo = $('.price__step_no');
        var allSteps = $('.price__step');
        var firstBluePoint = $('.points_blue__circle-inner:nth-child(1)');
        var secondBluePoint = $('.points_blue__circle-inner:nth-child(2)');
        var thirdBluePoint = $('.points_blue__circle-inner:nth-child(3)');
        var forthBluePoint = $('.points_blue__circle-inner:nth-child(4)');

        var blueBar = $('.points_blue__bar-inner');

        var priceNum = 0;

        $('.testimonials').on('click', '.testimonials__video', function(e) {
            $(this).children().remove();

            var iframe = document.createElement('iframe');

            iframe.src = $(this).data('href');
            iframe.frameBorder = '0';
            iframe.style.width = '100%';
            iframe.style.height = '100%';
            $(this).append(iframe);

            e.preventDefault();
        });

        $('.price__button_big-no').on('click', function() {
            stepFirst.removeClass('price__step_visible');
            stepNo.addClass('price__step_visible');
        });
        $('.price__back').on('click', function() {

            priceNum = 0;

            allSteps.removeClass('price__step_visible');
            stepFirst.addClass('price__step_visible');

            $('.points_blue__circle-inner').removeClass('points_blue__circle-inner_visible');
            $('.points_blue__circle-inner').removeClass('points_blue__circle-inner_accomplished');
            $('.points_blue__circle-inner').removeClass('points_blue__circle-inner_accomplished_2');
            $('.points_blue__circle-inner').removeClass('points_blue__circle-inner_accomplished_3');


            $('.points_blue__circle-inner:first-child').addClass('points_blue__circle-inner_visible');

            $('.points_blue__list-item').removeClass('points_blue__list-item_active');

            $('.points_blue__list-item:nth-child(1)').addClass('points_blue__list-item_active');

            blueBar.animate({
                'width': '0'
            });
        });

        $('.price__button_1_yes').on('click', function() {
            stepFirst.removeClass('price__step_visible');
            stepSecond.addClass('price__step_visible');

            firstBluePoint.removeClass('points_blue__circle-inner_visible');
            firstBluePoint.addClass('points_blue__circle-inner_accomplished');

            secondBluePoint.addClass('points_blue__circle-inner_visible');

            $('.points_blue__list-item').removeClass('points_blue__list-item_active');

            $('.points_blue__list-item:nth-child(2)').addClass('points_blue__list-item_active');
            blueBar.animate({
                'width': '100'
            });

        });

        $('.price__button_2_yes').on('click', function() {
            stepSecond.removeClass('price__step_visible');
            stepThird.addClass('price__step_visible');

            secondBluePoint.removeClass('points_blue__circle-inner_visible');

            secondBluePoint.addClass('points_blue__circle-inner_accomplished');
            secondBluePoint.addClass('points_blue__circle-inner_accomplished_2');

            thirdBluePoint.addClass('points_blue__circle-inner_visible');

            $('.points_blue__list-item').removeClass('points_blue__list-item_active');
            $('.points_blue__list-item:nth-child(3)').addClass('points_blue__list-item_active');

            blueBar.animate({
                'width': '200'
            });

            priceNum += 100000;
            console.log(priceNum);
        });

        $('.price__button_2_no').on('click', function() {
            stepSecond.removeClass('price__step_visible');
            stepThird.addClass('price__step_visible');

            secondBluePoint.removeClass('points_blue__circle-inner_visible');

            secondBluePoint.addClass('points_blue__circle-inner_accomplished');
            secondBluePoint.addClass('points_blue__circle-inner_accomplished_2');

            thirdBluePoint.addClass('points_blue__circle-inner_visible');
            $('.points_blue__list-item').removeClass('points_blue__list-item_active');

            $('.points_blue__list-item:nth-child(3)').addClass('points_blue__list-item_active');
            blueBar.animate({
                'width': '200'
            });

            priceNum += 40000;
            console.log(priceNum);
        });

        $('.price__button_3_yes').on('click', function() {
            stepThird.removeClass('price__step_visible');
            stepForth.addClass('price__step_visible');

            thirdBluePoint.removeClass('points_blue__circle-inner_visible');

            thirdBluePoint.addClass('points_blue__circle-inner_accomplished');
            thirdBluePoint.addClass('points_blue__circle-inner_accomplished_3');

            forthBluePoint.addClass('points_blue__circle-inner_visible');

            $('.points_blue__list-item').removeClass('points_blue__list-item_active');
            $('.points_blue__list-item:nth-child(4)').addClass('points_blue__list-item_active');

            blueBar.animate({
                'width': '300'
            });

            priceNum += 50000;
            console.log(priceNum);
        });


        $('.price__button_3_no').on('click', function() {
            stepThird.removeClass('price__step_visible');
            stepForth.addClass('price__step_visible');

            thirdBluePoint.removeClass('points_blue__circle-inner_visible');

            thirdBluePoint.addClass('points_blue__circle-inner_accomplished');
            thirdBluePoint.addClass('points_blue__circle-inner_accomplished_3');

            forthBluePoint.addClass('points_blue__circle-inner_visible');

            $('.points_blue__list-item').removeClass('points_blue__list-item_active');
            $('.points_blue__list-item:nth-child(4)').addClass('points_blue__list-item_active');

            blueBar.animate({
                'width': '300'
            });

        });

        $('.price__button_4_yes').on('click', function() {
            stepForth.removeClass('price__step_visible');
            stepOk.addClass('price__step_visible');
            forthBluePoint.addClass('points_blue__circle-inner_visible_accomplished');

            priceNum = priceNum - (priceNum * 0.3);

            $('.price__step_ok .price__step-heading').text(numberWithSpaces(priceNum) + 'р.');
            console.log(priceNum);
        });

        $('.price__button_4_no').on('click', function() {
            stepForth.removeClass('price__step_visible');
            stepOk.addClass('price__step_visible');
            forthBluePoint.addClass('points_blue__circle-inner_visible_accomplished');
            $('.price__step_ok .price__step-heading').text(numberWithSpaces(priceNum) + 'р.');
            console.log(priceNum);
        });
    })();
    $(window).on('resize', function() {
        MQ = deviceType();
        console.log(MQ);
        bindEvents(MQ, bindToggle);
        if (MQ == 'mobile') bindToggle = true;
        if (MQ == 'desktop') bindToggle = false;
    });

    function bindEvents(MQ, bool) {

        if (MQ == 'desktop' && bool) {
            //bind the animation to the window scroll event, arrows click and keyboard
            if (hijacking == 'on') {
                var activeSectionIndex;
                var managementSection = $('.cd-section .management');
                var marketingSection = $('.cd-section .marketing');
                var designSection = $('.cd-section .design');
                var programmingSection = $('.cd-section .programming');
                var exampleSection = $('.cd-section .example-project');
                var points = $('.points');
                var pointsListItems = $('.points').find('.points__list-item');
                var greenBar = $('.points__bar-inner');
                var lastScrollTop = 0;
                var firstPoint = $('.points__circle-inner:nth-child(1)');
                var secondPoint = $('.points__circle-inner:nth-child(2)');
                var thirdPoint = $('.points__circle-inner:nth-child(3)');
                var forthPoint = $('.points__circle-inner:nth-child(4)');

                var noScrollIsActive;

                initHijacking();

                $(window).on('DOMMouseScroll mousewheel', function(e) {
                    var st = $('.no-scroll').scrollTop();


                    console.log($('.no-scroll').scrollTop());
                    console.log(lastScrollTop);

                    if (st < lastScrollTop && $('.no-scroll').scrollTop() == 0) {
                        // downscroll code
                        console.log('hey');
                        prevSection();
                    }
                    lastScrollTop = st;

                    if ($('.cd-section:last-child').hasClass('visible')) {
                        return;
                    }
                    setTimeout(function() {
                        activeSectionIndex = $('.visible').index();
                    }, 500);


                    scrollHijacking(e);

                    if (managementSection.parent().hasClass('visible') && activeSectionIndex == 3) {

                        pointsListItems.removeClass('points__list-item_active');

                        pointsListItems.eq(0).addClass('points__list-item_active');

                        secondPoint.removeClass('points__circle-inner_visible');

                        firstPoint.removeClass('points__circle-inner_accomplished');

                        firstPoint.addClass('points__circle-inner_visible');

                        setTimeout(function() {

                            points.remove();

                            $('.management__in').append(points);

                            points.removeClass('points_fixed');

                            points.css({
                                'left': 0 + 'px'
                            });

                            greenBar.animate({
                                width: '0'
                            }, 200);

                        }, 700)

                    }

                    if (managementSection.parent().hasClass('visible') && activeSectionIndex == 1) {

                        setTimeout(function() {

                            firstPoint.addClass('points__circle-inner_visible');

                        }, 500);

                    }

                    // if (managementSection.parent().hasClass('visible')) {


                    //     setTimeout(function() {

                    //         points.remove();

                    //         $('.management__in').append(points);

                    //         secondPoint.removeClass('points__circle-inner_visible');

                    //         firstPoint.removeClass('points__circle-inner_accomplished');

                    //         points.removeClass('points_fixed');

                    //         points.css({
                    //             'left': 0 + 'px'
                    //         });

                    //         greenBar.animate({
                    //             width: '0'
                    //         }, 200);

                    //     }, 700)

                    // }


                    if (marketingSection.parent().hasClass('visible') && activeSectionIndex == 4) {

                        pointsListItems.removeClass('points__list-item_active');

                        pointsListItems.eq(1).addClass('points__list-item_active');

                        secondPoint.removeClass('points__circle-inner_accomplished');
                        secondPoint.removeClass('points__circle-inner_accomplished_2');

                        secondPoint.addClass('points__circle-inner_visible');
                        thirdPoint.removeClass('points__circle-inner_visible');

                        greenBar.animate({
                            width: '100px'
                        }, 200);
                    }


                    if (marketingSection.parent().hasClass('visible') && activeSectionIndex == 2) {

                        pointsListItems.removeClass('points__list-item_active');

                        pointsListItems.eq(1).addClass('points__list-item_active');
                        points.remove();

                        $(document.body).append(points);

                        points.addClass('points_fixed');

                        points.css({
                            'left': $('.management__in').offset().left + 'px'
                        });

                        greenBar.animate({
                            width: '100px'
                        });

                        greenBar.addClass('points__bar-inner_visible');

                        setTimeout(function() {

                            firstPoint.removeClass('points__circle-inner_visible');
                            firstPoint.addClass('points__circle-inner_accomplished');

                            secondPoint.addClass('points__circle-inner_visible');
                        }, 500);

                    }

                    // if (marketingSection.parent().hasClass('visible') && activeSectionIndex == 4) {
                    //     secondPoint.removeClass('points__circle-inner_accomplished');
                    //     secondPoint.removeClass('points__circle-inner_accomplished_2');

                    //     thirdPoint.removeClass('points__circle-inner_visible');
                    // }

                    if (designSection.parent().hasClass('visible') && activeSectionIndex == 3) {


                        pointsListItems.removeClass('points__list-item_active');

                        pointsListItems.eq(2).addClass('points__list-item_active');

                        greenBar.animate({
                            width: '200px'
                        });

                        setTimeout(function() {

                            secondPoint.removeClass('points__circle-inner_visible');
                            secondPoint.addClass('points__circle-inner_accomplished');
                            secondPoint.addClass('points__circle-inner_accomplished_2');

                            thirdPoint.addClass('points__circle-inner_visible');
                        }, 500);

                    }

                    if (designSection.parent().hasClass('visible') && activeSectionIndex == 5) {

                        points.remove();

                        $(document.body).append(points);

                        points.addClass('points_fixed');

                        points.css({
                            'left': $('.management__in').offset().left + 'px'
                        });

                        pointsListItems.removeClass('points__list-item_active');

                        pointsListItems.eq(2).addClass('points__list-item_active');
                        greenBar.animate({
                            width: '200px'
                        });

                        setTimeout(function() {

                            thirdPoint.addClass('points__circle-inner_visible');
                            thirdPoint.removeClass('points__circle-inner_accomplished');
                            thirdPoint.removeClass('points__circle-inner_accomplished_3');

                            forthPoint.removeClass('points__circle-inner_visible');
                        }, 500);

                    }

                    if (programmingSection.parent().hasClass('visible') && activeSectionIndex == 4) {

                        pointsListItems.removeClass('points__list-item_active');

                        pointsListItems.eq(3).addClass('points__list-item_active');

                        greenBar.animate({
                            width: '300px'
                        });

                        thirdPoint.removeClass('points__circle-inner_visible');
                        thirdPoint.addClass('points__circle-inner_accomplished');
                        thirdPoint.addClass('points__circle-inner_accomplished_3');

                        forthPoint.addClass('points__circle-inner_visible');

                        setTimeout(function() {

                            points.remove();

                            $('.programming__in').append(points);

                            points.removeClass('points_fixed');

                            points.css({
                                'left': 0 + 'px'
                            });

                        }, 1000);

                    }
                });
            } else {
                scrollAnimation();
                $(window).on('scroll', scrollAnimation);
            }
            prevArrow.on('click', prevSection);
            nextArrow.on('click', nextSection);

            $(document).on('keydown', function(event) {
                if (event.which == '40' && !nextArrow.hasClass('inactive')) {
                    event.preventDefault();
                    nextSection();
                } else if (event.which == '38' && (!prevArrow.hasClass('inactive') || (prevArrow.hasClass('inactive') && $(window).scrollTop() != sectionsAvailable.eq(0).offset().top))) {
                    event.preventDefault();
                    prevSection();
                }
            });
            //set navigation arrows visibility
            checkNavigation();
        } else if (MQ == 'mobile') {
            //reset and unbind
            console.log('mobile');
            resetSectionStyle();
            $(window).off('DOMMouseScroll mousewheel', scrollHijacking);
            $(window).off('scroll', scrollAnimation);
            prevArrow.off('click', prevSection);
            nextArrow.off('click', nextSection);
            $(document).off('keydown');
            $(window).animate({
                scrollTo: '2000px'
            });
        }
    }

    function numberWithSpaces(x) {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    function scrollAnimation() {
        //normal scroll - use requestAnimationFrame (if defined) to optimize performance
        (!window.requestAnimationFrame) ? animateSection(): window.requestAnimationFrame(animateSection);
    }

    function animateSection() {
        var scrollTop = $(window).scrollTop(),
            windowHeight = $(window).height(),
            windowWidth = $(window).width();

        sectionsAvailable.each(function() {
            var actualBlock = $(this),
                offset = scrollTop - actualBlock.offset().top;

            //according to animation type and window scroll, define animation parameters
            var animationValues = setSectionAnimation(offset, windowHeight, animationType);

            transformSection(actualBlock.children('div'), animationValues[0], animationValues[1], animationValues[2], animationValues[3], animationValues[4]);
            (offset >= 0 && offset < windowHeight) ? actualBlock.addClass('visible'): actualBlock.removeClass('visible');
        });

        checkNavigation();
    }

    function transformSection(element, translateY, scaleValue, rotateXValue, opacityValue, boxShadow) {
        //transform sections - normal scroll
        element.velocity({
            translateY: translateY + 'vh',
            scale: scaleValue,
            rotateX: rotateXValue,
            opacity: opacityValue,
            boxShadowBlur: boxShadow + 'px',
            translateZ: 0,
        }, 0);
    }

    function initHijacking() {
        // initialize section style - scrollhijacking
        var visibleSection = sectionsAvailable.filter('.visible'),
            topSection = visibleSection.prevAll('.cd-section'),
            bottomSection = visibleSection.nextAll('.cd-section'),
            animationParams = selectAnimation(animationType, false),
            animationVisible = animationParams[0],
            animationTop = animationParams[1],
            animationBottom = animationParams[2];
        visibleSection.children('div').velocity(animationVisible, 1, function() {
            visibleSection.css('opacity', 1);
            topSection.css('opacity', 1);
            bottomSection.css('opacity', 1);
        });
        topSection.children('div').velocity(animationTop, 0);
        bottomSection.children('div').velocity(animationBottom, 0);
    }

    function scrollHijacking(event) {
        // on mouse scroll - check if animate section

        if (event.originalEvent.detail < 0 || event.originalEvent.wheelDelta > 0) {
            delta--;
            (Math.abs(delta) >= scrollThreshold) && prevSection();

        } else {
            delta++;
            (delta >= scrollThreshold) && nextSection();
        }
        return false;
    }

    function prevSection(event) {
        //go to previous section
        typeof event !== 'undefined' && event.preventDefault();

        var visibleSection = sectionsAvailable.filter('.visible'),
            middleScroll = (hijacking == 'off' && $(window).scrollTop() != visibleSection.offset().top) ? true : false;
        visibleSection = middleScroll ? visibleSection.next('.cd-section') : visibleSection;

        var animationParams = selectAnimation(animationType, middleScroll, 'prev');
        unbindScroll(visibleSection.prev('.cd-section'), animationParams[3]);

        if (!animating && !visibleSection.is(":first-child")) {
            animating = true;
            visibleSection.removeClass('visible').children('div').velocity(animationParams[2], animationParams[3], animationParams[4])
                .end().prev('.cd-section').addClass('visible').children('div').velocity(animationParams[0], animationParams[3], animationParams[4], function() {
                    animating = false;
                    if (hijacking == 'off') $(window).on('scroll', scrollAnimation);
                });

            actual = actual - 1;
        }

        resetScroll();
    }

    function nextSection(event) {
        //go to next section
        typeof event !== 'undefined' && event.preventDefault();
        var visibleSection = sectionsAvailable.filter('.visible'),
            middleScroll = (hijacking == 'off' && $(window).scrollTop() != visibleSection.offset().top) ? true : false;

        var animationParams = selectAnimation(animationType, middleScroll, 'next');
        unbindScroll(visibleSection.next('.cd-section'), animationParams[3]);

        if (!animating && !visibleSection.is(":last-child")) {
            if (arguments.length == 2) {
                console.log('two');
                animating = true;
                visibleSection.removeClass('visible').children('div').velocity(animationParams[1], animationParams[3], animationParams[4])
                    .end();
                $('.cd-section:nth-child(7)').addClass('visible').children('div').velocity(animationParams[0], animationParams[3], animationParams[4], function() {
                    animating = false;
                    if (hijacking == 'off') $(window).on('scroll', scrollAnimation);
                });

                actual = actual + 1;
                return;
            }
            animating = true;
            visibleSection.removeClass('visible').children('div').velocity(animationParams[1], animationParams[3], animationParams[4])
                .end().next('.cd-section').addClass('visible').children('div').velocity(animationParams[0], animationParams[3], animationParams[4], function() {
                    animating = false;
                    if (hijacking == 'off') $(window).on('scroll', scrollAnimation);
                });

            actual = actual + 1;
        }
        resetScroll();
    }

    function unbindScroll(section, time) {
        //if clicking on navigation - unbind scroll and animate using custom velocity animation
        if (hijacking == 'off') {
            $(window).off('scroll', scrollAnimation);
            (animationType == 'catch') ? $('body, html').scrollTop(section.offset().top): section.velocity("scroll", {
                duration: time
            });
        }
    }

    function resetScroll() {
        delta = 0;
        checkNavigation();
    }

    function checkNavigation() {
        //update navigation arrows visibility
        (sectionsAvailable.filter('.visible').is(':first-of-type')) ? prevArrow.addClass('inactive'): prevArrow.removeClass('inactive');
        (sectionsAvailable.filter('.visible').is(':last-of-type')) ? nextArrow.addClass('inactive'): nextArrow.removeClass('inactive');
    }

    function resetSectionStyle() {
        //on mobile - remove style applied with jQuery
        sectionsAvailable.children('div').each(function() {
            $(this).attr('style', '');
        });
    }

    function deviceType() {
        //detect if desktop/mobile
        return window.getComputedStyle(document.querySelector('body'), '::before').getPropertyValue('content').replace(/"/g, "").replace(/'/g, "");
    }

    function selectAnimation(animationName, middleScroll, direction) {
        // select section animation - scrollhijacking
        var animationVisible = 'translateNone',
            animationTop = 'translateUp',
            animationBottom = 'translateDown',
            easing = 'ease',
            animDuration = 800;

        switch (animationName) {
            case 'scaleDown':
                animationTop = 'scaleDown';
                easing = 'easeInCubic';
                break;
            case 'rotate':
                if (hijacking == 'off') {
                    animationTop = 'rotation.scroll';
                    animationBottom = 'translateNone';
                } else {
                    animationTop = 'rotation';
                    easing = 'easeInCubic';
                }
                break;
            case 'gallery':
                animDuration = 1500;
                if (middleScroll) {
                    animationTop = 'scaleDown.moveUp.scroll';
                    animationVisible = 'scaleUp.moveUp.scroll';
                    animationBottom = 'scaleDown.moveDown.scroll';
                } else {
                    animationVisible = (direction == 'next') ? 'scaleUp.moveUp' : 'scaleUp.moveDown';
                    animationTop = 'scaleDown.moveUp';
                    animationBottom = 'scaleDown.moveDown';
                }
                break;
            case 'catch':
                animationVisible = 'translateUp.delay';
                break;
            case 'opacity':
                animDuration = 700;
                animationTop = 'hide.scaleUp';
                animationBottom = 'hide.scaleDown';
                break;
            case 'fixed':
                animationTop = 'translateNone';
                easing = 'easeInCubic';
                break;
            case 'parallax':
                animationTop = 'translateUp.half';
                easing = 'easeInCubic';
                break;
        }

        return [animationVisible, animationTop, animationBottom, animDuration, easing];
    }

    function setSectionAnimation(sectionOffset, windowHeight, animationName) {
        // select section animation - normal scroll
        var scale = 1,
            translateY = 100,
            rotateX = '0deg',
            opacity = 1,
            boxShadowBlur = 0;

        if (sectionOffset >= -windowHeight && sectionOffset <= 0) {
            // section entering the viewport
            translateY = (-sectionOffset) * 100 / windowHeight;

            switch (animationName) {
                case 'scaleDown':
                    scale = 1;
                    opacity = 1;
                    break;
                case 'rotate':
                    translateY = 0;
                    break;
                case 'gallery':
                    if (sectionOffset >= -windowHeight && sectionOffset < -0.9 * windowHeight) {
                        scale = -sectionOffset / windowHeight;
                        translateY = (-sectionOffset) * 100 / windowHeight;
                        boxShadowBlur = 400 * (1 + sectionOffset / windowHeight);
                    } else if (sectionOffset >= -0.9 * windowHeight && sectionOffset < -0.1 * windowHeight) {
                        scale = 0.9;
                        translateY = -(9 / 8) * (sectionOffset + 0.1 * windowHeight) * 100 / windowHeight;
                        boxShadowBlur = 40;
                    } else {
                        scale = 1 + sectionOffset / windowHeight;
                        translateY = 0;
                        boxShadowBlur = -400 * sectionOffset / windowHeight;
                    }
                    break;
                case 'catch':
                    if (sectionOffset >= -windowHeight && sectionOffset < -0.75 * windowHeight) {
                        translateY = 100;
                        boxShadowBlur = (1 + sectionOffset / windowHeight) * 160;
                    } else {
                        translateY = -(10 / 7.5) * sectionOffset * 100 / windowHeight;
                        boxShadowBlur = -160 * sectionOffset / (3 * windowHeight);
                    }
                    break;
                case 'opacity':
                    translateY = 0;
                    scale = (sectionOffset + 5 * windowHeight) * 0.2 / windowHeight;
                    opacity = (sectionOffset + windowHeight) / windowHeight;
                    break;
            }

        } else if (sectionOffset > 0 && sectionOffset <= windowHeight) {
            //section leaving the viewport - still has the '.visible' class
            translateY = (-sectionOffset) * 100 / windowHeight;

            switch (animationName) {
                case 'scaleDown':
                    scale = (1 - (sectionOffset * 0.3 / windowHeight)).toFixed(5);
                    opacity = (1 - (sectionOffset / windowHeight)).toFixed(5);
                    translateY = 0;
                    boxShadowBlur = 40 * (sectionOffset / windowHeight);

                    break;
                case 'rotate':
                    opacity = (1 - (sectionOffset / windowHeight)).toFixed(5);
                    rotateX = sectionOffset * 90 / windowHeight + 'deg';
                    translateY = 0;
                    break;
                case 'gallery':
                    if (sectionOffset >= 0 && sectionOffset < 0.1 * windowHeight) {
                        scale = (windowHeight - sectionOffset) / windowHeight;
                        translateY = -(sectionOffset / windowHeight) * 100;
                        boxShadowBlur = 400 * sectionOffset / windowHeight;
                    } else if (sectionOffset >= 0.1 * windowHeight && sectionOffset < 0.9 * windowHeight) {
                        scale = 0.9;
                        translateY = -(9 / 8) * (sectionOffset - 0.1 * windowHeight / 9) * 100 / windowHeight;
                        boxShadowBlur = 40;
                    } else {
                        scale = sectionOffset / windowHeight;
                        translateY = -100;
                        boxShadowBlur = 400 * (1 - sectionOffset / windowHeight);
                    }
                    break;
                case 'catch':
                    if (sectionOffset >= 0 && sectionOffset < windowHeight / 2) {
                        boxShadowBlur = sectionOffset * 80 / windowHeight;
                    } else {
                        boxShadowBlur = 80 * (1 - sectionOffset / windowHeight);
                    }
                    break;
                case 'opacity':
                    translateY = 0;
                    scale = (sectionOffset + 5 * windowHeight) * 0.2 / windowHeight;
                    opacity = (windowHeight - sectionOffset) / windowHeight;
                    break;
                case 'fixed':
                    translateY = 0;
                    break;
                case 'parallax':
                    translateY = (-sectionOffset) * 50 / windowHeight;
                    break;

            }

        } else if (sectionOffset < -windowHeight) {
            //section not yet visible
            translateY = 100;

            switch (animationName) {
                case 'scaleDown':
                    scale = 1;
                    opacity = 1;
                    break;
                case 'gallery':
                    scale = 1;
                    break;
                case 'opacity':
                    translateY = 0;
                    scale = 0.8;
                    opacity = 0;
                    break;
            }

        } else {
            //section not visible anymore
            translateY = -100;

            switch (animationName) {
                case 'scaleDown':
                    scale = 0;
                    opacity = 0.7;
                    translateY = 0;
                    break;
                case 'rotate':
                    translateY = 0;
                    rotateX = '90deg';
                    break;
                case 'gallery':
                    scale = 1;
                    break;
                case 'opacity':
                    translateY = 0;
                    scale = 1.2;
                    opacity = 0;
                    break;
                case 'fixed':
                    translateY = 0;
                    break;
                case 'parallax':
                    translateY = -50;
                    break;
            }
        }

        return [translateY, scale, rotateX, opacity, boxShadowBlur];
    }
});

/* Custom effects registration - feature available in the Velocity UI pack */
//none
$.Velocity
    .RegisterEffect("translateUp", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '-100%'
            }, 1]
        ]
    });
$.Velocity
    .RegisterEffect("translateDown", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '100%'
            }, 1]
        ]
    });
$.Velocity
    .RegisterEffect("translateNone", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '0',
                opacity: '1',
                scale: '1',
                rotateX: '0',
                boxShadowBlur: '0'
            }, 1]
        ]
    });

//scale down
$.Velocity
    .RegisterEffect("scaleDown", {
        defaultDuration: 1,
        calls: [
            [{
                opacity: '0',
                scale: '0.7',
                boxShadowBlur: '40px'
            }, 1]
        ]
    });
//rotation
$.Velocity
    .RegisterEffect("rotation", {
        defaultDuration: 1,
        calls: [
            [{
                opacity: '0',
                rotateX: '90',
                translateY: '-100%'
            }, 1]
        ]
    });
$.Velocity
    .RegisterEffect("rotation.scroll", {
        defaultDuration: 1,
        calls: [
            [{
                opacity: '0',
                rotateX: '90',
                translateY: '0'
            }, 1]
        ]
    });
//gallery
$.Velocity
    .RegisterEffect("scaleDown.moveUp", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '-10%',
                scale: '0.9',
                boxShadowBlur: '40px'
            }, 0.20],
            [{
                translateY: '-100%'
            }, 0.60],
            [{
                translateY: '-100%',
                scale: '1',
                boxShadowBlur: '0'
            }, 0.20]
        ]
    });
$.Velocity
    .RegisterEffect("scaleDown.moveUp.scroll", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '-100%',
                scale: '0.9',
                boxShadowBlur: '40px'
            }, 0.60],
            [{
                translateY: '-100%',
                scale: '1',
                boxShadowBlur: '0'
            }, 0.40]
        ]
    });
$.Velocity
    .RegisterEffect("scaleUp.moveUp", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '90%',
                scale: '0.9',
                boxShadowBlur: '40px'
            }, 0.20],
            [{
                translateY: '0%'
            }, 0.60],
            [{
                translateY: '0%',
                scale: '1',
                boxShadowBlur: '0'
            }, 0.20]
        ]
    });
$.Velocity
    .RegisterEffect("scaleUp.moveUp.scroll", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '0%',
                scale: '0.9',
                boxShadowBlur: '40px'
            }, 0.60],
            [{
                translateY: '0%',
                scale: '1',
                boxShadowBlur: '0'
            }, 0.40]
        ]
    });
$.Velocity
    .RegisterEffect("scaleDown.moveDown", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '10%',
                scale: '0.9',
                boxShadowBlur: '40px'
            }, 0.20],
            [{
                translateY: '100%'
            }, 0.60],
            [{
                translateY: '100%',
                scale: '1',
                boxShadowBlur: '0'
            }, 0.20]
        ]
    });
$.Velocity
    .RegisterEffect("scaleDown.moveDown.scroll", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '100%',
                scale: '0.9',
                boxShadowBlur: '40px'
            }, 0.60],
            [{
                translateY: '100%',
                scale: '1',
                boxShadowBlur: '0'
            }, 0.40]
        ]
    });
$.Velocity
    .RegisterEffect("scaleUp.moveDown", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '-90%',
                scale: '0.9',
                boxShadowBlur: '40px'
            }, 0.20],
            [{
                translateY: '0%'
            }, 0.60],
            [{
                translateY: '0%',
                scale: '1',
                boxShadowBlur: '0'
            }, 0.20]
        ]
    });
//catch up
$.Velocity
    .RegisterEffect("translateUp.delay", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '0%'
            }, 0.8, {
                delay: 100
            }],
        ]
    });
//opacity
$.Velocity
    .RegisterEffect("hide.scaleUp", {
        defaultDuration: 1,
        calls: [
            [{
                opacity: '0',
                scale: '1.2'
            }, 1]
        ]
    });
$.Velocity
    .RegisterEffect("hide.scaleDown", {
        defaultDuration: 1,
        calls: [
            [{
                opacity: '0',
                scale: '0.8'
            }, 1]
        ]
    });
//parallax
$.Velocity
    .RegisterEffect("translateUp.half", {
        defaultDuration: 1,
        calls: [
            [{
                translateY: '-50%'
            }, 1]
        ]
    });
