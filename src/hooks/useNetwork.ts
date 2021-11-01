
import { useState } from "react";

const providerOptions = {
}

function useNetwork() {
  const [web3, setWeb3] = useState()

  const connect = async () => {
    setWeb3(web3)
    console.log(web3)
  }



  return [{ web3 }, connect] as const
}

export default useNetwork
