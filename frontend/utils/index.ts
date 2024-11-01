import socialAuth from "./social-auth";

export const continueWithGoogle = () => {
  socialAuth("google-oauth2", "google");
};

export const continueWithFacebook = () => {
  socialAuth("facebook", "facebook");
};
