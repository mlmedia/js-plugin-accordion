/**
 * jQuery plugin for an accordion
 */
/* define $ as jQuery just in case */
( function( $ )
{
	/* toggle / accordian events - my custom plugin */
	$.fn.accordian = function( speed ) 
	{

		/* set vars */
		var accordian 		= this;
		var groups 			= accordian.find( '.group' );
		var boxes 			= accordian.find( '.box' );
		var controls 		= accordian.find( '.control' );		
		var active_controls = controls.find( '.current' );
		var active_control 	= active_controls.first( ).length > 0 ? active_controls.first( ) : accordian.find( '.control:eq(0)' );
		var speed = ( ! speed ) ? 300 : speed;
		
		/** 
		 * slide up all of the toggle targets and open the ones with the parent toggle box set to open - very fast so as to not be visible 
		 * - we do this to eliminate the hitch in the animation by animating up first instead of using "display:none;"
		 * - before sliding up, grab the collapsed accordian height plus one expanded box and set as min-height to get rid of Chrome animation choppiness
		 */
		var exp_height = accordian.height( );
		accordian.hide( );
		boxes.slideUp( 0 );
		
		/* on page load - show the accordian */
		$( window ).load( function( ) {
		
			/* show the accordian when everything is loaded */
			accordian.show( )
			var coll_height = accordian.height( );
			accordian.css({ 
				'min-height':parseInt( coll_height + exp_height / boxes.length )
			});
			
		});
		
		/* accordian control click action */
		accordian.on( 'click', '.control', function( e ) {
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