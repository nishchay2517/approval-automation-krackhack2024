const { Router } = require('express');
const adminRoute = Router();
const Club = require('../models/club');
const clubfa = require('../models/clubfa');
const secretary = require('../models/secretary');
const societyfa = require('../models/societyfa');
const chairsap = require('../models/chairsap');
const deanstudents = require('../models/deanstudents');

adminRoute.get('/admin', async (req, res) => {
  club = await Club.find({});
  Clubfa = await clubfa.find({});
  Secretary = await secretary.find({});
  Societyfa = await societyfa.find({});
  Chairsap = await chairsap.find({});
  Deanstudents = await deanstudents.find({});
  res.render('admin', {
    club,
    Clubfa,
    Secretary,
    Societyfa,
    Chairsap,
    Deanstudents,
    user: null
  });
});

adminRoute.post('/admin', (req, res) => {
  type = req.body.type.split(' ').join('');
  res.redirect(`/admin/add/${type}`);
});

adminRoute.get('/admin/add/:type', (req, res) => {
  res.render('addUsers', { type: req.params.type, user:null });
});

adminRoute.post('/admin/addClub', (req, res) => {
  data = req.body;
  console.log(data);
  const newClub = new Club({
    name: data.name,
    email: data.email,
    society: data.Society,
  });
  newClub.save();
  res.redirect('/admin');
});

adminRoute.post('/admin/addSecretary', (req, res) => {
  data = req.body;
  console.log(data);
  const newsecretary = new secretary({
    name: data.name,
    email: data.email,
    society: data.Society,
  });
  newsecretary.save();
  res.redirect('/admin');
});

adminRoute.post('/admin/addClubFA', (req, res) => {
  data = req.body;
  console.log(data);
  const newClubfa = new clubfa({
    name: data.name,
    email: data.email,
    society: data.Society,
    club: data.club,
  });
  newClubfa.save();
  res.redirect('/admin');
});

adminRoute.post('/admin/addSocietyFA', (req, res) => {
  data = req.body;
  console.log(data);
  const newsocietyfa = new societyfa({
    name: data.name,
    email: data.email,
    society: data.Society,
  });
  newsocietyfa.save();
  res.redirect('/admin');
});

adminRoute.post('/admin/addChairSAP', (req, res) => {
  data = req.body;
  console.log(data);
  const newchairsap = new chairsap({
    name: data.name,
    email: data.email,
  });
  newchairsap.save();
  res.redirect('/admin');
});

adminRoute.post('/admin/addDeanStudents', (req, res) => {
  data = req.body;
  console.log(data);
  const newdeanstudents = new deanstudents({
    name: data.name,
    email: data.email,
  });
  newdeanstudents.save();
  res.redirect('/admin');
});

module.exports = adminRoute;
