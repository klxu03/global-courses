const userRoutes = (app, fs) => {
  // variables
  const dataPath = './data/users.json';

  // READ
  app.get('/user/list', (req, res) => {
    fs.readFile(dataPath, 'utf8', (err, data) => {
      if (err) {
        throw err;
      }

      res.send(JSON.parse(data));
    });
  });

  app.post('user/add', (req, res) => {
    const existingUsers = getUserData();

    const userData = req.body;

    existingUsers.push(userData);
    saveUserData(existingUsers);
    res.send({ success: true, msg: 'User data updated successfully' });
  });
};

module.exports = userRoutes;
