import Users from "../models/User.js";
import UserName from "../DomainValues/User/UserName.js";
import BirthDate from "../DomainValues/User/BirthDate.js";
import PhoneNumber from "../DomainValues/User/PhoneNumber.js";
import Email from "../DomainValues/User/Email.js";
import Password from "../DomainValues/User/Password.js";
import LastName from "../DomainValues/User/LastName.js";

export const getUsers = async (req, res) => {
  try {
    const users = await Users.findAll();
    res.json(users);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUser = async (req, res) => {
  try {
    const { id } = req.params;
    const user = await Users.findOne({
      where: {
        id,
      },
    });
    console.log(user);
    res.json(user ? null : { message: "User not found." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { userName, lastName, birthDate, phoneNumber, email, password } =
      req.body;

    let reqUserName = new UserName(userName);
    let reqUserLastName = new LastName(lastName);
    let reqUserBirthDate = new BirthDate(birthDate);
    let reqUserPhoneNumber = new PhoneNumber(phoneNumber);
    let reqUserEmail = new Email(email);
    let reqUserPassword = new Password(password);

    const user = await Users.findAll({
      where: {
        name: userName,
      },
    });

    if (user.length > 0) {
      return res.json({ message: "User Already Exists" });
    }

    const newUser = await Users.create({
      name: reqUserName.userName,
      last_name: reqUserLastName.lastName,
      birth_date: reqUserBirthDate.birthDate,
      phone_number: reqUserPhoneNumber.phoneNumber,
      email: reqUserEmail.Email,
      password: reqUserPassword.Password,
    });

    res.send("User Created With Id: " + newUser.id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { userName, lastName, birthDate, phoneNumber, email, password } =
      req.body;
    const { id } = req.params;

    let reqUserName = new UserName(userName);
    let reqUserLastName = new LastName(lastName);
    let reqUserBirthDate = new BirthDate(birthDate);
    let reqUserPhoneNumber = new PhoneNumber(phoneNumber);
    let reqUserEmail = new Email(email);
    let reqUserPassword = new Password(password);

    const user = await Users.findByPk(id);
    const userExists = await Users.findAll({
      where: {
        name: reqUserName.userName,
      },
    });
    console.log(reqUserName);
    if (userExists.length > 0) {
      return res.json({ message: "User Already Exists" });
    }

    user.name = reqUserName.userName;
    user.last_name = reqUserLastName.lastName;
    user.birth_date = reqUserBirthDate.birthDate;
    user.phone_number = reqUserPhoneNumber.phoneNumber;
    user.email = reqUserEmail.email;
    user.password = reqUserPassword.password;
    user.save();
    res.send("User Updated With Id: " + id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;
    await Users.destroy({
      where: {
        id,
      },
    });
    res.status(204).json(`User with id: ${id} deleted.`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
