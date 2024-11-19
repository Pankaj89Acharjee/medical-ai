"use client"

import { zodResolver } from "@hookform/resolvers/zod"
import { useForm } from "react-hook-form"
import { z } from "zod"
import { Button } from "@/components/ui/button"
import {
  Form,
  FormControl
} from "@/components/ui/form"
import { Input } from "@/components/ui/input"
import CustomFormField from "../CustomFormField"
import SubmitButton from "../SubmitButton"
import { use, useState } from "react"
import UserFormValidation from "@/lib/validation"
import { createUser } from "@/app/api/userAPI"
import { useRouter } from "next/navigation"
import { v4 as uuidv4 } from 'uuid'
import { RadioGroup } from "../ui/radio-group"
import { GenderOptions } from "@/constants"
import { RadioGroupItem } from "../ui/radio-group"
import { Label } from "../ui/label"


//For making input fields type available for reusable component
export enum FormFieldType {
  INPUT = 'input',
  TEXTAREA = 'textarea',
  PHONE_INPUT = 'phoneInput',
  CHECKBOX = 'checkbox',
  DATE_PICKER = 'datePicker',
  SELECT = 'select',
  SKELETON = 'skeleton'
}


const RegisterForm = () => {
  const router = useRouter()
  const [isLoading, setisLoading] = useState(false)


  // 1. Define your form.
  const form = useForm<z.infer<typeof UserFormValidation>>({
    resolver: zodResolver(UserFormValidation),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      userid: ""
    },
  })

  // 2. Define a submit handler.
  async function onSubmit({ name, email, phone }: z.infer<typeof UserFormValidation>) {
    setisLoading(true)
    console.log("Ckicked On submit handler")

    const userid = uuidv4()

    try {
      const userData = { name, email, phone, userid }

      const user = await createUser(userData)
      console.log("User data callback", user)
      if (user) router.push(`/patients/${user.data}/register`)

    } catch (error) {
      console.log("Error in submit handler fx", error)
    }
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6 flex-1">
        <section className="mb-12 space-y-4">
          <h1 className="header">Hey Buddy</h1>
          <p className="text-dark-700">Get your health checkup</p>
        </section>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="name"
            label="Full name"
            placeholder="Pankaj Acharjee"
            iconSrc="/assets/icons/user.svg"
            iconAlt="user"
          />

          <CustomFormField
            fieldType={FormFieldType.INPUT}
            control={form.control}
            name="email"
            label="Email"
            placeholder="pankaj@gmail.com"
            iconSrc="/assets/icons/email.svg"
            iconAlt="email"
          />

          <CustomFormField
            fieldType={FormFieldType.PHONE_INPUT}
            control={form.control}
            name="phone"
            label="Mobile Number"
            placeholder="919222333444"
          />
        </div>

        <div className="flex flex-col gap-6 xl:flex-row">
          <CustomFormField
            fieldType={FormFieldType.DATE_PICKER}
            control={form.control}
            name="birthDate"
            label="Date of Birth"
          />

          <CustomFormField
            fieldType={FormFieldType.SKELETON}
            control={form.control}
            name="gender"
            label="Gender"
            renderSkeleton={(field: any) => (
              <FormControl>
                <RadioGroup className="flex h-11 gap-6 xl:justify-between"
                  onValueChange={field.onChange}
                  defaultValue={field.value}
                >
                  {GenderOptions.map((option) => (
                    <div key={option}
                      className="radio-group"
                    >
                      <RadioGroupItem
                        value={option}
                        id={option}
                      />
                      <Label htmlFor={option}
                        className="cursor-pointer"
                      >
                        {option}
                      </Label>
                    </div>
                  ))}
                </RadioGroup>
              </FormControl>
            )}
          />

        </div>


        <div className="flex flex-col gap-6 xl:flex-row">


        </div>

        <div className="flex flex-col gap-6 xl:flex-row">


        </div>

        <div className="flex flex-col gap-6 xl:flex-row">


        </div>
        <SubmitButton isLoading={isLoading}>Lets start</SubmitButton>
      </form>
    </Form>
  )
}


export default RegisterForm