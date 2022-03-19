const express = require('express');
const { getDb, saveDb } = require('./db');

const router = express.Router();

router.get('/todo', async (req, res) => {
  try {
    const data = await getDb();
    res.status(202).send(data.todo);
  } catch (err) {
    res.status(500).send({
      err: err.message
    });
  }
});

router.get('/todo/:id', async (req, res) => {
  try {
    const data = await getDb();
    const todo = data.todo.find(item => item.id === +req.params.id);
    if (!todo) {
      return res.status(404).end();
    }
    res.status(202).send(data.todo);
  } catch (err) {
    res.status(500).send({
      err: err.message
    });
  }
});

router.post('/todo', async (req, res) => {
  console.log('body: ', req.body);
  try {
    const postData = req.body;

    const db = await getDb();

    const lastTodo = db.todo[db.todo.length - 1];
    postData.id = lastTodo.id + 1 || 1;

    db.todo.push(postData);
    await saveDb(db);
    res.json(postData);
  } catch (err) {
    res.status(500).json({
      err: err.message
    });
  }
});

router.patch('/todo/:id', async (req, res) => {
  const todo = req.body;

  const db = await getDb();
  const ret = db.todo.find(item => item.id === +req.params.id);

  Object.assign(ret, todo);
  console.log('db3: ', db);

  await saveDb(db);

  res.send(todo);
});

router.delete('/todo/:id', async (req, res) => {
  try {
    const id = +req.params.id;
    const db = await getDb();
    const index = db.todo.findIndex(item => item.id === id);
    if (index === -1) {
      return res.status(404).json({
        err: '未找到id'
      });
    }
    db.todo.splice(index, 1);

    await saveDb(db);
    res.send(db);
  } catch (err) {
    res.status(500).json({
      err: err.message
    });
  }
});

module.exports = router;
