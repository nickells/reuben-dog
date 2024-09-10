import Image from "next/image";
import reuben from './images/reuben.jpg';

export default function Home() {
  return (
    <div className="w-full">
      <Image src={reuben} alt="Reuben" width={500} height={667} className="w-full h-auto object-center object-cover absolute" />
    </div>
  );
}
