exports.landingPage = (req,res) => {
	res.render('index',{title:'Welcome'});
};

exports.mainStory = (req,res) => {
	res.render('feature',{title:'Syria\'s Refugees'});
}

exports.profiles = (req,res) => {
	res.render('profiles',{title:'Profiles'});
}
