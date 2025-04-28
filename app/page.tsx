import ActionTab from "@/components/common/ActionTab";
import SplashScreen from "@/components/common/SplashScreen";

export default function Home() {
  return (
    <div className="flex">
      <SplashScreen />
      <ActionTab />
    </div>
  );
}
