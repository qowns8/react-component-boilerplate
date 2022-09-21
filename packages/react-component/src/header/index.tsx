import { ITableHead, ITableHeaders } from '../types'
import './index.scss'
import React from 'react'

function TableCell({ data }: { data: ITableHead }) {
  // const [visible, setVisible] = useState(false)
  const { fixed, sortRule, menu, title } = data
  const hasMenu = Boolean(sortRule || menu)
  function concatClassName(className: string) {
    return (value: any, name: string) => `${className}${value ? `__${name}` : ''}`
  }
  return (
    <div
      className={concatClassName(concatClassName(`lehkost-table-header--cell`)(fixed, 'fixed'))(
        hasMenu,
        'has-menu',
      )}
    >
      <div className="lehkost-table-header--cell-title">
        {title}
        {hasMenu && (
          <div className="lehkost-table-header--cell-menu">
            <button>+</button>
          </div>
        )}
      </div>
      {false && (
        <div className="lehkost-table-header--cell-popup">
          {menu.map((item, key) => {
            return <div key={key}>{item.value}</div>
          })}
        </div>
      )}
    </div>
  )
}

export default function TableHeader({ headers }: { headers: ITableHeaders }) {
  return (
    <div className="lehkost-table-header">
      {headers.map(header => (
        <TableCell data={header} />
      ))}
    </div>
  )
}
