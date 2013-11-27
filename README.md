# Rough: Cover

As [background-size](http://caniuse.com/#feat=background-img-opts) isn't too well supported, this component will check for `background-size` support and create scalable and absolutely centered `img` out of the background images.

## Installation

* With [Bower](http://bower.io/): `bower install --save rough-cover`
* With git: `git clone https://github.com/oskarrough/rough-cover.git`
* As download: [zip](https://github.com/oskarrough/rough-cover/zipball/master)

## Getting started

* `<div class="Cover Cover--intrinsic">` - will scale height based on width. Be sure to edit the ratio in the CSS.
* `<div class="Cover Cover--fixed">` - will center image both horizontally and vertically inside the fixed dimensions. Be sure to edit the height in the CSS.
* If you want these default styles, be sure that the element that contains the background image has the class `.Cover`.

And Check the demo.html
