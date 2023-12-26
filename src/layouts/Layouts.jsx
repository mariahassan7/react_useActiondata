import React from 'react'
import {NavLink, Outlet} from 'react-router-dom';
export default function Layouts() {
  return (
    <>
      <div>
        <h1>Educatives useActionData answer</h1>
        <NavLink to="/educative_forms">Educative Forms</NavLink>
      </div>
      <main>
        <Outlet />
      </main>
    </>
    
  )
}
