import './index.scss'
import { ITableProps } from './types'
import Header from './header'
import TableBody from './body'
import React from 'react'

export default function Component(props: ITableProps) {
  return (
    <div className="lehkost-table-wrappper">
      <Header headers={props.headers} />

      <TableBody data={props.data} headerProps={props.headers} />
    </div>
  )
}
