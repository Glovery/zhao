const models = require('../db')
const express = require('express')
const router = express.Router()
const mysql = require('mysql')
const $sql = require('../sqlMap')

// 连接数据库
const con = mysql.createConnection(models.mysql)

con.connect();
var jsonWrite = function (res, ret) {
  if (typeof ret === 'undefined') {
    res.json({
      code: '1',
      msg: '操作失败'
    })
  } else {
    res.json(ret)
  }
}

// 增加用户接口
router.post('/adduser', (req, res) => {
  let sql = $sql.user.add;
  let params = req.body;
  console.log(params);
  con.query(sql, [params.name, params.age], (err, result) => {
    if (err) {
      console.log(err)
    }
    if (result) {
      jsonWrite(res, result)
    }
  })
})
router.post('/login', (req, res) => {
  let sql_name = $sql.user.select;
  let params = req.body;
  if (params.name) {
    sql_name += " where name = '" + params.name + "'"
  }
  con.query(sql_name, (err, result) => {
    if (err) {
      console.log(err)
    }
    if (result[0] === undefined) {
      res.send('-1')
    } else {
      let resultArray = result[0];
      console.log(params.password)
      if (resultArray.password === parseInt(params.password)) {
        res.send({
          msg: '1'
        });
      } else {
        res.send('0')
      }
    }
  })
})
// 查询列表
router.post('/allList', (req, res) => {
  let sql_all = $sql.list.select
  con.query(sql_all, (err, result) => {
    if (err) {
      console.log(err);
      res.send('查询失败' + err)
    } else {
      jsonWrite(res, result)
    }
  })
})
// 查询一条数据
router.post('/list', (req, res) => {
  let params = req.body;
  let sql_id = $sql.list.select + " WHERE id = '" + params.id + "'"
  con.query(sql_id, (err, result) => {
    if (err) {
      console.log(err)
      res.send('查询失败', err)
    } else {
      jsonWrite(res, result)
    }
  })
})
// 更新数据
router.post('/update', (req, res) => {
  let params = req.body;
  let update_id = $sql.list.update + " name = '" + params.name + "'," + " address = '" + params.address + "'," + " time = '" + params.time + "'" + " WHERE id = " + params.id;
  con.query(update_id, (err, result) => {
    if (err) {
      res.send('更新失败', err)
    } else {
      res.send({
        msg: '更新成功',
        code: 200
      })
    }
  })
})
// 删除单条数据
router.post('/delete', (req, res) => {
  let params = req.body;
  let delete_id = $sql.list.delete + params.id;
  con.query(delete_id, (err, result) => {
    if (err) {
      res.send('删除失败', err)
    } else {
      res.send({
        code: 200,
        msg: '删除成功'
      })
    }
  })
})
router.post('/delall', (req, res) => {
  let params = req.body;
  params.forEach(item => {
    let delete_id = $sql.list.delete + item;
    con.query(delete_id, (err, result) => {
      if (err) {
        res.send('删除失败', err)
      }
    })
  })
  res.send({
    code: 200,
    msg: '删除成功'
  })
})

module.exports = router
