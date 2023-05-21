function News(){
    return(
    <>
    <section className="newsletter">
        <h3>
            Newsletter
        </h3>
        <p>Receba nossas noticias</p>
        <form action="" method="post">
            <input type="text" placeholder="Seu nome"/>
            <input type="text" placeholder="Seu email"/>
            <button> Cadastrar</button>
        </form>
    </section>
    </>
    )
}
export default News;