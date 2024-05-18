import React from 'react';
import typeId from "./set_type_id.json";
import Para from './Para';
import Table from './Table';

function Context({type}) {
  const comps = {
    1: <Para></Para>,
    2: <Table></Table>
  }
  return (
    <>
      {comps[typeId[type]]}
    </>
  )
}

export default Context