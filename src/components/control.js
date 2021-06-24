import React from 'react'
import Search from './search';
import Sort from './sort'
export default function control() {
  return (
    <div className="d-flex justify-content-between mb-3">
     <Search></Search>
     <Sort/>
    </div>
  )
};
