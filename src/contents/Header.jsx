function Header(){
    return(
   <header className="cabecalho">
        <h1 className="logo">
            <a href="index.html" title="Loja de informática do Felipe">
                Loja de informática do Felipe
            </a>
        </h1>
        <form action="" method="post">
            <input type="busca" name="busca" id="busca" placeholder="Faça sua busca aqui!"/>
            <button>
                <i class="fa-solid fa-magnifying-glass"></i>
            </button>
        </form>
    </header>
    )
}
export default Header