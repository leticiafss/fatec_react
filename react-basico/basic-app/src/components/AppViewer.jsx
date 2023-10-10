import styles from './AppViewer.module.css'
//Camada de Compilação de Serviços

const AppViewer = () => {
  //Retorno no display
  const professores= [
      {id: 1, nome: "Letícia", idade: 20, formacao: "Professora", titulacao: "Doutorado"},
      {id: 2, nome: "Carlos", idade: 25, formacao: "Engenheiro", titulacao: "Mestrado"},
      {id: 3, nome: "Ana", idade: 30, formacao: "Médica", titulacao: "Doutorado"},
      {id: 4, nome: "Pedro", idade: 22, formacao: "Advogado", titulacao: "Especialização"},
      {id: 5, nome: "Isabel", idade: 28, formacao: "Arquiteta", titulacao: "Mestrado"},
      {id: 6, nome: "João", idade: 24, formacao: "Programador", titulacao: "Bacharelado"},
      {id: 7, nome: "Mariana", idade: 27, formacao: "Psicóloga", titulacao: "Mestrado"},
      {id: 8, nome: "Lucas", idade: 23, formacao: "Economista", titulacao: "Bacharelado"},
      {id: 9, nome: "Fernanda", idade: 29, formacao: "Engenheira Civil", titulacao: "Doutorado"}
  ]
  return (
    <>
    <h2>Lista de Professores</h2>
    <table>
      <tr>
        <th>Id</th>
        <th>Nome</th>
        <th>Idade</th>
        <th>Formação</th>
        <th>Titulação</th>
      </tr>
    {
      professores.map((professor)=>{
        return(
          <tr className={professor.id % 2 ==1 ? styles.linhaCinza : null} key={professor.id}>
            <td>{professor.id}</td>
            <td>{professor.nome}</td>
            <td>{professor.idade}</td>
            <td>{professor.formacao}</td>
            <td className = {professor.titulacao == "Mestrado"|| professor.titulacao == "Doutorado" ?
            styles.superTitulo : styles.normalTitulo}>{professor.titulacao}</td>
          </tr>
        )
      }
      )
    }
    </table>
    </>
  )
}

export default AppViewer