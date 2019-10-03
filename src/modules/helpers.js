
import AnimalManager from './AnimalManager'

handleDelete = () => {
    //invoke the delete function in AnimalManger and re-direct to the animal list.
    this.setState({loadingStatus: true})
    AnimalManager.delete(this.props.animalId)
    .then(() => this.props.history.push("/animals"))
}