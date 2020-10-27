import React from "react"
import Unsplash from "../components/unsplash"
import Layout from "../layouts/layout"
import foto from "../Assets/foto.webp"

export default function about({ location }) {
  return (
    <Layout loc={location}>
      <h1 style={{ marginBottom: "0.5em" }}>About Bart Kipping</h1>
      <p>
        Non consectetur occaecat dolore proident exercitation. Dolor tempor elit
        excepteur id qui nisi ex aliquip adipisicing est eu. Tempor aute veniam
        ad veniam reprehenderit aute id sit enim laboris proident aute. Do culpa
        cillum consectetur minim enim duis id adipisicing ullamco excepteur sint
        nisi. Minim anim ea labore commodo Lorem est irure occaecat nisi Lorem
        reprehenderit elit veniam et. Nostrud pariatur fugiat in labore. Irure
        laboris aliquip elit nulla aute eiusmod culpa consectetur in voluptate
        sint ex. Duis nostrud amet id tempor fugiat ad commodo sint adipisicing
        mollit fugiat eu et fugiat. Do consectetur magna ut minim sunt
        exercitation anim. Culpa mollit do esse proident commodo deserunt id
        sint pariatur. Commodo laborum magna sint dolore reprehenderit. Mollit
        eiusmod anim laboris ut aliqua aliqua proident reprehenderit
        exercitation. Consectetur et ullamco pariatur ad cupidatat culpa ea
        cupidatat consequat ipsum est. Veniam excepteur sit ullamco in voluptate
        cupidatat tempor duis consequat ea pariatur non duis. Pariatur fugiat
        eiusmod sunt dolore dolore reprehenderit dolore sit Lorem. Consectetur
        non incididunt do irure eu nostrud quis non exercitation nostrud ea
        aliqua minim excepteur. Aliqua laborum mollit irure labore proident
        velit aliqua incididunt officia proident nostrud Lorem. Labore qui ex
        occaecat elit dolore deserunt quis irure id id minim. Nostrud commodo
        eiusmod ex veniam exercitation veniam in est culpa elit esse. Eiusmod
        occaecat commodo esse laborum excepteur incididunt est non. In commodo
        est aute anim occaecat adipisicing do cupidatat voluptate cupidatat sunt
        commodo. Dolore ex ex eiusmod consequat eiusmod minim Lorem fugiat
        fugiat cillum nostrud magna incididunt consequat. Eiusmod duis ut qui
        duis mollit minim enim enim Lorem laborum. Magna culpa tempor
        consectetur cupidatat ut adipisicing. Adipisicing eu eu voluptate elit
        veniam tempor cupidatat deserunt mollit tempor excepteur ipsum elit.
        Velit duis dolore est ullamco irure dolore laborum non velit in ullamco
        adipisicing non. Sit ut ad cupidatat laborum et reprehenderit commodo et
        amet consequat fugiat enim occaecat. Id ad mollit consequat dolor sunt
        adipisicing reprehenderit minim. Ea commodo ex laborum aliqua non cillum
        aliquip culpa aliquip. Quis proident dolore fugiat pariatur dolore
        nostrud nisi. Laborum magna mollit officia consequat eu enim qui
        excepteur sint. Irure sunt duis magna quis cillum voluptate fugiat et.
        Adipisicing incididunt velit deserunt pariatur Lorem sint amet in eu
        dolor.
      </p>
      <img src={foto} alt="portret"></img>
      <Unsplash></Unsplash>
    </Layout>
  )
}
