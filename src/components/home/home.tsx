
import { FC, ReactElement, ReactNode, useContext } from "react";
import { HostContext } from "../../context/xmlContext";
import Form from "../fom/form";
import Code from "../code/code";


const Home: FC = (): ReactElement => {
  const { host } = useContext(HostContext) as any;
  return (
    <div className="flex flex-col w-screen h-full justify-center items-center content-center">
      <div className="flex w-[80vw] h-full"><Form /></div>
      <Code value={JSON.stringify(host, null, 2)} />
    </div>
  )

}


export default Home