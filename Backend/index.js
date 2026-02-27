//ทำการimport โมดูลhttpท่จำเป็น
/*const http = require('http');
const host ='localhost';
const port = 8000;

//กำหนดค่าserver
const requestlistener = function(req,res){
    res.writeHead(200);
    res.end('Hello,World This is my first server.');
}
//run server
const server = http.createServer(requestlistener);
server.listen(port,host,()=>{
    console.log(`Server is running on http://${host}:${port}`);
});*/

const express = require('express');
const bodyParser = require('body-parser')
const mysql = require('mysql2/promise')
const app = express();
app.use(bodyParser.text());
app.use(bodyParser.json());
const port = 8000;



const initMySQL = async() =>{
    conn = await mysql.createConnection({
        host:'localhost',
        user:'root',
        password:'root',
        database: 'webdbb',
        port:8700
    });
    console.log('Connected to MySQL databese');
}

// path = get/users สำหรับ ดึงข้อมูล users ทั้งหมเด

app.get('/users', async (req,res)=>{
    const results = await conn.query('SELECT * FROM users');
    res.json(results[0]);
})

//path: = POST /users สำหรับเพิ่ม  user ใหม่ 

app.post ('/users', async (req,res)=>{
    try {
        let user = req.body;
        const results = await conn.query('INSERT INTO users SET ?', [user]); // ลองใส่ [ ] ครอบ user
        res.json({
        message: 'User added successfully',
        data: results[0]

    });
    } catch (error) {
        console.error('Error inserting user:',error);
        res.status(500).json({ message: 'Error adding user'});
    }   
})
//path =GET/users/:id ดึงข้อมูล user ตาม id;
app.get('/users/:id', async (req,res)=>{
    try{
        let id = req.params.id;
        const results =await conn.query('SELECT * FROM users WHERE id = ?',id);
        if (result[0].length ===0){
            throw { statusCode:404, message: 'User not found' };
        }
        res.json(results[0][0]);

    }catch (error){
        console.error('Error fetching user:',error);
        let statusCode = error.statusCode || 500;
        res.status(statusCode).json({
            message: error.message || 'Error fetching user'
        });
    }
})

//path: = PUT /users/:id อัพเดทข้อมูล user ตาม รก
app.put('/user/:id', async (req,res)=>{
    try{
        let id = req.params.id;
        let updateUser = req.body;
        const results = await conn.query('UPDATE users SET ? WHERE id = ?', [updateUser, id]);
        res.json({
            message: 'User updated successfully',
            data: results[0]
        });
    }catch (error){
        console.error('Error deleting user:',error);
        res.status(500).json({message: 'Error deleting user'});
    }
    
})



app.get('/testdb-new', async (req,res) =>{
    try{
        const conn = await mysql.createConnection({
            host: 'localhost',
            user: 'root',
            password: 'root',
            database:'webdbb',
            port: 8700
        });
        const results =await conn.query('SELECT *FROM users');
        res.json(results[0]);

    }catch (error){
        console.error('Error connecting to the database:',error);
        res.status(500).json({error: 'Internal Server Error'});
    }
});

/*app.get('/testdb',(req,res) => {
    mysql.createConnection({
        host: 'localhost',
        user:'root',
        password: 'root',
        database: 'webdbb',
        port: 8700

    }).then((conn) => {
        conn
        .query('SELECT * FROM users')
        .then((results) => {
            res.json(results[0]);
        }).catch((err)=>{
            res.json({ error: err.message});
        
        });
    })
})
app.get('/testdb-new', async (req,res)=>{
    const conn = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password:'root',
        database:'webdbb',
        port: 8700
    });
    const result = await conn.query('SELECT * FROM users');
    res.json(results[0]);
}) */


let users = [];
let counter = 1;
/*
Get /users - ดึงข้อมูลผู้ใช้ทั้งหมด
Post /users - เพิ้มผู้ใช้ใหม่
Get /users/:id - ดึงข้อมูลผู้ใช้ตาม ณฏ
Put /users/:id - แก้ไขข้อมูลผู้ใช้ตาม ID ที่บันทึก
DELETE /users/:id - ลยผู้ใช้ตาม ID ที่บันทึก
*/


//path get
app.get('/users',(req,res) =>{
    res.json(users);
});

//path post
app.post('/user', (req,res)=>{
    let user = req.body;
    user.id = counter
    counter +=1;
    users.push(user);
    res.json({
    message: 'User added successfully',
    user:user
    });
});

//path=Put /user/:id
app.patch('/user/:id', (req,res)=>{
     let id = req.params.id;
     let updateUser = req.body;
         // หา  user ที่จาก id ที่ส่งมา
     let selectedIndex = users.findIndex(user => user.id == id);
     



    // อัพเดทข้อมูล  users
    //users[selectedIndex].firstname = updateUser.firstname || users[selectedIndex].firstname;
    //users[selectedIndex].lastname = updateUser.lastname || users[selectedIndex].lastname;

    if (updateUser.firstname){
        users[selectedIndex].firstname = updateUser.firstname;
    }
    if (updateUser.lastname){
        users[selectedIndex].lastname = updateUser.lastname;
    }
 
    
    res.json({
        message: 'User updated successfully',
        data: {
            user: updateUser,
            indexUpdate: selectedIndex
        }
    })

    //ส่ง users ที่อัพเดทแล้วกลับไป
    
})
app.delete('/users/:id',(req,res)=>{
    let id =req.params.id;

    // หา index จาก id ที่ต้องการลบ
    let selectedIndex = users.findIndex(user => user.id == id);

    // ลบ user ออกจาก  users
    delete users[selectedIndex];
    res.json({
        message:'User deleted successfully',
        indexDelete: selectedIndex
    });
})

    
    
    /*res.send('Hello, World! test');
});*/


app.listen(port,  async() => {
    await initMySQL();
    console.log(`Server is running on http://localhost:${port}`);

});     