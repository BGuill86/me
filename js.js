$(document).ready(function(){

	var wwindow = $(window).width();
	// $('#container.landscape').width(wwindow);

	activePanel = $("#container section:first");
	$(activePanel).addClass('active');

	activeMenu = $("nav.menu a:first");
	$(activeMenu).addClass('active');

    function resizeActiveWidth(){
        var wheader = $('header').width(),
            wfooter = $('footer').width(),
            wsection =  $('a.opener').width(),
            nbrSections =  $('section:not(.active)').length;
            // alert(nbrSections);
        var content = wwindow - (wheader + wfooter + nbrSections * wsection);
        return content;
    }

    // hover logo adveris + NM
    $('.logo a img')
        .on('mouseover', function(){
            var id = $(this).attr('id');
            $(this).attr('src','img/' + id + '-hover.png');
        })
        .on('mouseout', function(){
            var id = $(this).attr('id');
            $(this).attr('src','img/' + id + '.png');
        });

    // http://jsfiddle.net/dXnJ8/90/ A TESTER !!!
    // Accordéon jquery responsive
    $("section, nav.menu a").on('click', function(e){
    	if( ! $(this).is('.active') ){

            $('.content').hide();

            // selon si l'on a cliqué sur un titre de section ou un lien du menu, on donne sa valeur à newActivePanel...
            newActivePanel = (this.tagName == 'SECTION' ? $(this) : $('section#'+$(this).attr('class')));

    		if(wwindow < 544){
                // on ferme le slide actif
                $(activePanel).animate({height: "40px"}, 200);

                //... que l'on ouvre ensuite !
                newActivePanel.animate({height: "400px"}, 200, function(){
                    $(this).find('.content').fadeIn(400);
                });

    		}else{
				// on ferme le slide actif
				$(activePanel).animate({width: "50px"}, 200);

                $('.block').hide();

				//... que l'on ouvre ensuite !
                var content = resizeActiveWidth();
				newActivePanel.animate({width: content+"px"}, 200, function(){
                    $(this).find('.content').fadeIn(400);
                });

			}

            $('nav.menu a, #container section').removeClass('active');

            newActiveID = newActivePanel.attr('id');
            $('section#'+newActiveID+',.menu a.'+newActiveID).addClass('active');

            activePanel = newActivePanel;
		}
	});

    // Au chargement de la page...
    if(wwindow < 544){

    	$('header, #container, footer').removeClass('landscape').addClass('portrait');

    }else{

    	var hwindow = $(window).height();
    	$('header, footer, section, a.opener').height(hwindow);
        var content = resizeActiveWidth();
        $('section.active').width(content);
    }

    $(window).resize(function() {

    	wwindow = $(window).width();
    	// $('#container.landscape').width(wwindow);

    	if(wwindow < 544){

    		$('header, #container, footer').removeClass('landscape').addClass('portrait');
    		$('header, a.opener').height('40px');

            $('section').height('40px').width(wwindow);
    		$('section.active').height('400px').width(wwindow);

    	}else{

    		$('#container, header, footer').removeClass('portrait').addClass('landscape');

    		var hwindow = $(window).height();
    		$('header, footer, section, a.opener').height(hwindow);
            $('section').width('auto');

            var content = resizeActiveWidth();
            $('section.active').width(content);
            $('section.active').height(hwindow).width(content);

        }
    });

    $('a.close').on('click', function(){
        var block = $('.block:visible');
        block.hide();
        $('.more').text('+');  
    });

    // popups work & education
    $('.more').on('click', function(e){

        var parent = $(this).parent();
        var formation = parent.attr('class').split(' ')[1];
        var block = $('.block.'+formation);

        $('.block').hide(); 

        if($(this).text() == '+'){
            block.show();
            $('.more').text('+');
            $(this).text('-');  
        
        }else{
            $(this).text('+');

        }
    });

    // mode portrait, cache/montre les menus dans le header
    
    var visibility = 'visible';

    $('a.toggleNavs').on('click', function(){
        $('nav.menu a, nav.socials a:not(.toggleNavs)').css('visibility',visibility);
        visibility = (visibility == 'visible' ? 'hidden' : 'visible' );
        $('span#welcome').css('visibility',visibility);
    });

});
