var express = require('express');
var router = express.Router();

/* GET userlist. */
router.get('/userlist', function(req, res) {
  var db = req.db;
  var collection = db.get('userlist');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});


/* GET topiclist. */
router.get('/topiclist', function(req, res) {
  var db = req.db;
  var collection = db.get('topiclist');
  collection.find({},{},function(e,docs){
    res.json(docs);
  });
});

/* POST to addtopic. THISSS */
router.post('/addtopic', function(req, res) {
  var db = req.db;
  var collection = db.get('topiclist');
  collection.insert(req.body, function(err, result){
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });
});

/* TODO POST to deletetopic. THISSS */
router.post('/deletetopic', function(req, res){
	var db = req.db;
	var collection = db.get('topiclist');
	collection.deleteOne(req.body, function(err, result){
		res.send(
			(err === null) ? {msg: '' } : {msg: err}
		);
	});
});

/* TODO POST to deletetopic. THISSS */
router.post('/deleteuser', function(req, res){
	console.log("in deleteuser")
	var db = req.db;
	var collection = db.get('userlist');
	console.log(req.body);
	collection.remove(req.body, function(err, result){
		res.send(
			(err === null) ? {msg: '' } : {msg: err}
		);
	});
});

/* POST to adduser. THISSS */
router.post('/adduser', function(req, res) {
  var db = req.db;
  console.log(req.body);
  var collection = db.get('userlist');
  collection.insert(req.body, function(err, result){
    res.send(
      (err === null) ? { msg: '' } : { msg: err }
    );
  });
});

module.exports = router;