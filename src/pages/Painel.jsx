import Header from "../components/header"
import Conteudo from "../components/Conteudo"
function Painel(){
    return(
        <>
            
            <Header btn={true}/>
            <Conteudo>
                <h2>Lista de funcionários</h2>
            </Conteudo>
        </>
    )
}
export default Painel
