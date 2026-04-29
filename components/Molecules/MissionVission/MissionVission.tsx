import { IMAGE_URLS } from "@/constants/images.constants";

interface MissionVissionProps {
  missionTitle?: string;
  missionDescription?: string;
  visionTitle?: string;
  visionDescription?: string;
  backgroundImage?: string;
}

const MissionVission = ({
  missionTitle = "Mission",
  missionDescription = "Delivering Customer Success Through Passionate People, Innovative Solutions And Cutting Edge Technologies.",
  visionTitle = "Vision",
  visionDescription = "Emerge As An Organization Respected For Intellectual Assets, People And Process",
  backgroundImage = IMAGE_URLS.MISSION_VISION_BG,
}: MissionVissionProps) => {
  return (
    <section className="relative min-h-screen flex items-center bg-[#F5F7FA]">
      {/* Background Glow - Left */}
      <div
        className="absolute top-0 left-0 w-[550px] h-[550px] rounded-full pointer-events-none opacity-80"
        style={{
          background: "#E7FFE6",
          filter: "blur(150px)",
        }}
      />

      {/* Background Glow - Right */}
      <div
        className="absolute bottom-0 right-0 w-[550px] h-[550px] rounded-full pointer-events-none opacity-80"
        style={{
          background: "#DBE5F5",
          filter: "blur(150px)",
        }}
      />

      {/* Main Background Image (Ants) */}
      <div
        className="absolute inset-0 z-90 pointer-events-none"
        style={{
          backgroundImage: `url(${backgroundImage})`,
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
        }}
      />

      <div className="container relative z-999 mx-auto">
        <div className="absolute -top-50 left-5 text-center max-w-[641px]">
          <h2 className="section-title-h2 text-gradient font-semibold">
            {missionTitle}
          </h2>
          <p className="text-lg md:text-xl text-[#444444] font-normal mt-4">
            {missionDescription}
          </p>
        </div>

        <div className="absolute top-50 right-30 text-center max-w-[641px] ">
          <h2 className="section-title-h2 text-gradient font-semibold">
            {visionTitle}
          </h2>
          <p className="text-lg md:text-xl text-[#444444] font-normal mt-4">
            {visionDescription}
          </p>
        </div>
      </div>
    </section>
  );
};

export default MissionVission;
