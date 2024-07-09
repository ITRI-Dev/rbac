import express from "express";

const router = express.Router();

const UserData = [{
  email: "acc@itri",
  password: "1234",
  role: "acc"
}, {
  email: "doctor@itri",
  password: "1234",
  role: "doctor"
}, {
  email: "nurse@itri",
  password: "1234",
  role: "nurse"
}]

router.get("/", (req, res, next) => {
  res.json({});
});

router.post("/login", (req, res, next) => {
  const { email, password } = req.body;

  const user = UserData.find(user => user.email === email && user.password === password)

  res.json(user);
});

export default router;
