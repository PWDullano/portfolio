var rotate = document.getElementById( 'logo' );

rotate.addEventListener( 'mouseover', function () {

    this.className = 'over';

}, false );

rotate.addEventListener( 'mouseout', function () {

    var rotate = this;

    rotate.className = 'out';
    window.setTimeout( function () { rotate.className = '' }, 550 );

}, false );
