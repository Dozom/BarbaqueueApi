import Parcel from "../models/Parcel.js";
import Capacity from "../DomainValues/Parcel/Capacity.js";
import IdUser from "../DomainValues/Parcel/IdUser.js";
import PeoplePrice from "../DomainValues/Parcel/PeoplePrice.js";
import Description from "../DomainValues/Parcel/Description.js";
import TitleString from "../DomainValues/Parcel/TitleString.js";
import LocationString from "../DomainValues/Parcel/LocationString.js";
import Billing from "../models/Billing.js";
import ParcelId from "../DomainValues/Billing/ParcelId.js";
import BillingData from "../requestObjects/BillingData.js";
import birthDate from "../DomainValues/User/BirthDate.js";

export const getBillings = async (req, res) => {
  try {
    const billings = await Billing.findAll();
    res.json(billings);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const createBilling = async (req, res) => {
  try {
    const { user_id, parcel_id, date, total_price, people_amount } = req.body;

    let billingData = new BillingData();
    billingData.user_id = new IdUser(user_id).values;
    billingData.parcel_id = new ParcelId(parcel_id).values;
    billingData.date = new birthDate(date).values;
    billingData.total_price = new PeoplePrice(total_price).values;
    billingData.people_amount = new Capacity(people_amount).values;

    const newBilling = await Billing.create({
      user_id: billingData.user_id,
      parcel_id: billingData.parcel_id,
      people_amount: billingData.people_amount,
      total_price: billingData.total_price,
      date: billingData.date,
    });

    res.json({ message: "Billing Created With Id: " + newBilling.id });
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
    let reqTitle = new TitleString(title);
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
