import React from "react";
import {ITableBodys} from "../types";

export default function TableBody({ data }: ITableBodys) {
  return  <div className="lehkost-table-body">
    {
      data.map(item => <div className="lehkost-table-body--tr">
        {item.value}
      </div>)
    }
  </div>
}