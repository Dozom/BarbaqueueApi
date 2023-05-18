import Parcel from "../models/Parcel.js";
import Capacity from "../DomainValues/Parcel/Capacity.js";
import IdUser from "../DomainValues/Parcel/IdUser.js";
import PeoplePrice from "../DomainValues/Parcel/PeoplePrice.js";
import Description from "../DomainValues/Parcel/Description.js";
import Title from "../DomainValues/Parcel/Title.js";
import LocationString from "../DomainValues/Parcel/LocationString.js";

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
    res.json(parcel ? null : { message: "Parcel not found." });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createParcel = async (req, res) => {
  try {
    const { userId, capacity, location, peoplePrice, description, title } =
      req.body;
    let reqCapacity = new Capacity(capacity);
    let reqTitle = new Title(title);
    let reqDescription = new Description(description);
    let reqUserId = new IdUser(userId);
    let reqLocation = new LocationString(location);
    let reqPeoplePrice = new PeoplePrice(peoplePrice);

    const parcel = await Parcel.findAll({
      where: {
        title: reqTitle.Title,
      },
    });
    if (parcel.length > 0) {
      return res.json({ message: "Parcel Already Exists" });
    }

    const newParcel = await Parcel.create({
      title: reqTitle.Title,
      description: reqDescription.Description,
      id_user: reqUserId.IdUser,
      location: reqLocation.LocationString,
      people_price: reqPeoplePrice.PeoplePrice,
      capacity: reqCapacity.Capacity,
    });

    res.send("Parcel Created With Id: " + newParcel.id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const updateParcel = async (req, res) => {
  try {
    const { id } = req.params;
    const { userId, capacity, location, peoplePrice, description, title } =
      req.body;
    let reqCapacity = new Capacity(capacity);
    let reqTitle = new Title(title);
    let reqDescription = new Description(description);
    let reqUserId = new IdUser(userId);
    let reqLocation = new LocationString(location);
    let reqPeoplePrice = new PeoplePrice(peoplePrice);
    const parcelExists = await Parcel.findAll({
      where: {
        title: reqTitle.Title,
      },
    });
    if (parcelExists.length > 0) {
      return res.json({ message: "Parcel Already Exists" });
    }

    // update
    const parcel = await Parcel.findByPk(id);
    console.log("response: " + parcel);
    parcel.title = reqTitle.Title;
    parcel.description = reqDescription.Description;
    parcel.user_id = reqUserId.IdUser;
    parcel.location = reqLocation.LocationString;
    parcel.capacity = reqCapacity.capacity;
    parcel.people_price = reqPeoplePrice.PeoplePrice;
    parcel.save();
    res.send("Parcel Updated With Id: " + id);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

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
