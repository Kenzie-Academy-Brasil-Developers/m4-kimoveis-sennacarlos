import handleError from "./handleError.middleware";
import validateBody  from "./validateBody.middleware";
import uniqueEmail from "./uniqueEmail.middleware";
import verifyToken from "./verifyToken.middleware";
import isAdmin from "./isAdmin.middleware";
import verifyUserIdExists from "./verifyUserIdExists.middleware";
import isAdminOrOwner from "./isAdminOrOwner.middleware";
import uniqueCategory from "./uniqueCategory.middleware";
import verifyCategoryIdExists from "./verifyCategoryIdExists.middleware";
import uniqueAddress from "./uniqueAddress.middleware";
import verifyRealEstateIdExists from "./verifyRealEstateIdExists.middleware";
import uniqueUserFreeSchedule from "./uniqueUserFreeSchedule.middleware";
import verifyDataAndHour from "./verifyDataAndHour.middleware";
import verifyDataAndHourExists from "./verifyDataAndHourExists.middleware";

export default {
    handleError,
    validateBody,
    uniqueEmail,
    verifyToken,
    isAdmin,
    verifyUserIdExists,
    isAdminOrOwner,
    uniqueCategory,
    verifyCategoryIdExists,
    uniqueAddress,
    verifyRealEstateIdExists,
    uniqueUserFreeSchedule,
    verifyDataAndHour,
    verifyDataAndHourExists
};