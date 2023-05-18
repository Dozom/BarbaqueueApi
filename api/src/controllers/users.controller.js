import Users from "../models/User.js";
import UserName from "../DomainValues/User/UserName.js";
import BirthDate from "../DomainValues/User/BirthDate.js";
import PhoneNumber from "../DomainValues/User/PhoneNumber.js";
import Email from "../DomainValues/User/Email.js";
import Password from "../DomainValues/User/Password.js";
import LastName from "../DomainValues/User/LastName.js";

import UserData from "../requestObjects/UserData.js";

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
    const { name, last_name, birth_date, phone_number, email, password } =
      req.body;

    let userData = new UserData();
    userData.name = new UserName(name).values;
    userData.last_name = new LastName(last_name).values;
    userData.birth_date = new BirthDate(birth_date).values;
    userData.phone_number = new PhoneNumber(phone_number).values;
    userData.email = new Email(email).values;
    userData.password = new Password(password).values;

    const user = await Users.findAll({
      where: {
        name: userData.name,
      },
    });

    if (user.length > 0) {
      return res.json({ message: "User Already Exists" });
    }

    const newUser = await Users.create({
      name: userData.name,
      last_name: userData.last_name,
      birth_date: userData.birth_date,
      phone_number: userData.phone_number,
      email: userData.email,
      password: userData.password,
    });

    res.send("User Created With Id: " + newUser.id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    const { name, last_name, birth_date, phone_number, email, password } =
      req.body;

    let userData = new UserData();
    userData.name = new UserName(name).values;
    userData.last_name = new LastName(last_name).values;
    userData.birth_date = new BirthDate(birth_date).values;
    userData.phone_number = new PhoneNumber(phone_number).values;
    userData.email = new Email(email).values;
    userData.password = new Password(password).values;

    const userExists = await Users.findAll({
      where: {
        name: userData.name,
      },
    });

    if (userExists.length > 0) {
      return res.json({ message: "User Already Exists" });
    }
    try {
      const user = await Users.findByPk(id);

      console.log("wasaaaa" + userData.name);

      if (user) {
        console.log("entered" + userData.name);
        user.name = userData.name;
        user.last_name = userData.last_name;
        user.birth_date = userData.birth_date;
        user.phone_number = userData.phone_number;
        user.email = userData.email;
        user.password = userData.password;
        await user.save();
        console.log("User saved successfully.");
      } else {
        console.log("User not exists.");
      }
    } catch (error) {
      console.error("Error saving user:", error);
    }

    res.json({ message: "User Updated With Id: " + id });
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
    res.status(204).json({ message: "User deleted with Id: " + id });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
