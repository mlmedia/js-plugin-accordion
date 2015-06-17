#Accordion plugin#

##Usage / Installation##

Usage of this accordion plugin entails the usual process: (1) create the HTML markup, (2) add the JavaScript / jQuery refs, (3) initialize the plugin with any available options, and (4) style the markup with CSS as desired.

###HTML###

The HTML markup must have a containing parent element, which can use any ID or class for initialization. The parent element contains as many "group" elements as desired. Each "group" element contains a "control" element and a "box" element. The "control" element optionally contains an "expand" and "collapse" element to display an icon indicating whether the group is open or closed.

An example of the accordion markup is shown below:

```html
<div id="my_accordion_1" class="accordion">
	<div class="group">
		<a class="control" href="#">
			Control #1
			<span class="expand">+</span>
			<span class="collapse">-</span>
		</a>
		<div class="box">
			<div class="inner">
				Lorem ipsum dolor sit amet [...]
			</div>
		</div>
	</div>
	<div class="group">
		<a class="control" href="#">
			Control #2
			<span class="expand">+</span>
			<span class="collapse">-</span>
		</a>
		<div class="box">
			<div class="inner">
				Lorem ipsum dolor sit amet [...]
			</div>
		</div>
	</div>
	<div class="group">
		<a class="control" href="#">
			Control #3
			<span class="expand">+</span>
			<span class="collapse">-</span></a>
		<div class="box">
			<div class="inner">
				Lorem ipsum dolor sit amet [...]
			</div>
		</div>
	</div>
</div>
```

###JavaScript / jQuery###
Since this plugin utilizes jQuery, we must call it before we can initialize the plugin.  Typically, jQuery will go in the <HEAD> of your HTML document.  You can use a self-hosted copy of it or use one of several CDN hosted versions.  

```html
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
<!-- CDN-hosted -->
```

*- OR -*
```html
<script src="js/jquery-1.11.3.min.js"></script>
<!-- path to your JS folder -->
```
Anywhere under the jQuery ref, add the ref to the plugin.  This can be added in the `<HEAD>` section or anywhere in the `<BODY>` of the document.

```html
<script src="js/accordion.js"></script>
<!-- path to your JS folder -->
```

###Initialize the plugin###
Initialize the plugin with the selector of the parent element.

```javascript
<script type="text/javascript">
/* define $ as jQuery just in case */
( function( $ )
{
	/* doc ready */
	$( function( )
	{
		$( '#my_parent_id' ).accordion( );
	});
})( jQuery );
</script>
```
As with most jQuery plugins, you can add the options as an argument to the accordion() function.  The following options are available:

* _multiple_ (default: false) - in order to allow multiple accordion boxes to be open at once, set to `TRUE`.
* _animated_ (default: false) - in order for the boxes to animate opening and closing, set this option to `TRUE`.
* _speed_ (default: 200) - in order for the animation to move faster or slower, change this value accordingly.  Higher numbers are slower.  This option is ignored if the **animation** option is set to false.

The example initialization call will create an accordion on the `#my_accordion` element with multiple box opening capability and with animation at 400 speed.

```javascript
<script type="text/javascript">
/* define $ as jQuery just in case */
( function( $ )
{
	/* doc ready */
	$( function( )
	{
		$( '#my_accordion' ).accordion({
			multiple: true,
			animation: true,
			speed: 400
		});
	});
})( jQuery );
</script>
```

###Style the plugin with CSS###
The demo pages have some basic CSS to add some structure to the page, which can be seen here: http://dev.dockstreetmedia.com/accordion/css/main.css.  Some of the demos also have some styling for the accordions, which can be seen here: http://dev.dockstreetmedia.com/accordion/css/accordion.css.

You can modify or add your own CSS to match your own preferences.
