import type { ProfileConfig } from "../types/config";

export const profileConfig: ProfileConfig = {
  avatar: "/avatar.png",
  name: "Starlitvale",
  bio: "记录与分享",
  typewriter: { enable: true, speed: 80 },
  links: [
    { name: "GitHub", icon: "fa7-brands:github", url: "https://github.com/Starlitvale" },
    { name: "RSS", icon: "fa7-solid:rss", url: "https://starlitvale.github.io/rss.xml" },
  ],
};
