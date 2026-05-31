import { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Boussafer Abdelhak - Full Stack MERN Developer",
    short_name: "Abdelhak Portfolio",
    icons: [
      {
        src: "/favicon.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon.png",
        sizes: "16x16",
        type: "image/png",
      },
    ],
    start_url: "/",
    display: "standalone",
    background_color: "#fff",
    theme_color: "#000",
  };
}
