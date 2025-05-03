import { asynHandler } from "../utils/asyncHandler.js";

export const registerUser = asynHandler(async (req, res) => {
  return res.status(200).json({
    message: "OK",
  });
});
