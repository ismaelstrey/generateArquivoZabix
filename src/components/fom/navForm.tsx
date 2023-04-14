import { useState } from "react"

const NavForm = () => {
    const [version, setVersion] = useState("")

    const handleForm = (e: any) => {
        setVersion(e.target.value)
    }
    return (
        <div className="flex gap-11 text-slate-50 ">
            <div className="flex flex-col justify-start align-baseline content-start items-start gap-2">
                <span>
                    <p>Vesão zabbix {version}</p>
                    <input type="radio" value="7.0" name="version" id="7" onChange={((e) => handleForm(e))} />
                    <label className="ml-4" htmlFor="7">7.0</label>
                </span>
                <span>
                    <input type="radio" value="6.0" name="version" id="6" onChange={((e) => handleForm(e))} />
                    <label className="ml-4" htmlFor="6">6.0</label>
                </span>
                <span>
                    <input type="radio" value="5.0" name="version" id="5" onChange={((e) => handleForm(e))} />
                    <label className="ml-4" htmlFor="5">5.0</label>
                </span>
            </div>
            <div>
                <p>Grupo</p>
                <select className="text-black" name="group">
                    <option value="radio">Rádio</option>
                    <option value="ubquit">Ubiquit</option>
                </select>
            </div>
        </div>
    )
}

export default NavForm