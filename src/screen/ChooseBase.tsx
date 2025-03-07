import { Plus } from "lucide-react";
import { Button } from "../components/ui/Button";
import { Card, CardContent } from "../components/ui/Card";
import { JSX } from "react";
import { Link } from "react-router-dom";

export default function ChooseBase(): JSX.Element {
  // Product data for mapping
  const products = [
    {
      id: 1,
      name: "vMotion 640",
      description: "Comfort & Convenience",
      price: "$2399.99",
      image: "/image-6.png", // Placeholder path
    },
    {
      id: 2,
      name: "vMotion 210",
      description: "Entry-Level Adjustable Base",
      price: "$999",
      image: "/image-5.png", // Placeholder path
    },
    {
      id: 3,
      name: '2" v11 Foundation',
      description: "Hand-Crafted & Heavy Duty",
      price: "$440",
      image: "/image-3.png", // Placeholder path
    },
  ];

  return (
    <div className="min-h-screen w-screen bg-[linear-gradient(180deg,rgb(0,5,63)_0%,rgb(93.62,132.53,168.94)_100%)] flex flex-col items-center py-12">
      {/* Logo */}
      <img
        src="https://c.animaapp.com/FdlvdTHb/img/verlo.svg"
        alt="Verlo"
        className="w-[126px] h-[46px] mb-16"
      />

      {/* Heading */}
      <h1 className="text-5xl font-bold text-white text-center mb-16 tracking-normal leading-[46.8px]">
        Enhance your build with a base
      </h1>

      {/* Product Cards */}
      <div className="flex justify-center gap-8 mb-1">
        {products.map((product) => (
          <div>
            <Card
              key={product.id}
              className="w-[367px] h-[301px] bg-transparent border-2 border-white rounded-[5px] relative"
            >
              <CardContent className="p-0">
                <div className="p-4 h-full flex flex-col">
                  {/* Product Image */}
                  <div className="flex-1 flex items-center justify-center">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="object-cover max-h-[200px]"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="mt-auto mb-4 ml-4">
                    <h3 className="font-semibold text-2xl text-white leading-[32.4px]">
                      {product.name}
                    </h3>
                    <p className="font-normal text-base text-white leading-[21.6px]">
                      {product.description}
                    </p>
                  </div>
                </div>

                {/* Add Button */}
                <div className="absolute bottom-[18px] right-[18px] w-[30px] h-[30px] rounded-full border-2 border-white flex items-center justify-center">
                  <Plus className="w-[15px] h-[15px] text-white" />
                </div>
              </CardContent>
            </Card>
            <div
              key={product.id}
              className="font-semibold text-2xl text-white leading-[32.4px] justify-self-end"
            >
              {product.price}
            </div>
          </div>
        ))}
      </div>

      {/* Navigation Buttons */}
      <div className="flex self-end gap-4 mt-auto mr-8">
        <Link to="/build">
          <Button
            variant="outline"
            className="w-[164px] h-[62px] text-[21px] font-bold text-white border-2 border-white rounded-[5px] bg-transparent"
          >
            Back
          </Button>
        </Link>
        <Link to="/accessories">
          <Button className="w-[164px] h-[62px] text-[21px] font-bold text-white bg-light-blue rounded-[5px]">
            Finish
          </Button>
        </Link>
      </div>
    </div>
  );
}
