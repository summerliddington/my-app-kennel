import React, { Component } from 'react'
    //import the components we will need
    import AnimalCard from './AnimalCard'
    import AnimalManager from '../../modules/AnimalManager'
    import './Animal.css'

    class AnimalList extends Component {
        //define what this component needs to render
        state = {
            animals: [],
        }
        // deleteAnimal = id => {
        //     AnimalManager.delete(id)
        //     .then(() => {
        //       AnimalManager.getAll()
        //       .then((newAnimals) => {
        //         this.setState({
        //             animals: newAnimals
        //         })
        //       })
        //     })
        //   }
          getData = () => {
            AnimalManager.getAll()
            .then((animals) => {
                this.setState({
                    animals: animals
                })
            })
          }
    componentDidMount(){
        console.log("ANIMAL LIST: ComponentDidMount");
        //getAll from AnimalManager and hang on to that data; put it in state
        this.getData()

    }

    render(){
        console.log("ANIMAL LIST: Render");

        return(
            <>
            <section className="section-content">
                <button type="button"
                    className="btn"
                    onClick={() => {this.props.history.push("/animals/new")}}>
                    Admit Animal
                </button>
            </section>
            <div className="container-cards">
                {this.state.animals.map(animal =>
                    <AnimalCard key={animal.id}
                        animal={animal}
                        getData={this.getData}
                        {...this.props}/>)}
            </div>
            </>
        )
    }
}

export default AnimalList
