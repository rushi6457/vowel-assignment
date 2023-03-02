const User = require("../models/userModel")
const argon = require("argon2");
const jwt = require('jsonwebtoken');
require('dotenv').config();

const Signup = async(req,res) =>{

    const {email,password} = req.body;
    let hashed = await argon.hash(password);
    let existingUser = await User.findOne({email}) 
    try {
        if(existingUser){
            res.send({message:"User already exist, login to proceed",status:false}).status(200)
        }
     else{
        if(email.includes('@vowel.com')){
            let user =  new User({
            email,
            password:hashed,
            role:"admin"
        })
        await user.save();
        res.status(200).send({status:true,admin:user})
        }
        else{
               let user =  new User({
            email,
            password:hashed,
            role:"user"
        })
        await user.save();
        res.status(200).send({status:true,user:user})
        }
     }
    } catch (error) {
        res.send({error:error})
    }
}

const findUser = async (data) => {
  let user = await User.findOne({ ...data });
  if (user) {
    return user;
  } else {
    return false;
  }
};

const validateUser = async (data) => {
  let { email, password } = data;
  try {
    let user = await findUser({ email });
    
    if (user) {
      if (await argon.verify(user.password, password)) {
        return user;
      } else {
        return false;
      }
    } else {
      return false;
    }
  } catch (e) {
    return false;
  }
};
const Login = async (req, res) => {
  let { email, password } = req.body;
  let user = await validateUser({ email, password });
    let userId = user._id
      if(user && email.includes("@vowel.com")){
         if (user) {
           
    let token = jwt.sign(
      { email: user.email,role:user.role},
      process.env.TOKEN_SECRET,
      {
        expiresIn: "2 days",
      }
    );

    let refreshToken = jwt.sign(
      { email: user.email},
        process.env.REFRESH_TOKEN,
      { expiresIn: "7 days" }
    );
     res.status(200).send({ message: "Admin Login successfull" ,userId, token, refreshToken,role:"Admin" ,status:true});
  } else {
    return res.send({ status: false, messege: "something went wrong" });
  }
      }
      else{

      if (user  ) {
    let token = jwt.sign(
      { email: user.email,role:user.role},
      process.env.TOKEN_SECRET,
      {
        expiresIn: "2 days",
      }
    );

    let refreshToken = jwt.sign(
      { email: user.email},
        process.env.REFRESH_TOKEN,
      { expiresIn: "7 days" }
    );
     res.status(200).send({ "Message": "Login successfull" ,userId:userId, token,email, refreshToken ,role:"User",status:true });
  } else {
    return res.send({ status: false, messege: "something went wrong" });
  }

      }
};



const GetAllUser = async(req,res) =>{

    let users = await User.find()
    
    try {
        if(users){
          res.send({users:users,status:true})
    }
    else{
        res.send({status:false,message:"No user found"})
    }
} catch (error) {
        res.send({status:false,message:error})
    }

}

module.exports = {
    Signup,
    Login,
    GetAllUser
}