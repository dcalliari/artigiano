'use client'

import { useEffect, useState } from 'react'
import {
  useCreateUserWithEmailAndPassword,
  useAuthState,
} from 'react-firebase-hooks/auth'
import { auth } from '@/app/firebase'
import { useRouter } from 'next/navigation'

const SignUp = () => {
  const [user] = useAuthState(auth)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [createUserWithEmailAndPassword] =
    useCreateUserWithEmailAndPassword(auth)
  const router = useRouter()

  const handleSignUp = async () => {
    try {
      const res = await createUserWithEmailAndPassword(email, password)
      console.log({ res })
      setEmail('')
      setPassword('')
    } catch (e) {
      console.error(e)
    }
  }

  useEffect(() => {
    if (user) {
      router.push('/')
    }
  }, [router, user])

  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-900">
      <div className="mx-4 w-full max-w-sm bg-zinc-700 p-4 shadow-xl">
        <div className="bg-zinc-900 p-5">
          <h1 className="mb-5 text-center font-serif text-2xl text-red-400">
            REGISTRE
          </h1>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="mb-4 w-full rounded bg-zinc-700 p-3 font-serif text-white outline-none placeholder:text-gray-400"
          />
          <input
            type="password"
            placeholder="Senha"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mb-4 w-full rounded bg-zinc-700 p-3 font-serif text-white outline-none placeholder:text-gray-400"
          />
          <button
            onClick={handleSignUp}
            className="btn w-full hover:border-gray-500 hover:text-gray-500"
          >
            REGISTRAR
          </button>
        </div>
      </div>
    </div>
  )
}

export default SignUp
