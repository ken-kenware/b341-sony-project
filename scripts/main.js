var costOfPS4S = 299;
var costOfXBone = 629;
var costDiff = costOfXBone - costOfPS4S;

console.log('Price Difference:', costDiff);

var comparisons = [
	{
		title: 'Candy Bars',
		price: '.99',
		cls: 'candy',
		img: 'images/reesesicon.jpg'
	},
	{
		title: 'Packs of Top Ramen',
		price: '.25',
		img: 'images/ramen.jpg',
		cls: 'ramen'
	},
	{
		title: 'Cans of Mt. Dew',
		price: '.75',
		img: 'images/mtdewcan.jpg',
		cls: 'mtdewcan'
	},
	{
		title: 'Two Liter Bottles of Mt. Dew',
		price: '1.39',
		cls: 'twolitermtdew',
		img: 'images/2lmtdew.jpg'
	},
	{
		title: 'Bags of Doritos',
		price: '4.29',
		cls: 'doritos',
		img: 'images/doritos.jpg'
	},
	{
		title: 'Lobster Dinners',
		price: '25',
		cls: 'lobster',
		img: 'images/lobster.jpg'
	},
	{
		title: 'PS4 Games',
		price: '59.99',
		cls: 'game',
		img: 'images/killone-box.jpg'
	},
	{
		title: 'Blu-Ray Movies',
		price: '30',
		cls: 'movie',
		img: 'images/bluray.jpg'
	},
	{
		title: 'Music CDs',
		price: '12',
		cls: 'cd',
		img: 'images/cd.jpg'
	}
];

var comparisonFlat = [];
for(var i = 0; i < comparisons.length; i++) {
	comparisonFlat.push(comparisons[i].title);
}

$(window).ready(function(){
	var totalAmount = $("#totalAmount");
	var totalItem = $("#totalItem");
	var listItems = $("ul#listItems");
	// $('#chosenItem').typeahead({
	// 	name: 'items',
	// 	local: comparisonFlat
	// });
	var theTypeahead = $("#chosenItem").typeahead({
		name: 'items',
		local: comparisonFlat
	});

	theTypeahead.on('typeahead:selected', function(ev, data){
		//Get the item:
		var idx = comparisonFlat.indexOf(data.value),
			item = comparisons[idx],
			price = item.price,
			totalItems = Math.floor(costDiff/price);

		totalAmount.text(totalItems);
		totalItem.text(item.title);

		var div = $("<ul class=\"list-unstyled list-inline\">");
		for(var i = 0; i < totalItems; i++){
			div.append("<li class=\"" + item.cls + "\"><img src=\"" + item.img + "\"></li>");
		}
		listItems.replaceWith(div);
		listItems = div;
	});
});
