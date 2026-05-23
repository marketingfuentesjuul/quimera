import { DottedBackground } from "@/components/ui/dotted-vignette-background";

const DemoOne = () => {
  return (
    <div className="flex w-full h-screen justify-center items-center">
      <DottedBackground
          dotColor="#a78bfa"
          backgroundColor="#0f172a"
          enableVignette={true}
          vignetteColor="rgba(0,0,0,0.9)"
          enableInnerGlow={true}
          innerGlowColor="rgba(0,0,0,0.8)"
          dotSize={2}
          dotSpacing={10}
       />
    </div>
  );
};

export { DemoOne };
export default DemoOne;
