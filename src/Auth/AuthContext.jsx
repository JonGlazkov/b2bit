/* eslint-disable react-hooks/exhaustive-deps */
import React, { createContext, useEffect, useMemo, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import api from '../services/api';

const Context = createContext({
  tokens: {},
  setTokens: () => { },
  user: {},
  setUser: () => { },
  signed: Boolean,
  setSigned: Boolean,
  updateTokens: () => { },
  signOut: () => { },
  signIn: () => { },
  getHeaders: () => { },
})

function AuthProvider({ children }) {
  const [tokens, setTokens] = useState({})
  const [user, setUser] = useState({})
  const [signed, setSigned] = useState(false)
  const navigate = useNavigate()

  const contextValue = useMemo(() => ({
    tokens,
    setTokens,
    user,
    setUser,
    signed,
    setSigned,
    updateTokens,
    signOut,
    signIn,
    getHeaders,
  }), [tokens, user, setTokens, setUser, signed, setSigned, updateTokens, signOut, signIn, getHeaders])

  function updateTokens(tokens) {
    localStorage.setItem('tokens', JSON.stringify(tokens))
    setTokens(tokens)
  }

  async function signIn(values) {
    const response = await api.post('account/tokens/', values);
    setUser(response.data.user)
    updateTokens(response.data.tokens)
    setSigned(true)
  }

  async function getHeaders() {
    const response = await api.get('/account/profile/', {
      headers: {
        Authorization: `Bearer ${tokens.access}`,
      }
    });
    console.log(response)
  }

  useEffect(() => {
    async function loadStoragedData() {
      const storagedUser = await localStorage.getItem('user')
      const storagedToken = await localStorage.getItem('tokens')

      if (storagedUser && storagedToken) {
        updateTokens(JSON.parse(storagedToken))
        setUser(storagedUser)
      }
    }
    loadStoragedData()
  }, [setSigned])

  function signOut() {
    localStorage.clear('tokens')
    setUser({})
    updateTokens({})
    setSigned(false)
    navigate('/')
  }

  console.log(signed, user, tokens)
  return (
    <Context.Provider value={contextValue}>
      {children}
    </Context.Provider>
  )
}
export { Context, AuthProvider }