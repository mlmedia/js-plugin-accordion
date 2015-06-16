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

####CDN####
```html
<script src="//code.jquery.com/jquery-1.11.3.min.js"></script>
```

####Self-hosted####
```html
<script src="js/jquery-1.11.3.min.js"></script>
<!-- relative path to your JS folder -->
```


```javascript
<script type="text/javascript">
/* define $ as jQuery just in case */
( function( $ )
{
	/* doc ready */
	$( function( )
	{
		$( '#my_accordion_1' ).accordion( );
	});
})( jQuery );
</script>
```
