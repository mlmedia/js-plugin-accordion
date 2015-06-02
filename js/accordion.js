/**
 * jQuery plugin for an accordion
 */
/* define $ as jQuery just in case */
( function( $ )
{
	/* toggle / accordion events - my custom plugin */
	$.fn.accordion = function( speed )
	{
		/* set vars */
		var accordion 		= this;
		var groups 			= accordion.find( '.group' );
		var boxes 			= accordion.find( '.box' );
		var controls 		= accordion.find( '.control' );
		var active_controls = controls.find( '.current' );
		var active_control 	= active_controls.first( ).length > 0 ? active_controls.first( ) : accordion.find( '.control:eq(0)' );
		var speed = ( ! speed ) ? 300 : speed;

		/**
		 * slide up all of the toggle targets and open the ones with the parent toggle box set to open - very fast so as to not be visible
		 * - we do this to eliminate the hitch in the animation by animating up first instead of using "display:none;"
		 * - before sliding up, grab the collapsed accordion height plus one expanded box and set as min-height to get rid of Chrome animation choppiness
		 */
		var exp_height = accordion.height( );
		accordion.hide( );
		boxes.slideUp( 0 );

		/* on page load - show the accordion */
		$( window ).load( function( )
		{
			/* show the accordion when everything is loaded */
			accordion.show( )
			var coll_height = accordion.height( );
			accordion.css({
				'min-height':parseInt( coll_height + exp_height / boxes.length )
			});

		});

		/* accordion control click action */
		accordion.on( 'click', '.control', function( e )
		{
			var parent_el 	= $( this ).closest( '.group' );
			var target 		= parent_el.find( '.box' );
			if ( parent_el.hasClass( 'open' ) )
			{
				parent_el.removeClass( 'open' );
				target.slideUp( speed );
			}
			else
			{
				groups.removeClass( 'open' );
				boxes.slideUp( speed );
				parent_el.addClass( 'open' );
				target.slideDown( speed );
			}
			e.preventDefault( );
		});
	}

})( jQuery );
