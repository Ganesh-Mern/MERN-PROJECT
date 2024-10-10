import User from "../models/user.js";
import ApiError from "../utils/api.error.js";
import jwt from "jsonwebtoken";

export const verifyJwt = async (req, res, next) => {
  try {
    const token =
      req.cookies?.accessToken ||
      req.header("Authorization")?.replace("Bearer", "");

    if (!token) {
      return res.status(401).json(new ApiError(401, "Unauthorized request"));
    }
    const decodeToken = jwt.verify(token, process.env.JWT_SECRET);
    const user = await User.findById(decodeToken?._id).select("-password");

    if (!user) {
      return res.status(401).json(new ApiError(401, "Unauthorized request"));
    }
    req.user = user;
    next();
  } catch (error) {
    return res
      .status(401)
      .json(new ApiError(401, error?.message || "Invalid Access Token"));
  }
};

export const validate = (schema) => async (req, res, next) => {
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next();
  } catch (error) {
    return res.status(400).json(new ApiError(400, error.errors[0].message));
  }
};
