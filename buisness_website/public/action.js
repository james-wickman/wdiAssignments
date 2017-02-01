var links_div = $('.links_div');
var pics_array = [
	{
		src: '/images/458.jpg',
		txt: 'DRAG PACKAGE',
		price: '20,000-80,000',
		paragraph: 'this is the package to get your car fully ready for the strip.  takes about 3 weeks',
	},
	{
		src: '/images/cars-003.jpg',
		txt: 'SPEED PACKAGE',
		price: '35,000- 100,000',
		paragraph: 'this package will get you around a track in break neck times.  takes about 4 weeks',

	},
	{
		src: '/images/lambo.jpg',
		txt: 'COSMETIC PACKAGE',
		price: '15,000-60,000',
		paragraph: 'this package will make your car look better and preform better aerodynamicly.  takes about 2 weeks'

	},
	{
		src: '/images/konig.jpg',
		txt: 'SHOWROOM PACKAGE',
		price: '30,000-110,000',
		paragraph: 'you wont be able to find a single scratch or blemish, might make you not want to take it out of the garage.  takes about 7 weeks'
	},
	{
		src: '/images/enginebay.png',
		txt: 'TUNING PACKAGE',
		price: '5,000-35,000',
		paragraph: 'this gets everything your car has to give. takes less then 1 week.'
	},
	{
		src: '/images/fengine.jpg',
		txt: 'REBUILD PACKAGE',
		price: '6,000-45,000',
		paragraph: 'we can rebuild and upgrade engine, transmission, and more.  takes about 1 week.'
	},
	{
		src: '/images/custom.jpg',
		txt: 'CUSTOM',
		price: 'TBD',
		paragraph: 'please send an inquery about this as results very'
	}

]

function creatingPics() {
	links_div.html("<h1 class='inventory_head'>What are you looking for?</h1>")
	for (var i = 0; i < pics_array.length; i++) {
		links_div.append("<a href='/contact_us?car_id=" + pics_array[i].txt + "' class='img_inventory col-lg-4 col-md-4 col-sm-6'><img src='" + pics_array[i].src + "'> <h4 class='pic_text'>" + pics_array[i].txt + "</h4></a>")
	}
}
creatingPics();




















