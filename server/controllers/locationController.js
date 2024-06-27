import {
    fetchOneLocation as fetchOneLocationService,
    getLocations as getLocationsService,
    getLocationWashrooms as getLocationWashroomsService,
} from "../services/locationKnex.js"

/* FIND A LOCATION */
export const fetchOne = async (req, res) => {
    try {
      const location = await fetchOneLocationService(req.params.id);
      return res.status(200).json(location);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  };