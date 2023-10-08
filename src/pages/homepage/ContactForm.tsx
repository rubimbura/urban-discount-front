'use client'
import { FormEvent, useState, useEffect } from 'react'
import TextField from '../../components/textFiled'
import PrimaryButton from '../../components/button'
import Selectfield from '../../components/selectfield'
import { useFetchDistrictsQuery, useFetchSectorsQuery,useSubscribeMutation } from '../../api'
import { SelectChangeEvent } from '@mui/material/Select'
import { notificationPanel as panelSlice } from '../../slice/NotificiationPanel'
import {  useDispatch } from 'react-redux'


export interface ContactFormValues {
  names: string;
  phoneNumber: string;
  email: string;
  location: string,
}



export default function ContactForm() {
  const dispatch = useDispatch()
  const [submitMutation, {isLoading, data:addData, error, isError, isSuccess}] = useSubscribeMutation()
  const [values, setValues] = useState<ContactFormValues>({
    names: '',
    phoneNumber: '250',
    email: '',
    location: ''
  })

  const [address, setAddress] = useState({
    district: '',
    sector:''
  })

  const { data }: any = useFetchDistrictsQuery('test')
  const { data: sectors }: any = useFetchSectorsQuery(address.district, {
    skip: address.district ? false : true
  })


  const handleSubmits = (event: FormEvent) => {
    event.preventDefault()
    const districtName = data?.filter((el:any) => el.id === address.district)?.[0]?.addressName
    const sectorName = sectors.filter((el: any) => el.id === address.sector)?.[0]?.addressName
    const payload = {
      fullNames: values.names,
      phoneNumber:values.phoneNumber?.replaceAll(/[^0-9]+/g, ''),
      email: values.email,
      location: `${districtName}/${sectorName}`
    }
    submitMutation(payload)
  };

  useEffect(() => {
    if(error){
      dispatch(panelSlice({
        type: 'error',
        //@ts-ignore
        message: error?.data?.message  || 'Some thing went wrong',
        show: true
      }))
    }

    if(isSuccess){
      dispatch(panelSlice({
        type: 'success',
        message: addData?.message  || 'Updated successfully',
        show: true
      }))
    }

  },[isError, isSuccess])


  const isValid = () => {
    if(!values.names){
      return true
    } 
    if(!values.phoneNumber){
      return true
    }
    if(!values.email){
      return true
    }
    if(!address.district){
      return true
    }
    if(!address.sector){
      return true
    }
    return false
  }

  const formDistricts = data?.map((el: any )=> {
    return{
      label: el.addressName,
      value: el.id
    }
  })

  const displaySectors = sectors?.map((el:any) => {
    return{
      label: el.addressName,
      value: el.id
    }
  })

  const handleDistrictChange = (event: SelectChangeEvent) => {
    setAddress({
      district: event.target.value,
      sector: ''
    })
  }

  const handleSectorChange = (event: SelectChangeEvent) => {
    setAddress({
      ...address,
      sector:event.target.value
    })
  }

  return (
    <form onSubmit={handleSubmits}>

      <TextField 
        label='Full names'
        value={values.names}
        required
        type="text"
        onChange={(e:any) => setValues({
          ...values,
          names: e.target.value
        })}
      />
       <TextField 
        label='Phone number'
        value={values.phoneNumber}
        required
        type="tel"
        onChange={(e:any) => setValues({
          ...values,
          phoneNumber: e.target.value
        })}
      />

      <TextField 
        label='Email'
        type="email"
        value={values.email}
        required
        onChange={(e:any) => setValues({
          ...values,
          email: e.target.value
        })}
      />
      <div className='home-page-select-location-container'>
        <Selectfield 
          label='District'
          required
          menuItems={formDistricts}
          handleChange={handleDistrictChange}
          value={address.district}
        />
        <Selectfield 
          label='Sector'
          required
          handleChange={handleSectorChange}
          value={address.sector}
          menuItems={displaySectors}
        />
      </div>

      <PrimaryButton 
        label="Notify me"
        type="submit"
        disabled={isValid() || isLoading}
        // onClick={handleSUbmit}
      />
    </form>
  )
}