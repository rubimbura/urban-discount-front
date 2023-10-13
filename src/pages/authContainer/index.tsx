

type Props = {
  children: React.ReactNode
}

const AuthContainer = ({children}: Props) => {
  return(
    <main className="home-page-container">
      {children}
    </main>
  )
}
export default AuthContainer