import { BsSearch } from "react-icons/bs"
import styles from "./home.module.css"
import { Link } from "react-router"

export function Home(){
    return(
        <main className={styles.container}>
            <form className={styles.form}>
                <input 
                    type="text"
                    placeholder="Digite o nome da moeda"
                />
                <button type="submit">
                    <BsSearch size={30} color="#FFF" />
                </button>
            </form>

            <table>
                <thead>
                    <tr>
                        <th scope="col">Moeda</th>
                        <th scope="col">Valor de mercado</th>
                        <th scope="col">Preço</th>
                        <th scope="col">Volume</th>
                        <th scope="col">Mudança 24h</th>
                    </tr>
                </thead>

                <tbody id="tbody">
                    <tr className={styles.tr}>
                        <td className={styles.tdLabel} data-label="Moeda">
                            <div className="name">
                                <Link to={"/detail/bitcoin"}>
                                    <span>Bitcoin</span> | BTC
                                </Link>
                            </div>
                        </td>
                        <td className={styles.tdLabel} data-label="Valor de mercado">
                            $1,000,000
                        </td>
                        <td className={styles.tdLabel} data-label="Preço">
                            $50,000
                        </td>
                        <td className={styles.tdLabel} data-label="Volume">
                            $10,000,000
                        </td>
                        <td className={styles.tdProfit} data-label="Mudança 24h">
                            <span>+2.5%</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </main>
    )
}