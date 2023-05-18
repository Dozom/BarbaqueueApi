import Parcel from "../models/Parcel.js";
import Capacity from "../DomainValues/Parcel/Capacity.js";
import IdUser from "../DomainValues/Parcel/IdUser.js";
import PeoplePrice from "../DomainValues/Parcel/PeoplePrice.js";
import Description from "../DomainValues/Parcel/Description.js";
import Title from "../DomainValues/Parcel/Title.js";
import LocationString from "../DomainValues/Parcel/LocationString.js";
import Billing from "../models/Billing.js";
import ParcelId from "../DomainValues/Billing/ParcelId.js";

export const getBillings = async (req, res) => {
  try {
    const billings = await Billing.findAll();
    res.json(billings);
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

export const createBilling = async (req, res) => {
  try {
    const { userId, parcelId } = req.body;
    let reqUserId = new IdUser(userId);
    let reqParcelId = new ParcelId(parcelId);

    const newBilling = await Billing.create({
      user_id: reqUserId.IdUser,
      parcel_id: reqParcelId.parcelId,
      people_amount: 12,
      total_price: 23,
    });

    res.send("Billing Created With Id: " + newBilling.id);
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
