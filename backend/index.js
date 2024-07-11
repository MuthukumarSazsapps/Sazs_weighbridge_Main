// import express from "express";
// import mysql from "mysql2";
// import cors from "cors";
// import jwt from "jsonwebtoken";
// import bcrypt from "bcrypt";
// import cookieParser from "cookie-parser";
// import bodyParser from "body-parser";

// const salt = 10;
// const app = express();
// const port = 5000;

// app.use(express.json());
// app.use(
//   cors({
//     origin: "http://localhost:3000",
//     methods: ["POST", "GET"],
//     credentials: true,
//   })
// );
// app.use(cookieParser());
// app.use(bodyParser.json());

// const db = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "tn96D1696",
//   database: "players",
// });

// const verifyUser = (req, res, next) => {
//   const token = req.cookies.token;
//   if (!token) {
//     return res.json({Error: "You are not authenticated"});
//   } else {
//     jwt.verify(token, "jwt-secret-key", (err, decoded) => {
//       if (err) {
//         return res.json({Error: "Token is not valid"});
//       } else {
//         req.name = decoded.name;
//         next();
//       }
//     });
//   }
// };

// app.get("/", verifyUser, (req, res) => {
//   return res.json({Status: "success", name: req.name});
// });

// app.post("/register", (req, res) => {
//   const {name, email, password} = req.body;
//   const sql =
//     "INSERT INTO adminRegister (`name`, `email`, `password`) VALUES (?, ?, ?)";

//   bcrypt.hash(password, salt, (err, hash) => {
//     if (err) return res.json({error: "Error hashing password"});

//     const values = [name, email, hash];

//     db.query(sql, values, (err, result) => {
//       if (err) return res.json({error: "Inserting data error in server"});
//       return res.json({status: "success"});
//     });
//   });
// });

// app.post("/login", (req, res) => {
//   const {email, password} = req.body;
//   const sql = "SELECT * FROM adminRegister WHERE email = ?";

//   db.query(sql, [email], (err, data) => {
//     if (err) return res.json({error: "Login error in server"});
//     if (data.length > 0) {
//       bcrypt.compare(password, data[0].password, (err, response) => {
//         if (err) {
//           console.error("Password compare error:", err);
//           return res.json({Error: "Password compare error"});
//         }
//         if (response) {
//           const name = data[0].name;
//           const token = jwt.sign({name}, "jwt-secret-key", {expiresIn: "1d"});
//           res.cookie("token", token, {httpOnly: true, sameSite: "strict"});
//           return res.json({Status: "success"});
//         } else {
//           return res.json({Error: "Password not matched"});
//         }
//       });
//     } else {
//       return res.json({Error: "No email existed"});
//     }
//   });
// });

// app.get("/logout", (req, res) => {
//   res.clearCookie("token");
//   return res.json({Status: "success"});
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });


// import express from 'express';
// import mysql from 'mysql2';
// import bcrypt from 'bcryptjs';
// import jwt from 'jsonwebtoken';
// import cors from 'cors';

// const app = express();
// const port = 5000;

// app.use(cors());
// app.use(express.json());

// const db = mysql.createConnection({
//   host: 'localhost',
//   user: "root",
//   password: "tn96D1696",
//   database: "Sazs_weighbridge",
// });

// db.connect(err => {
//   if (err) {
//     console.error('Database connection failed:', err.stack);
//     return;
//   }
//   console.log('Connected to database.');
// });

// app.post('/login', (req, res) => {
//   const { username, password } = req.body;
//   const query = 'SELECT * FROM Sazs_weighbridge_Login WHERE username = ?';
//   db.query(query, [username], (err, results) => {
//     if (err) throw err;

//     if (results.length === 0) {
//       return res.status(401).json({ message: 'User not found' });
//     }
//     const user = results[0];
//     bcrypt.compare(password, user.password, (err, isMatch) => {
//       if (err) throw err;
//       if (!isMatch) {
//         return res.status(401).json({ message: 'Invalid credentials' });
//       }
//       const token = jwt.sign({ id: user.id }, 'your_jwt_secret', { expiresIn: '1h' });
//       res.json({ token });
//     });
//   });
// });

  
// app.get('/ok',()=>{
//  console.log(`Server running on port 123`);  
// })


// app.listen(port, () => {
//   console.log(`Server running on port ${port}`);
// });





// const express = require('express');
import express from 'express';
import mysql from 'mysql2';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import cors from 'cors';
import bodyParser from "body-parser";
import {expressCspHeader,SELF } from 'express-csp-header';



const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(expressCspHeader({
  policies: {
     'default-src': [SELF],
    'img-src': ['data:', 'images.com'],
  }
}));

 const db = mysql.createConnection({
   host: 'localhost',
   user: "root",
   password: "tn96D1696",
   database: "Sazs_weighbridge",
 });

db.connect(err => {
  if (err) throw err;
  console.log('MySQL Connected...');
});

app.post('/login', (req, res) => {
  const { name, password } = req.body;
  console.log(name, password)

  const query = "SELECT * FROM Sazs_weighbridge_Login WHERE username=?";
  
  db.query(query, [name], (err, results) => {
    console.log(results)
    if (err) throw err;
    if (results.length === 0) {
      return res.json({ Status: 'error', Error: 'User not found' });
    }

    const user = results[0];
    bcrypt.compare(password, user.password, (err, isMatch) => {
      if (err) throw err;
      if (!isMatch) {
        return res.json({ Status: 'error', Error: 'Incorrect password' });
      }

      const token = jwt.sign({ id: user.id }, 'your_jwt_secret', {
        expiresIn: '1h',
      });
      res.json({ Status: 'success', token });
    });
  });
});

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});
