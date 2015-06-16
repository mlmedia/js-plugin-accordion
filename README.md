#Accordion plugin#

##Installation##

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
