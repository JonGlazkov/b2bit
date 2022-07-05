import React, { useContext } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import { Context } from '../../Auth/AuthContext';


export function ProtectProfile({ children }) {

  const { tokens } = useContext(Context)
  const location = useLocation()

  if (Object.keys(tokens).length === 0 && location.path !== '/') {
    return (<Navigate to={'/'} replace />)
  }

  return children

}