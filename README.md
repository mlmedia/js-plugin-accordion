# Accordion plugin

This jQuery plugin creates an accordion that toggles visibility for a group of accordion boxes using control elements. Accordions are useful for saving vertical space for things like Frequently-Asked-Questions (FAQ) pages or glossaries.

## Usage / Installation

Usage of this accordion plugin entails the usual process:

1. create the HTML markup
2. add the JavaScript / jQuery refs
3. initialize the plugin with any available options
4. style the markup with CSS as desired.

### HTML

The HTML markup must have a containing parent element, which can use any ID or class for initialization. The parent element contains as many elements with the "group" class as desired. Each "group" element contains an element with a "control" class and an element with the "box" class. The "control" element may also optionally contain an element with an "expand" class and one with a "collapse" class to contain an icon indicating whether the group is open or closed.

Any element can be used in the "expand" and "collapse" elements, including "+" / "-" characters, special HTML characters such as `&#9660;` arrows, image graphics, or font icons, such as with <a href="http://fontawesome.github.io/Font-Awesome/icons/" title="Font Awesome icons" target="_blank">Font Awesome icons</a>.

An example of the accordion markup is shown below:

```html
<div id="my-accordion_1" class="accordion">
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

### JavaScript / jQuery
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

### Initialize the plugin
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

The example initialization call will create an accordion on the `#my-accordion` element with multiple box opening capability and with animation at 400 speed.

```javascript
<script type="text/javascript">
/* define $ as jQuery just in case */
( function( $ )
{
	/* doc ready */
	$( function( )
	{
		$( '#my-accordion' ).accordion({
			multiple: true,
			animation: true,
			speed: 400
		});
	});
})( jQuery );
</script>
```

### Style the plugin with CSS
The demo pages have some basic CSS to add some structure to the page, which can be seen here: http://www.dockstreetmedia.com/demo/accordion/css/main.css.  Some of the demos also have some styling for the accordions, which can be seen here: http://www.dockstreetmedia.com/demo/accordion/css/accordion.css.

You can modify or add your own CSS to match your own preferences.

<strong>NOTE</strong>: the CSS should work for all modern browsers (Chrome, Firefox, Safari, etc.) and Internet Explorer 8 and later.  IE 7 and older, things fall apart.  However, if you are still using IE 7, then I'm sorry, but that's your fault.

## Demos

The demos index can be viewed here:

* http://www.dockstreetmedia.com/demo/accordion/index.html.  

View the source to see how each accordion was initialized and styled.  

## Learn / Adopt / Fork
The entirety of the plugin is included in this repository, including the demo section.  You can easily view all of the code in order to learn more about it.  I try to use clear commenting to explain the code.

Also, feel free to adopt and adapt to make it your own.  If you like, fork it and send over a pull request.  Add or solve existing issues.  It is open-source, after all.
