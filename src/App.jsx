import React, { Suspense, lazy } from 'react'

const Header = lazy(() => import('./Header'))
const Main   = lazy(() => import('./Main'))

export default function App() {
  return (
    <>
      <Suspense fallback={<div>Загрузка шапки…</div>}>
        <Header />
      </Suspense>

      <Suspense fallback={<div>Загрузка контента…</div>}>
        <Main />
      </Suspense>
    </>
  )
}
