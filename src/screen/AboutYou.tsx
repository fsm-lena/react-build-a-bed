import { Button } from "../components/ui/Button";
import { Card } from "../components/ui/Card";
import { HelpCircleIcon } from "lucide-react";
import { Input } from "../components/ui/Input";
import { Separator } from "../components/ui/Seperator";
import { JSX, useState, Fragment } from "react";
import { Link } from "react-router-dom";

export const AboutYou = (): JSX.Element => {
  // State for selected sleep position
  const [selectedPosition, setSelectedPosition] = useState<string | null>(null);

  // State for build slider
  const [buildValue, setBuildValue] = useState<number>(2); // Default to middle position

  // Sleep position data
  const sleepPositions = [
    {
      id: "side",
      label: "Side",
      image: "https://c.animaapp.com/EJznklpf/img/side-sleeper@2x.png",
    },
    {
      id: "back",
      label: "Back",
      image: "https://c.animaapp.com/EJznklpf/img/back-sleeper@2x.png",
    },
    {
      id: "stomach",
      label: "Stomach",
      image: "https://c.animaapp.com/EJznklpf/img/stomach-sleeper@2x.png",
    },
  ];

  // Build slider positions
  const buildPositions = [0, 1, 2, 3, 4];

  return (
    <div className="relative min-h-screen w-screen bg-[linear-gradient(180deg,rgb(0,5,63)_0%,rgb(93.62,132.53,168.94)_100%)]">
      <div className="flex flex-col items-center px-4">
        {/* Logo */}
        <img
          className="mt-[50px] h-[46px] w-[126px]"
          alt="Logo"
          src="https://c.animaapp.com/EJznklpf/img/logo-1.svg"
        />

        {/* Header */}
        <div className="mt-8 flex flex-col items-center">
          <h1 className="font-['DM_Sans'] text-5xl font-bold text-white">
            Tell us a bit about yourself.
          </h1>
          <p className="mt-[45px] max-w-[464px] text-center font-['DM_Sans'] text-base text-white">
            This will help us establish the core layers of your mattress.
          </p>
        </div>

        {/* Form Fields */}
        <div className="mt-16 flex w-full max-w-[1000px] justify-between gap-8">
          {/* Name Field */}
          <div className="flex flex-1 flex-col">
            <label className="font-['DM_Sans'] text-[32px] font-bold text-[#ffffff40]">
              Name
            </label>
            <Input
              className="mt-2 border-0 border-b border-white bg-transparent p-0 font-['DM_Sans'] text-white focus-visible:ring-0"
              defaultValue="Cynthia"
            />
          </div>

          {/* DOB Field */}
          <div className="flex flex-col">
            <label className="font-['DM_Sans'] text-[32px] font-bold text-[#ffffff40]">
              DOB
            </label>
            <div className="flex flex-col items-center gap-2">
              <Input className="mt-2 w-[172px] border-0 border-b border-white bg-transparent p-0 font-['DM_Sans'] text-white focus-visible:ring-0" />
              <span className="self-start font-['DM_Sans'] text-base text-white opacity-35">
                (optional)
              </span>
            </div>
          </div>

          {/* Weight Field */}
          <div className="flex flex-col">
            <label className="font-['DM_Sans'] text-[32px] font-bold text-[#ffffff40]">
              Weight
            </label>
            <div className="flex flex-col items-center gap-2">
              <Input className="mt-2 w-[175px] border-0 border-b border-white bg-transparent p-0 font-['DM_Sans'] text-white focus-visible:ring-0" />
              <div className="flex justify-between w-full">
                <span className="font-['DM_Sans'] text-base text-white opacity-35">
                  (optional)
                </span>
                <div className="ml-2 flex h-[21px] w-[21px] items-center justify-center rounded-full">
                  <HelpCircleIcon className="h-4 w-4 text-white" />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-evenly w-full">
          <div className="flex flex-col">
            {/* Build Section */}
            <div className="mt-[60px] flex w-full max-w-[1000px] items-start">
              <div className="flex items-center gap-2">
                <h2 className="font-['DM_Sans'] text-[32px] font-bold text-white">
                  Build
                </h2>
                <span className="font-['DM_Sans'] text-base text-white opacity-[0.28]">
                  (optional)
                </span>
                <div className="ml-2 flex h-[21px] w-[21px] items-center justify-center rounded-full border border-white">
                  <span className="font-['DM_Sans'] text-base text-white">
                    ?
                  </span>
                </div>
              </div>
            </div>

            {/* Build Slider */}
            <div className="mt-8 flex w-[370px] flex-col items-center">
              <div className="flex w-full items-center justify-between">
                <div className="flex flex-col items-center">
                  <div className="flex items-center">
                    {buildPositions.map((position) => (
                      <Fragment key={position}>
                        <button
                          className={`flex h-[39px] w-[38px] items-center justify-center rounded-full border-2 ${
                            buildValue === position
                              ? "border-white bg-light-blue"
                              : "border-white"
                          }`}
                          onClick={() => setBuildValue(position)}
                        />
                        {position < buildPositions.length - 1 && (
                          <Separator className="h-0.5 w-[45px] bg-white" />
                        )}
                      </Fragment>
                    ))}
                  </div>
                  <div className="mt-4 flex w-full justify-between">
                    <span className="font-['DM_Sans'] text-base text-white">
                      Slender
                    </span>
                    <span className="font-['DM_Sans'] text-base text-white">
                      Curvy
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Sleep Positions Section */}
          <div className="mt-[50px] flex max-w-[1000px] flex-col">
            <h2 className="self-start font-['DM_Sans'] text-[32px] font-bold text-white text-center">
              Sleep Positions
            </h2>

            <div className="mt-8 flex justify-center gap-8">
              {sleepPositions.map((position) => (
                <div key={position.id} className="flex flex-col items-center">
                  <Card
                    className="flex h-[102px] w-[136px] cursor-pointer items-center justify-center rounded-[5px] border-2 border-white"
                    style={{
                      backgroundColor: `${
                        selectedPosition === position.id
                          ? "var(--color-light-blue)"
                          : "transparent"
                      }`,
                    }}
                    onClick={() => setSelectedPosition(position.id)}
                  >
                    <img
                      className="h-[86px] w-24 object-contain"
                      alt={`${position.label} sleeper`}
                      src={position.image}
                    />
                  </Card>
                  <span className="mt-2 font-['DM_Sans'] text-base text-white">
                    {position.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Continue Button */}
        <div className="mt-[100px] mb-[50px] flex justify-end w-full max-w-[1000px]">
          <Link to="/build">
            <Button className="h-[62px] w-[188px] rounded-[5px] bg-light-blue font-['DM_Sans'] text-[21px] font-bold text-white">
              Continue
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};
