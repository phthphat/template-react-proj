import React from 'react'
import { Controller, useForm } from 'react-hook-form'
import FullWidthLayout from '../../components/layout/fullwidth-layout/fullwidth-layout'
//import style from './signup.module.scss'

const Signup = React.memo(() => {
  console.log("signup rendered")

  const { control, handleSubmit } = useForm()

  const onSubmit = (data) => {
    console.log(data)
  }

  return <FullWidthLayout title="Page">
    <div id="signup" className="h-10 flex items-center justify-center">
      <form onSubmit={handleSubmit(onSubmit)}>
        <Controller
          name="name"
          control={control}
          defaultValue="Abc"
          render={({ onChange, value }) => <input placeholder="Name" onChange={onChange} value={value} />}
        />
        <Controller
          name="gender"
          control={control}
          placeholder="lklk"
          defaultValue="Male"
          value={["Male", "Female"]}
          as="select"
        />
        <input type="submit" />
      </form>
    </div>
  </FullWidthLayout>
})

export default Signup