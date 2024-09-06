"use client";

import { SocialButton } from "..";
import { ImGoogle, ImFacebook } from "react-icons/im";
import { continueWithGoogle, continueWithFacebook } from "@/utils";

export default function SocialButtons() {
  return (
    <div className="flex mx-8  justify-between items-center gap-2">
      <SocialButton provider="google" onClick={continueWithGoogle}>
        <ImGoogle className="mr-3" />
        Google
      </SocialButton>

      <SocialButton provider="facebook" onClick={continueWithFacebook}>
        <ImFacebook className="mr-3" />
        Facebook
      </SocialButton>
    </div>
  );
}
