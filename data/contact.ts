import { profile } from "@/data/profile";

export const contactInfo = [
  {
    icon: "mail",
    title: "Email",
    content: profile.email,
    link: `mailto:${profile.email}`,
  },
  {
    icon: "phone",
    title: "Phone",
    content: profile.phone,
    link: profile.phoneHref,
  },
  {
    icon: "mapPin",
    title: "Location",
    content: profile.location,
    link: profile.locationHref,
  },
] as const;
