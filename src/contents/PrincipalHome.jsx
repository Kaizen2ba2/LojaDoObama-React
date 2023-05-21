import Iframe from 'react-iframe'
function PrincipalHome(){
    return(
    <>
   <main className="principal">
        <article className="sobre">
                <h2>
                    Sobre Nós
                </h2>
                <img src="../src/assets/imagemPrincipal.png" alt="Imagem de três pessoas dentro de uma loja de informática, um homem de camisa azul abraçando uma mulher de camisa social azul clara e o terceiro é um vendedor de camisa social branca"/>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nisi nostrum, incidunt quasi voluptate impedit repellendus officia nemo. Deserunt impedit accusantium, dolores unde est, aut vero sequi rem optio quaerat libero?
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis aspernatur, dolorum provident cupiditate quos cumque odio, aliquid nostrum, atque blanditiis voluptates ullam ab saepe molestiae repellat ut? Illum, perspiciatis qui?
                </p>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A quisquam earum dolores ea alias, placeat rerum modi obcaecati ab soluta aut esse eum aperiam rem sapiente magnam pariatur, ducimus eaque?
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. A ullam, natus suscipit quibusdam distinctio, eveniet placeat tempora voluptate molestias perferendis nihil? Illum praesentium ipsum vel exercitationem rem, perspiciatis nemo rerum.
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa recusandae voluptate harum dolor, quam magnam sequi ut dolorum numquam et? Unde fugit quo cumque iusto, nostrum eius aliquid quam illo.
                    Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aliquid ut voluptate dignissimos autem fuga at asperiores assumenda! Consequatur, labore magnam libero ad perferendis repudiandae atque! Praesentium nemo assumenda magni hic.
                </p>
        </article>
        <aside className="onde_estamos">
            <h3>
                Onde Estamos?
            </h3>
            <p>Rua: Tito n° 54 - Vila Romana - São Paulo - SP - Brasil</p>
            <Iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3658.1225686689518!2d-46.691815399999996!3d-23.528093600000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x94cef8775663b04f%3A0x923835e9005f8309!2sSenac%20Lapa%20Tito!5e0!3m2!1spt-BR!2sbr!4v1677972557301!5m2!1spt-BR!2sbr" width="300" height="325" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></Iframe>
            <h3>
                Contatos
            </h3>
            <ul>
                <li><i className="fa-solid fa-phone"></i> (11) 40028922</li>
                <li><i className="fa-brands fa-whatsapp"></i> (11) 40028922</li>
                <li><i className="fa-solid fa-envelope"></i> Fortnaiteobabadi@gmail.com</li>
            </ul>
        </aside>
    </main>
    </>
    )
}
export default PrincipalHome;