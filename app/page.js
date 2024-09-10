import Image from "next/image";
import reuben from './images/reuben.jpg';

export default function Home() {
  return (
    <div className="w-full min-h-screen">
      <Image src={reuben} alt="Reuben" width={500} height={667} className="w-full h-full object-center object-cover absolute" />
    </div>
  );
}
