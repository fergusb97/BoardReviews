/* GET 'home' page */
const homelist = function(req, res){
res.render('review-list', { title: 'Board Reviews - Find the best board for you ',
pageHeader: {
title: 'Board Reviews',
strapline: 'Find the best board for you!' 
},
reviews: [{
	name: 'Oxbow Longboard',
	review: 'This surfboard is great for beginners who are just starting out surfing! It is great for small and medium waves (1 - 4ft). On a day with perfect conditions you could even go a bit bigger. It is made of plastic and durable as hell with plenty volume. I would definitely recommend this board to a beginner.',
	rating: 4,
	facilities: ['7ft 6"','Plastic','62L']
},{
	name: 'NSP Protech Fish',
	review: 'This NSP board is a dream! I stepped down from my longboard looking to progress to a smaller board and I will never look back. This board is super lightweight and durable with a nice rocker to help you drop in on the bigger waves. For anyone looking to step down from a foamie or longboard, I would suggest considering this for your next purchase.',
	rating: 5,
	facilities: ['7ft 2"','Epoxy','52L']
},{
	name: 'Eric Gleisman Shortboard',
	review: 'This shortboard is extremely fun and lightweight. Dont expect to be catching white water on this board shortboard though as it has only 36L of volume and it not for the heavier surfer. This board preforms great out the back and on the days where it is smaller but clean.',
	rating: 5,
	facilities: ['6ft 2"','Epoxy/Foam']
}]
});
};
/* GET 'Location info' page */
const locationInfo = function(req, res){
res.render('index', { title: 'Location info' });
};
/* GET 'register' page */
const register = function(req, res){
res.render('register-page', { title: 'Register' });
};
module.exports = {
homelist,
locationInfo,
register
};
