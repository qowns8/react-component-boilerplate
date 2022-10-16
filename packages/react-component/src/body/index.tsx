import React from 'react'
import { ITableBodyProps } from '../types'
import './index.scss'

export default function TableBody({ data, headerProps }: ITableBodyProps) {
  return (
    <div className="lehkost-table-body">
      {data.map(item => (
        <div className="lehkost-table-body--tr">
          {headerProps.map(header => {
            const { key } = header
            return <div className="lehkost-table-body--td">{item[key]}</div>
          })}
        </div>
      ))}
    </div>
  )
}
