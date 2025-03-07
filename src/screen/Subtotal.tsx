import { Separator } from "../components/ui/Seperator";
import { Button } from "../components/ui/Button";

export default function Subtotal() {
  // Mattress layer data
  const mattressLayers = [
    { type: "Soft Latex", color: "#ded596", price: "$110" },
    { type: "Soft Latex", color: "#ded596", price: "$110" },
    { type: "Gel Memory", color: "#84b2f6", price: "$100" },
    { type: "Gel Memory", color: "#84b2f6", price: "$100" },
    { type: "Microcoils", color: "#7ddaea", price: "$250" },
  ];

  // Accessories data
  const accessories = [
    { name: "vMotion 210", price: "$999" },
    { name: "Blue Sleep Ghetti", price: "$79" },
  ];

  // Microcoils visualization
  const microcoils = Array(15).fill(null);

  return (
    <div className="relative min-h-screen w-screen bg-[linear-gradient(180deg,rgb(0,5,63)_0%,rgb(93.62,132.53,168.94)_100%)] flex flex-col items-center">
      <img
        className="w-[126px] h-[46px] mb-16 mt-8"
        alt="Verlo"
        src="https://c.animaapp.com/VMThx0Kj/img/verlo.svg"
      />
      <div className="container mx-auto px-4 py-12 flex flex-col lg:flex-row">
        <div className="flex-1">
          {/* Summary Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-6">Summary</h2>

            <div className="space-y-2">
              {mattressLayers.map((layer, index) => (
                <div key={index} className="flex items-center justify-between">
                  {index < 2 && (
                    <div
                      className="w-[267px] h-[35px]"
                      style={{
                        backgroundColor: layer.color,
                        borderRadius: index === 0 ? "5px 5px 0 0" : "0",
                      }}
                    />
                  )}
                  {index >= 2 && index < 4 && (
                    <div
                      className="w-[267px] h-[35px]"
                      style={{ backgroundColor: layer.color }}
                    />
                  )}
                  {index === 4 && (
                    <div className="flex w-[267px]">
                      {microcoils.map((_, i) => (
                        <div
                          key={i}
                          className="w-2.5 h-[35px] rounded-[10px]"
                          style={{
                            backgroundColor: layer.color,
                            marginRight:
                              i < microcoils.length - 1 ? "8px" : "0",
                          }}
                        />
                      ))}
                    </div>
                  )}
                  <div
                    className="flex items-center"
                    style={{
                      marginLeft: `${index >= 2 && index < 4 ? "1rem" : "0"}`,
                    }}
                  >
                    <div
                      className="w-[13px] h-[13px] rounded-[6.4px]"
                      style={{ backgroundColor: layer.color }}
                    />
                    <span className="ml-4 text-white text-base">
                      {layer.type}
                    </span>
                  </div>
                  <span className="text-white text-base text-right w-16">
                    {layer.price}
                  </span>
                </div>
              ))}
            </div>

            {/* Firmness Slider */}
            <div className="mt-8">
              <div className="flex justify-between text-white text-base mb-2">
                <span>Firm</span>
                <span>Soft</span>
              </div>
              <div className="relative h-[5px] w-full">
                <img
                  className="absolute w-full h-[5px]"
                  alt="Line"
                  src="https://c.animaapp.com/VMThx0Kj/img/line-24.svg"
                />
                <img
                  className="absolute w-[478px] h-[5px]"
                  alt="Line"
                  src="https://c.animaapp.com/VMThx0Kj/img/line-23.svg"
                />
              </div>
            </div>

            {/* Cooling Slider */}
            <div className="mt-8">
              <div className="text-white text-base mb-2">
                <span>Cooling</span>
              </div>
              <div className="relative h-[5px] w-full">
                <img
                  className="absolute w-full h-[5px]"
                  alt="Line"
                  src="https://c.animaapp.com/VMThx0Kj/img/line-25.svg"
                />
                <img
                  className="absolute w-[405px] h-[5px]"
                  alt="Line"
                  src="https://c.animaapp.com/VMThx0Kj/img/line-26.svg"
                />
              </div>
            </div>
          </div>

          {/* Accessories Section */}
          <div className="mb-12">
            <h2 className="text-2xl font-medium text-white mb-6">
              Accessories
            </h2>

            <div className="space-y-4">
              {accessories.map((accessory, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center">
                    <div className="w-[13px] h-[13px] rounded-[6.4px] bg-[#ffffff80]" />
                    <span className="ml-4 text-white text-base">
                      {accessory.name}
                    </span>
                  </div>
                  <span className="text-white text-base text-right w-16">
                    {accessory.price}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Subtotal */}
          <div>
            <Separator className="mb-4 bg-white/50" />
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-medium text-white">Subtotal:</h2>
              <span className="text-2xl font-medium text-white text-right">
                $1,649
              </span>
            </div>
          </div>
        </div>

        {/* Right Side - CTA Section */}
        <div className="flex-1 flex flex-col items-center justify-center mt-12 lg:mt-0">
          <h1 className="text-5xl font-bold text-white text-center max-w-md mt-24 mb-8">
            Make tonight your best sleep yet.
          </h1>

          <Button className="bg-light-blue hover:bg-light-blue/90 text-white font-bold text-xl w-[164px] h-[62px] mb-12">
            Buy Now
          </Button>

          <div className="flex flex-col items-center">
            <img
              className="w-[15px] h-12 mb-4"
              alt="Arrow"
              src="https://c.animaapp.com/VMThx0Kj/img/arrow-1.svg"
            />

            <h3 className="text-2xl font-black text-white text-center mb-2">
              Unsure about ordering online?
            </h3>

            <p className="text-base text-white text-center max-w-xs">
              <span className="font-medium">
                Verlo will fine-tune your mattress for{" "}
              </span>
              <span className="font-bold">FREE</span>
              <span className="font-medium"> upon pickup.</span>
            </p>
          </div>

          <div className="mt-auto self-end">
            <p className="text-base text-white text-right mb-2">
              Have questions?
            </p>
            <Button
              variant="outline"
              className="border-2 border-white text-white font-bold text-xl w-[164px] h-[62px] bg-transparent"
            >
              Contact Us
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
