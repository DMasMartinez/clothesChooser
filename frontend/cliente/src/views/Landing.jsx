import imagen from "../utils/Flavio.jpg"

const Landing = () =>{
    return (
        <div>
            <h2>
                Entrenador Personal
            </h2>
            <img src={imagen} alt="flavio"/>
            <p>
                “Hola, mi nombre es Flavio Mas y soy un entrenador físico con más de 3 años de experiencia en el ámbito del fitness, especializado en CrossFit y entrenamiento en gimnasio.”
            </p>
        </div>
    )
}

export default Landing;