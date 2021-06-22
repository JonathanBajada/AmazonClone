const express = require('express');
const router = express.Router();

// Load User Model
const User = require('../../models/User');

/* GET users listing. */
router.get('/users', async (req, res) =>  {
  const users = await User.find({});

  try {
    res.send(users);
  } catch (err) {
    res.status(500).send(err);
  }
});

router.post('/user', async (req, res) => {
  const user = new User(req.body)

  try {
    await user.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
})

router.patch('/user/:id', async (req, res) => {
  try {
    await User.findByIdAndUpdate(req.params.id, req.body);
    await User.save();
    res.send(user);
  } catch (err) {
    res.status(500).send(err);
  }
})

router.delete('/user/:id', async (req, res) => {
  try {
    const user = await User.findByIdAndDelete(req.params.id);

    if (!user) res.status(404).send("No item found.");
    res.status(200).send();
  } catch (err) {
    res.status(500).send(err);
  }
})

module.exports = router;
