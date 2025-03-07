import { ChevronLeftIcon, ChevronRightIcon, PlusIcon } from "lucide-react";
import { Badge } from "../components/ui/Badge";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { Slider } from "../components/ui/Slider";
import { Link } from "react-router-dom";

export default function Builder() {
  // Data for mattress layers
  const mattressLayers = [
    {
      id: 1,
      topImg: "https://c.animaapp.com/FdlvdTHb/img/top.svg",
      sideImg: "https://c.animaapp.com/FdlvdTHb/img/side.svg",
      color: "#5d84a9",
    },
    {
      id: 2,
      topImg: "https://c.animaapp.com/FdlvdTHb/img/rectangle-24.svg",
      sideImg: "https://c.animaapp.com/FdlvdTHb/img/rectangle-26.svg",
      color: "#acab7d",
    },
    {
      id: 3,
      topImg: "https://c.animaapp.com/FdlvdTHb/img/rectangle-24-1.svg",
      sideImg: "https://c.animaapp.com/FdlvdTHb/img/rectangle-26-1.svg",
      color: "#a5a5a5",
    },
  ];

  const currentLayer = {
    name: "Soft Latex",
    description:
      "As a comfort layer, latex has the ability to form itself to the exact shape of your body profile while you are sleeping, and to do this instantly as you change positions.",
    features: ["Pressure Relief", "Resilient", "Durable"],
    firmness: "Soft",
    options: ["Soft", "Medium", "Firm"],
  };

  return (
    <main className="relative min-h-screen w-screen bg-[rgba(255,255,255,1.0)] [background:linear-gradient(180deg,rgb(0,5,63)_0%,rgb(93.62,132.53,168.94)_100%)]">
      <div className="flex flex-col items-center pt-[50px]">
        {/* Logo */}
        <img
          className="w-[126px] h-[46px]"
          alt="Verlo"
          src="https://c.animaapp.com/FdlvdTHb/img/verlo.svg"
        />

        {/* Title */}
        <h1 className="mt-8 font-['DM_Sans',Helvetica] font-bold text-white text-5xl text-center tracking-[0] leading-[46.8px]">
          Customize your comfort
        </h1>
      </div>

      <div className="flex flex-col md:flex-row justify-between px-4 md:px-[196px] mt-16">
        {/* Left Column - Controls */}
        <div className="flex flex-col">
          {/* Height */}
          <div className="mb-12">
            <h2 className="font-['DM_Sans',Helvetica] font-bold text-white text-[32px] tracking-[0] leading-[31.2px]">
              13"
            </h2>
            <p className="font-['DM_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-[15.6px] mt-3">
              Height
            </p>
          </div>

          {/* Firmness Slider */}
          <div className="mb-10">
            <div className="flex justify-between mb-2">
              <span className="font-['DM_Sans',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[23.4px]">
                Firm
              </span>
              <span className="font-['DM_Sans',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[23.4px]">
                Soft
              </span>
            </div>
            <Slider
              defaultValue={[50]}
              max={100}
              step={1}
              className="w-[220px]"
            />
          </div>

          {/* Cooling Slider */}
          <div className="mb-16">
            <div className="mb-2">
              <span className="font-['DM_Sans',Helvetica] font-medium text-white text-2xl tracking-[0] leading-[23.4px]">
                Cooling
              </span>
            </div>
            <Slider
              defaultValue={[48]}
              max={100}
              step={1}
              className="w-[220px]"
            />
          </div>

          {/* Price */}
          <div className="mt-auto">
            <h2 className="font-['DM_Sans',Helvetica] font-bold text-white text-[61px] tracking-[0] leading-[59.5px]">
              $1240
            </h2>
            <p className="font-['DM_Sans',Helvetica] font-normal text-white text-base tracking-[0] leading-[15.6px] mt-1">
              SUBTOTAL
            </p>
          </div>
        </div>
        {/* Mattress Layers */}
        <div className="relative">
          {/* Navigation buttons */}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-[19px] left-[9px] w-[49px] h-[49px] rounded-full border-2 border-white bg-transparent hover:**:text-black transform -translate-x-36"
          >
            <ChevronLeftIcon className="h-5 w-5 text-white" />
          </Button>
          {mattressLayers.map((layer, index) => (
            <div key={layer.id} className="relative w-[482px] h-[117px] mb-6">
              <div className="relative h-[117px] overflow-hidden">
                <div className="absolute w-[482px] h-[117px] top-0 left-0 opacity-95">
                  <div className="relative h-[117px]">
                    <div className="absolute w-[482px] h-[117px] top-0 left-0">
                      <img
                        className="absolute w-[482px] h-[103px] top-0 left-0"
                        alt={`Top layer ${index + 1}`}
                        src={layer.topImg}
                      />
                      <img
                        className="absolute w-[133px] h-[117px] top-0 left-[348px]"
                        alt={`Side layer ${index + 1}`}
                        src={layer.sideImg}
                      />
                    </div>
                    <div
                      className="absolute w-[348px] h-3.5 top-[103px] left-0"
                      style={{ backgroundColor: layer.color }}
                    />
                  </div>
                </div>
              </div>
            </div>
          ))}
          <Button
            variant="outline"
            size="icon"
            className="absolute top-[19px] left-[596px] w-[49px] h-[49px] rounded-full border-2 border-white bg-transparent hover:**:text-black"
          >
            <ChevronRightIcon className="h-5 w-5 text-white" />
          </Button>
          {/* Add Layer Button */}
          <div className="bottom-0 left-1/2 flex flex-col items-center">
            <Button
              variant="outline"
              size="icon"
              className="w-12 h-12 rounded-full border-2 border-white bg-transparent hover:**:text-black"
            >
              <PlusIcon className="h-6 w-6 text-white" />
            </Button>
            <span className="mt-2 font-['DM_Sans',Helvetica] font-normal text-white text-base text-center">
              Add Layer
            </span>
          </div>
        </div>

        {/* Right column - Layer details */}
        <div className="w-[278px]">
          <Card className="bg-transparent border-0 text-white">
            <CardContent className="p-0">
              <h2 className="font-bold text-[32px] text-white">
                {currentLayer.name}
              </h2>

              {/* Firmness options */}
              <div className="flex gap-2 mt-10">
                {currentLayer.options.map((option) => (
                  <Badge
                    key={option}
                    className={`rounded-full px-4 py-1.5 text-base ${
                      option === currentLayer.firmness
                        ? "bg-light-blue border-light-blue"
                        : "bg-transparent border-2 border-white"
                    }`}
                  >
                    {option}
                  </Badge>
                ))}
              </div>

              {/* Description */}
              <p className="mt-6 text-base">{currentLayer.description}</p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mt-8">
                {currentLayer.features.map((feature) => (
                  <Badge
                    key={feature}
                    variant="outline"
                    className="rounded-full px-4 py-1.5 text-base border-2 border-white"
                  >
                    {feature}
                  </Badge>
                ))}
              </div>

              {/* Delete option */}
              <Button
                variant="link"
                className="text-white opacity-60 underline mt-8 p-0 h-auto"
              >
                Delete this layer
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Continue Button */}
      <div className="flex justify-end p-8">
        <Link to="/base">
          <Button className="w-[188px] h-[62px] bg-light-blue rounded-[5px] font-['DM_Sans',Helvetica] font-bold text-white text-[21px]">
            Continue
          </Button>
        </Link>
      </div>
    </main>
  );
}
