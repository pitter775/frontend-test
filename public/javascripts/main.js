// your code

$.getJSON( "fazenda.json", function( dados ) {	
	var items = [];
	for(linha=0; linha < dados.data.length; linha++)
		{
			
			if(linha & 1) {cor = 'bgescuro'}else{cor = ''};
			positivo = dados.data[linha].positive;
			negativo = dados.data[linha].negative;
			total = parseFloat(positivo) + parseFloat(negativo);			
			negativoporc = (negativo * 100) / total;
			positivoporc = (positivo * 100) / total;			
			positivoporc = Math.round(positivoporc)+"%";
			negativoporc = Math.round(negativoporc)+"%";			
			items.push( 
			"<li class='"+cor+" field-tip'>",
				"<div class='coluna-1'>",
					"<div class='circulo' style='background: url(" + dados.data[linha].picture + ")center center no-repeat; -webkit-background-size: cover;-moz-background-size: cover;-o-background-size: cover;background-size: cover;'></div>",
					"<div class='circulop'>" + (linha+1) + "</div>",
				"</div>",
				"<div class='coluna-2'>",
					"<p class='titulo'>" + dados.data[linha].name + "</p>",
					"<p class='subtitulo'>" + dados.data[linha].description + "</p>",
				"</div>",
				"<span class='tip-content radius2'>",
					"<div class='tipconte-left' >",
						"<div class='tiptop-right'>GOSTAM</div>",
						"<div class='tipbottom-left'>" + positivoporc + "</div>",
					"</div>",
					"<div class='tipconte-right'>",
						"<div class='tiptop-left'>NÃO GOSTAM</div>",
						"<div class='tipbottom-right'>" + negativoporc + "</div>",
					"</div>",
				"</span>",
			"</li>" );			
		}
	$( "<ul/>",
		{ "class": "my-new-list",    html: items.join( "" )  }
	 ).appendTo( "#resultado" );
});






