
import { ReactNode, useContext } from "react";
import { HostContext } from "../../context/xmlContext";
import { xmlContext } from "../../types/xml";
type Props = {
    children: ReactNode
  }

function Home({ children }: Props): JSX.Element {
    const {host} = useContext(HostContext) as xmlContext;
    return <div>{children}<span>{host}</span></div>;
}


export default Home