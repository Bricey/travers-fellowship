exports.landingPage = (req,res) => {
	res.render('index',{title:'Welcome'});
};

exports.mainStory = (req,res) => {
	res.render('feature',{title:'Syria\'s Refugees'});
}

exports.profKhalil = (req,res) => {
	res.render('khalil',{title:'Profile'});
}

exports.profFatima = (req,res) => {
	res.render('fatima',{title:'Profile'});
}

exports.profMohammed = (req,res) => {
	res.render('mohammed',{title:'Profile'});
}

exports.profWadad = (req,res) => {
	res.render('wadad',{title:'Profile'});
}

exports.profAbid = (req,res) => {
	res.render('abid',{title:'Profile'});
}
