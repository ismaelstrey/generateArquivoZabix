
import { FC, ReactElement, ReactNode, useContext, useEffect, useState } from "react";
import { HostContext } from "../../context/xmlContext";
import Form from "../fom/form";
import Code from "../code/code";
import Header from "../header/header";


const Home: FC = (): ReactElement => {
  const { host } = useContext(HostContext) as any;
  const [dataHost, setDataHost] = useState([])
  useEffect(() => {
    setDataHost(host)
  }, [host])

  return (
    <div className="flex flex-col w-screen h-full justify-center items-center content-center">
      <Header />
      <div className="flex w-[80vw] -mt-4"><Form /></div>
      <div className="min-h-[50vh] bg-slate-500">
        <Code value={JSON.stringify(dataHost, null, 2)} />
      </div>

    </div>
  )

}


export default Home