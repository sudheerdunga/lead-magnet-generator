import { generateUploadButton } from "@uploadthing/react";

import type { uploadThingFileRouter } from "@/app/api/uploadthing/core";

export const UploadButton = generateUploadButton<uploadThingFileRouter>();