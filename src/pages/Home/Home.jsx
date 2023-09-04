import { useEffect } from "react";
import Main from "../../components/Main/Main"

function Home() {

  useEffect(() => {
    document.title = "My Tinerary | Home";
  }, []);

  return (
    <>
        <Main />
    </>
  )
}

export default Home