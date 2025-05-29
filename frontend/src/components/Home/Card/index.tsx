import Style from './style.module.css'

const Card = () => {
    return (
        <section className={Style.card}>
            <h3>Mujeres</h3>
            <section>
                <p>pendiente : 4</p>
                <p>completadas : 8</p>
            </section>
        </section>
    )
}
export default Card