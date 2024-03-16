const express = require("express");
const { isSignedIn } = require("../controller/auth");
const {
  addCertificate,
  getAllCertificates,
  deleteCertificate,
} = require("../controller/certificates");
const router = express.Router();

router.post("/certificate/add", isSignedIn, addCertificate);
router.get("/certificate/getall", getAllCertificates);
router.delete(
  "/certificate/delete/:certificateId",
  isSignedIn,
  deleteCertificate
);

module.exports = router;
