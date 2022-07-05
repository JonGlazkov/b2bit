import React from 'react'
import {
  Routes,
  Route,
} from 'react-router-dom'
import { LogedIn } from './Pages/LogedIn'
import { ProtectProfile } from './Pages/ProtectProfile'
import { SignIn } from './Pages/SignIn'

export default function MainRoutes() {
  return (
    <Routes>
      <Route path="/" element={<SignIn />} />
      <Route
        path="/profile"
        element=
        {
          <ProtectProfile>
            <LogedIn />
          </ProtectProfile>
        }
      />
    </Routes>
  )
} 