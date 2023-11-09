import { Outlet } from 'react-router-dom'

export default function Layout() {
  return (
    <>
      <header>
        <h1>Website</h1>
      </header>
      <main>
        <Outlet />
      </main>
      <footer>Copyright &copy; 2038</footer>
    </>
  )
}
