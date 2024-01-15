import { generateReactHelpers } from "@uploadthing/react/hooks";

const baseUrl = "http://localhost:1033";

export const { useUploadThing, uploadFiles } = generateReactHelpers({
  url: baseUrl + "/api/uploadthing",
});
