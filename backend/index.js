require("dotenv").config();

const {
  createUploadthingExpressHandler,
  createUploadthing,
} = require("uploadthing/express");

const express = require("express");

const PORT = 9002;
const baseUrl = `http://localhost:${PORT}`;

const app = express();

const f = createUploadthing();

const uploadRouter = {
  profileImage: f({
    image: {
      maxFileSize: "4MB",
      maxFileCount: 1,
    },
  }).onUploadComplete(async ({ metadata, file }) => {
    return {
      success: true,
      file,
    };
  }),
};

app.use(
  "/api/uploadthing",
  createUploadthingExpressHandler({
    router: uploadRouter,
    config: {
      callbackUrl: baseUrl + "/api/uploadthing",
    },
  })
);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
