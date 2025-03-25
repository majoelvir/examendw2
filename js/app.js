// Dom7
var $$ = Dom7;

// Init App
var glow = new Framework7({
  	id: 'com.glow',
  	root: '#glow',
	theme: 'md',
	view: {
        pushState: true
    },
	cache:false,
	cacheDuration: 0,
	modalTitle: 'glow Framework7',
	panel: {
		swipe: true,
	},
  	routes: [
		{
		path: '/Inicio/',
    	url: 'index.html',
    	name: 'Inicio',
  		},
		{
		path: '/products/',
    	url: 'index.html',
    	name: 'See all',
  		},
		{
		path: '/products/',
    	url: 'products.html',
    	name: 'products',
  		},
		{
		path: '/favoritos/',
    	url: 'favoritos.html',
    	name: 'favoritos',
  		},
		{
		path: '/perfil/',
    	url: 'perfil.html',
    	name: 'perfil',
  		}
		
		
	],
	dialog: {
		title: 'Glow App',
		buttonOk: 'Aceptar',
  	},
	popup: {
		closeOnEscape: true,
		backdrop : false
	},
	sheet: {
		closeOnEscape: true,
	},
	popover: {
		closeOnEscape: true,
	},
	actions: {
		closeOnEscape: true,
	}
});



$$('#btnLogin').on('click', function (e) {
	e.preventDefault();
	
	var $valid = $$('#form-login')[0].checkValidity();
	if ($valid){
        $$('#form-login').trigger('reset');	
        app.loginScreen.close('#modal-login');
		
		app.dialog.alert('¡ Bienvenido a la APP !');
    }
	
});



$$(document).on('click', '#btnCheckout', function (e) {
	e.preventDefault();

	
	app.dialog.confirm('¿Seguro desea finalizar su compra?', function () {
		
		//app.dialog.alert('Great!');
		
		var notification = app.notification.create({
		  icon: '<i class="material-icons">check</i>',
		  title: 'Order',
		  titleRightText: '',
		  subtitle: '',
		  text: "Your order has been received.",
		  closeTimeout: 3000,
		});
		notification.open();
		
	});
	
	
	
});





