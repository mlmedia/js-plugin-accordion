#Accordion plugin#

##Usage / Installation##

Usage of this accordion plugin entails the usual process: (1) create the HTML markup, (2) add the JavaScript / jQuery refs, (3) initialize the plugin with any available options, and (4) style the markup with CSS as desired.

###HTML###

The HTML markup used is the same with the exception of the ID used on the containing parent element. The top parent element can use any ID or class for initialization. The parent element contains as many "group" elements as desired. Each "group" element contains a "control" element and a "box" element. The "control" element optionally contains an "expand" and "collapse" element to display an icon indicating whether the group is open or closed.

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

Include jQuery in your page if you did not already do so.  

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
