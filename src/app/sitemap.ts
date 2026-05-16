import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: "https://idaclassesjaipur.in",
      lastModified: new Date(),
    },
    {
      url: "https://idaclassesjaipur.in/courses/nda",
      lastModified: new Date(),
    },
    {
      url: "https://idaclassesjaipur.in/courses/ssc-gd",
      lastModified: new Date(),
    },
    {
      url: "https://idaclassesjaipur.in/courses/airforce",
      lastModified: new Date(),
    },
  ];
}