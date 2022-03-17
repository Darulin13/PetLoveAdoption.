import React, { Component } from "react";
import styled from "styled-components";

const Container = styled.main`
    width:100%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
    height:200vh;
    background-color:#ade8f4;
    h2{
      width:80%;
      color:#03045e;
      font-size:30px;
    
    }
    h3{
        color:#03045e;
    }
    div{
      width:30%;  
      
      display:flex;
      flex-direction:row;
      justify-content:space-between;

      align-items:start;
    
    }
    button{
        height:5vh;
        width:45%; 
        border:none;
        background-color:#a2d2ff;
        color:#000;

        
    }
    button:hover{
        border:solid 3px #023e8a;
    }

    p{
        width:80%;
     
    }
`;
const Adote = styled.section`
    width:80%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly; 
    height:100vh;

    
    section{
        display:flex;
        flex-direction:row;
        justify-content:space-between; 
    }
   
 
    
    div{
       width:80%;
       display:flex;
       flex-direction:column;
       justify-content:space-between;
 
       align-items:center;
     
    }

    img{
      width:80%;
      height:80%;
    }
    
`


class Main extends Component {
    state = {
        listdogs: [],
        dogs: [
            {
                id: 1,
                age: "5 meses",
                button: "adotar",
                name: "Luna",
                img: "https://blog.cobasi.com.br/wp-content/uploads/2020/09/cachorros-pequenos-capa.png",
            },
            {
                id: 2,
                age: "2 anos",
                button: "adotar",
                name: "Duque",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJOHUGs2BXpZppeDw1i_qAKDky9RqqtsU8Ag&usqp=CAU",
            },
            {
                id: 3,
                age: "1 ano e 4 meses",
                button: "adotar",
                name: "Pérola",
                img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRI8rYjkSunH6RpixXVv552Wmtq2cfY5eCCDQ&usqp=CAU"
            },
            {
                id: 4,
                age: "3 meses",
                button: "adotar",
                name: "Thor",
                img: "https://images.unsplash.com/photo-1611003228941-98852ba62227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8YmFieSUyMGRvZ3xlbnwwfHwwfHw%3D&w=1000&q=80"

            },


        ],

    }
    More = (id) => {
        const dogs = this.state.dogs.filter((item) => item === id)
        this.setState({
            listdogs: this.state.listdogs.concat(dogs)

        })
    }

    render() {
        return (
            <Container>
                <h1>Adote um amigo!</h1>
                <div>
                    <button>Fazer doação</button>
                    <button>Adotar um cachorrinho</button>
                </div>
                <h2>Sobre</h2>
                <p>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It
                    has survived not only five centuries, but also
                    he leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </p>
                <p>Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry. Lorem Ipsum has been the industry's standard
                    dummy text ever since the 1500s, when an
                    unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It
                    has survived not only five centuries, but also
                    he leap into electronic typesetting, remaining
                    essentially unchanged. It was popularised in the 1960s with the
                    release of Letraset sheets containing Lorem Ipsum passages,
                    and more recently with desktop publishing software like Aldus PageMaker
                    including versions of Lorem Ipsum.
                </p>
                <Adote>
                    <h2>Adote</h2>
                    <section>

                        {this.state.dogs.map((item) => (
                            <div>


                                <img src={item.img} alt=" dog " />
                                <h3>{item.name}</h3>
                                <button onClick={() => this.More(item)}>Ler mais</button>
                                <ul>
                                    {this.state.listdogs.map((item) => (
                                        <li>{item.age}</li>
                                    ))}
                                </ul>



                            </div>
                        ))}
                    </section>
                </Adote>
            </Container>
        )
    }
}
export default Main