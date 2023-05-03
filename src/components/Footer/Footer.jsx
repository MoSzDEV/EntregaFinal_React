import './Footer.css'


const Footer = () => {
  return (
    <>
    <footer>
        <div className="myfoot">
            <span className="copyright">
                Powered by MoSz
            </span>
            <section class="buttons">
                <a href="https://translate.google.com.ar/?hl=es&sl=en&tl=es&text=test%20link&op=translate" class="fa fa-facebook"></a>
                <a href="https://translate.google.com.ar/?hl=es&sl=en&tl=es&text=test%20link&op=translate" class="fa fa-twitter"></a>
                <a href="https://www.youtube.com/watch?v=T_j60n1zgu0&list=PLV8x_i1fqBw0B008sQn79YxCjkHJU84pC" class="fa fa-youtube"></a>
                <a href="https://wa.me/message/SSVLSRGQXZSLN1" class="fa fa-whatsapp"></a>

            </section>
        </div>
    </footer>
    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"></link>
    </>
  )
}

export default Footer