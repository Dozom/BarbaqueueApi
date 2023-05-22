import Parcel from "../models/Parcel.js";

import Capacity from "../DomainValues/Parcel/Capacity.js";
import IdUser from "../DomainValues/Parcel/IdUser.js";
import PeoplePrice from "../DomainValues/Parcel/PeoplePrice.js";
import Description from "../DomainValues/Parcel/Description.js";
import TitleString from "../DomainValues/Parcel/TitleString.js";
import LocationString from "../DomainValues/Parcel/LocationString.js";

import ParcelData from "../requestObjects/ParcelData.js";

export const getParcels = async (req, res) => {
  try {
    const parcels = await Parcel.findAll();
    res.json(parcels);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getParcel = async (req, res) => {
  try {
    const { id } = req.params;
    const parcel = await Parcel.findOne({
      where: {
        id,
      },
    });
    console.log(parcel);
    res.json(parcel ? parcel : { message: "Parcel not found." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// GET by User Id
export const getParcelByUser = async (req, res) => {
  try {
    const { id } = req.params;
    const parcels = await Parcel.findAll({
      where: {
        id_user: id,
      },
    });
    console.log(parcels);
    res.json(parcels ? parcels : { message: "Parcel not found." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

// POST Parcel
export const createParcel = async (req, res) => {
  try {
    const {
      user_id,
      capacity,
      location,
      people_price,
      description,
      title,
      image1,
      image2,
      image3,
    } = req.body;

    let parcelData = new ParcelData();
    parcelData.title = new TitleString(title).values;
    parcelData.user_id = new IdUser(user_id).values;
    parcelData.location = new LocationString(location).values;
    parcelData.people_price = new PeoplePrice(people_price).values;
    parcelData.capacity = new Capacity(capacity).values;
    parcelData.description = new Description(description).values;
    parcelData.image1 = image1;
    parcelData.image2 = image2;
    parcelData.image3 = image3;

    const parcel = await Parcel.findAll({
      where: {
        title: parcelData.title,
      },
    });

    if (parcel.length > 0) {
      return res.json({ message: "Parcel Already Exists" });
    }

    const newParcel = await Parcel.create({
      title: parcelData.title,
      id_user: parcelData.user_id,
      location: parcelData.location,
      people_price: parcelData.people_price,
      capacity: parcelData.capacity,
      description: parcelData.description,
      image1: parcelData.image1,
      image2: parcelData.image2,
      image3: parcelData.image3,
    });

    res.send("Parcel Created With Id: " + newParcel.id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// PUT Parcel
export const updateParcel = async (req, res) => {
  try {
    const { id } = req.params;
    const { user_id, capacity, location, people_price, description, title } =
      req.body;

    let parcelData = new ParcelData();
    parcelData.title = new TitleString(title).values;
    parcelData.user_id = new IdUser(user_id).values;
    parcelData.location = new LocationString(location).values;
    parcelData.people_price = new PeoplePrice(people_price).values;
    parcelData.capacity = new Capacity(capacity).values;
    parcelData.description = new Description(description).values;
    parcelData.image1 = image1;
    parcelData.image2 = image2;
    parcelData.image3 = image3;

    const parcelExists = await Parcel.findAll({
      where: {
        title: parcelData.title,
      },
    });

    if (parcelExists.length > 0) {
      return res.json({ message: "Parcel Already Exists" });
    }

    // Update
    const parcel = await Parcel.findByPk(id);
    parcel.title = parcelData.title;
    parcel.description = parcelData.description;
    parcel.id_user = parcelData.user_id;
    parcel.location = parcelData.location;
    parcel.capacity = parcelData.capacity;
    parcel.people_price = parcelData.people_price;
    parcel.image1 = image1;
    parcel.image2 = image2;
    parcel.image3 = image3;

    parcel.save();

    res.json({ message: "Parcel Updated With Id: " + parcel.id });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// delete
export const deleteParcel = async (req, res) => {
  try {
    const { id } = req.params;
    await Parcel.destroy({
      where: {
        id,
      },
    });
    res.status(204).json(`Parcel with id: ${id} deleted.`);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
