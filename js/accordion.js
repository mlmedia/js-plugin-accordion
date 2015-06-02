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

			/* hide the collapse icon, unless the group is marked open, then hide the expander icon */
			$.each( groups, function(i, group)
			{
				if ($(groups[i]).hasClass('open'))
				{
					$(groups[i]).find('.expand').hide();
				}
				else
				{
					$(groups[i]).find('.collapse').hide();
				}
			});

		});

		/* accordion control click action */
		accordion.on( 'click', '.control', function( e )
		{
			var parent_el 	= $( this ).closest( '.group' );
			var target 		= parent_el.find( '.box' );
			if ( parent_el.hasClass( 'open' ) )
			{
				/* if open, collapse it */
				parent_el.removeClass( 'open' );
				groups.find('.collapse').hide(); /* hide all the collapse icons before showing the expander for this control / box */
				parent_el.find( '.collapse' ).hide(); /* hide the collapse icon */
				parent_el.find( '.expand' ).show(); /* show the expand icon */
				target.slideUp( speed );
			}
			else
			{
				/* otherwise, expand it */
				groups.removeClass( 'open' );

				/* close all boxes and hide collapse icons / show all expand icons - before expanding this control / box */
				boxes.slideUp( speed );
				groups.find('.collapse').hide();
				groups.find( '.expand' ).show();

				/* open this box */
				parent_el.addClass( 'open' );
				parent_el.find( '.expand' ).hide(); /* hide the expand icon */
				parent_el.find( '.collapse' ).show(); /* show the collapse icon */
				target.slideDown( speed );
			}
			e.preventDefault( );
		});
	}

})( jQuery );
