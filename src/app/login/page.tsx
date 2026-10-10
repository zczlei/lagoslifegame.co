import { permanentRedirect } from "next/navigation";

/** Legacy path from earlier IA — sign-in is the P0 URL per 11.md */
export default function LoginRedirectPage() {
  permanentRedirect("/sign-in/");
}
