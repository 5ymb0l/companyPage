import React from 'react'
import {
  MuiTelInput,
  MuiTelInputCountry,
  MuiTelInputInfo,
  MuiTelInputContinent
} from 'mui-tel-input'

export const TelInput = () => {
  const [value, setValue] = React.useState<string>('')

  const handleChange = (newValue: string, info: MuiTelInputInfo) => {
    setValue(newValue)
  }

  const continents: MuiTelInputContinent[] = ['EU']
  const excludedCountries: MuiTelInputCountry[] = ['FR']

  return (
    <MuiTelInput
      value={value}
      onChange={handleChange}
      continents={continents}
      excludedCountries={excludedCountries}
    />
  )
}


export default TelInput