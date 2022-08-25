import React, {useState} from 'react'
import './index.scss'

export default function Component ({}) {
  const [value, setValue] = useState(1)
  return <div className="custom-component">
    그래야만 하는가? {value}
  </div>
}