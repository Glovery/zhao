var sqlMap = {
  //用户
  user: {
    add: 'insert into userinfo(id,name,password) values (0,?,?)',
    select: 'select * from userinfo',
    update: 'update userinfo set'
  },
  list: {
    add: 'INSERT INTO list(id,name,address,date) values (0,?,?,?)',
    select: 'SELECT * FROM list',
    update: 'UPDATE list SET',
    delete: 'DELETE FROM list WHERE id = '
  }
}

module.exports = sqlMap
