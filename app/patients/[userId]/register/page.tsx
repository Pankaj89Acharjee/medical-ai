import RegisterForm from '@/components/forms/RegisterForm'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Register = () => {
  return (
    <div className="flex h-screen max-h-screen">
      <section className="remove-scrollbar container">
        <div className="mx-w-[860px] sub-container flex-1 flex-col py-10">
          <Image src='/assets/icons/DWANNANTARI.png' alt="logo"
            height={1000}
            width={1000}
            className="mb-12 h-14 w-fit"
          />

          <RegisterForm />

          <p className="copyright py-3">
            © 2024 Dhannwantari
          </p>

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