import './ContactContent.scss'

export default function ContactContent() {
  return (
    <form
      className="contact-form"
      name="contact"
      method="POST"
      data-netlify="true"
    >
      <h2 className="title-contact">Contact</h2>
      <p className="text-contact">
        Si vous avez la moindre question, n'hésitez pas à me contacter en
        remplissant les champs ci-dessous. Je vous répondrais dès que possible !
      </p>

      <p>
        <label>
          Votre nom : <input type="text" name="name" />
        </label>
      </p>
      <p>
        <label>
          Votre mail : <input type="email" name="email" />
        </label>
      </p>
      <p>
        <label>
          Message : <textarea name="message"></textarea>
        </label>
      </p>
      <p>
        <button type="submit">Envoyer</button>
      </p>
    </form>
    // <div className="contact-content">
    //   <div className="contact-text">
    //     If you want to work with me or if you have any questions, feel free to
    //     contact me by mail or linkedin. I will answer as soon as possible.
    //   </div>
    //   <div className="contact-buttons">
    //     <Button
    //       className="button contact-button"
    //       text="LinkedIn"
    //       href="https://www.linkedin.com/in/timjeanmart/"
    //       target="_blank"
    //     />
    //     <Button
    //       className="button contact-button"
    //       text="Email"
    //       href="mailto:tim.jeanmart@hotmail.com"
    //       target="_blank"
    //     />
    //   </div>
    // </div>
  )
}
