import React from 'react'
import SortItem from './SortItem';

export default function SortList(props) {

  const { text } = props;
  return (
    <React.Fragment>
      <SortItem text={text.topBar.sortItems.date} order={'ascending'} />
      <SortItem text={text.topBar.sortItems.views} order={'asc'} />
      <SortItem text={text.topBar.sortItems.popularity} />
    </React.Fragment>
  )
}
