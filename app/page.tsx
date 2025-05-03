import ActionTab from "@/components/common/ActionTab";
import SplashScreen from "@/components/common/SplashScreen";
import { isLoggedIn, splashImageUrl, username } from "@/lib/constant";

export default function Home() {
  return (
    <div className="md:flex w-full h-screen">
      <SplashScreen backgroundImageUrl={splashImageUrl} />
      <ActionTab isLoggedIn={isLoggedIn} username={username} />
    </div>
  );
}

//Special task:
// fetch data from (server quick and serve at the homepage)
// A global contextAPI is required
// Check backend connection
