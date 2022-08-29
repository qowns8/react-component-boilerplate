import React from "react"

export interface ITableProps<TableItem = any> {
  width?: 'auto' | number
  height?: 'auto' | number
  headers: ITableHeaders<TableItem>
  data?: TableItem[]
}

type ICompare<TableItem = any> = (a: TableItem, b: TableItem) => number

export type ITableHeaders<TableItem = any> = ITableHead<TableItem>[]

export interface ITableHead<TableItem = any> {
  key: any
  title: any
  fixed?: boolean
  width?: number
  height?: number
  sortRule?: {
    display: string
    compare: ICompare<TableItem>
  }[],
  menu?: {
    value: React.ReactNode
    onClick: () => void
  }[]
}

export interface ITableBodys<TableItem = any> {
  data: ITableBody<TableItem>[]
}
export interface ITableBody<TableItem = any> {
  key: string
  value: string
}