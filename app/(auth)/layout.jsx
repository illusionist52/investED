import Navbar from "../(root)/components/Navbar"

function layout({children}) {
  return (
    <div>
      <Navbar/>
      {children}
      </div>
  )
}

export default layout