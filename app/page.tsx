import PatientForm from "@/components/forms/PatientForm";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  //Landing page
  return (
    <div className="flex h-screen max-h-screen">
      {/* TODO: OTP Verification */}
      <section className="remove-scrollbar container my-auto">
        <div className="mx-w-[496px] sub-container">
          <Image src='/assets/icons/DWANNANTARI.png' alt="logo"
            height={1000}
            width={1000}
            className="mb-12 h-14 w-fit"
          />

          <PatientForm />

          <div className="text-14-regular mt-20 flex justify-between">
            <p className="justify-items-end text-dark-600 xl:text-left">
              © 2024 Dhannwantari
            </p>
            <Link href='/?admin=true' className="text-green-500">
              Admin
            </Link>
          </div>
        </div>
      </section>

      <Image
        src="/assets/images/onboarding-img.png"
        alt="onboad"
        width={1000}
        height={1000}
        className="side-img max-w-[50%] rounded-xl"
      />
    </div>
  );
}
