import styles from './styles.module.scss';

export function Location() {
  return (
    <section className={styles.map} id="map">
      <div className="container">
        <h2>Onde fica nosso castelo</h2>
        <p>Estaremos de portas abertas para a nossa realeza.</p>
      </div>
      <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14001.027231868582!2d-49.3674316!3d-28.6819636!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9521827fa9b8e86d%3A0x32a885c96bfeef94!2sMaderu%20Sushi%20Lounge!5e0!3m2!1spt-BR!2sit!4v1682459387178!5m2!1spt-BR!2sit" width="600" height="450" style={{ border: 0 }}  loading="lazy" referrerPolicy="no-referrer-when-downgrade" title="Google maps"></iframe>
    </section>
  )
}