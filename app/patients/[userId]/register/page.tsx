import RegisterForm from '@/components/forms/RegisterForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Register = () => {
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

          <RegisterForm />

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
        src="/assets/images/register-img.png"
        alt="onboad"
        width={1000}
        height={1000}
        className="side-img max-w-[400px]"
      />
    </div>
  )
}

export default Register