import { useState } from 'react'
import {Item, Container, TodoList, List, Input, Button, RemoveButton, RemoveContainer} from './styles.js'

function ListaDeTarefas () {

    const title = "TO-DO"
    const [task,setTask] = useState ([])
    const [input,setInput] = useState ('')

    // PEGA O VALOR DIGITADO NO INPUT DA LISTA
    function inputValue (event) {
        setInput(event.target.value);
    }
    
    // GUARDA O QUE JÁ FOI ADICIONADO E ADICIONA MAIS INTENS A LISTA
    function buttonAdd () {       
        setTask([...task, input]);
    }
    
    // REMOVE OS ITENS DA LISTA
    function buttonRemove () {       
        if (task.length > 0) { //VERIFICA SE A QUANTIDADE DE ELEMENTOS NA LISTA É MAIOR DO QUE 0
            const newTaskList = [...task];
            newTaskList.pop(); // REMOVE A ÚLTIMA TAREFA DA LISTA
            setTask(newTaskList); // ATUALIZA A LISTA
          }
        }

    return (
        <Container>
            <TodoList>

            <h1>{title}</h1>
            <Input type="text" placeholder="Digite aqui" onChange={inputValue} />
            <Button onClick={buttonAdd}>Adicionar</Button>

            <List>

                {task.map ((item,index) => (<Item key={index}>{item}</Item>))}

            </List>

        <RemoveContainer>
            
            <RemoveButton onClick={buttonRemove}>Remover</RemoveButton>

        </RemoveContainer>

            </TodoList>
        </Container>
        
    )
}

export default ListaDeTarefas