
import { FormControl } from "react-bootstrap"
import Conteudo from "../components/Conteudo"
import Header from "../components/header"
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

function Login(){
    return(
        <>
            <Header btn={false}/>
            <Conteudo>
                <h2>Login</h2>
                <Form>
                    <Form.Group>
                        <Form.Label>
                            Email:
                        </Form.Label>
                        <FormControl type="email" placeholder="Insira seu email" required/>
                    </Form.Group>
                    <Form.Group>
                        <Form.Label className="mt-3">
                            Senha:
                        </Form.Label>
                        <FormControl type="password" placeholder="Insira sua senha" required/>
                    </Form.Group>
                    <Button className="mt-3" type="submit">Login</Button>
                </Form>
            </Conteudo>
        </>
    )
}
export default Login